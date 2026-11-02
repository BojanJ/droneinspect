#!/usr/bin/env bash
# Deploys ./out to the hosting over FTP and makes the server folder an exact copy of it:
# every file is re-uploaded and anything on the server that isn't in the build is deleted —
# EXCEPT the paths in KEEP.
#
# Env: FTP_PASSWORD (required)
#      FTP_HOST=ftp.droneinspect.mk, FTP_PORT=21, FTP_USER=u149685493.bojanftp, SERVER_DIR=./
#      DRY_RUN=--dry-run|"", DEBUG=true|false, LOCAL_DIR=./out/
set -euo pipefail

: "${FTP_HOST:=ftp.droneinspect.mk}" "${FTP_PORT:=21}" "${FTP_USER:=u149685493.bojanftp}" "${SERVER_DIR:=./}"
: "${DRY_RUN:=}" "${DEBUG:=false}" "${LOCAL_DIR:=./out/}"

[ -n "${FTP_PASSWORD:-}" ] || { echo "::error::Missing secret FTP_PASSWORD"; exit 1; }
[ -f "$LOCAL_DIR/index.html" ] || { echo "::error::$LOCAL_DIR/index.html not found — did the build run?"; exit 1; }

# Server paths that are never deleted or overwritten (regex, relative to SERVER_DIR).
KEEP=(
  '^\.well-known/'    # SSL certificate validation (Let's Encrypt)
  '^cgi-bin/'
)
EXCLUDES=""
for k in "${KEEP[@]}"; do EXCLUDES+="--exclude '$k' "; done

# lftp reads the password from $LFTP_PASSWORD (--env-password) so it never appears in a command line.
export LFTP_PASSWORD="$FTP_PASSWORD"

lftp <<EOF
set cmd:fail-exit true
$( [ "$DEBUG" = "true" ] && echo "debug 5" )
set net:timeout 30
set net:max-retries 3
set net:reconnect-interval-base 5
set ftp:passive-mode true
# Encrypt the login + transfers when the server supports it (FTPS). Shared hosting serves its
# own certificate, which won't match ftp.droneinspect.mk — don't verify it.
set ftp:ssl-allow true
set ssl:verify-certificate false
# The FTP account is jailed to /home/u149685493/domains/droneinspect.mk/public_html, so SERVER_DIR=./ is public_html.
open --env-password -u "$FTP_USER" -p $FTP_PORT ftp://$FTP_HOST
echo '--- login folder:'
pwd
echo '--- $SERVER_DIR (before sync):'
cls -1aF "$SERVER_DIR"
echo '---'
mirror --reverse --delete --transfer-all --overwrite --no-perms --parallel=4 --verbose $DRY_RUN $EXCLUDES "$LOCAL_DIR" "$SERVER_DIR"
bye
EOF

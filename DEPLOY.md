# Static Export Deployment Guide

Your Next.js app is now configured for static export. This means it will generate plain HTML/CSS/JS files that can be hosted on any web server.

## Build Your App

Run this command to build the static files:

```bash
npm run build
```

This will create an `out/` folder containing your entire website as static files.

## Testing Locally

To test the built site locally:

```bash
npx serve out
```

Then open http://localhost:3000 in your browser.

## Deployment Options

### Option 1: cPanel / Shared Hosting

1. Build your app: `npm run build`
2. Upload the contents of the `out/` folder to your hosting's `public_html/` directory via:
   - FTP/SFTP using FileZilla, WinSCP, or similar
   - cPanel File Manager
3. Done! Your site will be live at your domain

**Important:** Upload the *contents* of the `out/` folder, not the folder itself. Your directory structure should look like:
```
public_html/
  ├── index.html
  ├── _next/
  ├── logo/
  └── ...
```

### Option 2: Netlify Drop

1. Build your app: `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag and drop the `out/` folder
4. Done! Netlify will give you a URL

### Option 3: GitHub Pages

1. Build your app: `npm run build`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d out"
   ```
4. Run: `npm run deploy`
5. Enable GitHub Pages in your repo settings, select `gh-pages` branch

### Option 4: Surge.sh

1. Install surge: `npm install -g surge`
2. Build your app: `npm run build`
3. Deploy: `cd out && surge`
4. Follow the prompts to set your domain

## Important Notes

- **Images:** Remote images from Unsplash will still work (loaded from their CDN)
- **Forms:** Your contact form uses web3forms.com API, which will work fine
- **Routing:** All page navigation will work with client-side routing
- **No server-side features:** Static export doesn't support API routes or server-side rendering

## Updating Your Site

Whenever you make changes:

1. `npm run build` - Build the new version
2. Upload the new `out/` folder contents to your hosting
3. That's it!

## Troubleshooting

**404 errors on refresh?**
- Configure your web server to redirect all requests to `/index.html`
- For Netlify: create `public/_redirects` with: `/* /index.html 200`
- For Apache: this is handled automatically by Next.js

**Images not loading?**
- Check that remote image URLs are accessible
- Verify the `out/` folder contains your logo files

**Need help?**
Check the Next.js static export docs: https://nextjs.org/docs/app/building-your-application/deploying/static-exports

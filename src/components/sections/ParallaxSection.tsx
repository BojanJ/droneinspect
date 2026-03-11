import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ParallaxSectionProps {
  imageUrl: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  reversed?: boolean;
}

export function ParallaxSection({
  imageUrl,
  badge,
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  reversed = false,
}: ParallaxSectionProps) {
  return (
    <section
      className="relative py-32 overflow-hidden parallax-bg"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 ${
          reversed
            ? 'bg-gradient-to-l from-[#050505]/90 via-transparent to-transparent'
            : 'bg-gradient-to-r from-[#050505]/90 via-transparent to-transparent'
        }`}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0,200,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container relative z-10">
        <div
          className={`max-w-2xl ${reversed ? 'ml-auto text-right' : 'text-left'}`}
        >
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-[#00c8ff]/30 ${
              reversed ? 'flex-row-reverse' : ''
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#00c8ff] animate-pulse" />
            <span className="text-[#00c8ff] text-sm font-medium tracking-widest uppercase">
              {badge}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            {title}
            <br />
            <span className="text-[#00c8ff]">{subtitle}</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-xl">
            {description}
          </p>

          {/* CTA */}
          <Link href={ctaHref}>
            <Button
              size="lg"
              className="group bg-[#00c8ff] hover:bg-[#00a8dd] text-black font-bold px-8 py-4 text-base rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,200,255,0.5)]"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

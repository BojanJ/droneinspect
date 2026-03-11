import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  description: string;
  icon: LucideIcon;
  badge: string;
  number: number;
  imageUrl?: string;
}

export function ServiceHero({ title, description, icon: Icon, badge, number, imageUrl }: ServiceHeroProps) {
  const bgImage = imageUrl || 'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=1920&q=80';
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" style={{ background: '#050505' }}>
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#050505]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(0,200,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Link href="/uslugi" className="inline-flex items-center text-sm text-white/40 hover:text-[#00c8ff] transition-colors mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад до услуги
          </Link>

          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-[#00c8ff]/30 text-[#00c8ff]">
              #{number}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-white/20 text-white/60">
              {badge}
            </span>
          </div>

          <div className="w-20 h-20 mx-auto rounded-2xl bg-[#00c8ff]/10 flex items-center justify-center mb-6 border border-[#00c8ff]/20">
            <Icon className="w-10 h-10 text-[#00c8ff]" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
            {title}
          </h1>

          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="#contact">
              <Button size="lg" className="group bg-[#00c8ff] hover:bg-[#00a8dd] text-black font-bold px-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,200,255,0.4)]">
                Закажи термин
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="tel:+38970265226">
              <Button size="lg" variant="outline" className="border-white/20 text-white/70 hover:bg-white/10 hover:border-[#00c8ff]/40">
                +389 70 265 226
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

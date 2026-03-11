import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <iframe
            className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            src="https://www.youtube.com/embed/27czRs78jpg?autoplay=1&mute=1&loop=1&playlist=27czRs78jpg&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1"
            title="DroneInspect Background Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-[#050505]" />

      {/* Side gradient for readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/30" />

      {/* Animated grid overlay */}
      <div className="absolute inset-0 z-10 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(0,200,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-[#00c8ff]/30">
            <span className="w-2 h-2 rounded-full bg-[#00c8ff] animate-pulse" />
            <span className="text-[#00c8ff] text-sm font-medium tracking-widest uppercase">
              🇪🇺 Европски Сертифицирани · DJI Mavic 3 Pro
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-none mb-6">
            <span className="text-white block">Иднината на</span>
            <span className="text-[#00c8ff] electric-glow block mt-2">инспекцијата</span>
            <span className="text-white block mt-2">е во воздухот.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Напредни дрон решенија за инспекција, снимање и мониторинг. 
            Прецизност, брзина и безбедност — од висина каде другите не можат да стигнат.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/kontakt">
              <Button 
                size="lg" 
                className="group bg-[#00c8ff] hover:bg-[#00a8dd] text-black font-bold px-8 py-4 text-base rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,200,255,0.5)]"
              >
                Закажи термин
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/uslugi">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 hover:border-[#00c8ff]/50 px-8 py-4 text-base rounded-lg backdrop-blur-sm transition-all duration-300"
              >
                Истражи услуги
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl font-black text-[#00c8ff]">5.1K</div>
              <div className="text-xs text-white/50 mt-1 uppercase tracking-wider">Hasselblad</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-3xl font-black text-[#00c8ff]">A1-A3</div>
              <div className="text-xs text-white/50 mt-1 uppercase tracking-wider">ЕУ Лиценци</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-[#00c8ff]">10</div>
              <div className="text-xs text-white/50 mt-1 uppercase tracking-wider">Услуги</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-8 h-8 text-[#00c8ff]/60" />
      </div>
    </section>
  );
}

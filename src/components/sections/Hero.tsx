import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1920&q=80"
          alt="Drone aerial photography"
          className="w-full h-full object-cover opacity-15"
        />
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-background dark:to-blue-900" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                🇪🇺 Европски Сертифицирани
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Дрон за <span className="text-primary">професионална</span> употреба
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              DJI Mavic 3 Pro - Дрон за најдобро визуелно искуство. Професионални услуги за инспекција, снимање и обука.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt">
                <Button size="lg" className="group">
                  Контактирајте нè
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/uslugi">
                <Button size="lg" variant="outline">
                  Погледнете услуги
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div>
                <div className="text-3xl font-bold text-primary">5.1K</div>
                <div className="text-sm text-muted-foreground">Hasselblad Камера</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">A1-A3</div>
                <div className="text-sm text-muted-foreground">ЕУ Сертификати</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Услуги</div>
              </div>
            </div>
          </div>

          {/* Right content - Drone image placeholder */}
          <div className="relative">
            <div className="relative aspect-square">
              {/* Animated circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-2 border-primary/20 animate-pulse" />
                <div className="absolute w-3/4 h-3/4 rounded-full border-2 border-primary/30 animate-pulse delay-75" />
                <div className="absolute w-1/2 h-1/2 rounded-full border-2 border-primary/40 animate-pulse delay-150" />
              </div>
              
              {/* Drone icon/image - replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                  <svg
                    className="w-32 h-32 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-10 -left-4 bg-background shadow-lg rounded-lg p-4 animate-float">
                <div className="text-sm font-medium">45 мин</div>
                <div className="text-xs text-muted-foreground">Време на летање</div>
              </div>
              
              <div className="absolute bottom-10 -right-4 bg-background shadow-lg rounded-lg p-4 animate-float-delayed">
                <div className="text-sm font-medium">28x Zoom</div>
                <div className="text-xs text-muted-foreground">Hybrid зум</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

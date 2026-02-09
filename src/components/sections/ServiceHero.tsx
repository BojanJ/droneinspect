import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  description: string;
  icon: LucideIcon;
  badge: string;
  number: number;
}

export function ServiceHero({ title, description, icon: Icon, badge, number }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-background dark:to-blue-900">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1464047736614-af63643285bf?w=1920&q=80"
          alt="Drone service background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Link href="/uslugi" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад до услуги
          </Link>

          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge variant="outline" className="text-lg px-4 py-1">
              #{number}
            </Badge>
            <Badge variant="secondary" className="text-sm">
              {badge}
            </Badge>
          </div>

          <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
            <Icon className="w-10 h-10 text-primary" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {title}
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/kontakt">
              <Button size="lg" className="group">
                Побарајте понуда
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="tel:+38970265226">
              <Button size="lg" variant="outline">
                Јавете се: +389 70 265 226
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

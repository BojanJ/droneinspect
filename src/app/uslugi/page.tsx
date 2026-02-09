import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Sun, 
  Wind, 
  Building2, 
  Zap, 
  Search, 
  Music,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Услуги - DroneInspectMK',
  description: 'Широк спектар на професионални дрон услуги: инспекција на соларни панели, ветерници, градежни објекти, далеководи, пребарување терен и снимање на настани.',
};

const services = [
  {
    id: 1,
    title: 'Контрола на соларни панели',
    description: 'Ефикасна контрола и инспекција на соларни панели со термовизиска технологија за откривање на дефекти и оптимизација на перформансите.',
    icon: Sun,
    href: '/uslugi/solarni-paneli',
    badge: 'Обновлива енергија',
    features: ['Термовизиска инспекција', 'Брзо покривање', 'Детални извештаи']
  },
  {
    id: 2,
    title: 'Контрола на ветерници',
    description: 'Точни инспекции на ветерници за подобро управување со ресурсите. Брзо и ефикасно набљудување на нивната состојба.',
    icon: Wind,
    href: '/uslugi/veternici',
    badge: 'Обновлива енергија',
    features: ['Безбедна инспекција', '360° преглед', 'Превентивно одржување']
  },
  {
    id: 3,
    title: 'Изградба на високи објекти',
    description: 'Важни аерофотографии и видео материјали за олеснување на процесот на инспекција и управување со градежните проекти.',
    icon: Building2,
    href: '/uslugi/gradezni-objekti',
    badge: 'Градежништво',
    features: ['Прогрес мониторинг', '3D мапирање', 'Маркетинг материјали']
  },
  {
    id: 4,
    title: 'Инспекција на далеководи',
    description: 'Практичен и ефикасен начин за проверка на состојбата и безбедноста на далеководи без потреба од скапи хеликоптери.',
    icon: Zap,
    href: '/uslugi/dalevodi',
    badge: 'Инфраструктура',
    features: ['Термовизиска контрола', 'Недостапни терени', 'GPS маркирање']
  },
  {
    id: 5,
    title: 'Пребарување и локација на терен',
    description: 'Брз и ефикасен начин за скенирање големи и тешкодостапни области со детално снимање и анализа на теренот.',
    icon: Search,
    href: '/uslugi/prebaruvanje-teren',
    badge: 'Спасување',
    features: ['Термална камера', 'Live координација', 'Брзо покривање']
  },
  {
    id: 6,
    title: 'Манифестации, Концерти, Фестивали',
    description: 'Впечатливи аеро видео-снимки од високи висини, создавајќи визуелни спектакли и подобрена безбедност.',
    icon: Music,
    href: '/uslugi/manifestacii',
    badge: 'Настани',
    features: ['Кинематографски shots', 'Live streaming', 'Брза испорака']
  },
];

export default function UslugiPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-background dark:to-blue-900">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="mb-4">Наши Услуги</Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Професионални дрон услуги
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Нудиме широк спектар на услуги со најсовремена DJI Mavic 3 Pro опрема, сертифицирани според европските стандарди.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>ЕУ Сертифицирани</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>5.1K Hasselblad камера</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Професионална обука</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">#{service.id}</Badge>
                      <Badge variant="outline" className="text-xs">{service.badge}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href} className="mt-auto">
                      <Button variant="ghost" className="w-full group/btn">
                        Детали
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Зошто да нè изберете?
            </h2>
            <p className="text-lg text-muted-foreground">
              Професионалноста, сертификатите и искуството се наша предност
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-3xl">🇪🇺</span>
              </div>
              <h3 className="font-semibold">ЕУ Сертификати</h3>
              <p className="text-sm text-muted-foreground">
                А1, А2, А3 категории според регулативи 945/947
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-3xl">📷</span>
              </div>
              <h3 className="font-semibold">Врвна опрема</h3>
              <p className="text-sm text-muted-foreground">
                DJI Mavic 3 Pro со 5.1K Hasselblad камера
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-semibold">Брза реакција</h3>
              <p className="text-sm text-muted-foreground">
                Достапни за итни инспекции 24/7
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="font-semibold">Осигурување</h3>
              <p className="text-sm text-muted-foreground">
                Целосна одговорност и liability покриеност
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Заинтересирани за наши услуги?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Контактирајте нè за бесплатна консултација и понуда прилагодена на вашите потреби.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
    </>
  );
}

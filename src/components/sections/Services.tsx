import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Sun, 
  Wind, 
  Building2, 
  Zap, 
  Search, 
  Music,
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Контрола на соларни панели',
    description: 'Можете да го изнајмите нашиот дрон за ефикасна контрола и инспекција на вашите соларни панели.',
    icon: Sun,
    href: '/uslugi/solarni-paneli',
    badge: 'Обновлива енергија',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80'
  },
  {
    id: 2,
    title: 'Контрола на ветерници',
    description: 'Остварете точни инспекции на ветерници и други објекти за обновлива енергија, за подобро управување со вашите ресурси.',
    icon: Wind,
    href: '/uslugi/veternici',
    badge: 'Обновлива енергија',
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80'
  },
  {
    id: 3,
    title: 'Изградба на високи објекти',
    description: 'Обезбедете важни аерофотографии и видео материјали, што го олеснува процесот на инспекција и управување со градежните проекти.',
    icon: Building2,
    href: '/uslugi/gradezni-objekti',
    badge: 'Градежништво',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80'
  },
  {
    id: 4,
    title: 'Инспекција на далеководи',
    description: 'Практичен и ефикасен начин за проверка на состојбата и безбедноста на далеководите над големи дистанци и недостапни терени.',
    icon: Zap,
    href: '/uslugi/dalevodi',
    badge: 'Инфраструктура',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80'
  },
  {
    id: 5,
    title: 'Пребарување и локација на терен',
    description: 'Брз и ефикасен начин за скенирање големи и тешкодостапни области со детално снимање и анализа на теренот.',
    icon: Search,
    href: '/uslugi/prebaruvanje-teren',
    badge: 'Спасување',
    image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&q=80'
  },
  {
    id: 6,
    title: 'Манифестации, Концерти, Фестивали',
    description: 'Впечатливи видео-снимки од високи висини, создавајќи визуелни спектакли за посетителите и подобрена безбедност.',
    icon: Music,
    href: '/uslugi/manifestacii',
    badge: 'Настани',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80'
  },
];

export function Services() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2">Наши Услуги</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Професионални дрон услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Нудиме широк спектар на услуги за инспекција, снимање и контрола со најсовремена дрон технologija
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <Badge variant="secondary" className="absolute top-3 right-3">
                    #{service.id}
                  </Badge>
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={service.href}>
                    <Button variant="ghost" className="group/btn p-0 h-auto">
                      Дознајте повеќе
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/uslugi">
            <Button size="lg" variant="outline">
              Погледнете ги сите услуги
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

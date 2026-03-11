import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Sun, 
  Wind, 
  Building2, 
  Zap, 
  Search, 
  Music,
  Home,
  Thermometer,
  BarChart3,
  Film,
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Инспекција на кровни конструкции',
    description: 'Детална аерофотографска инспекција на кровни покривачи, изолации и конструкции без потреба од скела или специјална опрема. Откривање на пукнатини, оштетувања и протекувања со висока прецизност — побезбедно, побрзо и поефтино.',
    icon: Home,
    href: '/uslugi/krovni-konstrukcii',
    badge: 'Инспекција',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    accent: '#00c8ff',
  },
  {
    id: 2,
    title: 'Термално снимање и енергетска ефикасност',
    description: 'Со термовизиска камера лоцираме топлотни загуби, влажни зони и скриени дефекти во градби и индустриски постројки. Прецизни термални мапи за оптимизација на енергетски перформанси и намалување на трошоци.',
    icon: Thermometer,
    href: '/uslugi/termalno-snimanje',
    badge: 'Термовизија',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80',
    accent: '#ff6b35',
  },
  {
    id: 3,
    title: 'Снимање на градежни парцели и прогрес',
    description: 'Редовно аерофотографско и видео документирање на напредокот на градежните проекти. Создаваме прегледни временски линии, 3D модели на локации и точни волуметриски мерења за подобро управување со проектот.',
    icon: BarChart3,
    href: '/uslugi/gradezni-parceli',
    badge: 'Мониторинг',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    accent: '#00ff88',
  },
  {
    id: 4,
    title: 'Професионално видео за недвижности',
    description: 'Кинематографски аерофотографии и видео за луксузни недвижности, хотели и комерцијални простори. Драматични воздушни снимки кои ја зголемуваат продажната вредност и привлекуваат поголем интерес на потенцијалните купувачи.',
    icon: Film,
    href: '/uslugi/nedvizhnosti',
    badge: 'Недвижности',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    accent: '#c084fc',
  },
  {
    id: 5,
    title: 'Контрола на соларни панели',
    description: 'Ефикасна термовизиска инспекција на соларни фарми и индивидуални инсталации. Брзо откривање на дефектни ќелии, затемнувања и електрични проблеми со минимален прекин на производство.',
    icon: Sun,
    href: '/uslugi/solarni-paneli',
    badge: 'Обновлива енергија',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    accent: '#fbbf24',
  },
  {
    id: 6,
    title: 'Контрола на ветерници',
    description: 'Прецизна инспекција на перки, куќишта и торњови на ветерници без застој во производство. Откривање на пукнатини и абење на компоненти во рана фаза за превентивно одржување.',
    icon: Wind,
    href: '/uslugi/veternici',
    badge: 'Обновлива енергија',
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80',
    accent: '#00c8ff',
  },
  {
    id: 7,
    title: 'Инспекција на далеководи',
    description: 'Практичен и ефикасен начин за проверка на состојбата и безбедноста на далеководите над големи дистанци и недостапни терени. Намалување на ризик за персоналот со 90%.',
    icon: Zap,
    href: '/uslugi/dalevodi',
    badge: 'Инфраструктура',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    accent: '#fbbf24',
  },
  {
    id: 8,
    title: 'Пребарување и локација на терен',
    description: 'Брз и ефикасен начин за скенирање големи и тешкодостапни области. Интегрирање на термална и RGB камера за пребарување лица и животни во итни ситуации.',
    icon: Search,
    href: '/uslugi/prebaruvanje-teren',
    badge: 'Спасување',
    image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&q=80',
    accent: '#00ff88',
  },
  {
    id: 9,
    title: 'Манифестации, Концерти, Фестивали',
    description: 'Впечатливи кинематографски снимки од настани, создавајќи неверојатни визуелни спектакли. Покривање на масовни настани со безбедносен мониторинг во реално време.',
    icon: Music,
    href: '/uslugi/manifestacii',
    badge: 'Настани',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    accent: '#c084fc',
  },
  {
    id: 10,
    title: 'Изградба на високи објекти',
    description: 'Аерофотографии и видео материјали за инспекција и управување со градежните проекти на висини. Документирање на тешкодостапни елементи на фасади, покриви и конструктивни јазли.',
    icon: Building2,
    href: '/uslugi/gradezni-objekti',
    badge: 'Градежништво',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    accent: '#00c8ff',
  },
];

export function Services() {
  return (
    <section className="py-24" style={{ background: 'linear-gradient(to bottom, #050505, #0a0a0a)' }}>
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00c8ff]/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00c8ff]" />
            <span className="text-[#00c8ff] text-sm font-medium tracking-widest uppercase">Наши Услуги</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Професионални дрон услуги
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Нудиме широк спектар на услуги за инспекција, снимање и контрола со најсовремена дрон технологија
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="group glass-card rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,200,255,0.15)]"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-black/40 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium"
                    style={{ 
                      background: `${service.accent}20`, 
                      border: `1px solid ${service.accent}40`,
                      color: service.accent 
                    }}>
                    {service.badge}
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `${service.accent}20`, border: `1px solid ${service.accent}40` }}>
                    <Icon className="w-5 h-5" style={{ color: service.accent }} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00c8ff] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <Link href={service.href}>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-[#00c8ff] hover:text-[#00c8ff]/80 font-medium text-sm group/btn"
                    >
                      Дознај повеќе
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/uslugi">
            <Button 
              size="lg" 
              variant="outline"
              className="border-[#00c8ff]/30 text-[#00c8ff] hover:bg-[#00c8ff]/10 hover:border-[#00c8ff] transition-all duration-300"
            >
              Погледнете ги сите услуги
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

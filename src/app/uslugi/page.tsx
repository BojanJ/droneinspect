import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Услуги - DroneInspectMK",
  description:
    "Широк спектар на професионални дрон услуги: инспекција на соларни панели, ветерници, градежни објекти, далеководи, пребарување терен и снимање на настани.",
};

const services = [
  {
    id: 1,
    title: "Инспекција на кровни конструкции",
    description:
      "Детална аерофотографска инспекција на кровни покривачи, изолации и конструкции без потреба од скела или специјална опрема. Откривање на пукнатини, оштетувања и протекувања со висока прецизност — побезбедно, побрзо и поефтино.",
    icon: Home,
    href: "/uslugi/krovni-konstrukcii",
    badge: "Инспекција",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    accent: "#00c8ff",
  },
  {
    id: 2,
    title: "Термално снимање и енергетска ефикасност",
    description:
      "Со термовизиска камера лоцираме топлотни загуби, влажни зони и скриени дефекти во градби и индустриски постројки. Прецизни термални мапи за оптимизација на енергетски перформанси и намалување на трошоци.",
    icon: Thermometer,
    href: "/uslugi/termalno-snimanje",
    badge: "Термовизија",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
    accent: "#ff6b35",
  },
  {
    id: 3,
    title: "Снимање на градежни парцели и прогрес",
    description:
      "Редовно аерофотографско и видео документирање на напредокот на градежните проекти. Создаваме прегледни временски линии, 3D модели на локации и точни волуметриски мерења за подобро управување со проектот.",
    icon: BarChart3,
    href: "/uslugi/gradezni-parceli",
    badge: "Мониторинг",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    accent: "#00ff88",
  },
  {
    id: 4,
    title: "Професионално видео за недвижности",
    description:
      "Кинематографски аерофотографии и видео за луксузни недвижности, хотели и комерцијални простори. Драматични воздушни снимки кои ја зголемуваат продажната вредност и привлекуваат поголем интерес на потенцијалните купувачи.",
    icon: Film,
    href: "/uslugi/nedvizhnosti",
    badge: "Недвижности",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    accent: "#c084fc",
  },
  {
    id: 5,
    title: "Контрола на соларни панели",
    description:
      "Ефикасна термовизиска инспекција на соларни фарми и индивидуални инсталации. Брзо откривање на дефектни ќелии, затемнувања и електрични проблеми со минимален прекин на производство.",
    icon: Sun,
    href: "/uslugi/solarni-paneli",
    badge: "Обновлива енергија",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    accent: "#fbbf24",
  },
  {
    id: 6,
    title: "Контрола на ветерници",
    description:
      "Прецизна инспекција на перки, куќишта и торњови на ветерници без застој во производство. Откривање на пукнатини и абење на компоненти во рана фаза за превентивно одржување.",
    icon: Wind,
    href: "/uslugi/veternici",
    badge: "Обновлива енергија",
    image:
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80",
    accent: "#00c8ff",
  },
  {
    id: 7,
    title: "Инспекција на далеководи",
    description:
      "Практичен и ефикасен начин за проверка на состојбата и безбедноста на далеководите над големи дистанци и недостапни терени. Намалување на ризик за персоналот со 90%.",
    icon: Zap,
    href: "/uslugi/dalevodi",
    badge: "Инфраструктура",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    accent: "#fbbf24",
  },
  {
    id: 8,
    title: "Пребарување и локација на терен",
    description:
      "Брз и ефикасен начин за скенирање големи и тешкодостапни области. Интегрирање на термална и RGB камера за пребарување лица и животни во итни ситуации.",
    icon: Search,
    href: "/uslugi/prebaruvanje-teren",
    badge: "Спасување",
    image:
      "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&q=80",
    accent: "#00ff88",
  },
  {
    id: 9,
    title: "Манифестации, Концерти, Фестивали",
    description:
      "Впечатливи кинематографски снимки од настани, создавајќи неверојатни визуелни спектакли. Покривање на масовни настани со безбедносен мониторинг во реално време.",
    icon: Music,
    href: "/uslugi/manifestacii",
    badge: "Настани",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    accent: "#c084fc",
  },
  {
    id: 10,
    title: "Изградба на високи објекти",
    description:
      "Аерофотографии и видео материјали за инспекција и управување со градежните проекти на висини. Документирање на тешкодостапни елементи на фасади, покриви и конструктивни јазли.",
    icon: Building2,
    href: "/uslugi/gradezni-objekti",
    badge: "Градежништво",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    accent: "#00c8ff",
  },
];

export default function UslugiPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("/uslugi-hero.jpg")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-blue-900/70 to-blue-950/80" />

        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="mb-4 border-white/30 text-white">
              Наши Услуги
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Професионални дрон услуги
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Нудиме широк спектар на услуги со најсовремена DJI Mavic 3 Pro
              опрема, сертифицирани според европските стандарди.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <div className="flex items-center gap-2 text-sm text-white/90">
                <CheckCircle2 className="w-5 h-5 text-[#00c8ff]" />
                <span>ЕУ Сертифицирани</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/90">
                <CheckCircle2 className="w-5 h-5 text-[#00c8ff]" />
                <span>5.1K Hasselblad камера</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/90">
                <CheckCircle2 className="w-5 h-5 text-[#00c8ff]" />
                <span>Професионална обука</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="py-24"
        style={{ background: "linear-gradient(to bottom, #050505, #0a0a0a)" }}
      >
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00c8ff]/30 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00c8ff]" />
              <span className="text-[#00c8ff] text-sm font-medium tracking-widest uppercase">
                Сите Услуги
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              Комплетна понуда
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Од инспекција до снимање настани - сè што ви треба на едно место
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
                    <div
                      className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: `${service.accent}20`,
                        border: `1px solid ${service.accent}40`,
                        color: service.accent,
                      }}
                    >
                      {service.badge}
                    </div>

                    {/* Icon */}
                    <div
                      className="absolute bottom-3 left-3 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: `${service.accent}20`,
                        border: `1px solid ${service.accent}40`,
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: service.accent }}
                      />
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
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
              Зошто да нè изберете?
            </h2>
            <p className="text-lg text-white/50">
              Професионалноста, сертификатите и искуството се наша предност
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-xl p-6 text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-[#00c8ff]/10 border border-[#00c8ff]/20 flex items-center justify-center mx-auto">
                <span className="text-3xl">🇪🇺</span>
              </div>
              <h3 className="font-semibold text-white">ЕУ Сертификати</h3>
              <p className="text-sm text-white/40">
                А1, А2, А3 категории според регулативи 945/947
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-[#00c8ff]/10 border border-[#00c8ff]/20 flex items-center justify-center mx-auto">
                <span className="text-3xl">📷</span>
              </div>
              <h3 className="font-semibold text-white">Врвна опрема</h3>
              <p className="text-sm text-white/40">
                DJI Mavic 3 Pro со 5.1K Hasselblad камера
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-[#00c8ff]/10 border border-[#00c8ff]/20 flex items-center justify-center mx-auto">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-semibold text-white">Брза реакција</h3>
              <p className="text-sm text-white/40">
                Достапни за итни инспекции 24/7
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-[#00c8ff]/10 border border-[#00c8ff]/20 flex items-center justify-center mx-auto">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="font-semibold text-white">Осигурување</h3>
              <p className="text-sm text-white/40">
                Целосна одговорност и liability покриеност
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ background: '#050505' }}>
        <div className="container">
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
              Заинтересирани за наши услуги?
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Контактирајте нè за бесплатна консултација и понуда прилагодена на
              вашите потреби.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/kontakt">
                <Button size="lg" className="group bg-[#00c8ff] hover:bg-[#00a8dd] text-black font-bold">
                  Побарајте понуда
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="tel:+38970265226">
                <Button size="lg" variant="outline" className="border-[#00c8ff]/30 text-[#00c8ff] hover:bg-[#00c8ff]/10">
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

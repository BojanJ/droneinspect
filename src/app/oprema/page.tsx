import { Metadata } from "next";
import Link from "next/link";
import {
  Camera,
  Zap,
  Battery,
  Radio,
  Gauge,
  Wind,
  Mountain,
  Eye,
  Wifi,
  Box,
  CheckCircle2,
  ArrowRight,
  PlayCircle,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "DJI Mavic 4 Pro - Професионална Опрема - DroneInspectMK",
  description:
    "DJI Mavic 4 Pro со 5.1K Hasselblad камера, многуфункционален зум, долго време на летање и напредни технологии за професионална употреба.",
};

const keyFeatures = [
  {
    icon: Camera,
    title: "5.1K Hasselblad Камера",
    description:
      'Професионална камера со 20MP CMOS сензор и 4/3" големина за извонредни фотографии и видеа',
  },
  {
    icon: Eye,
    title: "Тро-Камерен Систем",
    description:
      "Главна камера + телефото + wide-angle за максимална флексибилност при снимање",
  },
  {
    icon: Zap,
    title: "Omnidirectional Obstacle Sensing",
    description: "Сензори од сите страни за автоматско избегнување на препреки",
  },
  {
    icon: Battery,
    title: "46 Минути Летање",
    description:
      "Долготрајна батерија која овозможува продолжени мисии без прекини",
  },
  {
    icon: Radio,
    title: "OcuSync 3.0+",
    description:
      "15км обсег на сигнал со стабилен HD видео пренос во реално време",
  },
  {
    icon: Wind,
    title: "Ниво 5 Отпорност на Ветер",
    description: "Стабилно летање дури и при силни ветрови до 12 м/с",
  },
];

const cameraSpecs = [
  {
    category: "Главна Камера",
    icon: Camera,
    specs: [
      { label: "Сензор", value: "4/3 CMOS, 20MP" },
      { label: "Објектив", value: "24mm, f/2.8-f/11" },
      { label: "Видео", value: "5.1K @ 50fps, 4K @ 120fps" },
      { label: "Фото", value: "20MP, RAW + JPEG" },
      { label: "ISO Ранг", value: "100-6400 (Видео), 100-12800 (Фото)" },
      { label: "Затворач", value: "Електронски, 8-1/8000s" },
    ],
  },
  {
    category: "Телефото Камера",
    icon: Eye,
    specs: [
      { label: "Сензор", value: '1/1.3" CMOS, 48MP' },
      { label: "Објектив", value: "162mm, f/3.4" },
      { label: "Зум", value: "7x Оптички, 28x Дигитален" },
      { label: "Видео", value: "4K @ 60fps" },
      { label: "Фокус Далечина", value: "3м до ∞" },
      { label: "FOV", value: "15°" },
    ],
  },
  {
    category: "Wide-Angle Камера",
    icon: Mountain,
    specs: [
      { label: "Сензор", value: '1/2" CMOS, 12MP' },
      { label: "Објектив", value: "15.5mm, f/2.8" },
      { label: "Видео", value: "4K @ 60fps" },
      { label: "FOV", value: "108°" },
      { label: "Дисторзија", value: "< 2%" },
      { label: "Употреба", value: "Пејзажи, групни фотографии" },
    ],
  },
];

const technicalSpecs = {
  Летало: [
    { label: "Тежина", value: "895г (со батерија)" },
    { label: "Димензии (отворено)", value: "347 × 290 × 107 мм" },
    { label: "Димензии (затворено)", value: "231 × 98 × 95 мм" },
    { label: "Макс. Брзина", value: "21 м/с (S режим)" },
    { label: "Макс. Висина", value: "6000м над морското ниво" },
    { label: "Температура", value: "-10°C до 40°C" },
    { label: "GPS", value: "GPS + GLONASS + BeiDou + Galileo" },
  ],
  Батерија: [
    { label: "Капацитет", value: "5000 mAh" },
    { label: "Напон", value: "15.4V" },
    { label: "Макс. Напон", value: "77Wh" },
    { label: "Тип", value: "Li-ion 4S" },
    { label: "Време на Полнење", value: "1.5 часа (100W полнач)" },
    { label: "Време на Летање", value: "46 мин (идеални услови)" },
    { label: "Ховер Време", value: "37 минути" },
  ],
  Пренос: [
    { label: "Систем", value: "OcuSync 3.0+" },
    { label: "Обсег", value: "До 15км (FCC)" },
    { label: "Видео Квалитет", value: "1080p/60fps HD" },
    { label: "Фреквенција", value: "2.4GHz / 5.8GHz" },
    { label: "Latency", value: "120-130ms" },
    { label: "Антени", value: "4 антени" },
  ],
  Гимбал: [
    { label: "Стабилизација", value: "3-осна механичка" },
    { label: "Pitch Ранг", value: "-90° до +35°" },
    { label: "Ротација", value: "360° панорама" },
    { label: "Точност", value: "±0.005°" },
    { label: "Макс. Брзина", value: "100°/s (панорама)" },
  ],
};

const intelligentFeatures = [
  {
    title: "ActiveTrack 5.0",
    description: "Напредно следење на објекти со подобрена AI препознавање",
    icon: Eye,
  },
  {
    title: "Waypoint",
    description: "Автоматско летање по однапред планирана рута",
    icon: Mountain,
  },
  {
    title: "QuickShots",
    description: "Професионални кинематографски снимки со еден клик",
    icon: PlayCircle,
  },
  {
    title: "Hyperlapse",
    description: "Креирање на 8K hyperlapse видеа со автоматско калибрирање",
    icon: Clock,
  },
  {
    title: "MasterShots",
    description: "Автоматски комплексни маневри за впечатливи видеа",
    icon: Zap,
  },
  {
    title: "Panorama",
    description: "360° сферични панорами со високи резолуции",
    icon: Camera,
  },
];

const useCases = [
  {
    title: "Инспекција на Инфраструктура",
    description: "Соларни панели, ветерници, далеководи, мостови",
    icon: Zap,
  },
  {
    title: "Градежништво",
    description: "Прогрес мониторинг, 3D мапирање, документација",
    icon: Box,
  },
  {
    title: "Недвижности",
    description: "Аерофотографија, видео тури, маркетинг материјали",
    icon: Mountain,
  },
  {
    title: "Настани",
    description: "Свадби, концерти, спортски настани, фестивали",
    icon: PlayCircle,
  },
  {
    title: "Филмска Продукција",
    description: "Кинематографски снимки, документарци, рекламирање",
    icon: Camera,
  },
  {
    title: "Агрикултура",
    description: "Преглед на посеви, мултиспектрална анализа",
    icon: Wind,
  },
];

export default function OpremaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  <Box className="w-4 h-4 mr-2" />
                  Професионална Опрема
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  DJI Mavic 4 Pro
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Најнапредната професионална дрон платформа со тро-камерен
                  систем, 5.1K Hasselblad камера и долго време на летање.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link href="#specifikacii">
                      Види Спецификации
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#kontakt">Контактирај не</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80"
                    alt="DJI Mavic 4 Pro"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-background border rounded-lg p-4 shadow-lg">
                  <div className="text-sm text-muted-foreground">
                    Време на летање
                  </div>
                  <div className="text-2xl font-bold text-primary">46 мин</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Клучни Карактеристики
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Најдобро визуелно искуство со врвна технологија
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {keyFeatures.map((feature) => (
              <Card
                key={feature.title}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Camera System */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Тро-Камерен Систем
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Три професионални камери за максимална флексибилност
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cameraSpecs.map((camera) => (
              <Card key={camera.category} className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg mr-3">
                    <camera.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{camera.category}</h3>
                </div>
                <div className="space-y-3">
                  {camera.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex justify-between items-start text-sm"
                    >
                      <span className="text-muted-foreground">
                        {spec.label}:
                      </span>
                      <span className="font-medium text-right ml-2">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="p-6 bg-gradient-to-r from-primary/10 to-primary/5">
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Hasselblad Партнерство</h3>
                  <p className="text-sm text-muted-foreground">
                    DJI и Hasselblad, шведскиот лидер во професионална
                    фотографија, соработуваат за да обезбедат непревзојден
                    квалитет на слика со природни бои и извонредна динамичка
                    рангира.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="specifikacii" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Технички Спецификации
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Детални спецификации за професионална употреба
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {Object.entries(technicalSpecs).map(([category, specs]) => (
              <Card key={category} className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  {category === "Летало" && (
                    <Gauge className="w-5 h-5 mr-2 text-primary" />
                  )}
                  {category === "Батерија" && (
                    <Battery className="w-5 h-5 mr-2 text-primary" />
                  )}
                  {category === "Пренос" && (
                    <Radio className="w-5 h-5 mr-2 text-primary" />
                  )}
                  {category === "Гимбал" && (
                    <Camera className="w-5 h-5 mr-2 text-primary" />
                  )}
                  {category}
                </h3>
                <div className="space-y-2">
                  {specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex justify-between items-start text-sm py-2 border-b last:border-0"
                    >
                      <span className="text-muted-foreground">
                        {spec.label}
                      </span>
                      <span className="font-medium text-right ml-4">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligent Features */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Интелигентни Функции
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI-засновани алатки за професионално снимање
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {intelligentFeatures.map((feature) => (
              <Card
                key={feature.title}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Професионална Употреба
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Идеален за широк спектар на индустриски апликации
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase) => (
              <Card
                key={useCase.title}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-lg mr-3 flex-shrink-0">
                    <useCase.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Зошто Mavic 3 Pro?
              </h2>
              <p className="text-lg text-muted-foreground">
                Споредба со конкуренцијата
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">46</div>
                <div className="text-sm text-muted-foreground mb-1">минути</div>
                <div className="font-semibold mb-2">Време на Летање</div>
                <div className="text-xs text-muted-foreground">
                  Најдолго во класата
                </div>
              </Card>

              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <div className="text-sm text-muted-foreground mb-1">
                  километри
                </div>
                <div className="font-semibold mb-2">Обсег на Сигнал</div>
                <div className="text-xs text-muted-foreground">
                  OcuSync 3.0+ технологија
                </div>
              </Card>

              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground mb-1">камери</div>
                <div className="font-semibold mb-2">Камерен Систем</div>
                <div className="text-xs text-muted-foreground">
                  Единствен тро-камерен систем
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Контактирајте не за Повеќе Информации
              </h2>
              <p className="text-lg text-muted-foreground">
                Заинтересирани сте за користење на нашата професионална опрема?
                Контактирајте не за повеќе детали и цени.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-6">
              <div className="flex items-start">
                <Wifi className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">DJI Pilot 2 App</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Контролирајте го дронот преку напредната DJI Pilot 2
                    апликација која нуди комплетна контрола, планирање на мисии,
                    real-time видео и детална телеметрија.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">iOS</Badge>
                    <Badge variant="secondary">Android</Badge>
                    <Badge variant="secondary">Tablet Support</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

import { Metadata } from 'next';
import { Film } from 'lucide-react';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceFeatures } from '@/components/sections/ServiceFeatures';
import { ServiceProcess } from '@/components/sections/ServiceProcess';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Професионално видео за недвижности - DroneInspectMK',
  description: 'Кинематографски аеро-снимки за луксузни недвижности, хотели и комерцијални простори. Зголемете ја продажната вредност со впечатливо воздушно видео.',
};

const features = [
  {
    title: 'Кинематографски летови',
    description: 'Уметнички воздушни снимки со плавни, кино-квалитетни кадри кои ги прикажуваат недвижностите во нивното најдобро светло.',
  },
  {
    title: 'HDR фотографија',
    description: 'Висококвалитетни HDR аерофотографии кои го прикажуваат соседството, пристапите и вкупната поставеност на имотот.',
  },
  {
    title: '4K видео',
    description: 'Снимање во 4K резолуција со Hasselblad камера за максимален квалитет на крајниот материјал.',
  },
  {
    title: 'Виртуелни тури',
    description: 'Создавање на 360° аерофотографии за интерактивни виртуелни тури на локацијата.',
  },
  {
    title: 'Брза испорака',
    description: 'Монтиран видео материјал и фотографии испорачани во рок од 48-72 часа по снимањето.',
  },
  {
    title: 'Прилагодени пакети',
    description: 'Флексибилни пакети прилагодени на типот на имотот, буџетот и временскиот рок.',
  },
];

const processSteps = [
  {
    number: 1,
    title: 'Брифинг',
    description: 'Разговор за вашите цели, стилот на снимање и специфичните карактеристики на имотот.',
  },
  {
    number: 2,
    title: 'Подготовка',
    description: 'Планирање на летот, избор на оптималното светло и временски услови за снимање.',
  },
  {
    number: 3,
    title: 'Снимање',
    description: 'Професионално снимање со дрон, вклучувајќи различни агли, висини и кинематографски маневри.',
  },
  {
    number: 4,
    title: 'Монтажа',
    description: 'Уметничка монтажа на материјалот, корекција на бои и испорака во договорените формати.',
  },
];

export default function NedvizhnostiPage() {
  return (
    <>
      <ServiceHero
        title="Професионално видео за недвижности"
        description="Кинематографски аерофотографии и видео за луксузни недвижности, хотели и комерцијални простори. Зголемете ја продажната вредност со впечатливо воздушно видео."
        icon={Film}
        badge="Недвижности"
        number={4}
        imageUrl="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
      />

      <section className="py-24" style={{ background: '#050505' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                Зошто аеро-видео за недвижности?
              </h2>
              <p className="text-lg text-white/50">
                Студии покажуваат дека недвижностите со аеро-видео добиваат:
              </p>
              <ul className="space-y-3">
                {[
                  '68% повеќе прегледи на онлајн огласи',
                  'До 20% повисока продажна цена',
                  'Побрза продажба – просечно 30% пократко на пазарот',
                  'Поголем интерес од странски купувачи',
                  'Поефикасно маркетирање на луксузни имоти',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#c084fc]/10 border border-[#c084fc]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#c084fc] text-xs font-bold">✓</span>
                    </div>
                    <span className="text-white/50 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Аеро снимање на недвижности"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <ServiceFeatures features={features} />

      <section className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-12">
              Нашиот квалитет во бројки
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { value: '4K', label: 'Резолуција на видео', color: '#c084fc' },
                { value: '68%', label: 'Повеќе прегледи на огласот', color: '#c084fc' },
                { value: '48h', label: 'Испорака на монтиран материјал', color: '#c084fc' },
              ].map((stat, i) => (
                <div key={i} className="glass-card rounded-xl p-8">
                  <div className="text-4xl font-black mb-2" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-sm text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceProcess steps={processSteps} />

      <ContactForm />
    </>
  );
}

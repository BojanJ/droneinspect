import { Metadata } from 'next';
import { Home } from 'lucide-react';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceFeatures } from '@/components/sections/ServiceFeatures';
import { ServiceProcess } from '@/components/sections/ServiceProcess';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Инспекција на кровни конструкции - DroneInspectMK',
  description: 'Детална аерофотографска инспекција на кровни покривачи, изолации и конструкции без потреба од скела. Откривање на пукнатини и оштетувања со висока прецизност.',
};

const features = [
  {
    title: 'Без потреба од скела',
    description: 'Инспекцијата се врши исклучиво со дрон, без потреба од скела, кранови или специјална опрема за пристап.',
  },
  {
    title: 'Откривање на протекувања',
    description: 'Со термовизиска камера лоцираме влажни зони и потенцијални точки на протекување пред да предизвикаат поголеми штети.',
  },
  {
    title: 'Детална фотодокументација',
    description: 'Висока резолуција фотографии од секој сантиметар на кровот за прецизна анализа и евиденција.',
  },
  {
    title: 'Наоѓање пукнатини',
    description: 'Идентификација на микро-пукнатини, оштетувања на покривни материјали и структурни проблеми.',
  },
  {
    title: 'Безбедност на работниците',
    description: 'Елиминирање на ризикот за работниците кои инаку би морале физички да пристапат на опасни кровни површини.',
  },
  {
    title: 'Брз извештај',
    description: 'Детален извештај со фотографии, анализа и препораки испорачан во рок од 24-48 часа.',
  },
];

const processSteps = [
  {
    number: 1,
    title: 'Консултација',
    description: 'Анализа на вашите потреби, димензии на кровот и специфики на конструкцијата.',
  },
  {
    number: 2,
    title: 'Планирање',
    description: 'Подготовка на план за летот, избор на опрема и определување на подрачјата за инспекција.',
  },
  {
    number: 3,
    title: 'Инспекција',
    description: 'Систематско снимање на кровната конструкција со RGB и термовизиска камера.',
  },
  {
    number: 4,
    title: 'Извештај',
    description: 'Детален извештај со снимки, термална анализа, наоди и препораки за санација.',
  },
];

export default function KrovniKonstrukciiPage() {
  return (
    <>
      <ServiceHero
        title="Инспекција на кровни конструкции"
        description="Детална аерофотографска инспекција на кровни покривачи, изолации и конструкции без потреба од скела или специјална опрема за пристап. Безбедно, брзо и прецизно."
        icon={Home}
        badge="Инспекција"
        number={1}
        imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
      />

      <section className="py-24" style={{ background: '#050505' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                Зошто е важна инспекцијата на кровот?
              </h2>
              <p className="text-lg text-white/50">
                Кровните конструкции се изложени на сезонски промени, UV зрачење и механичко абење. Редовната инспекција може да спречи скапи санации:
              </p>
              <ul className="space-y-3">
                {[
                  'Рано откривање на оштетувања пред да станат сериозни',
                  'Спречување на протекувања и водена инфилтрација',
                  'Документирање на состојбата за осигурување',
                  'Планирање на превентивно одржување',
                  'Заштеда на трошоци за итни поправки',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00c8ff]/10 border border-[#00c8ff]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#00c8ff] text-xs font-bold">✓</span>
                    </div>
                    <span className="text-white/50 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Кровна инспекција"
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
              Резултати кои зборуваат
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { value: '95%+', label: 'Точност на детекција' },
                { value: '10x', label: 'Побрзо од скела-инспекција' },
                { value: '24h', label: 'Испорака на извештај' },
              ].map((stat, i) => (
                <div key={i} className="glass-card rounded-xl p-8">
                  <div className="text-4xl font-black text-[#00c8ff] mb-2">{stat.value}</div>
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

import { Metadata } from 'next';
import { Sun } from 'lucide-react';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceFeatures } from '@/components/sections/ServiceFeatures';
import { ServiceProcess } from '@/components/sections/ServiceProcess';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Контрола на соларни панели - DroneInspectMK',
  description: 'Професионална инспекција и контрола на соларни панели со дрон. Ефикасно откривање на дефекти и оптимизација на перформансите.',
};

const features = [
  {
    title: 'Термовизиска инспекција',
    description: 'Детектирање на дефектни соларни панели преку термовизиска камера со висока резолуција.',
  },
  {
    title: 'Брза инспекција',
    description: 'Инспекција на големи соларни паркови во кратко време без прекин на работењето.',
  },
  {
    title: 'Детални извештаи',
    description: 'Комплетни извештаи со локација на дефектите, фотографии и препораки за поправка.',
  },
  {
    title: 'Намалени трошоци',
    description: 'Значително помали трошоци во споредба со традиционалните методи на инспекција.',
  },
  {
    title: 'Безбедност',
    description: 'Елиминирање на ризикот за персоналот - без потреба од физички пристап до панелите.',
  },
  {
    title: 'Редовна одржување',
    description: 'Можност за редовни проверки и превентивно одржување на соларните системи.',
  },
];

const processSteps = [
  {
    number: 1,
    title: 'Консултација',
    description: 'Првична средба и анализа на вашите потреби и локација на соларниот парк.',
  },
  {
    number: 2,
    title: 'Планирање',
    description: 'Подготовка на план за инспекција, временска рамка и потребна опрема.',
  },
  {
    number: 3,
    title: 'Инспекција',
    description: 'Извршување на детална термовизиска и визуелна инспекција со нашиот дрон.',
  },
  {
    number: 4,
    title: 'Извештај',
    description: 'Испорака на детален извештај со наоди, препораки и приоритети за интервенција.',
  },
];

export default function SolarniPaneliPage() {
  return (
    <>
      <ServiceHero
        title="Контрола на соларни панели"
        description="Можете да го изнајмите нашиот дрон за ефикасна контрола и инспекција на вашите соларни панели со термовизиска технологија."
        icon={Sun}
        badge="Обновлива енергија"
        number={5}
        imageUrl="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80"
      />

      <section className="py-24" style={{ background: '#050505' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                Зошто е важна инспекцијата на соларни панели?
              </h2>
              <p className="text-lg text-white/50">
                Соларните панели се изложени на различни временски услови кои можат да предизвикаат оштетувања и намалување на ефикасноста. Редовната инспекција е клучна за:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00c8ff]/10 border border-[#00c8ff]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#00c8ff] text-xs font-bold">✓</span>
                  </div>
                  <span className="text-white/50 text-sm">
                    Откривање на дефектни панели кои не произведуваат енергија
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00c8ff]/10 border border-[#00c8ff]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#00c8ff] text-xs font-bold">✓</span>
                  </div>
                  <span className="text-white/50 text-sm">
                    Детектирање на hotspots (прегревање) кои можат да предизвикаат пожар
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00c8ff]/10 border border-[#00c8ff]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#00c8ff] text-xs font-bold">✓</span>
                  </div>
                  <span className="text-white/50 text-sm">
                    Идентификација на проблеми со поврзаноста и електричните компоненти
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00c8ff]/10 border border-[#00c8ff]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#00c8ff] text-xs font-bold">✓</span>
                  </div>
                  <span className="text-white/50 text-sm">
                    Максимизирање на ROI (повраток на инвестицијата) на соларниот систем
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                alt="Соларни панели инспекција"
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
              Што добивате?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card rounded-xl p-8">
                <div className="text-4xl font-black text-[#00c8ff] mb-2">95%+</div>
                <div className="text-sm text-white/40">Точност на детекција</div>
              </div>
              <div className="glass-card rounded-xl p-8">
                <div className="text-4xl font-black text-[#00c8ff] mb-2">10x</div>
                <div className="text-sm text-white/40">Побрзо од традиционални методи</div>
              </div>
              <div className="glass-card rounded-xl p-8">
                <div className="text-4xl font-black text-[#00c8ff] mb-2">24-48h</div>
                <div className="text-sm text-white/40">Време за извештај</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceProcess steps={processSteps} />

      <ContactForm />
    </>
  );
}

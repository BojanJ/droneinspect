import { Metadata } from 'next';
import { Thermometer } from 'lucide-react';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceFeatures } from '@/components/sections/ServiceFeatures';
import { ServiceProcess } from '@/components/sections/ServiceProcess';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Термално снимање и енергетска ефикасност - DroneInspectMK',
  description: 'Термовизиска инспекција за откривање на топлотни загуби, влажни зони и скриени дефекти. Прецизни термални мапи за оптимизација на енергетски перформанси.',
};

const features = [
  {
    title: 'Термовизиска камера',
    description: 'Снимање со висококвалитетна термовизиска камера која детектира температурни разлики помали од 0.05°C.',
  },
  {
    title: 'Откривање на топлотни загуби',
    description: 'Прецизно лоцирање на точките на губење на топлина во ѕидови, прозорци, покриви и темели.',
  },
  {
    title: 'Анализа на влага',
    description: 'Идентификација на скриена влага во ѕидовите и конструкцијата пред да предизвика видливи оштетувања.',
  },
  {
    title: 'Енергетски аудит',
    description: 'Комплетен преглед на енергетската ефикасност на зградите со препораки за подобрување.',
  },
  {
    title: 'Индустриска инспекција',
    description: 'Откривање на прегреани компоненти во електрични системи, машини и процесни цевководи.',
  },
  {
    title: 'Документирање за сертификати',
    description: 'Детални извештаи кои можат да се користат за добивање на енергетски сертификати и субвенции.',
  },
];

const processSteps = [
  {
    number: 1,
    title: 'Анализа на објектот',
    description: 'Преглед на документација, временски услови и специфики на објектот за оптимален термален скен.',
  },
  {
    number: 2,
    title: 'Термален скен',
    description: 'Систематско термовизиско снимање на целиот объект во оптимални временски услови.',
  },
  {
    number: 3,
    title: 'Анализа на податоци',
    description: 'Обработка на термалните слики и идентификација на проблематичните зони и аномалии.',
  },
  {
    number: 4,
    title: 'Извештај',
    description: 'Детален извештај со термални мапи, анализа на загуби и конкретни препораки за санација.',
  },
];

export default function TermalnoSnimanePage() {
  return (
    <>
      <ServiceHero
        title="Термално снимање и енергетска ефикасност"
        description="Со термовизиска камера лоцираме топлотни загуби, влажни зони и скриени дефекти во градби и индустриски постројки. Прецизни термални мапи за оптимизација на енергетски перформанси."
        icon={Thermometer}
        badge="Термовизија"
        number={2}
        imageUrl="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1920&q=80"
      />

      <section className="py-24" style={{ background: '#050505' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                Зошто термално снимање?
              </h2>
              <p className="text-lg text-white/50">
                Голем дел од енергетските загуби во зградите се невидливи за голото око. Термовизијата ги открива:
              </p>
              <ul className="space-y-3">
                {[
                  'До 40% од топлинската енергија може да се губи низ лошо изолиран покрив',
                  'Влагата во ѕидовите предизвикува скапа санација ако не се открие навреме',
                  'Прегреани електрични компоненти се основна причина за пожари',
                  'Правилната изолација може да намали сметки за греење до 30%',
                  'Термалните извештаи се барани за LEED и BREEAM сертификати',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#ff6b35] text-xs font-bold">✓</span>
                    </div>
                    <span className="text-white/50 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80"
                alt="Термално снимање"
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
              Апликации на термалното снимање
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: '🏢', label: 'Станбени и деловни згради' },
                { icon: '🏭', label: 'Индустриски постројки' },
                { icon: '⚡', label: 'Електрични системи' },
                { icon: '☀️', label: 'Соларни инсталации' },
              ].map((app, i) => (
                <div key={i} className="glass-card rounded-xl p-6 text-center">
                  <div className="text-3xl mb-3">{app.icon}</div>
                  <div className="text-sm text-white/60 font-medium">{app.label}</div>
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

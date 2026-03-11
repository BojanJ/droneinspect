import { Metadata } from 'next';
import { BarChart3 } from 'lucide-react';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceFeatures } from '@/components/sections/ServiceFeatures';
import { ServiceProcess } from '@/components/sections/ServiceProcess';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Снимање на градежни парцели и прогрес - DroneInspectMK',
  description: 'Редовно аерофотографско документирање на напредокот на градежните проекти. 3D модели, волуметриски мерења и временски линии за управување со проектот.',
};

const features = [
  {
    title: 'Редовен мониторинг',
    description: 'Неделни или месечни аеро-снимки за следење на напредокот на градбата и документирање на сите фази.',
  },
  {
    title: '3D моделирање на локацијата',
    description: 'Создавање на прецизни 3D модели на градежните локации за подобро планирање и визуелизација.',
  },
  {
    title: 'Волуметриски мерења',
    description: 'Точни мерења на количеството на земја, материјали и насипи за подобра логистика и буџетирање.',
  },
  {
    title: 'Временски линии',
    description: 'Создавање на видео временски линии кои прикажуваат целокупниот прогрес на проектот.',
  },
  {
    title: 'Инспекција на тешкодостапни зони',
    description: 'Безбедна инспекција на арматура, скела и конструктивни елементи без ризик за персоналот.',
  },
  {
    title: 'Ортофото мапи',
    description: 'Прецизни ортофото мапи на локациите за проектирање, инженеринг и правни потреби.',
  },
];

const processSteps = [
  {
    number: 1,
    title: 'Договор за следење',
    description: 'Дефинирање на фреквенцијата на снимање, подрачјата од интерес и форматот на испорака.',
  },
  {
    number: 2,
    title: 'Редовно снимање',
    description: 'Планирани летови со дрон на договорени датуми со систематско снимање на целата локација.',
  },
  {
    number: 3,
    title: 'Обработка на податоци',
    description: 'Создавање на 3D модели, ортофото мапи и волуметриски пресметки од снимените подлоги.',
  },
  {
    number: 4,
    title: 'Извештај и испорака',
    description: 'Испорака на пресметки, мапи и видео материјали преку онлајн платформа за лесен пристап.',
  },
];

export default function GradezniParceliPage() {
  return (
    <>
      <ServiceHero
        title="Снимање на градежни парцели и прогрес"
        description="Редовно аерофотографско и видео документирање на напредокот на градежните проекти. Создаваме прегледни временски линии, 3D модели и точни волуметриски мерења."
        icon={BarChart3}
        badge="Мониторинг"
        number={3}
        imageUrl="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
      />

      <section className="py-24" style={{ background: '#050505' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                Управување со проектот на нов начин
              </h2>
              <p className="text-lg text-white/50">
                Аеро-мониторингот на градежни локации овозможува целосна контрола:
              </p>
              <ul className="space-y-3">
                {[
                  'Следење на напредокот без физичко присуство',
                  'Рано откривање на одступања од планот',
                  'Документирање за осигурување и правни потреби',
                  'Подобра комуникација со инвеститори и клиенти',
                  'Намалување на незгоди преку превентивен надзор',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#00ff88] text-xs font-bold">✓</span>
                    </div>
                    <span className="text-white/50 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                alt="Градежен мониторинг"
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
              Резултати
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { value: 'CM', label: 'Точност на мерења' },
                { value: '100%', label: 'Покриеност на локацијата' },
                { value: '48h', label: 'Испорака на 3D модел' },
              ].map((stat, i) => (
                <div key={i} className="glass-card rounded-xl p-8">
                  <div className="text-4xl font-black text-[#00ff88] mb-2">{stat.value}</div>
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

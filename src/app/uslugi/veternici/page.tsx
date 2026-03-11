import { Metadata } from 'next';
import { Wind } from 'lucide-react';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceFeatures } from '@/components/sections/ServiceFeatures';
import { ServiceProcess } from '@/components/sections/ServiceProcess';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Контрола на ветерници - DroneInspectMK',
  description: 'Професионална инспекција на ветерници со дрон. Брзо и ефикасно набљудување на состојбата на турбините.',
};

const features = [
  {
    title: 'Висока резолуција',
    description: 'Детални слики и видеа од лопатките со способност за откривање на микро-пукнатини и дефекти.',
  },
  {
    title: 'Безбедна инспекција',
    description: 'Елиминирање на потребата од скапи и ризични методи како алпинизам или scaffolding.',
  },
  {
    title: 'Брза реакција',
    description: 'Можност за итна инспекција по буря или други временски непогоди.',
  },
  {
    title: '360° преглед',
    description: 'Комплетна инспекција на сите страни на турбината, вклучувајќи врв, тело и основа.',
  },
  {
    title: 'Превентивно одржување',
    description: 'Рано откривање на проблеми пред да станат сериозни и скапи за поправка.',
  },
  {
    title: 'Докумнетација',
    description: 'Детална фото и видео документација за споредба преку време.',
  },
];

const processSteps = [
  {
    number: 1,
    title: 'Оценка',
    description: 'Анализа на локацијата, бројот на турбини и пристапот до ветерниот парк.',
  },
  {
    number: 2,
    title: 'Подготовка',
    description: 'Координација со операторот, проверка на временските услови и безбедност.',
  },
  {
    number: 3,
    title: 'Снимање',
    description: 'Детално снимање на секоја лопатка и компонента на турбината.',
  },
  {
    number: 4,
    title: 'Анализа',
    description: 'Анализа на снимките, класификација на дефектите и приоритизација на интервенциите.',
  },
];

export default function VeterniciPage() {
  return (
    <>
      <ServiceHero
        title="Контрола на ветерници"
        description="Остварете точни инспекции на ветерници и други објекти за обновлива енергија, за подобро управување со вашите ресурси. Брзо и ефикасно набљудување на нивната состојба."
        icon={Wind}
        badge="Обновлива енергија"
        number={6}
        imageUrl="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1920&q=80"
      />

      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative aspect-square bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-background rounded-2xl flex items-center justify-center">
              <Wind className="w-32 h-32 text-primary" />
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Предизвиците на инспекција на ветерници
              </h2>
              <p className="text-lg text-muted-foreground">
                Инспекцијата на ветерни турбини е сложен и скап процес. Традиционалните методи вклучуваат:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-sm">✗</span>
                  </div>
                  <span className="text-muted-foreground">
                    Скапо спуштање на алпинисти на височина од 100+ метри
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-sm">✗</span>
                  </div>
                  <span className="text-muted-foreground">
                    Ризик за безбедноста на персоналот
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-sm">✗</span>
                  </div>
                  <span className="text-muted-foreground">
                    Долго времетраење - само 2-3 турбини дневно
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-sm">✗</span>
                  </div>
                  <span className="text-muted-foreground">
                    Потреба од сопирање на турбините за поголем временски период
                  </span>
                </li>
              </ul>
              <p className="text-lg font-semibold text-primary">
                Нашата дрон инспекција решава сè ова!
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceFeatures features={features} />

      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Нашата ефикасност
            </h2>
            <p className="text-lg text-muted-foreground">
              Споредба на дрон инспекција со традиционални методи
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">10-15</div>
                <div className="text-sm text-muted-foreground">Турбини дневно</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">75%</div>
                <div className="text-sm text-muted-foreground">Намалување на трошоци</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Безбедност</div>
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

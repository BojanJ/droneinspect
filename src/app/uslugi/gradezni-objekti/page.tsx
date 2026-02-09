import { Metadata } from 'next';
import { Building2 } from 'lucide-react';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceFeatures } from '@/components/sections/ServiceFeatures';
import { ServiceProcess } from '@/components/sections/ServiceProcess';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Изградба на високи објекти - DroneInspectMK',
  description: 'Аерофотографии и видео материјали за градежни проекти. Инспекција и мониторинг на изградбата на високи објекти.',
};

const features = [
  {
    title: 'Прогрес на изградба',
    description: 'Редовно документирање на напредокот на градежниот проект со временски серии (time-lapse).',
  },
  {
    title: 'Инспекција на фасади',
    description: 'Детална инспекција на фасади, кров и други недостапни делови на зградата.',
  },
  {
    title: 'Безбедност на градилиште',
    description: 'Мониторинг на безбедносните мерки и придржување кон стандардите.',
  },
  {
    title: 'Маркетинг материјали',
    description: 'Професионални аерофотографии и видеа за промоција на проектот.',
  },
  {
    title: '3D мапирање',
    description: 'Креирање на 3D модели на објектот за подобро планирање и презентација.',
  },
  {
    title: 'Детектција на проблеми',
    description: 'Рано откривање на конструктивни проблеми пред да станат сериозни.',
  },
];

const processSteps = [
  {
    number: 1,
    title: 'Планирање',
    description: 'Договор за фреквенција на снимање и специфични барања за градежниот проект.',
  },
  {
    number: 2,
    title: 'Почетно снимање',
    description: 'Иницијално снимање на локацијата и состојбата пред почеток на градбата.',
  },
  {
    number: 3,
    title: 'Редовни снимања',
    description: 'Периодични снимања според договорениот распоред (неделно, месечно).',
  },
  {
    number: 4,
    title: 'Финални материјали',
    description: 'Испорака на комплетни материјали, time-lapse видео и финален извештај.',
  },
];

export default function GradezniObjektiPage() {
  return (
    <>
      <ServiceHero
        title="Изградба на високи објекти"
        description="Користењето на дронови е извонредно корисна опција при изградбата на високи објекти. Нашиот дрон може да обезбеди важни аерофотографии и видео материјали, што го олеснува процесот на инспекција и управување со градежните проекти."
        icon={Building2}
        badge="Градежништво"
        number={3}
      />

      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Предности за градежна индустрија
              </h2>
              <p className="text-lg text-muted-foreground">
                Дроновите се незаменлива алатка во модерното градежништво. Тие овозможуваат:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Подобра комуникација</p>
                    <p className="text-sm text-muted-foreground">
                      Јасна визуелна комуникација помеѓу инвеститори, архитекти и градежници
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Временска ефикасност</p>
                    <p className="text-sm text-muted-foreground">
                      Брзо снимање на целото градилиште наместо часови на пешачко разгледување
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Намалени трошоци</p>
                    <p className="text-sm text-muted-foreground">
                      Елиминирање на потребата од скапи кранови или scaffolding за инспекција
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Документација за осигурување</p>
                    <p className="text-sm text-muted-foreground">
                      Комплетна визуелна документација за осигурителни и правни цели
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative aspect-square bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-background rounded-2xl flex items-center justify-center">
              <Building2 className="w-32 h-32 text-primary" />
            </div>
          </div>
        </div>
      </section>

      <ServiceFeatures features={features} />

      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
              Типови на услуги за градежништво
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg border-2">
                <h3 className="font-semibold text-lg mb-3">Прогрес мониторинг</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Редовни снимања за следење на напредокот и споредба со планот.
                </p>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Неделни или месечни снимања</li>
                  <li>• Time-lapse видео</li>
                  <li>• 360° панорами</li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-lg border-2">
                <h3 className="font-semibold text-lg mb-3">Техничка инспекција</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Детална инспекција за контрола на квалитет и безбедност.
                </p>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Инспекција на фасади</li>
                  <li>• Проверка на кровови</li>
                  <li>• Термовизиска анализа</li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-lg border-2">
                <h3 className="font-semibold text-lg mb-3">Маркетинг и промоција</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Професионални материјали за промоција на инвестицијата.
                </p>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Аерофотографии 4K/8K</li>
                  <li>• Промотивни видеа</li>
                  <li>• Виртуелни тури</li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-lg border-2">
                <h3 className="font-semibold text-lg mb-3">3D Мапирање</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Креирање на дигитални 3D модели на објектот.
                </p>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Фотограметрија</li>
                  <li>• Point cloud модели</li>
                  <li>• BIM интеграција</li>
                </ul>
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

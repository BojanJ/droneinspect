import { Metadata } from 'next';
import { Zap } from 'lucide-react';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceFeatures } from '@/components/sections/ServiceFeatures';
import { ServiceProcess } from '@/components/sections/ServiceProcess';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Инспекција на далеководи - DroneInspectMK',
  description: 'Професионална инспекција на далеководи и електрична инфраструктура. Брза и безбедна проверка на состојбата.',
};

const features = [
  {
    title: 'Недостапни терени',
    description: 'Лесен пристап до далеководи на планински и шумски подрачја без потреба од возила.',
  },
  {
    title: 'Детална инспекција',
    description: 'Високо-резолуциски слики на изолатори, проводници, стубови и споеви.',
  },
  {
    title: 'Термовизиска контрола',
    description: 'Откривање на преоптоварување и лоши контакти со термовизиска камера.',
  },
  {
    title: 'Брза реакција',
    description: 'Итна инспекција по олуја, снежни врнежи или други инциденти.',
  },
  {
    title: 'Намалени прекини',
    description: 'Инспекција без потреба од исклучување на далеководот.',
  },
  {
    title: 'Геолокација',
    description: 'Прецизна GPS локација на секој идентификуван проблем за брза интервенција.',
  },
];

const processSteps = [
  {
    number: 1,
    title: 'Рутирање',
    description: 'Планирање на рутата и идентификација на критични сегменти за инспекција.',
  },
  {
    number: 2,
    title: 'Летање',
    description: 'Автономно или мануелно летање по трасата на далеководот.',
  },
  {
    number: 3,
    title: 'Анализа',
    description: 'Детална анализа на снимките и термовизиски податоци.',
  },
  {
    number: 4,
    title: 'Приоритизација',
    description: 'Класификација на дефектите според сериозност и препораки за интервенција.',
  },
];

export default function DalevodiPage() {
  return (
    <>
      <ServiceHero
        title="Инспекција на далеководи"
        description="Изнајмување на дронови за инспекција на далеководите е практичен и ефикасен начин за проверка на нивната состојба и безбедност. Нашиот дрон може да пролета над големи дистанци и недостапни терени, обезбедувајќи детални слики и информации за брза и точна реакција на потенцијални проблеми."
        icon={Zap}
        badge="Инфраструктура"
        number={4}
      />

      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative aspect-square bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-background rounded-2xl flex items-center justify-center">
              <Zap className="w-32 h-32 text-primary" />
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Критичноста на далеководи
              </h2>
              <p className="text-lg text-muted-foreground">
                Електричната мрежа е животна артерија на модерното општество. Редовната инспекција е клучна за:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Спречување на прекини</p>
                    <p className="text-sm text-muted-foreground">
                      Откривање на проблеми пред да предизвикаат пад на системот
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Безбедност на населението</p>
                    <p className="text-sm text-muted-foreground">
                      Идентификација на ризици од електрични удари или пожари
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Оптимизација на одржување</p>
                    <p className="text-sm text-muted-foreground">
                      Планирање на интервенции врз база на реални податоци
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
                      Елиминирање на скапи хеликоптерски инспекции
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ServiceFeatures features={features} />

      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-6">
              Што инспектираме?
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Комплетна проверка на сите компоненти на електричната мрежа
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg border-2 hover:border-primary/50 transition-colors">
                <h3 className="font-semibold text-lg mb-3">Стубови и структура</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Корозија на метални делови</li>
                  <li>• Пукнатини во бетонски стубови</li>
                  <li>• Стабилност на темелите</li>
                  <li>• Состојба на заземјување</li>
                </ul>
              </div>

              <div className="bg-background p-6 rounded-lg border-2 hover:border-primary/50 transition-colors">
                <h3 className="font-semibold text-lg mb-3">Проводници</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Кинење или оштетување на жици</li>
                  <li>• Провисување поради топлина</li>
                  <li>• Контакт со растителност</li>
                  <li>• Електрични лакови и дуги</li>
                </ul>
              </div>

              <div className="bg-background p-6 rounded-lg border-2 hover:border-primary/50 transition-colors">
                <h3 className="font-semibold text-lg mb-3">Изолатори</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Пукнатини во порцелан/стакло</li>
                  <li>• Загадување и намалена изолација</li>
                  <li>• Оштетени заптивки</li>
                  <li>• Термални аномалии</li>
                </ul>
              </div>

              <div className="bg-background p-6 rounded-lg border-2 hover:border-primary/50 transition-colors">
                <h3 className="font-semibold text-lg mb-3">Опрема и арматура</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Состојба на транформатори</li>
                  <li>• Прекинувачи и одводници</li>
                  <li>• Спојници и затегнувачи</li>
                  <li>• Патхождачи за птици</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">50+ км</div>
                  <div className="text-sm text-muted-foreground">Инспекција дневно</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">90%</div>
                  <div className="text-sm text-muted-foreground">Намалување на време</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">0</div>
                  <div className="text-sm text-muted-foreground">Ризик за персонал</div>
                </div>
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

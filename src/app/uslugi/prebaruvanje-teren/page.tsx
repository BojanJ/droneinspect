import { Metadata } from 'next';
import { Search } from 'lucide-react';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceFeatures } from '@/components/sections/ServiceFeatures';
import { ServiceProcess } from '@/components/sections/ServiceProcess';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Пребарување и локација на терен - DroneInspectMK',
  description: 'Дрон услуги за пребарување и спасување, картографија и скенирање на тешкодостапни терени.',
};

const features = [
  {
    title: 'Брзо покривање',
    description: 'Брзо скенирање на големи области кои би биле тешки за пешачко пребарување.',
  },
  {
    title: 'Термовизиска камера',
    description: 'Детектирање на топлински сигнали за пронаоѓање на лица дури и ноќе или во лоши услови.',
  },
  {
    title: 'Тешкодостапни области',
    description: 'Пребарување на планински, шумски, речни или урбани урнатини.',
  },
  {
    title: 'Реална временска координација',
    description: 'Live видео стрим до командниот центар за брза координација на тимовите.',
  },
  {
    title: 'GPS маркирање',
    description: 'Прецизна локација на пронајдени објекти или лица за навигација на спасувачите.',
  },
  {
    title: 'Документација',
    description: 'Комплетна фото и видео документација на акцијата за евиденција.',
  },
];

const processSteps = [
  {
    number: 1,
    title: 'Алармирање',
    description: 'Прием на повик и брза мобилизација на тимот и опремата.',
  },
  {
    number: 2,
    title: 'Дефинирање',
    description: 'Определување на зоната за пребарување и стратегија на летање.',
  },
  {
    number: 3,
    title: 'Пребарување',
    description: 'Систематско скенирање на областа со визуелни и термални сензори.',
  },
  {
    number: 4,
    title: 'Координација',
    description: 'Навигација на спасувачките тимови до идентификуваните локации.',
  },
];

export default function PrebaruvanjeTerenPage() {
  return (
    <>
      <ServiceHero
        title="Пребарување и локација на терен"
        description="Употребата на дронови има неоспорни предности при пребарување и локација на терен, затоа што овие беспилотни летачки апарати овозможуваат брз и ефикасен начин за скенирање големи и тешкодостапни области. Дроновите се опремени со камери и сензори кои овозможуваат детално снимање и анализа на теренот."
        icon={Search}
        badge="Спасување"
        number={5}
      />

      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Критичноста на времето
              </h2>
              <p className="text-lg text-muted-foreground">
                При пребарување и спасување, секоја минута е важна. Дроновите драстично го намалуваат времето потребно за:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Лоцирање на исчезнати лица</p>
                    <p className="text-sm text-muted-foreground">
                      Планинари, печалбари, деца или лица со Алцхајмер
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Природни катастрофи</p>
                    <p className="text-sm text-muted-foreground">
                      Поплави, земјотреси - пребарување под урнатини
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Шумски пожари</p>
                    <p className="text-sm text-muted-foreground">
                      Детекција на огништа и термални точки
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Картографија на терен</p>
                    <p className="text-sm text-muted-foreground">
                      Детални мапи на непознати или тешки терени
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative aspect-square bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-background rounded-2xl flex items-center justify-center">
              <Search className="w-32 h-32 text-primary" />
            </div>
          </div>
        </div>
      </section>

      <ServiceFeatures features={features} />

      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-6">
              Технологија за пребарување
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Најнапредна опрема за ефикасно пребарување во сите услови
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg border-2">
                <h3 className="font-semibold text-lg mb-3">Визуелни камери</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• 4K/5.1K резолуција за детални слики</li>
                  <li>• Зум до 28x за идентификација од далечина</li>
                  <li>• Стабилизација за јасни слики од воздух</li>
                  <li>• Low-light перформанси за лоши услови</li>
                </ul>
              </div>

              <div className="bg-background p-6 rounded-lg border-2">
                <h3 className="font-semibold text-lg mb-3">Термална камера</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Детекција на топлински сигнали ноќе</li>
                  <li>• Пронаоѓање на лица во густа вегетација</li>
                  <li>• Работа во магла и лоша видливост</li>
                  <li>• Регистрација на температурни разлики</li>
                </ul>
              </div>

              <div className="bg-background p-6 rounded-lg border-2">
                <h3 className="font-semibold text-lg mb-3">GPS и навигација</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Прецизна GPS локација (±1m)</li>
                  <li>• Автоматско планирање на рути</li>
                  <li>• Waypoint навигација за системско покривање</li>
                  <li>• Геотагирање на пронајдени објекти</li>
                </ul>
              </div>

              <div className="bg-background p-6 rounded-lg border-2">
                <h3 className="font-semibold text-lg mb-3">Комуникација</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Live видео до 8km радиус</li>
                  <li>• Радио врски со тимови на терен</li>
                  <li>• Мапирање во реално време</li>
                  <li>• Координација на мултипл дронови</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 p-8 rounded-lg border-2 border-primary/20">
              <h3 className="font-semibold text-xl mb-4 text-center">24/7 Достапност</h3>
              <p className="text-center text-muted-foreground mb-6">
                Нашиот тим е достапен за итни акции во секое време
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">15 мин</div>
                  <div className="text-sm text-muted-foreground">Време за мобилизација</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">45 мин</div>
                  <div className="text-sm text-muted-foreground">Максимално време на летање</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">100+ ha</div>
                  <div className="text-sm text-muted-foreground">Покриена површина/час</div>
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

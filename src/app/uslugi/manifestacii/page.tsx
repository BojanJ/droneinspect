import { Metadata } from 'next';
import { Music } from 'lucide-react';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ServiceFeatures } from '@/components/sections/ServiceFeatures';
import { ServiceProcess } from '@/components/sections/ServiceProcess';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Манифестации, Концерти, Фестивали - DroneInspectMK',
  description: 'Професионално аерофото и видео снимање на настани. Впечатливи снимки од концерти, фестивали и спортски настани.',
};

const features = [
  {
    title: 'Уникатни перспективи',
    description: 'Аерофотографии и видеа кои не можат да се постигнат со традиционални методи.',
  },
  {
    title: 'Динамични снимки',
    description: 'Плавно движење низ просторот за кинематографски квалитет на видеата.',
  },
  {
    title: 'Безбедност на публика',
    description: 'Мониторинг на густината на публиката и потенцијални безбедносни ризици.',
  },
  {
    title: 'Промотивни материјали',
    description: 'Професионални материјали за маркетинг на идни настани.',
  },
  {
    title: 'Live streaming',
    description: 'Можност за пренос на живо од воздух за медиуми и социјални мрежи.',
  },
  {
    title: 'Временска ефикасност',
    description: 'Комплетно покривање на настанот без потреба од скапи кранови или жичари.',
  },
];

const processSteps = [
  {
    number: 1,
    title: 'Планирање',
    description: 'Состанок со организаторите, разгледување на локацијата и планирање на shots.',
  },
  {
    number: 2,
    title: 'Дозволи',
    description: 'Обезбедување на потребни дозволи за летање над настанот (No-fly zone waiver).',
  },
  {
    number: 3,
    title: 'Снимање',
    description: 'Професионално снимање за време на настанот според договорениот план.',
  },
  {
    number: 4,
    title: 'Постпродукција',
    description: 'Едитирање, color grading и испорака на финалните материјали.',
  },
];

export default function ManifestaciiPage() {
  return (
    <>
      <ServiceHero
        title="Манифестации, Концерти, Фестивали"
        description="Користењето на дронови на големи настани како концерти и фестивали може да има голема улога за забавата и безбедноста. Овие безпилотни летачки апарати овозможуваат впечатливи видео-снимки од високи висини, создавајќи визуелни спектакли за посетителите."
        icon={Music}
        badge="Настани"
        number={6}
      />

      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative aspect-square bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-background rounded-2xl flex items-center justify-center">
              <Music className="w-32 h-32 text-primary" />
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Зошто аерофото за настани?
              </h2>
              <p className="text-lg text-muted-foreground">
                Аероснимките на настани ја сменија играта во индустријата за настани. Овозможуваат:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Впечатлива документација</p>
                    <p className="text-sm text-muted-foreground">
                      Целосно покривање на настанот од различни аголи
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Масовна публика</p>
                    <p className="text-sm text-muted-foreground">
                      Прикажување на големината и енергијата на настанот
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Художнички shots</p>
                    <p className="text-sm text-muted-foreground">
                      Кинематографски движења и композиции
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Социјални медиуми</p>
                    <p className="text-sm text-muted-foreground">
                      Вирален потенцијал на аероснимки
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
              Видови на настани
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Ние работиме со сите типови на манифестации и настани
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg border-2 hover:border-primary/50 transition-colors">
                <div className="text-3xl mb-3">🎵</div>
                <h3 className="font-semibold text-lg mb-2">Концерти</h3>
                <p className="text-sm text-muted-foreground">
                  Отворени концерти, музички фестивали, open-air настани
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border-2 hover:border-primary/50 transition-colors">
                <div className="text-3xl mb-3">🎪</div>
                <h3 className="font-semibold text-lg mb-2">Фестивали</h3>
                <p className="text-sm text-muted-foreground">
                  Културни, гастрономски, винарски и други фестивали
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border-2 hover:border-primary/50 transition-colors">
                <div className="text-3xl mb-3">⚽</div>
                <h3 className="font-semibold text-lg mb-2">Спортски настани</h3>
                <p className="text-sm text-muted-foreground">
                  Маратони, велосипедски трки, extreme спортови
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border-2 hover:border-primary/50 transition-colors">
                <div className="text-3xl mb-3">🎉</div>
                <h3 className="font-semibold text-lg mb-2">Корпоративни</h3>
                <p className="text-sm text-muted-foreground">
                  Team building, отворања на компании, промоции
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border-2 hover:border-primary/50 transition-colors">
                <div className="text-3xl mb-3">💒</div>
                <h3 className="font-semibold text-lg mb-2">Свадби</h3>
                <p className="text-sm text-muted-foreground">
                  Аерофото и видео од најважниот ден во животот
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border-2 hover:border-primary/50 transition-colors">
                <div className="text-3xl mb-3">🏛️</div>
                <h3 className="font-semibold text-lg mb-2">Јавни настани</h3>
                <p className="text-sm text-muted-foreground">
                  Државни свечености, парадии, протести
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
              Што добивате?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-muted/50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📸</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Фото пакет</h3>
                  <p className="text-muted-foreground">
                    50-100+ професионално едитирани фотографии во Full HD/4K резолуција, оптимизирани за печат и веб
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-muted/50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Видео пакет</h3>
                  <p className="text-muted-foreground">
                    3-5 минутен highlight видео со музика, color grading и професионален edit. Дополнително raw footage ако е потребно.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-muted/50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Социјални медиуми</h3>
                  <p className="text-muted-foreground">
                    Оптимизирани верзии за Instagram, Facebook, TikTok во соодветни формати и резолуции
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-muted/50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎥</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Live Streaming (опција)</h3>
                  <p className="text-muted-foreground">
                    Можност за live пренос од дронот директно на социјални мрежи или приватни платформи
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center bg-primary/5 p-8 rounded-lg border-2 border-primary/20">
              <h3 className="font-semibold text-xl mb-4">Брза испорака</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">24-48h</div>
                  <div className="text-sm text-muted-foreground">Фото материјали</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">5-7 дена</div>
                  <div className="text-sm text-muted-foreground">Финални видеа</div>
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

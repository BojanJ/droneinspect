import { Metadata } from 'next';
import Link from 'next/link';
import { 
  GraduationCap, 
  Award, 
  Shield, 
  BookOpen, 
  CheckCircle2,
  FileCheck,
  Users,
  Plane,
  Clock,
  Euro,
  ArrowRight,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Професионална Обука за Дронови - DroneInspectMK',
  description: 'Професионална обука за безбедно користење на дрон согласно европските регулативи 945/947. Добијте европски сертификат А1, А2 или А3.',
};

const certificates = [
  {
    name: 'А1',
    category: 'Отворена Категорија',
    description: 'Летање над луѓе - дронови под 250г',
    requirements: [
      'Онлајн обука и тест',
      'Минимална возраст: 16 години',
      'Дронови со маса под 250г',
      'Летање над луѓе дозволено'
    ],
    maxWeight: '< 250g',
    altitude: 'до 120m',
    icon: Plane,
  },
  {
    name: 'А2',
    category: 'Отворена Категорија',
    description: 'Летање близу луѓе - дронови до 4кг',
    requirements: [
      'Онлајн обука + практичен тест',
      'Минимална возраст: 16 години',
      'Дронови со маса до 4кг',
      'Минимална далечина од луѓе: 30м'
    ],
    maxWeight: '< 4kg',
    altitude: 'до 120m',
    icon: Plane,
  },
  {
    name: 'А3',
    category: 'Отворена Категорија',
    description: 'Летање далеку од луѓе - дронови до 25кг',
    requirements: [
      'Онлајн обука и тест',
      'Минимална возраст: 16 години',
      'Дронови со маса до 25кг',
      'Минимална далечина од луѓе: 150м'
    ],
    maxWeight: '< 25kg',
    altitude: 'до 120m',
    icon: Plane,
  },
];

const trainingFeatures = [
  {
    icon: BookOpen,
    title: 'Теоретска Обука',
    description: 'Детални лекции за авијацијата, метеорологијата, регулативите и безбедноста'
  },
  {
    icon: Plane,
    title: 'Практична Обука',
    description: 'Реални вежби со професионални дронови и симулатори'
  },
  {
    icon: FileCheck,
    title: 'Припрема за Испит',
    description: 'Тест прашања и подготовка за полагање на европскиот тест'
  },
  {
    icon: Award,
    title: 'Европски Сертификат',
    description: 'Признаен сертификат важечки во сите земји на ЕУ'
  },
  {
    icon: Users,
    title: 'Искусни Инструктори',
    description: 'Обука од сертифицирани пилоти со години искуство'
  },
  {
    icon: Shield,
    title: 'Безбедност на Прво Место',
    description: 'Полни инструкции за безбедно и одговорно пилотирање'
  },
];

const topics = [
  {
    title: 'Авијациска Теорија',
    points: [
      'Принципи на летање',
      'Аеродинамика',
      'Навигација и оријентација',
      'Воздушен простор'
    ]
  },
  {
    title: 'Европски Регулативи',
    points: [
      'Регулатива 2019/945 (стандарди на дронови)',
      'Регулатива 2019/947 (правила за летање)',
      'Категории на операции (А1, А2, А3)',
      'Ограничувања и забрани'
    ]
  },
  {
    title: 'Метеорологија',
    points: [
      'Временски услови за летање',
      'Ветер и турбуленција',
      'Видливост и облачност',
      'Опасни временски појави'
    ]
  },
  {
    title: 'Практични Вештини',
    points: [
      'Контрола на летало',
      'Планирање на мисија',
      'Справување со проблеми',
      'Безбедно слетување'
    ]
  },
  {
    title: 'Безбедност',
    points: [
      'Проценка на ризик',
      'Безбедни процедури',
      'Приватност и GDPR',
      'Осигурување и одговорност'
    ]
  },
  {
    title: 'Технички Аспекти',
    points: [
      'Типови дронови',
      'Батерии и електроника',
      'Камери и сензори',
      'Одржување и сервис'
    ]
  },
];

const trainingProcess = [
  {
    number: 1,
    title: 'Регистрација',
    description: 'Пријавете се за обуката и изберете ја вашата категорија (А1, А2 или А3)'
  },
  {
    number: 2,
    title: 'Теоретска Настава',
    description: 'Следете ги лекциите онлајн или во живо со искусни инструктори'
  },
  {
    number: 3,
    title: 'Практична Обука',
    description: 'Вежбајте со реални дронови под надзор на инструктор (за А2)'
  },
  {
    number: 4,
    title: 'Полагање и Сертификат',
    description: 'Полагање на онлајн тест и добивање на европски сертификат'
  },
];

export default function ObukaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <GraduationCap className="w-4 h-4 mr-2" />
              Европски Сертификати
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Професионална Обука за Безбедно Користење на Дрон
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Стекнете европски сертификат за пилотирање дронови според регулативите 945/947 
              и започнете ја вашата кариера како професионален пилот.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#prijava">
                  Пријави се за Обука
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#sertifikati">
                  Видете Сертификати
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Training Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Зошто Професионална Обука?
            </h2>
            <p className="text-lg text-muted-foreground">
              Од јануари 2021 година, летањето со дронови во Европската Унија е строго регулирано. 
              За да летате легално и безбedно, потребен ви е европски сертификат.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Легално Летање</h3>
              <p className="text-muted-foreground mb-4">
                Европските регулативи 2019/945 и 2019/947 бараат сертификација за сите пилоти 
                на дронови. Без сертификат, летањето е нелегално и може да резултира со високи казни.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Спречете казни до 10,000€</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Летајте во сите земји на ЕУ</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Професионално работење</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Професионални Вештини</h3>
              <p className="text-muted-foreground mb-4">
                Научете ги сите аспекти на безбедното пилотирање - од основна теорија до напредни 
                техники за професионално користење во индустријата.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Работете како професионален пилот</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Намалете ризик од несреќи</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Заштитете ја вашата опрема</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="sertifikati" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Европски Сертификати - Отворена Категорија
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Изберете ја соодветната категорија зависно од вашиот дрон и планираната употреба
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {certificates.map((cert) => (
              <Card key={cert.name} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <cert.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge>{cert.category}</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2">Категорија {cert.name}</h3>
                <p className="text-muted-foreground mb-4">{cert.description}</p>
                
                <div className="grid grid-cols-2 gap-2 mb-4 pb-4 border-b">
                  <div>
                    <div className="text-sm text-muted-foreground">Маса</div>
                    <div className="font-semibold">{cert.maxWeight}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Висина</div>
                    <div className="font-semibold">{cert.altitude}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  {cert.requirements.map((req) => (
                    <div key={req} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-1" />
                      <span className="text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 max-w-3xl mx-auto">
            <div className="flex items-start">
              <Euro className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Важечки во Целата ЕУ
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Сите европски сертификати се меѓусебно признаени и важат во сите земји членки на 
                  Европската Унија. Еден сертификат - летање насекаде во Европа.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Features */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Што Вклучува Нашата Обука?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплетна програма која ве подготвува за професионално пилотирање
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {trainingFeatures.map((feature) => (
              <Card key={feature.title} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Програма на Обуката
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Сеопфатни теми кои ги покриваат сите аспекти на професионалното пилотирање
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {topics.map((topic, idx) => (
              <Card key={topic.title} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full font-bold mr-3">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold">{topic.title}</h3>
                </div>
                <ul className="space-y-2">
                  {topic.points.map((point) => (
                    <li key={point} className="flex items-start text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Како Функционира Обуката?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Едноставен процес од пријава до добивање на сертификатот
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {trainingProcess.map((step) => (
              <div key={step.number} className="relative">
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-2xl mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </Card>
                {step.number < trainingProcess.length && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block p-6">
              <div className="flex items-center gap-4">
                <Clock className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <div className="font-semibold">Времетраење на Обуката</div>
                  <div className="text-sm text-muted-foreground">
                    А1/А3: 2-3 дена • А2: 5-7 дена (со практична обука)
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section id="prijava" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Пријавете се за Обука
              </h2>
              <p className="text-lg text-muted-foreground">
                Започнете ја вашата кариера како професионален пилот на дронови. 
                Контактирајте не за повеќе информации и термини за обука.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <Download className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Преземи Брошура</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Детална брошура со сите информации за обуката и сертификатите
                </p>
                <Button variant="outline" size="sm">
                  Преземи PDF
                </Button>
              </Card>

              <Card className="p-6">
                <FileCheck className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Европски Регулативи</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Прочитајте ги официјалните регулативи 2019/945 и 2019/947
                </p>
                <Button variant="outline" size="sm">
                  Види Повеќе
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

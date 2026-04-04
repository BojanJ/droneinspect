export const siteConfig = {
  name: "DroneInspectMK",
  title: "DroneInspectMK - Професионални Дрон Услуги",
  description: "Професионални дрон услуги и обука во Македонија. Европски сертифицирани според регулативи 945/947.",
  url: "https://droneinspect.mk",
  ogImage: "/og-image.jpg",
  links: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  contact: {
    phone: "+389 70 265 226",
    email: "droneinspectmk@gmail.com",
    name: "Горан Алексов",
  },
  services: [
    {
      id: 1,
      title: "Контрола на соларни панели",
      slug: "solarni-paneli",
      description: "Можете да го изнајмите нашиот дрон за ефикасна контрола и инспекција на вашите соларни панели.",
    },
    {
      id: 2,
      title: "Контрола на ветерници",
      slug: "veternici",
      description: "Остварете точни инспекции на ветерници и други објекти за обновлива енергија.",
    },
    {
      id: 3,
      title: "Изградба на високи објекти",
      slug: "gradezni-objekti",
      description: "Обезбедете важни аерофотографии и видео материјали за градежни проекти.",
    },
    {
      id: 4,
      title: "Инспекција на далеководи",
      slug: "dalevodi",
      description: "Практичен и ефикасен начин за проверка на состојбата и безбедноста на далеководите.",
    },
    {
      id: 5,
      title: "Пребарување и локација на терен",
      slug: "prebaruvanje-teren",
      description: "Брз и ефикасен начин за скенирање големи и тешкодостапни области.",
    },
    {
      id: 6,
      title: "Манифестации, Концерти, Фестивали",
      slug: "manifestacii",
      description: "Впечатливи видео-снимки од високи висини за настани.",
    },
  ],
  certifications: [
    "Европски сертификати А1, А2, А3",
    "Согласност со регулативи 945/947",
    "DJI Mavic 4 Pro сертифициран",
  ],
};

export type SiteConfig = typeof siteConfig;

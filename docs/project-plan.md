# DroneInspect.mk - Проект План за Редизајн

## Цели на Проектот

Креирање на модерна, респонзивна веб-страна за DroneInspectMK со подобрен UX/UI дизајн и функционалност.

---

## Технолошки Стек (Препораки)

### Frontend
- **Framework:** React / Next.js (за SEO оптимизација)
- **Styling:** Tailwind CSS / Styled Components
- **Анимации:** Framer Motion
- **Јазик:** TypeScript

### Backend (Опционо)
- **API:** Node.js + Express / Next.js API Routes
- **База на податоци:** MongoDB / PostgreSQL (за контакт форми)
- **Email сервис:** SendGrid / Nodemailer

### Deployment
- **Hosting:** Vercel / Netlify / AWS
- **CDN:** Cloudflare
- **Домен:** droneinspect.mk

---

## Структура на Страните

### 1. Почетна Страна (Home)
- Hero секција со привлечен визуел
- Кратки информации за компанијата
- Преглед на услуги (6 категории)
- Call-to-action копчиња
- Контакт информации

### 2. Услуги (Services)
#### Подстрани:
1. Контрола на соларни панели
2. Контрола на ветерници
3. Изградба на високи објекти
4. Инспекција на далеководи
5. Пребарување и локација на терен
6. Манифестации, концерти, фестивали

### 3. Обука (Training)
- Детални информации за курсеви
- Европски регулативи (945/947)
- Категории А1, А2, А3
- Форма за пријава

### 4. Опрема (Equipment)
- DJI Mavic 3 Pro спецификации
- Технички детали
- Камера и сензори
- Видео и фото галерија

### 5. Галерија (Gallery)
- Фото галерија со проекти
- Видео материјали
- YouTube интеграција
- Filtriranje по категории

### 6. За Нас (About)
- Информации за компанијата
- Сертификати и лиценци
- Европски стандарди
- Тим

### 7. Контакт (Contact)
- Контакт форма
- Google Maps интеграција
- Телефон: +389 70 265 226
- Email: droneinspectmk@gmail.com
- Социјални мрежи

---

## Клучни Особини (Features)

### Основни
- [x] Респонзивен дизајн (Mobile-first)
- [x] SEO оптимизација
- [x] Македонски јазик (со можност за проширување)
- [x] Брзо вчитување
- [x] Контакт форма со валидација

### Напредни
- [ ] Booking систем за изнајмување на дрон
- [ ] Online пријава за обука
- [ ] Multilanguage поддршка (MK/EN)
- [ ] Blog секција
- [ ] Testimonials од клиенти
- [ ] Live chat
- [ ] Integration со социјални мрежи
- [ ] Видео background на hero секцијата
- [ ] Smooth scroll анимации
- [ ] Lazy loading на слики

---

## Дизајн Насоки

### Бои
- **Примарна:** Сина/Небесна (симболизира небо и летање)
- **Секундарна:** Темно сива/Crna (професионалност)
- **Акцент:** Портокалова/Жолта (енергија)
- **Background:** Бела/Светло сива

### Типографија
- **Наслови:** Modern Sans-serif (Montserrat, Inter, Poppins)
- **Текст:** Readable Sans-serif (Open Sans, Roboto, Inter)
- **Македонска кирилица поддршка:** Обавезно!

### Визуелни Елементи
- Високо-квалитетни слики од дронови
- Аерофотографии
- Видео материјали
- Иконки за услуги
- Графички градиенти
- Smooth анимации

---

## Sitemap

```
Почетна (/)
│
├── Услуги (/uslugi)
│   ├── Соларни панели (/uslugi/solarni-paneli)
│   ├── Ветерници (/uslugi/veternici)
│   ├── Градежни објекти (/uslugi/gradezni-objekti)
│   ├── Далеководи (/uslugi/dalevodi)
│   ├── Пребарување терен (/uslugi/prebaruvanje-teren)
│   └── Манифестации (/uslugi/manifestacii)
│
├── Обука (/obuka)
│
├── Опрема (/oprema)
│   └── DJI Mavic 3 Pro (/oprema/dji-mavic-3-pro)
│
├── Галерија (/galerija)
│
├── За нас (/za-nas)
│
└── Контакт (/kontakt)
```

---

## Фази на Развој

### Фаза 1: Планирање и Дизајн (1-2 недели)
- [x] Анализа на постоечка веб-страна
- [ ] Wireframes
- [ ] UI/UX дизајн (Figma)
- [ ] Content review и optimizacija
- [ ] SEO keyword research

### Фаза 2: Frontend Development (3-4 недели)
- [ ] Setup на проект (Next.js)
- [ ] Компоненти за layout
- [ ] Имплементација на почетна страна
- [ ] Услуги страници
- [ ] Галерија
- [ ] Контакт форма
- [ ] Респонзивност

### Фаза 3: Backend Integration (1-2 недели)
- [ ] API endpoints
- [ ] Email функционалност
- [ ] Database setup (ако е потребно)
- [ ] Form validation

### Фаза 4: Testing (1 недела)
- [ ] Cross-browser testing
- [ ] Mobile testing
- [ ] Performance optimization
- [ ] SEO audit
- [ ] Accessibility testing

### Фаза 5: Deployment (1 недела)
- [ ] Production build
- [ ] Domain setup
- [ ] SSL сертификат
- [ ] Analytics setup (Google Analytics)
- [ ] Launch

---

## SEO Стратегија

### Keywords (Македонски)
- дрон инспекција македонија
- изнајмување дрон
- обука за дрон
- професионални дрон услуги
- DJI Mavic 3 Pro
- аеро фотографија македонија
- инспекција соларни панели
- инспекција ветерници
- европски сертификат дрон

### On-Page SEO
- Meta tags оптимизација
- Alt текст за слики
- Structured data (Schema.org)
- Open Graph tags
- Sitemap.xml
- Robots.txt

---

## Performance Metrics

### Целни Показатели
- PageSpeed Score: > 90
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Largest Contentful Paint: < 2.5s

---

## Buџет и Ресурси (Проценки)

- Design: 40-60 часа
- Frontend Development: 80-120 часа
- Backend Development: 20-40 часа
- Testing & QA: 20-30 часа
- Content Creation: 10-20 часа

---

## Следни Чекори

1. ✅ Анализа на постоечка содржина
2. 📝 Креирање на wireframes
3. 🎨 UI/UX дизајн
4. 💻 Започнување со развој
5. 🚀 Testing и deployment

---

## Контакт за Проектот

**Email:** droneinspectmk@gmail.com  
**Телефон:** +389 70 265 226

# DroneInspectMK Website

Професионална веб-страна за DroneInspectMK - дрон услуги и обука во Македонија.

## 🚀 Технологии

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Font:** [Inter](https://fonts.google.com/specimen/Inter) (со поддршка за кирилица)

## 📁 Структура на Проектот

```
droneinspect/
├── docs/                      # Документација
│   ├── website-content.md     # Содржина од оригинална веб-страна
│   └── project-plan.md        # План за развој
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # Root layout со Header/Footer
│   │   ├── page.tsx           # Почетна страна
│   │   └── globals.css        # Глобални стилови
│   ├── components/
│   │   ├── layout/            # Layout компоненти
│   │   │   ├── Header.tsx     # Навигација
│   │   │   └── Footer.tsx     # Footer
│   │   ├── sections/          # Секции на страната
│   │   │   ├── Hero.tsx       # Hero секција
│   │   │   ├── Services.tsx   # Услуги
│   │   │   └── ContactForm.tsx # Контакт форма
│   │   └── ui/                # shadcn/ui компоненти
│   └── lib/                   # Utility функции
└── public/                    # Статични фајлови
```

## 🛠️ Инсталација и Развој

### Prerequisites

- Node.js 18.17 или понова верзија
- npm, yarn, pnpm или bun

### Setup

1. **Инсталирајте зависности:**
   ```bash
   npm install
   ```

2. **Стартувајте development server:**
   ```bash
   npm run dev
   ```

3. **Отворете го браузерот:**
   ```
   http://localhost:3000
   ```

## 📝 Скрипти

```bash
npm run dev          # Стартува development server
npm run build        # Прави production build
npm run start        # Стартува production server
npm run lint         # Проверува код со ESLint
```

## 🎨 Дизајн Систем

### Бои

- **Primary:** Сина (Blue) - за главни акценти
- **Secondary:** Сива - за секундарни елементи
- **Background:** Бела/Светло сива
- **Text:** Темно сива/Црна

### Компоненти

Сите UI компоненти се базирани на shadcn/ui и можат да се најдат во `src/components/ui/`.

Достапни компоненти:
- Button, Card, Badge
- Navigation Menu, Sheet, Dialog
- Input, Textarea, Label, Form, Select
- Avatar, Separator

## 📄 Страници

### Тековни страници:

- ✅ **Почетна** (`/`) - Hero, Services, Contact форма

### Планирани страници:

- 🔲 **Услуги** (`/uslugi`) - 6 подстрани
- 🔲 **Обука** (`/obuka`)
- 🔲 **Опрема** (`/oprema`)
- 🔲 **Галерија** (`/galerija`)
- 🔲 **За нас** (`/za-nas`)
- 🔲 **Контакт** (`/kontakt`)

## 🌐 SEO

Веб-страната е оптимизирана за Македонскиот пазар со:
- Македонски јазик (кирилица)
- Meta tags за SEO
- Semantic HTML
- Responsive images
- Performance optimization

## 📱 Респонзивност

Дизајнот е респонзивен и оптимизиран за:
- 📱 Mobile (320px - 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (1024px+)

## 📞 Контакт Информации

- **Телефон:** +389 70 265 226
- **Email:** droneinspectmk@gmail.com
- **Компанија:** DroneInspectМК

## 📄 Лиценца

© 2026 DroneInspectMK. Сите права задржани.


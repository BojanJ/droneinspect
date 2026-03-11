import { ContactForm } from '@/components/sections/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакт | DroneInspect',
  description: 'Контактирајте нè за професионални дрон услуги во Македонија. Достапни сме за одговори на сите ваши прашања.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactForm />
    </main>
  );
}

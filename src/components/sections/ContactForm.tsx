'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert('Вашата порака е успешно испратена! Ќе ве контактираме наскоро.');
  };

  return (
    <section className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Контактирајте нè
              </h2>
              <p className="text-xl text-muted-foreground">
                Имате прашања? Ние сме тука да ви помогнеме. Контактирајте нè преку формата или директно на нашите контакт информации.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <a href="tel:+38970265226" className="text-muted-foreground hover:text-primary transition-colors">
                      +389 70 265 226
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Работно време: 09:00 - 17:00</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:droneinspectmk@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                      droneinspectmk@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Одговараме во рок од 24 часа</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Локација</h3>
                    <p className="text-muted-foreground">Македонија</p>
                    <p className="text-sm text-muted-foreground mt-1">Покриваме цела територија на Македонија</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Испратете порака</CardTitle>
              <CardDescription>
                Пополнете ја формата и ќе ве контактираме најбрзо можно
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Име *</Label>
                    <Input id="firstName" placeholder="Вашето име" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Презиме *</Label>
                    <Input id="lastName" placeholder="Вашето презиме" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="vashemail@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+389 XX XXX XXX" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Услуга</Label>
                  <Input id="service" placeholder="Која услуга ве интересира?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Порака *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Опишете ја вашата потреба..." 
                    rows={5}
                    required 
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Се испраќа...</>
                  ) : (
                    <>
                      Испрати порака
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

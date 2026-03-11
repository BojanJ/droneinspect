'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Send, Calendar } from 'lucide-react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        e.currentTarget.reset();
        alert('Вашата порака е успешно испратена! Ќе ве контактираме наскоро.');
      } else {
        alert('Настана грешка. Ве молиме обидете се повторно.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Настана грешка. Ве молиме обидете се повторно.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24" style={{ background: 'linear-gradient(to bottom, #0a0a0a, #050505)' }}>
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00c8ff]/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00c8ff]" />
            <span className="text-[#00c8ff] text-sm font-medium tracking-widest uppercase">Контакт</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Закажи термин
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Имате проект или прашање? Контактирајте нè и ќе ви одговориме во рок од 24 часа.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6 flex items-start space-x-4 hover:border-[#00c8ff]/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-[#00c8ff]/10 flex items-center justify-center flex-shrink-0 border border-[#00c8ff]/20">
                  <Phone className="w-6 h-6 text-[#00c8ff]" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Телефон</h3>
                  <a href="tel:+38970265226" className="text-white/50 hover:text-[#00c8ff] transition-colors text-sm">
                    +389 70 265 226
                  </a>
                  <p className="text-xs text-white/30 mt-1">Работно време: 09:00 - 17:00</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 flex items-start space-x-4 hover:border-[#00c8ff]/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-[#00c8ff]/10 flex items-center justify-center flex-shrink-0 border border-[#00c8ff]/20">
                  <Mail className="w-6 h-6 text-[#00c8ff]" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Email</h3>
                  <a href="mailto:droneinspectmk@gmail.com" className="text-white/50 hover:text-[#00c8ff] transition-colors break-all text-sm">
                    droneinspectmk@gmail.com
                  </a>
                  <p className="text-xs text-white/30 mt-1">Одговараме во рок од 24 часа</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 flex items-start space-x-4 hover:border-[#00c8ff]/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-[#00c8ff]/10 flex items-center justify-center flex-shrink-0 border border-[#00c8ff]/20">
                  <MapPin className="w-6 h-6 text-[#00c8ff]" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Локација</h3>
                  <p className="text-white/50 text-sm">Македонија</p>
                  <p className="text-xs text-white/30 mt-1">Покриваме цела територија на Македонија</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 flex items-start space-x-4 hover:border-[#00c8ff]/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-[#00c8ff]/10 flex items-center justify-center flex-shrink-0 border border-[#00c8ff]/20">
                  <Calendar className="w-6 h-6 text-[#00c8ff]" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Достапност</h3>
                  <p className="text-white/50 text-sm">Понеделник – Сабота</p>
                  <p className="text-xs text-white/30 mt-1">Флексибилно распоредување на термини</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-2">Испратете порака</h3>
            <p className="text-sm text-white/40 mb-6">
              Пополнете ја формата и ќе ве контактираме најбрзо можно
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="access_key" value="c2788627-87af-4a87-a901-f6983aa49419" />
              <input type="hidden" name="subject" value="Нова порака од DroneInspect контакт форма" />
              <input type="hidden" name="from_name" value="DroneInspect Website" />
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white/60 text-xs uppercase tracking-wider">Име *</Label>
                  <Input 
                    id="firstName"
                    name="firstName"
                    placeholder="Вашето име" 
                    required 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#00c8ff]/50 focus:bg-white/8"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white/60 text-xs uppercase tracking-wider">Презиме *</Label>
                  <Input 
                    id="lastName"
                    name="lastName"
                    placeholder="Вашето презиме" 
                    required 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#00c8ff]/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/60 text-xs uppercase tracking-wider">Email *</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email" 
                  placeholder="vashemail@example.com" 
                  required 
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#00c8ff]/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white/60 text-xs uppercase tracking-wider">Телефон</Label>
                <Input 
                  id="phone"
                  name="phone"
                  type="tel" 
                  placeholder="+389 XX XXX XXX" 
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#00c8ff]/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="text-white/60 text-xs uppercase tracking-wider">Услуга</Label>
                <Input 
                  id="service"
                  name="service"
                  placeholder="Која услуга ве интересира?" 
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#00c8ff]/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white/60 text-xs uppercase tracking-wider">Порака *</Label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Опишете ја вашата потреба..." 
                  rows={4}
                  required 
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#00c8ff]/50 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#00c8ff] hover:bg-[#00a8dd] text-black font-bold py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,200,255,0.4)]" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Се испраќа...</>
                ) : (
                  <>
                    Закажи термин
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, Phone, Mail } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { title: 'Соларни панели', href: '/uslugi/solarni-paneli' },
    { title: 'Ветерници', href: '/uslugi/veternici' },
    { title: 'Градежни објекти', href: '/uslugi/gradezni-objekti' },
    { title: 'Далеководи', href: '/uslugi/dalevodi' },
    { title: 'Пребарување терен', href: '/uslugi/prebaruvanje-teren' },
    { title: 'Манифестации', href: '/uslugi/manifestacii' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10" style={{ background: 'rgba(5, 5, 5, 0.8)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img 
            src="/logo/DroneInspect Logo White.svg" 
            alt="DroneInspect MK" 
            className="h-12 w-auto"
            style={{ filter: 'drop-shadow(0 0 20px rgba(0,200,255,0.3))' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-white/70 hover:text-[#00c8ff] transition-colors">
            Почетна
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white/70 hover:text-[#00c8ff] bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">Услуги</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2" style={{ background: 'rgba(10, 10, 10, 0.95)', backdropFilter: 'blur(16px)', border: '1px solid rgba(0,200,255,0.15)' }}>
                    {services.map((service) => (
                      <li key={service.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#00c8ff]/10 hover:text-[#00c8ff] text-white/70"
                          >
                            <div className="text-sm font-medium leading-none">
                              {service.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/obuka" className="text-sm font-medium text-white/70 hover:text-[#00c8ff] transition-colors">
            Обука
          </Link>

          <Link href="/oprema" className="text-sm font-medium text-white/70 hover:text-[#00c8ff] transition-colors">
            Опрема
          </Link>

          <Link href="/galerija" className="text-sm font-medium text-white/70 hover:text-[#00c8ff] transition-colors">
            Галерија
          </Link>

          <Link href="/za-nas" className="text-sm font-medium text-white/70 hover:text-[#00c8ff] transition-colors">
            За нас
          </Link>

          <Link href="/kontakt">
            <Button className="bg-[#00c8ff] hover:bg-[#00a8dd] text-black font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,200,255,0.4)]">
              Закажи термин
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-[#00c8ff]">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto" style={{ background: 'rgba(10, 10, 10, 0.98)', borderLeft: '1px solid rgba(0,200,255,0.15)' }}>
            {/* Mobile Logo */}
            <div className="flex items-center justify-center pt-4 pb-6 border-b border-white/10">
              <img 
                src="/logo/DroneInspect Logo White.svg" 
                alt="DroneInspect MK" 
                className="h-10 w-auto"
                style={{ filter: 'drop-shadow(0 0 20px rgba(0,200,255,0.3))' }}
              />
            </div>

            <nav className="flex flex-col space-y-2 mt-6 px-2">
              <Link
                href="/"
                className="text-lg font-medium text-white/70 hover:text-[#00c8ff] transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                Почетна
              </Link>

              <div className="space-y-2 py-2">
                <p className="text-lg font-medium text-white/90 px-4 py-2">Услуги</p>
                <div className="pl-2 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block text-sm text-white/50 hover:text-[#00c8ff] transition-colors py-2.5 px-4 rounded-lg hover:bg-white/5"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/obuka"
                className="text-lg font-medium text-white/70 hover:text-[#00c8ff] transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                Обука
              </Link>

              <Link
                href="/oprema"
                className="text-lg font-medium text-white/70 hover:text-[#00c8ff] transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                Опрема
              </Link>

              <Link
                href="/galerija"
                className="text-lg font-medium text-white/70 hover:text-[#00c8ff] transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                Галерија
              </Link>

              <Link
                href="/za-nas"
                className="text-lg font-medium text-white/70 hover:text-[#00c8ff] transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                За нас
              </Link>

              <div className="pt-4 pb-2">
                <Link href="/kontakt" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-[#00c8ff] hover:bg-[#00a8dd] text-black font-bold py-6 text-base">Закажи термин</Button>
                </Link>
              </div>

              <div className="pt-4 pb-6 space-y-3 border-t border-white/10">
                <a href="tel:+38970265226" className="flex items-center space-x-3 text-sm text-white/50 hover:text-[#00c8ff] transition-colors py-2.5 px-4 rounded-lg hover:bg-white/5">
                  <Phone className="h-5 w-5" />
                  <span>+389 70 265 226</span>
                </a>
                <a href="mailto:droneinspectmk@gmail.com" className="flex items-center space-x-3 text-sm text-white/50 hover:text-[#00c8ff] transition-colors py-2.5 px-4 rounded-lg hover:bg-white/5">
                  <Mail className="h-5 w-5" />
                  <span>droneinspectmk@gmail.com</span>
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

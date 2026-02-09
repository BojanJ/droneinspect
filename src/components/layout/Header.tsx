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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">DroneInspect</span>
          <span className="text-sm font-semibold">МК</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Почетна
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Услуги</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {services.map((service) => (
                      <li key={service.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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

          <Link href="/obuka" className="text-sm font-medium hover:text-primary transition-colors">
            Обука
          </Link>

          <Link href="/oprema" className="text-sm font-medium hover:text-primary transition-colors">
            Опрема
          </Link>

          <Link href="/galerija" className="text-sm font-medium hover:text-primary transition-colors">
            Галерија
          </Link>

          <Link href="/za-nas" className="text-sm font-medium hover:text-primary transition-colors">
            За нас
          </Link>

          <Link href="/kontakt">
            <Button>Контакт</Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link
                href="/"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Почетна
              </Link>

              <div className="space-y-2">
                <p className="text-lg font-medium">Услуги</p>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block text-sm hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/obuka"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Обука
              </Link>

              <Link
                href="/oprema"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Опрема
              </Link>

              <Link
                href="/galerija"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Галерија
              </Link>

              <Link
                href="/za-nas"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                За нас
              </Link>

              <Link href="/kontakt" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Контакт</Button>
              </Link>

              <div className="pt-4 space-y-2 border-t">
                <a href="tel:+38970265226" className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>+389 70 265 226</span>
                </a>
                <a href="mailto:droneinspectmk@gmail.com" className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4" />
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

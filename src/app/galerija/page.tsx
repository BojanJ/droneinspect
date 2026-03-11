"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Camera,
  Video,
  Grid3x3,
  Play,
  Maximize2,
  Filter,
  Image as ImageIcon,
  Sun,
  Wind,
  Building,
  Zap,
  Users,
  Search,
  Download,
  Share2,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/sections/ContactForm";

// This would typically come from a database or CMS
const galleryItems = [
  {
    id: 1,
    type: "photo",
    category: "solar",
    title: "Термовизија на Соларна Фарма",
    description: "Инспекција на 1000+ панели со термална камера",
    date: "2025-12-15",
    location: "Штип",
    tags: ["Соларни Панели", "Термовизија", "Инспекција"],
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
  },
  {
    id: 2,
    type: "video",
    category: "wind",
    title: "Контрола на Ветерници",
    description: "4K снимање на ветерничка фарма",
    date: "2025-11-28",
    location: "Богданци",
    tags: ["Ветерници", "4K", "Инспекција"],
    image:
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&q=80",
  },
  {
    id: 3,
    type: "photo",
    category: "construction",
    title: "Изградба на Деловен Центар",
    description: "Прогрес фотографија од високо",
    date: "2025-11-20",
    location: "Скопје",
    tags: ["Градежништво", "Прогрес", "Аерофотографија"],
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
  },
  {
    id: 4,
    type: "photo",
    category: "powerlines",
    title: "Инспекција на Далеководи",
    description: "Детална проверка на инфраструктура",
    date: "2025-11-10",
    location: "Битола",
    tags: ["Далеководи", "Инфраструктура", "Инспекција"],
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
  },
  {
    id: 5,
    type: "video",
    category: "events",
    title: "Концерт во Парк",
    description: "Аериални снимки од музички фестивал",
    date: "2025-10-05",
    location: "Охрид",
    tags: ["Концерт", "Настан", "Видео"],
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
  },
  {
    id: 6,
    type: "photo",
    category: "events",
    title: "Свадба во Природа",
    description: "Романтични аериални фотографии",
    date: "2025-09-22",
    location: "Маврово",
    tags: ["Свадба", "Настан", "Фотографија"],
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
  },
  {
    id: 7,
    type: "photo",
    category: "solar",
    title: "Соларен Парк Прогрес",
    description: "Изградба на соларна централа",
    date: "2025-09-15",
    location: "Кочани",
    tags: ["Соларни Панели", "Изградба", "Прогрес"],
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80",
  },
  {
    id: 8,
    type: "video",
    category: "construction",
    title: "Автопат Конструкција",
    description: "Time-lapse видео од изградба",
    date: "2025-08-30",
    location: "Тетово",
    tags: ["Градежништво", "Time-lapse", "Автопат"],
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
  },
  {
    id: 9,
    type: "photo",
    category: "wind",
    title: "360° Панорама на Ветерници",
    description: "Комплетен преглед на ветерничка фарма",
    date: "2025-08-18",
    location: "Крушево",
    tags: ["Ветерници", "Панорама", "360°"],
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=600&q=80",
  },
  {
    id: 10,
    type: "video",
    category: "events",
    title: "Спортски Настан",
    description: "Маратон покривање од воздух",
    date: "2025-07-12",
    location: "Скопје",
    tags: ["Спорт", "Маратон", "Настан"],
    image:
      "https://images.unsplash.com/photo-1502904550040-7534597429ae?w=600&q=80",
  },
  {
    id: 11,
    type: "photo",
    category: "powerlines",
    title: "Далековод во Планина",
    description: "Инспекција на тешко достапен терен",
    date: "2025-07-05",
    location: "Шар Планина",
    tags: ["Далеководи", "Планина", "Инспекција"],
    image:
      "https://images.unsplash.com/photo-1508812878650-ba9e0e3a11b7?w=600&q=80",
  },
  {
    id: 12,
    type: "photo",
    category: "construction",
    title: "Станбен Комплекс",
    description: "Маркетинг фотографија за недвижност",
    date: "2025-06-20",
    location: "Скопје",
    tags: ["Недвижности", "Маркетинг", "Станбен"],
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
  },
];

const categories = [
  { id: "all", name: "Сите", icon: Grid3x3 },
  { id: "solar", name: "Соларни Панели", icon: Sun },
  { id: "wind", name: "Ветерници", icon: Wind },
  { id: "construction", name: "Градежништво", icon: Building },
  { id: "powerlines", name: "Далеководи", icon: Zap },
  { id: "events", name: "Настани", icon: Users },
];

const mediaTypes = [
  { id: "all", name: "Сите", icon: Grid3x3 },
  { id: "photo", name: "Фотографии", icon: Camera },
  { id: "video", name: "Видеа", icon: Video },
];

export default function GalerijaPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = galleryItems.filter((item) => {
    const categoryMatch =
      selectedCategory === "all" || item.category === selectedCategory;
    const typeMatch = selectedType === "all" || item.type === selectedType;
    const searchMatch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    return categoryMatch && typeMatch && searchMatch;
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Camera className="w-4 h-4 mr-2" />
              Нашето Портфолио
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Најдоброто Визуелно Искуство
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Истражете ги нашите проекти - професионални аериални фотографии и
              видеа од различни индустрии и настани низ Македонија.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Camera className="w-5 h-5" />
                <span className="text-sm">5.1K Резолуција</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Video className="w-5 h-5" />
                <span className="text-sm">4K/60fps Видео</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <ImageIcon className="w-5 h-5" />
                <span className="text-sm">RAW Формат</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                500+
              </div>
              <div className="text-sm text-muted-foreground">Проекти</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                50+
              </div>
              <div className="text-sm text-muted-foreground">Клиенти</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                10K+
              </div>
              <div className="text-sm text-muted-foreground">Фотографии</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                200+
              </div>
              <div className="text-sm text-muted-foreground">Видеа</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-background sticky top-16 z-10 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Пребарај по наслов, опис или таг..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">
                  Категорија:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={
                      selectedCategory === cat.id ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(cat.id)}
                    className="gap-2"
                  >
                    <cat.icon className="w-4 h-4" />
                    {cat.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">
                  Тип:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {mediaTypes.map((type) => (
                  <Button
                    key={type.id}
                    variant={selectedType === type.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type.id)}
                    className="gap-2"
                  >
                    <type.icon className="w-4 h-4" />
                    {type.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Results Count */}
            <div className="mb-6 text-sm text-muted-foreground">
              Прикажани {filteredItems.length}{" "}
              {filteredItems.length === 1 ? "резултат" : "резултати"}
            </div>

            {/* Grid */}
            {filteredItems.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <Card
                    key={item.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border-border/50 hover:border-primary/50 p-0"
                  >
                    {/* Image/Video Placeholder */}
                    <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                            <Play className="w-10 h-10 text-primary fill-primary" />
                          </div>
                        </div>
                      )}
                      
                      {/* Gradient Fade to Content */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent pointer-events-none" />
                      
                      <Badge className="absolute top-3 right-3 shadow-lg">
                        {item.type === "photo" ? (
                          <>
                            <Camera className="w-3 h-3 mr-1" />
                            Фото
                          </>
                        ) : (
                          <>
                            <Video className="w-3 h-3 mr-1" />
                            Видео
                          </>
                        )}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pb-4 border-b">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.date.split('-').reverse().join('/')}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5" />
                          {item.location}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs font-normal"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <ImageIcon className="w-16 h-16 text-muted-foreground/40 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Нема резултати</h3>
                <p className="text-muted-foreground mb-6">
                  Пробајте да промените ги филтерите или пребарувањето
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedType("all");
                    setSearchQuery("");
                  }}
                >
                  Ресетирај Филтери
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Сакате Слични Резултати?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Нашиот тим на професионални пилоти е подготвен да го реализира
              вашиот следен проект со истата прецизност и квалитет.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/uslugi">Види Услуги</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#kontakt">Побарај Понуда</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="kontakt" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Контактирајте не за Ваш Проект
              </h2>
              <p className="text-lg text-muted-foreground">
                Заинтересирани за професионални аериални снимки? Контактирајте
                не за понуда.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <Download className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Висока Резолуција</h3>
                <p className="text-sm text-muted-foreground">
                  Сите фотографии се достапни во RAW формат со 20MP резолуција.
                  Видеата се во 4K и 5.1K квалитет.
                </p>
              </Card>

              <Card className="p-6">
                <Share2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Комерцијална Употреба</h3>
                <p className="text-sm text-muted-foreground">
                  Овластувања за користење на материјалите за маркетинг,
                  веб-страни и социјални медиуми.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

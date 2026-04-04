import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ParallaxSection } from "@/components/sections/ParallaxSection";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"
        badge="Напредна технологија"
        title="Прецизност од"
        subtitle="секоја висина"
        description="Со DJI 3T и термовизиска камера, DroneInspect обезбедува невидена прецизност во инспекцијата на индустриски инсталации, далеководи и обновливи енергетски системи. Откријте проблеми пред да станат катастрофи."
        ctaText="Закажи инспекција"
        ctaHref="/kontakt"
      />
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
        badge="Недвижности и градба"
        title="Кинематографија"
        subtitle="со воздушен поглед"
        description="Трансформирајте ги вашите недвижности и градежни проекти со впечатливи аеро-снимки. Нашите кинематографски летови создаваат содржина со висока вредност која привлекува купувачи и инвеститори."
        ctaText="Погледни портфолио"
        ctaHref="/galerija"
        reversed={true}
      />
      <ContactForm />
    </>
  );
}


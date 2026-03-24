import { ExternalLink, Globe, Users, Zap } from "lucide-react";
import FlipCard from "@/components/animata/card/flip-card";
import ScrollingBanner from "@/components/scrolling-banner";
import Marquee from "@/components/ui/marquee";
import { createTranslation } from "@/i18n/server";
import { Avatar, AvatarFallback, AvatarImage, Card, CardContent, CardHeader } from "@/lib/heroui";
import HeroSection from "./hero-section";

export default async function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="grow">
        <HeroSection className="h-[65dvh]" />
        <AvailableOnPlatforms />
        <ProductShowcase />
        <UserRecommendations />
      </main>
    </div>
  );
}

const AvailableOnPlatforms = async () => {
  const { t } = await createTranslation("home");

  const PLATFORMS = [
    { key: "youtube", name: "YouTube", followers: "12M", icon: "logos:youtube-icon" },
    { key: "bilibili", name: "Bilibili", followers: "50M", icon: "simple-icons:bilibili" },
    { key: "tiktok", name: "TikTok", followers: "80M", icon: "logos:tiktok-icon" },
    { key: "instagram", name: "Instagram", followers: "10M", icon: "logos:instagram-icon" },
    { key: "twitch", name: "Twitch", followers: "100K", icon: "logos:twitch" },
    { key: "telegram", name: "Telegram", followers: "100K", icon: "logos:telegram" },
    { key: "twitter", name: "Twitter", followers: "100K", icon: "lucide:twitter" },
  ] as const;

  return (
    <section className="relative w-full bg-background py-8">
      <div className="mx-auto max-w-7xl px-6 py-2 sm:py-4 lg:px-4">
        <div className="mb-4 text-center">
          <h2 className="mb-4 font-bold text-4xl tracking-tight">{t("hero.title")}</h2>
        </div>
        <ScrollingBanner shouldPauseOnHover duration={30} gap="80px" className="py-8">
          {[...PLATFORMS, ...PLATFORMS].map(({ key, name, followers, icon }) => (
            <FlipCard
              key={key}
              className="size-56"
              icon={icon}
              title={name}
              subtitle={t("platforms.followers", { followers })}
              description={t("platforms.connect", { followers, platform: name })}
            />
          ))}
        </ScrollingBanner>
      </div>
    </section>
  );
};

const ProductShowcase = async () => {
  const PRODUCTS = [
    {
      name: "Product One",
      description: "A powerful tool for your first use case",
      href: "#",
      icon: Users,
      features: ["Feature A", "Feature B", "Feature C"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Product Two",
      description: "An advanced platform for your second use case",
      href: "#",
      icon: Globe,
      features: ["Feature D", "Feature E", "Feature F"],
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Product Three",
      description: "Multi-purpose tool for your third use case",
      href: "#",
      icon: Zap,
      features: ["Feature G", "Feature H", "Feature I"],
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="relative w-full bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="mb-3 font-bold text-3xl tracking-tight">Our Products</h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground">
            Discover our comprehensive suite of tools and platforms designed to help you build amazing things.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <a key={product.name} href={product.href} className="group">
              <Card className="cursor-pointer border shadow-none transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={`rounded-lg bg-gradient-to-r p-2.5 ${product.color} text-white`}>
                      <product.icon className="size-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <p className="text-muted-foreground text-xs">{product.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-1.5">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="size-1 rounded-full bg-primary/60" />
                        <span className="text-muted-foreground text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex justify-end">
                    <ExternalLink className="size-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const UserRecommendations = async () => {
  const { t } = await createTranslation("home");

  const RECOMMENDATIONS = [
    {
      id: 1,
      avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Sarah",
      name: "Sarah",
      role: "Developer",
      content:
        "This template saved me so much time. The authentication, i18n, and database setup were all ready out of the box. Highly recommended for any Next.js project!",
    },
    {
      id: 2,
      avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Mike",
      name: "Mike",
      role: "Designer",
      content:
        "The Tailwind CSS integration with HeroUI components makes it incredibly easy to build beautiful interfaces. The dark mode support is a nice touch.",
    },
    {
      id: 3,
      avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Emily",
      name: "Emily",
      role: "Full Stack Dev",
      content:
        "Drizzle ORM with PostgreSQL works flawlessly. The migration setup and type safety are exactly what I needed for my project.",
    },
    {
      id: 4,
      avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=David",
      name: "David",
      role: "Tech Lead",
      content:
        "We adopted this template for our team's new projects. The code quality and architecture patterns are solid and easy to extend.",
    },
    {
      id: 5,
      avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Sophie",
      name: "Sophie",
      role: "Freelancer",
      content:
        "The internationalization setup is the best I've seen in a Next.js template. Supporting multiple languages is now effortless.",
    },
    {
      id: 6,
      avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Alex",
      name: "Alex",
      role: "Startup Founder",
      content:
        "From Auth.js integration to deployment-ready configuration, this template covers everything. We launched our MVP in record time.",
    },
  ];

  return (
    <section className="relative w-full bg-background/50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="font-bold text-4xl tracking-tight">{t("hero.subtitle")}</h2>
        </div>

        <Marquee className="py-8" pauseOnHover>
          {RECOMMENDATIONS.map((item) => (
            <div key={item.id} className="mx-4 w-[350px] rounded-xl border bg-card p-6 shadow-xs">
              <div className="flex items-center gap-4">
                <Avatar className="size-12">
                  <AvatarImage src={item.avatar} alt={item.name} />
                  <AvatarFallback>{item.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">{item.role}</p>
                </div>
              </div>
              <p className="mt-4 line-clamp-4 text-muted-foreground text-sm">{item.content}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

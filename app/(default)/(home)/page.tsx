import { Avatar, Card, CardBody, CardHeader } from "@heroui/react";
import { BookOpen, ExternalLink, Globe, Shield, Users, Zap } from "lucide-react";
import FlipCard from "@/components/animata/card/flip-card";
import ScrollingBanner from "@/components/scrolling-banner";
import Marquee from "@/components/ui/marquee";
import { createTranslation } from "@/i18n/server";
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
      name: "2SOMEone",
      description: "Professional live streaming platform for content creators and streamers",
      href: "https://2some.one",
      icon: Users,
      features: ["Live Streaming", "Content Creation", "Community Management"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "2SOMEren",
      description: "Advanced live streaming infrastructure and service platform",
      href: "https://2some.ren",
      icon: Globe,
      features: ["Infrastructure", "Service Platform", "High Performance"],
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "MultiPost",
      description: "Multi-platform operations tool for social media management",
      href: "https://multipost.app",
      icon: Zap,
      features: ["Multi-Platform", "Social Media", "Operations"],
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Voite",
      description: "Voice and audio communication platform for creators",
      href: "https://voite.2some.one",
      icon: Shield,
      features: ["Voice Communication", "Audio Platform", "Creator Tools"],
      color: "from-orange-500 to-red-500",
    },
    {
      name: "FameDayOne",
      description: "Personal branding and fame building platform",
      href: "https://fameday.one",
      icon: BookOpen,
      features: ["Personal Branding", "Fame Building", "Growth Platform"],
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="relative w-full bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="mb-3 font-bold text-3xl tracking-tight">Our Products</h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground">
            Discover our comprehensive suite of tools and platforms designed to empower creators, streamers, and
            businesses in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <Card
              key={product.name}
              className="group cursor-pointer border shadow-none transition-all duration-300 hover:scale-[1.02]"
              as="a"
              href={product.href}
              target="_blank"
              rel="noopener noreferrer">
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
              <CardBody className="pt-0">
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
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-muted/50 px-6 py-3">
            <Globe className="size-5 text-muted-foreground" />
            <span className="text-muted-foreground text-sm">
              All products are designed and maintained by the LEAPERone team
            </span>
          </div>
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
      role: "Bilibili Streamer",
      content:
        "BubbleBox's convenient setup simplified managing audience submissions during my livestreams. As a Bilibili streamer, I often receive tons of comments and stories, which used to be time-consuming to sort manually. With BubbleBox, I can easily categorize and share submissions one by one during the stream, and viewers say it's boosted their engagement—they're excited to keep participating.",
    },
    {
      id: 2,
      avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Mike",
      name: "Mike Zhang",
      role: "Content Creator",
      content:
        "As a host of storytelling content, I often felt overwhelmed by sorting audience submissions individually. BubbleBox's collection and organization tools allow me to quickly categorize posts, making it easy to present each story during streams. Viewers are excited to submit content freely, which has greatly improved the interactivity and involvement in my show.",
    },
    {
      id: 3,
      avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Emily",
      name: "Emily Wang",
      role: "Interactive Streamer",
      content:
        "BubbleBox's anonymous submission feature has made my livestreams more inclusive and engaging. My audience is diverse, and many viewers want to share personal stories while keeping their privacy. Since using BubbleBox, audience engagement has increased significantly, with more posts than ever, and the show has developed a warmer, more connected atmosphere.",
    },
    {
      id: 4,
      avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=David",
      name: "David Liu",
      role: "Live Host",
      content:
        "As an interactive host, I encourage my audience to express themselves during streams. Previously, organizing submissions manually was tedious, but BubbleBox's auto-categorization feature saves me tons of time. What surprised me is how well the display is optimized for OBS—large, clear fonts make viewers feel valued, and the quality of my content has noticeably improved.",
    },
    {
      id: 5,
      avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Sophie",
      name: "Sophie Lin",
      role: "Community Manager",
      content:
        "Receiving audience submissions is part of my show, and BubbleBox's efficient design is exactly what I needed. Both the categorization and display are super convenient, letting me focus on presenting content without being bogged down by managing posts. Viewers love the seamless interaction, saying it makes them feel involved, and the entire atmosphere has become more vibrant.",
    },
    {
      id: 6,
      avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Alex",
      name: "Alex Wu",
      role: "Content Creator",
      content:
        "Every submission I receive is a form of connection with my viewers, and manual sorting wasn't working. BubbleBox has automated the sorting and display process, keeping my streams smooth and well-paced. Viewers are thrilled by the real-time interaction and have started participating even more, creating a lively, welcoming stream environment.",
    },
    {
      id: 7,
      avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Rachel",
      name: "Rachel Chen",
      role: "Live Streamer",
      content:
        "BubbleBox has brought a more positive and interactive vibe to my channel. Viewers enjoy the anonymous submission feature and are more comfortable sharing. Every submission gets categorized and displayed quickly, so everyone feels heard. This easy involvement format has brought in tons of great feedback, with audience engagement rising significantly.",
    },
    {
      id: 8,
      avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Kevin",
      name: "Kevin Zhao",
      role: "Interactive Host",
      content:
        "Managing viewer submissions has always been challenging, but BubbleBox has solved this for me. Its straightforward interface allows quick categorization, saving me lots of time. Viewers find the submission link easy to use, and I'm able to interact instantly with everyone during the stream, leading to much higher viewer activity than before.",
    },
    {
      id: 9,
      avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Lisa",
      name: "Lisa Tang",
      role: "Community Host",
      content:
        "Each stream requires handling various types of viewer submissions, and BubbleBox has provided me with a structured way to manage them. Using its collection and categorization features, I can efficiently organize viewer content, keeping the stream interactive and smooth. The audience loves the interaction, not only improving satisfaction but also bringing in more participants.",
    },
    {
      id: 10,
      avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Tom",
      name: "Tom Yang",
      role: "Live Broadcaster",
      content:
        "I have a high level of audience interaction, and before, I had to manually collect and organize submissions, sometimes missing some. BubbleBox's submission collection and auto-categorization have made things much smoother, and viewers are enjoying the more structured experience. Submissions are clearly displayed on the stream screen, and people say it makes them feel part of the action, bringing even more energy to the channel.",
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
            <div key={item.id} className="mx-4 w-[350px] rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <Avatar src={item.avatar} name={item.name} className="size-12" />
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

import HomePageHeader from '@/components/HomePage/Header';
import FooterWithColumns from '@/components/HomePage/FooterWithColumns';
import HeroSection from '@/components/animata/hero/hero-section';
import ScrollingBanner from '@/components/scrolling-banner';
import FlipCard from '@/components/animata/card/flip-card';
import Marquee from '@/components/ui/marquee';
import { Avatar } from '@nextui-org/react';
import { createTranslation } from '@/i18n/server';

export default async function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <HomePageHeader />
      <main className="grow">
        <HeroSection className="h-[65dvh]" />
        <AvailableOnPlatforms />
        <UserRecommendations />
      </main>
      <FooterWithColumns />
    </div>
  );
}

const AvailableOnPlatforms = async () => {
  const { t } = await createTranslation('home');

  const PLATFORMS = [
    { key: 'youtube', name: 'YouTube', followers: '12M', icon: 'logos:youtube-icon' },
    { key: 'bilibili', name: 'Bilibili', followers: '50M', icon: 'simple-icons:bilibili' },
    { key: 'tiktok', name: 'TikTok', followers: '80M', icon: 'logos:tiktok-icon' },
    { key: 'instagram', name: 'Instagram', followers: '10M', icon: 'logos:instagram-icon' },
    { key: 'twitch', name: 'Twitch', followers: '100K', icon: 'logos:twitch' },
    { key: 'telegram', name: 'Telegram', followers: '100K', icon: 'logos:telegram' },
    { key: 'twitter', name: 'Twitter', followers: '100K', icon: 'lucide:twitter' },
  ] as const;

  return (
    <section className="relative w-full bg-background py-8">
      <div className="mx-auto max-w-7xl px-6 py-2 sm:py-4 lg:px-4">
        <div className="mb-4 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight">{t('hero.title')}</h2>
        </div>
        <ScrollingBanner
          shouldPauseOnHover
          duration={30}
          gap="80px"
          className="py-8">
          {[...PLATFORMS, ...PLATFORMS].map(({ key, name, followers, icon }, index) => (
            <FlipCard
              key={`${key}-${index}`}
              className="size-56"
              icon={icon}
              title={name}
              subtitle={t('platforms.followers', { followers })}
              description={t('platforms.connect', { followers, platform: name })}
            />
          ))}
        </ScrollingBanner>
      </div>
    </section>
  );
};

const UserRecommendations = async () => {
  const { t } = await createTranslation('home');

  const RECOMMENDATIONS = [
    {
      id: 1,
      avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Sarah',
      name: 'Sarah',
      role: 'Bilibili Streamer',
      content:
        "BubbleBox's convenient setup simplified managing audience submissions during my livestreams. As a Bilibili streamer, I often receive tons of comments and stories, which used to be time-consuming to sort manually. With BubbleBox, I can easily categorize and share submissions one by one during the stream, and viewers say it's boosted their engagement—they're excited to keep participating.",
    },
    {
      id: 2,
      avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Mike',
      name: 'Mike Zhang',
      role: 'Content Creator',
      content:
        "As a host of storytelling content, I often felt overwhelmed by sorting audience submissions individually. BubbleBox's collection and organization tools allow me to quickly categorize posts, making it easy to present each story during streams. Viewers are excited to submit content freely, which has greatly improved the interactivity and involvement in my show.",
    },
    {
      id: 3,
      avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Emily',
      name: 'Emily Wang',
      role: 'Interactive Streamer',
      content:
        "BubbleBox's anonymous submission feature has made my livestreams more inclusive and engaging. My audience is diverse, and many viewers want to share personal stories while keeping their privacy. Since using BubbleBox, audience engagement has increased significantly, with more posts than ever, and the show has developed a warmer, more connected atmosphere.",
    },
    {
      id: 4,
      avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=David',
      name: 'David Liu',
      role: 'Live Host',
      content:
        "As an interactive host, I encourage my audience to express themselves during streams. Previously, organizing submissions manually was tedious, but BubbleBox's auto-categorization feature saves me tons of time. What surprised me is how well the display is optimized for OBS—large, clear fonts make viewers feel valued, and the quality of my content has noticeably improved.",
    },
    {
      id: 5,
      avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Sophie',
      name: 'Sophie Lin',
      role: 'Community Manager',
      content:
        "Receiving audience submissions is part of my show, and BubbleBox's efficient design is exactly what I needed. Both the categorization and display are super convenient, letting me focus on presenting content without being bogged down by managing posts. Viewers love the seamless interaction, saying it makes them feel involved, and the entire atmosphere has become more vibrant.",
    },
    {
      id: 6,
      avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Alex',
      name: 'Alex Wu',
      role: 'Content Creator',
      content:
        "Every submission I receive is a form of connection with my viewers, and manual sorting wasn't working. BubbleBox has automated the sorting and display process, keeping my streams smooth and well-paced. Viewers are thrilled by the real-time interaction and have started participating even more, creating a lively, welcoming stream environment.",
    },
    {
      id: 7,
      avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Rachel',
      name: 'Rachel Chen',
      role: 'Live Streamer',
      content:
        'BubbleBox has brought a more positive and interactive vibe to my channel. Viewers enjoy the anonymous submission feature and are more comfortable sharing. Every submission gets categorized and displayed quickly, so everyone feels heard. This easy involvement format has brought in tons of great feedback, with audience engagement rising significantly.',
    },
    {
      id: 8,
      avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Kevin',
      name: 'Kevin Zhao',
      role: 'Interactive Host',
      content:
        "Managing viewer submissions has always been challenging, but BubbleBox has solved this for me. Its straightforward interface allows quick categorization, saving me lots of time. Viewers find the submission link easy to use, and I'm able to interact instantly with everyone during the stream, leading to much higher viewer activity than before.",
    },
    {
      id: 9,
      avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Lisa',
      name: 'Lisa Tang',
      role: 'Community Host',
      content:
        'Each stream requires handling various types of viewer submissions, and BubbleBox has provided me with a structured way to manage them. Using its collection and categorization features, I can efficiently organize viewer content, keeping the stream interactive and smooth. The audience loves the interaction, not only improving satisfaction but also bringing in more participants.',
    },
    {
      id: 10,
      avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Tom',
      name: 'Tom Yang',
      role: 'Live Broadcaster',
      content:
        "I have a high level of audience interaction, and before, I had to manually collect and organize submissions, sometimes missing some. BubbleBox's submission collection and auto-categorization have made things much smoother, and viewers are enjoying the more structured experience. Submissions are clearly displayed on the stream screen, and people say it makes them feel part of the action, bringing even more energy to the channel.",
    },
  ];

  return (
    <section className="relative w-full bg-background/50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight">{t('hero.subtitle')}</h2>
        </div>

        <Marquee
          className="py-8"
          pauseOnHover>
          {RECOMMENDATIONS.map((item) => (
            <div
              key={item.id}
              className="mx-4 w-[350px] rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <Avatar
                  src={item.avatar}
                  name={item.name}
                  className="size-12"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
              <p className="mt-4 line-clamp-4 text-sm text-muted-foreground">{item.content}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

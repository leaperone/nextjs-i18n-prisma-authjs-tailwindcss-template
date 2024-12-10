import React from 'react';
import { cn } from '@/lib/utils';

interface ItemProps {
  emoji: string;
  position: string;
}

interface FeatureProps {
  text: string;
  emojis: ItemProps[];
  hoverColor: string;
}

const HeroSectionTextHover: React.FC<{ className?: string }> = ({ className }) => {
  const profileFeature: FeatureProps = {
    text: 'Profile',
    hoverColor: 'text-sky-400',
    emojis: [
      {
        emoji: '👤',
        position: '-left-20 -top-3 group-hover:-rotate-[20deg] group-hover:-translate-y-12 md:-left-28 md:-top-2',
      },
      {
        emoji: '📝',
        position:
          '-left-[72px] top-0 group-hover:-rotate-[30deg] group-hover:-translate-x-10 group-hover:-translate-y-8 md:-left-[135px] md:-top-2',
      },
      {
        emoji: '✨',
        position: '-left-12 -top-8 group-hover:rotate-[25deg] group-hover:-translate-y-16 group-hover:translate-x-6',
      },
    ],
  };

  const newsletterFeature: FeatureProps = {
    text: 'Newsletter',
    hoverColor: 'text-purple-400',
    emojis: [
      {
        emoji: '📨',
        position: '-left-24 -top-6 group-hover:rotate-[15deg] group-hover:-translate-y-10 group-hover:-translate-x-8',
      },
      {
        emoji: '💌',
        position:
          'left-[105px] -top-4 group-hover:rotate-[35deg] group-hover:translate-x-16 group-hover:-translate-y-12',
      },
      {
        emoji: '✉️',
        position: '-left-8 -top-12 group-hover:-rotate-[25deg] group-hover:-translate-y-16 group-hover:-translate-x-4',
      },
      {
        emoji: '📢',
        position:
          'left-[35px] -top-4 group-hover:rotate-[35deg] group-hover:translate-x-16 group-hover:-translate-y-12',
      },
    ],
  };

  const askBoxFeature: FeatureProps = {
    text: 'Ask-box',
    hoverColor: 'text-orange-400',
    emojis: [
      {
        emoji: '❓',
        position: '-left-[100px] -top-7 group-hover:-rotate-[30deg] group-hover:-translate-y-14 md:-left-40 md:-top-16',
      },
      {
        emoji: '💭',
        position:
          'left-32 -top-12 group-hover:rotate-[40deg] group-hover:-translate-y-10 group-hover:translate-x-8 md:left-[200px]',
      },
      {
        emoji: '💡',
        position: '-left-16 -top-2 group-hover:-rotate-[20deg] group-hover:-translate-y-20 group-hover:-translate-x-6',
      },
      {
        emoji: '📥',
        position:
          'left-16 -top-12 group-hover:rotate-[30deg] group-hover:translate-x-8 group-hover:-translate-y-10 md:left-[110px]',
      },
    ],
  };

  const features = [profileFeature, newsletterFeature, askBoxFeature];

  return (
    <div className={cn('storybook-fix pt-4 relative min-h-[60px] w-full rounded-2xl', className)}>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 p-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
          {features.map((feature, featureIndex) => (
            <div
              key={featureIndex}
              className="group relative flex items-center">
              <span
                className={cn('text-foreground transition-colors duration-300', `group-hover:${feature.hoverColor}`)}>
                {feature.text}
              </span>
              <div className="absolute inset-0 cursor-pointer opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                {feature.emojis.map((item, index) => (
                  <span
                    key={index}
                    className={cn(
                      'pointer-events-none absolute transform text-2xl transition-all duration-500 group-hover:scale-110 sm:text-3xl md:text-4xl lg:text-5xl',
                      item.position,
                    )}>
                    {item.emoji}
                  </span>
                ))}
              </div>
              {featureIndex < features.length - 1 && (
                <span className="ml-3 text-gray-400">{featureIndex === features.length - 2 ? 'and' : ','}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSectionTextHover;

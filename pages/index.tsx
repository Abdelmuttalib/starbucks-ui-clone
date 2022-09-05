import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import { Layout } from '../src';
import cn from 'classnames';
import { LinkT } from '../src/types.common';

const Home: NextPage = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR('', fetcher);
  return (
    <Layout>
      {/* Banners Container */}
      <div className="w-full flex flex-col gap-7 md:gap-8 justify-center items-center md:max-w-8xl">
        <Banner
          title="Fall at your fingertips"
          description="Ordering your fall favorites is a snap with the app. Join Starbucks® Rewards and tap into fall."
          link={{ href: '#', label: 'Join now' }}
          image={{
            src: 'coffee-order.jpg',
            alt: 'order your coffee online',
          }}
          size="mini"
          reverse
        />
        <Banner
          title="Welcome home, pumpkin"
          description=" Fall favorites return with the blissful Pumpkin Spice Latte and
            smooth Pumpkin Cream Cold Brew."
          link={{ href: '#', label: 'Learn More' }}
          image={{
            src: 'cold-hot-coffee.jpg',
            alt: 'hot and cold coffee',
          }}
        />
        <Banner
          title="Layers of baked apple yum"
          description="Try the Apple Crisp Oatmilk Macchiato, now nondairy and with Starbucks® Blonde Espresso."
          link={{ href: '#', label: 'Learn More' }}
          image={{
            src: 'apple-yam-coffee.jpg',
            alt: 'backed apple yam',
          }}
          reverse
        />
        <Banner
          title="Picks of the patch"
          description="Choose a comforting classic: Pumpkin Cream Cheese Muffin, Pumpkin & Pepita Loaf or Pumpkin Scone."
          link={{ href: '#', label: 'Learn More' }}
          image={{
            src: 'desserts.webp',
            alt: 'Muffins and more',
          }}
        />
        <Banner
          title="The art of the roast"
          description="With a new roast spectrum front and center on our coffee bags, it’s easier than ever to find a taste you love."
          link={{ href: '#', label: 'Order now' }}
          image={{
            src: 'coffee-bags.webp',
            alt: 'fresh Coffee bags',
          }}
          reverse
        />
      </div>
    </Layout>
  );
};

export default Home;

type LandingBannerProps = {
  title: string;
  description: string;
  link: LinkT;
  image: { src: string; alt: string };
  reverse?: boolean;
  size?: 'default' | 'mini';
};

const Banner = ({
  title,
  description,
  link,
  image,
  reverse,
  size = 'default',
}: LandingBannerProps) => {
  const { href, label } = link;
  const { src, alt } = image;
  const miniSize: boolean = size === 'mini';
  return (
    <div
      className={cn(
        'w-full bg-primary h-[48rem] md:h-[28rem] lg:h-[32rem] xl:h-[38rem] flex flex-col-reverse md:flex-row',
        {
          'h-full max-h-[36rem] md:max-h-[21rem] lg:max-h-[24rem] xl:bg-red-300 bg-accent':
            miniSize,
          'flex-col md:flex-row-reverse': reverse,
        }
      )}
    >
      <div
        className={cn(
          'w-full h-[70%] md:h-full flex flex-col gap-5 justify-center items-center',
          {
            'h-[60%]': miniSize,
          }
        )}
      >
        <div
          className={cn(
            'text-white max-w-[93%] md:max-w-[90%] lg:max-w-[70%] text-center flex flex-col gap-8 items-center',
            {
              'text-secondary': miniSize,
            }
          )}
        >
          <h2
            className={cn('font-semibold', {
              'text-3xl md:text-3xl lg:text-6xl tracking-wider': !miniSize,
              'text-2xl md:text-3xl tracking-normal': miniSize,
            })}
          >
            {title}
          </h2>
          <p
            className={cn('font-normal', {
              'text-2xl md:text-2xl lg:text-3xl': !miniSize,
              'text-base md:text-xl md:font-medium': miniSize,
            })}
          >
            {description}
          </p>
          <Link href={href}>
            <a
              className={cn(
                'text-white rounded-full px-4 py-1 border border-white font-semibold w-fit outline-none focus:outline-none bg-primary hover:bg-primary-500 ease-linear duration-100 text-base capitalize',
                {
                  'bg-transparent text-secondary border-secondary hover:bg-opacity-10 text-sm md:text-base md:py-1':
                    miniSize,
                }
              )}
            >
              {label}
            </a>
          </Link>
        </div>
      </div>
      <div className="w-full h-full relative">
        <Image
          src={`/images/home-page/${src}`}
          alt={alt || title}
          // width={500}
          // height={440}
          layout="fill"
          className="object-cover"
        />
      </div>
    </div>
  );
};

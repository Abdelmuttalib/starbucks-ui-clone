import type { NextPage } from 'next';
import useSWR from 'swr';
import { Layout } from '../src/layout';
import { Banner } from '../src/components/ui';

const Home: NextPage = () => {
  return (
    <Layout>
      {/* Banners Container */}
      <div className="w-full flex flex-col gap-7 md:gap-8 justify-center items-center md:max-w-8xl">
        <Banner
          title="Fall at your fingertips"
          description="Ordering your fall favorites is a snap with the app. Join Starbucks® Rewards and tap into fall."
          link={{ href: '', label: 'Join now' }}
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
          link={{ href: '', label: 'Learn More' }}
          image={{
            src: 'cold-hot-coffee.jpg',
            alt: 'hot and cold coffee',
          }}
        />
        <Banner
          title="Layers of baked apple yum"
          description="Try the Apple Crisp Oatmilk Macchiato, now nondairy and with Starbucks® Blonde Espresso."
          link={{ href: '', label: 'Learn More' }}
          image={{
            src: 'apple-yam-coffee.jpg',
            alt: 'backed apple yam',
          }}
          reverse
        />
        <Banner
          title="Picks of the patch"
          description="Choose a comforting classic: Pumpkin Cream Cheese Muffin, Pumpkin & Pepita Loaf or Pumpkin Scone."
          link={{ href: '', label: 'Learn More' }}
          image={{
            src: 'desserts.webp',
            alt: 'Muffins and more',
          }}
        />
        <Banner
          title="The art of the roast"
          description="With a new roast spectrum front and center on our coffee bags, it’s easier than ever to find a taste you love."
          link={{ href: '', label: 'Order now' }}
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

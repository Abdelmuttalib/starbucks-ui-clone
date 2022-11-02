import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { LinkT } from '../../../types.common';

type BannerProps = {
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
}: BannerProps) => {
  // destructure nested props
  const { href, label } = link;
  const { src, alt } = image;
  const miniSize: boolean = size === 'mini';
  return (
    <div
      className={cn(
        'w-full bg-primary h-[48rem] md:h-[28rem] lg:h-[32rem] xl:h-[38rem] flex flex-col-reverse md:flex-row',
        {
          'h-[36rem] md:h-[21rem] lg:h-[24rem] xl:h-[24rem] bg-accent':
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

export default Banner;

import Link from 'next/link';
import cn from 'classnames';
import FooterAccordion from './FooterAccordion';
import { bottomFooterLinks, footerNavLinks } from './footer-links-data';

const Footer = () => {
  return (
    <footer className="w-full h-auto min-h-[40rem] flex justify-center items-center pt-6 border-t-2 border-gray-200 lg:px-10">
      <nav className="flex flex-col w-full max-w-8xl">
        {/* Accordion Footer Nav, show only on mobile */}
        <div className="block lg:hidden w-full">
          {footerNavLinks.map(({ title, links }) => (
            <FooterAccordion title={title} links={links} />
          ))}
        </div>

        {/* Full Footer Nav, show only on desktop */}
        <div className="hidden lg:block">
          <div className="flex gap-4 2xl:gap-5 w-full pb-16 border-b-2 border-gray-200">
            {footerNavLinks.map(({ title, links }) => (
              <div key={title} className="flex flex-col gap-9">
                <h5 className="font-normal text-lg">{title}</h5>
                <div className="flex flex-col gap-6 w-52">
                  {links.map(({ href, label }) => (
                    <Link href={href}>
                      <a className="text-gray-500 tracking-wide ease-linear duration-100 hover:text-black">
                        {label}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* Social Media Links */}
          <div className="py-10 w-full h-auto min-h-[10rem] flex flex-col gap-8 px-5">
            <div className="flex gap-5">
              {[1, 2, 3, 4, 5, 6].map((i: number) => (
                <div className="rounded-full hover:ring-8 hover:ring-gray-200 cursor-pointer ease-linear duration-200 flex justify-center items-center">
                  <div className="w-8 h-8 bg-black rounded-full"></div>
                </div>
              ))}
            </div>

            {/* Bottom Links */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-5">
              {bottomFooterLinks.map(({ href, label }, indx) => (
                <>
                  <Link href={href}>
                    <a className={cn('text-sm sm:text-base hover:underline')}>
                      {label}
                    </a>
                  </Link>

                  {/* Divider */}
                  {indx !== bottomFooterLinks.length - 1 && (
                    <div className="hidden lg:inline-block h-4 w-[2px] bg-gray-500 mx-2"></div>
                  )}
                </>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex items-center text-gray-500 text-sm sm:-mt-3">
              ©{' '}
              <p className="ml-0.5">
                {new Date().getFullYear()}{' '}
                <span className="ml-0.5">
                  {' '}
                  Starbucks Coffee Company.{' '}
                  <span className="text-sm sm:text-base">
                    All rights reserved.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

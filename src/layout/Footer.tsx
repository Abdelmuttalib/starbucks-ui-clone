import Link from 'next/link';
import React from 'react';
import cn from 'classnames';

const footerNavLinks = [
  {
    title: 'About Us',
    links: [
      { href: '#', label: 'Our Company' },
      { href: '#', label: 'Our Coffee' },
      { href: '#', label: 'Stories and News' },
      { href: '#', label: 'Starbucks Archive' },
      { href: '#', label: 'Investor Relations' },
      { href: '#', label: 'Customer Service' },
    ],
  },
  {
    title: 'Careers',
    links: [
      { href: '#', label: 'Culture and Values' },
      { href: '#', label: 'Inclusion, Diversity, and Equity' },
      { href: '#', label: 'College Achievement Plan' },
      { href: '#', label: 'Alumni Community' },
      { href: '#', label: 'U.S. Careers' },
      { href: '#', label: 'International Careers' },
    ],
  },
  {
    title: 'Social Impact',
    links: [
      { href: '#', label: 'People' },
      { href: '#', label: 'Planet' },
      { href: '#', label: 'Environmental and Social Impact Reporting' },
    ],
  },
  {
    title: 'For Business Partners',
    links: [
      { href: '#', label: 'Landlord Support Center' },
      { href: '#', label: 'Suppliers' },
      { href: '#', label: 'Corporate Gift Card Sales' },
      { href: '#', label: 'Office and Foodservice Coffee' },
    ],
  },
  {
    title: 'Order and Pickup',
    links: [
      { href: '#', label: 'Order on the App' },
      { href: '#', label: 'Order on the Web' },
      { href: '#', label: 'Delivery' },
      { href: '#', label: 'Order and Pickup Options' },
      { href: '#', label: 'Explore and Find Coffee for Home' },
    ],
  },
];

const bottomFooterLinks = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Use' },
  { href: '#', label: 'CA Supply Chain Act' },
  { href: '#', label: 'Cookie Preferences' },
];

const Footer = () => {
  return (
    <footer className="w-full h-auto min-h-[40rem] flex justify-center pt-8 border-t-2 border-gray-200">
      <nav className="flex flex-col">
        <div className="flex gap-4 w-full pb-16 border-b-2 border-gray-200">
          {footerNavLinks.map(({ title, links }) => (
            <div key={title} className="flex flex-col gap-8">
              <h5 className="font-normal text-lg">{title}</h5>
              <div className="flex flex-col gap-6 w-56 md:w-64">
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

        {/* Social Media Links */}
        <div className="py-10 w-full h-auto min-h-[10rem] flex flex-col gap-8">
          <div className="flex gap-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div className="w-9 h-9 rounded-full bg-black cursor-pointer hover:bg-opacity-80 ease-linear duration-100 flex justify-center items-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            ))}
          </div>

          {/* Bottom Links */}
          <div className="flex items-center">
            {bottomFooterLinks.map(({ href, label }, indx) => (
              <>
                <Link href={href}>
                  <a className={cn('font-medium hover:underline')}>{label}</a>
                </Link>

                {/* Divider */}
                {indx !== bottomFooterLinks.length - 1 && (
                  <div className="inline-block h-4 w-[2px] bg-gray-500 mx-4"></div>
                )}
              </>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center text-gray-500 text-sm -mt-2">
            ©{' '}
            <p className="ml-0.5">
              {new Date().getFullYear()}{' '}
              <span className="ml-0.5">
                {' '}
                Starbucks Coffee Company. All rights reserved.
              </span>
            </p>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

{
  /* <footer className="w-full h-20 flex justify-center items-center">
©{' '}
<p className="ml-0.5 font-dm-sans">
  {new Date().getFullYear()}{' '}
  <span className="ml-0.5">Abdelmuttalib Ahmed</span>
</p>
</footer> */
}

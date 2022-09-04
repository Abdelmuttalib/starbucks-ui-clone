import Link from 'next/link';
import React from 'react';
import { MapPinIcon } from '@heroicons/react/20/solid';

type NavLinkT = {
  href: string;
  label: string;
};

const links: NavLinkT[] = [
  { href: '#', label: 'Menu' },
  { href: '#', label: 'Rewards' },
  { href: '#', label: 'Gift Cards' },
];

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full h-28 shadow">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between h-full">
        {/* <h3 className='flex items-center text-xl font-medium'>Abdelmuttalib Ahmed</h3> */}

        {/* Left side nav */}
        <div className="flex items-center gap-10">
          {/* logo */}
          <div className="w-14 h-14 bg-primary rounded-full"></div>
          <ul className="flex gap-8">
            {links.map(({ href, label }: NavLinkT, index) => (
              <li key={index}>
                <Link href={href}>
                  <a className="uppercase text-sm font-semibold tracking-[0.10rem] hover:text-primary">
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Right side nav */}
        <div className="flex items-center gap-10">
          <div>
            <Link href="#">
              <a className="flex items-center gap-2 hover:text-primary">
                <MapPinIcon className="w-6" />
                <p className="text-sm font-medium">Find a store</p>
              </a>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link href="#">
              <a className="rounded-full text-sm border border-black text-black px-4 py-1.5 tracking-wide font-medium hover:bg-gray-100 ease-linear duration-100">
                Sign in
              </a>
            </Link>
            <Link href="#">
              <a className="rounded-full text-sm border border-black text-white bg-black px-4 py-1.5 tracking-wide font-medium hover:bg-opacity-80 ease-linear duration-100">
                Join now
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

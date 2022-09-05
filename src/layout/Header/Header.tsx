import Link from 'next/link';
import React from 'react';
import { MapPinIcon } from '@heroicons/react/20/solid';
import { LinkT } from '../../types.common';

const links: LinkT[] = [
  { href: '#', label: 'Menu' },
  { href: '#', label: 'Rewards' },
  { href: '#', label: 'Gift Cards' },
];

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full h-20 lg:h-[6.5rem] shadow">
      <div className="w-full h-full flex max-w-[1710px] mx-auto">
        {/* logo, Desktop */}
        {/* Left Logo with Placeholder on Large Desktop */}
        <div className="w-full max-w-[125px] items-center justify-end hidden 3xl:flex pr-9">
          <div className="w-[3.2rem] h-[3.2rem] bg-primary rounded-full"></div>
        </div>
        <div className="w-full max-w-8xl mx-auto py-4 flex items-center justify-between h-full px-6 xl:px-10 3xl:px-0">
          {/* Left side nav */}
          <div className="flex items-center gap-6 lg:gap-10">
            {/* logo, Mobile */}
            <div className="w-14 h-14 rounded-full block 3xl:hidden"></div>
            <ul className="flex gap-8">
              {links.map(({ href, label }: LinkT, index) => (
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

        {/* Right PLaceholder on Large Desktop */}
        <div className="w-full max-w-[125px] hidden 2xl:flex"></div>
      </div>
    </header>
  );
};

export default Header;

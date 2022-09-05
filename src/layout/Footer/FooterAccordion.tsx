import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import cn from 'classnames';
import Link from 'next/link';
import classNames from 'classnames';
import { LinkT } from '../../types.common';

type AccordionProps = {
  title: string;
  links: LinkT[];
};

const FooterAccordion = ({ title, links }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h4>
        <button
          className="relative flex items-center w-full text-lg md:text-xl text-gray-800 text-left border-0 rounded-none transition focus:outline-none justify-between h-full px-5 py-6"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <p>{title}</p>
          <ChevronDownIcon
            className={cn('w-7 ease-linear duration-200', {
              'rotate-180': open,
            })}
          />
        </button>
      </h4>
      {open && (
        <div className="flex flex-col gap-6 sm:gap-7 px-5 pt-1 pb-4">
          {links.map(({ href, label }) => (
            <Link href={href}>
              <a className="text-gray-600 text-sm md:text-base tracking-wide ease-linear duration-100 hover:text-black sm:text-base">
                {label}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FooterAccordion;

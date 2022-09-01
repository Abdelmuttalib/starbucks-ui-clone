import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import useSWR from 'swr'

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='w-full h-full bg-white text-black'>
      {/* Header/Nav */}
      <nav className='w-full h-20 max-w-4xl mx-auto px-6 sm:px-10 py-4 flex'>
        <h3 className='flex items-center text-3xl font-semibold'></h3>
      </nav>
      {/* Main Page Content */}
      <main className='h-auto w-full min-h- max-w-4xl mx-auto flex flex-col items-center py-40 flex-1 px-6 sm:px-10'>{children}</main>
      {/* Footer */}
      <footer className='w-full h-20 flex justify-center items-center'>© <p className='ml-0.5 font-dm-sans'>{new Date().getFullYear()} <span className='ml-0.5'>Abdelmuttalib Ahmed</span></p></footer>
    </div>
  );
};

export default Layout;

import React, { ReactNode } from 'react';
import Header from './Header'
import Footer from './Footer'

type Props = {
  children: ReactNode;
};


const Layout = ({ children }: Props) => {
  return (
    <div className='w-full h-full bg-white text-black'>
      {/* Header/Nav */}
      <Header />
      {/* Main Page Content */  }
      <main className='h-auto w-full min-h-screen max-w-screen-2xl mx-auto flex flex-col items-center py-40 flex-1 px-6 sm:px-10'>{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;

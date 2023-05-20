import React, { ReactNode } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="w-screen h-full bg-white text-black">
      {/* Header/Nav */}
      <Header />
      {/* Main Page Content */}
      <main className="h-auto w-full min-h-screen flex flex-col items-center py-8 md:py-10 flex-1">
        {children}
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;

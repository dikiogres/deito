import AOS from 'aos';
import React, { useEffect } from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div data-aos='fade-down' data-aos-duration='1000'>
        <Header />
      </div>
      {children}
      <div data-aos='fade-up' data-aos-duration='1000'>
        <Footer />
      </div>
    </>
  );
}

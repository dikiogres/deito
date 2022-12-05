import AOS from 'aos';
import React, { useEffect } from 'react';

import 'aos/dist/aos.css';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Hero from '@/container/Hero';
import Showcase from '@/container/home/Showcase';
import Waiting from '@/container/home/Waiting';

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <section className='relative overflow-hidden bg-slate-900'>
          <div data-aos='fade-down' data-aos-duration='1000'>
            <Hero />
          </div>
          <div data-aos='fade-up' data-aos-duration='1000'>
            <Waiting />
          </div>
          <div data-aos='fade-up' data-aos-duration='1000'>
            <Showcase />
          </div>
        </section>
      </main>
    </Layout>
  );
}

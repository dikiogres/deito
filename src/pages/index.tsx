import AOS from 'aos';
import React, { useEffect } from 'react';

import 'aos/dist/aos.css';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Hero from '@/container/Hero';
import Service from '@/container/home/Service';
import Showcase from '@/container/home/Showcase';
import Waiting from '@/container/home/Waiting';

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className='bg-slate-900'>
      <Layout>
        {/* <Seo templateTitle='Home' /> */}
        <Seo />
        <section className='overflow-hidde relative'>
          <div data-aos='fade-down' data-aos-duration='1000'>
            <Hero />
          </div>
          <div data-aos='fade-up' data-aos-duration='1000'>
            <Waiting />
          </div>
          <div data-aos='fade-up' data-aos-duration='1000'>
            <Service />
          </div>
          <div data-aos='fade-up' data-aos-duration='1000'>
            <Showcase />
          </div>
        </section>
      </Layout>
    </main>
  );
}

import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Hero from '@/container/home/Hero';

export default function HomePage() {
  const tags = [
    'Movie',
    'Emotional Support',
    'Karaoke',
    'Cosplay',
    'Aquarium',
    'Night Ride',
  ];

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <Hero />
        <section className='w-full bg-slate-900 py-14 text-white'>
          <div className='mx-auto max-w-6xl'>
            <p className='py-6 text-center text-xl'>
              100,000 Deits are waiting for you
            </p>
            <div className='grid grid-cols-3'>
              {tags.map((tag) => (
                <div
                  key={tag}
                  className='mx-6 mb-6 rounded-2xl bg-slate-800 px-6 py-3 text-left text-xl hover:bg-slate-700'
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

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
        <section className='bg-white font-poppins'>
          <div className='layout flex min-h-screen flex-col'>
            <section className="flex h-96 w-full flex-col items-start justify-center bg-slate-900 bg-[url('/images/hero.png')] bg-cover text-left text-white">
              <div className='mx-auto flex w-full max-w-6xl flex-col items-start justify-center'>
                <p className='text-1xl'>with Deito</p>
                <p className='text-5xl font-semibold'>Find your date</p>
                <button className='mt-4 rounded-2xl bg-pink-400 px-4 py-2 text-xl hover:bg-pink-500'>
                  Start Now
                </button>
              </div>
            </section>

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
          </div>
        </section>
      </main>
    </Layout>
  );
}

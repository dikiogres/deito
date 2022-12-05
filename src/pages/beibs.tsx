import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white font-poppins'>
          <div className='layout flex min-h-screen flex-col bg-slate-900'>
            <section className='mx-auto grid w-full max-w-6xl grid-cols-3 bg-slate-900 pt-8 pb-16 text-left text-white'>
              <div className='mx-8 mt-16 flex flex-col rounded-xl bg-slate-700 px-8'>
                <Image
                  className='-mt-8'
                  src='/images/power.png'
                  alt='profPic'
                  width={120}
                  height={120}
                />
                <p className='mt-2 text-2xl font-medium'>Neten</p>
                <div className='flex items-center'>
                  <Image
                    src='/images/star.png'
                    alt='star'
                    width={25}
                    height={20}
                  />
                  <p className='mx-2 text-2xl'>5.0</p>
                  <p className='text-sm text-slate-200'>(290)</p>
                </div>
                <div className='mt-2 flex'>
                  <div className='mr-2 rounded-md bg-slate-600 py-1 px-2'>
                    Weeb
                  </div>
                  <div className='rounded-md bg-slate-600 py-1 px-2'>
                    Pick Up
                  </div>
                </div>
                <p className='mt-3 text-slate-200'>
                  Can't wait to be your friend
                </p>

                <p className='mt-8 mb-8 justify-self-end text-xl font-semibold'>
                  Rp. 300,000
                </p>
              </div>
              <div className='mx-8 mt-16 flex flex-col rounded-xl bg-slate-700 px-8'>
                <Image
                  className='-mt-8'
                  src='/images/power.png'
                  alt='profPic'
                  width={120}
                  height={120}
                />
                <p className='mt-2 text-2xl font-medium'>Neten</p>
                <div className='flex items-center'>
                  <Image
                    src='/images/star.png'
                    alt='star'
                    width={25}
                    height={20}
                  />
                  <p className='mx-2 text-2xl'>5.0</p>
                  <p className='text-sm text-slate-200'>(290)</p>
                </div>
                <div className='mt-2 flex'>
                  <div className='mr-2 rounded-md bg-slate-600 py-1 px-2'>
                    Weeb
                  </div>
                  <div className='rounded-md bg-slate-600 py-1 px-2'>
                    Pick Up
                  </div>
                </div>
                <p className='mt-3 text-slate-200'>
                  Can't wait to be your friend
                </p>

                <p className='mt-8 mb-8 justify-self-end text-xl font-semibold'>
                  Rp. 300,000
                </p>
              </div>
              <div className='mx-8 mt-16 flex flex-col rounded-xl bg-slate-700 px-8'>
                <Image
                  className='-mt-8'
                  src='/images/power.png'
                  alt='profPic'
                  width={120}
                  height={120}
                />
                <p className='mt-2 text-2xl font-medium'>Neten</p>
                <div className='flex items-center'>
                  <Image
                    src='/images/star.png'
                    alt='star'
                    width={25}
                    height={20}
                  />
                  <p className='mx-2 text-2xl'>5.0</p>
                  <p className='text-sm text-slate-200'>(290)</p>
                </div>
                <div className='mt-2 flex'>
                  <div className='mr-2 rounded-md bg-slate-600 py-1 px-2'>
                    Weeb
                  </div>
                  <div className='rounded-md bg-slate-600 py-1 px-2'>
                    Pick Up
                  </div>
                </div>
                <p className='mt-3 text-slate-200'>
                  Can't wait to be your friend
                </p>

                <p className='mt-8 mb-8 justify-self-end text-xl font-semibold'>
                  Rp. 300,000
                </p>
              </div>
              <div className='mx-8 mt-16 flex flex-col rounded-xl bg-slate-700 px-8'>
                <Image
                  className='-mt-8'
                  src='/images/power.png'
                  alt='profPic'
                  width={120}
                  height={120}
                />
                <p className='mt-2 text-2xl font-medium'>Neten</p>
                <div className='flex items-center'>
                  <Image
                    src='/images/star.png'
                    alt='star'
                    width={25}
                    height={20}
                  />
                  <p className='mx-2 text-2xl'>5.0</p>
                  <p className='text-sm text-slate-200'>(290)</p>
                </div>
                <div className='mt-2 flex'>
                  <div className='mr-2 rounded-md bg-slate-600 py-1 px-2'>
                    Weeb
                  </div>
                  <div className='rounded-md bg-slate-600 py-1 px-2'>
                    Pick Up
                  </div>
                </div>
                <p className='mt-3 text-slate-200'>
                  Can't wait to be your friend
                </p>

                <p className='mt-8 mb-8 justify-self-end text-xl font-semibold'>
                  Rp. 300,000
                </p>
              </div>
            </section>
          </div>
        </section>
      </main>
    </Layout>
  );
}

import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

enum ProfilePages {
  Profile,
  Album,
  Reviews,
}

export default function HomePage() {
  const [activePage, setActivePage] = React.useState<ProfilePages>(
    ProfilePages.Profile
  );

  const addOns = [
    { name: 'Handholding', price: 50000 },
    { name: 'Hug', price: 50000 },
  ];

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <div className='layout flex-co flex min-h-screen bg-[#13131A] bg-gradient-to-b from-[#FF5A7D]/40 via-[#13131A] font-poppins'>
          <div className='mx-auto mt-12 w-full max-w-6xl text-white'>
            <section className='flex items-end'>
              <Image
                className='mr-8'
                src='/images/power.png'
                alt='profile picture'
                width={200}
                height={200}
              />
              <div>
                <p className='text-4xl font-semibold'>Neten</p>
                <div className='my-2 flex'>
                  <div className='mr-3 rounded-xl bg-[#221D2F] px-3 py-1'>
                    20
                  </div>
                  <div className='mr-3 rounded-xl bg-[#221D2F] px-3 py-1'>
                    Surabaya
                  </div>
                </div>
                <p className='my-2 text-slate-200'>Tags</p>
                <div className='my-2 flex'>
                  <div className='mr-3 rounded-xl bg-[#221D2F] px-3 py-1'>
                    Yandere
                  </div>
                  <div className='mr-3 rounded-xl bg-[#221D2F] px-3 py-1'>
                    Funi
                  </div>
                </div>
              </div>
            </section>

            <section className='my-8 flex'>
              <p
                onClick={() => setActivePage(ProfilePages.Profile)}
                className={`mr-8 cursor-pointer ${
                  activePage == ProfilePages.Profile &&
                  'border-b-4 border-b-pink-500 pb-2'
                } text-2xl font-semibold`}
              >
                Profile
              </p>
              <p
                onClick={() => setActivePage(ProfilePages.Album)}
                className={`mr-8 cursor-pointer ${
                  activePage == ProfilePages.Album &&
                  'border-b-4 border-b-pink-500 pb-2'
                } text-2xl font-semibold`}
              >
                Album
              </p>
              <p
                onClick={() => setActivePage(ProfilePages.Reviews)}
                className={`mr-8 cursor-pointer ${
                  activePage == ProfilePages.Reviews &&
                  'border-b-4 border-b-pink-500 pb-2'
                } text-2xl font-semibold`}
              >
                Reviews
              </p>
            </section>

            <section className='my-8 flex'>
              <div className='mr-8 flex w-80 flex-col'>
                <div className='mb-10 w-full rounded-xl bg-[#221D2F]'>
                  <p className='my-6 text-center text-xl'>Add-On Services</p>
                  {addOns.map((addOn, i) => (
                    <div key={i} className='mx-8 mb-4'>
                      <p>{addOn.name}</p>
                      <p className='text-sm text-slate-300'>{addOn.price}</p>
                    </div>
                  ))}
                </div>
                <div className='w-full rounded-xl bg-green-500 px-6 py-3 text-white'>
                  Chat on Whatsapp
                </div>
              </div>
              <div className='flex w-full flex-col'>
                <div className='mb-10 h-fit w-full rounded-xl bg-[#221D2F] px-8 py-10'>
                  <h2 className='mb-3'>Bio</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quos ea quasi modi id ipsum ut soluta nulla, sunt libero
                    sapiente eligendi nobis itaque corporis similique officiis
                    unde doloribus et eum nostrum beatae! Pariatur, quibusdam.
                  </p>
                </div>
                <div className='mb-10 h-fit w-full rounded-xl bg-[#221D2F] px-8 py-10'>
                  <h2 className='mb-3'>Album</h2>
                  <div className='flex overflow-x-clip'>
                    {Array.from(Array(10).keys()).map((i) => (
                      <Image
                        key={i}
                        className='mr-4'
                        src='/images/power.png'
                        alt='profile picture'
                        width={200}
                        height={200}
                      />
                    ))}
                  </div>
                </div>
                <div className='mb-10 h-fit w-full rounded-xl bg-[#221D2F] px-8 py-10'>
                  <h2 className='mb-3'>Reviews</h2>
                  <div className='flex items-center'>
                    <Image
                      src='/images/star.png'
                      alt='star'
                      width={25}
                      height={20}
                    />
                    <p className='mx-2 text-2xl'>5.0</p>
                    <p className='text-sm text-slate-200'>10 Reviews</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}

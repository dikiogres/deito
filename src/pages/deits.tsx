import { collection, onSnapshot } from 'firebase/firestore';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import db from '@/lib/firebase';

import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

import Deit from '@/interfaces/Deit.interface';

export default function HomePage() {
  const [deits, setDeits] = useState<Deit[]>();

  useEffect(() => {
    onSnapshot(collection(db, 'dater'), (deits) => {
      const deitsData = deits.docs.map((deit) => {
        return {
          id: deit.id,
          ...deit.data(),
        };
      });

      setDeits(deitsData as Deit[]);
    });
  }, []);

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white font-poppins'>
          <div className='layout flex min-h-screen flex-col bg-slate-900'>
            <section className='mx-auto grid w-full max-w-6xl grid-cols-3 bg-slate-900 pt-8 pb-16 text-left text-white'>
              {deits &&
                deits.map((deit) => (
                  <UnstyledLink key={deit.id} href={`/profile/${deit.id}`}>
                    <div className='mx-8 mt-16 flex cursor-pointer flex-col rounded-xl bg-slate-700 px-8 transition hover:-translate-y-2 hover:scale-105 hover:shadow-lg'>
                      <Image
                        className='-mt-8'
                        src='/images/power.png'
                        alt='profPic'
                        width={120}
                        height={120}
                      />
                      <p className='mt-2 text-2xl font-medium'>{deit.name}</p>
                      <div className='flex items-center'>
                        <Image
                          src='/images/star.png'
                          alt='star'
                          width={25}
                          height={20}
                        />
                        <p className='mx-2 text-2xl'>{deit.rating}</p>
                        <p className='text-sm text-slate-200'>({deit.rates})</p>
                      </div>
                      <div className='mt-2 flex'>
                        {deit.tags.map((tag) => (
                          <div
                            key={tag}
                            className='mr-2 rounded-md bg-slate-600 py-1 px-2'
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                      <p className='mt-3 text-slate-200'>{deit.desc}</p>

                      <p className='mt-8 mb-8 justify-self-end text-xl font-semibold'>
                        {deit.price}
                      </p>
                    </div>
                  </UnstyledLink>
                ))}
            </section>
          </div>
        </section>
      </main>
    </Layout>
  );
}

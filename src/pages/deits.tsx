import { collection, getDocs } from 'firebase/firestore';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import convertToIDR from '@/lib/converter';
import db from '@/lib/firebase';

import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

import Deit from '@/interfaces/Deit.interface';

export default function HomePage() {
  const [deits, setDeits] = useState<Deit[]>();
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [gender, setGender] = useState<string>('');

  const cities = [
    'Jakarta',
    'Surabaya',
    'Bekasi',
    'Bandung',
    'Medan',
    'Depok',
    'Tangerang',
    'Palembang',
    'Semarang',
    'Makassar',
    'Bandar Lampung',
    'Jember',
  ];

  useEffect(() => {
    getDeitsData();
  }, []);

  const getDeitsData = async () => {
    const deitsSnapshot = await getDocs(collection(db, 'dater'));

    const deitsData: Deit[] = [];
    deitsSnapshot.forEach((doc) => {
      const deit = {
        id: doc.id,
        ...doc.data(),
      };
      deitsData.push(deit);
    });

    setDeits(deitsData);
  };

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white font-poppins'>
          <div className='layout flex min-h-screen flex-col bg-slate-900'>
            <section className='mx-auto w-full max-w-6xl flex-1'>
              <select
                name=''
                id=''
                onChange={(e) => setSelectedCity(e.target.value)}
                className='self-justify-end ml-8 mt-16 rounded-xl bg-[#221D2F] px-4 py-2 text-xl text-white'
              >
                <option value=''></option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <select
                name=''
                id=''
                onChange={(e) => setGender(e.target.value)}
                className='self-justify-end ml-8 mt-16 rounded-xl bg-[#221D2F] px-4 py-2 text-xl text-white'
              >
                <option value=''></option>
                <option value='female'>♀️</option>
                <option value='male'>♂️</option>
              </select>
            </section>
            <section className='mx-auto grid w-full max-w-6xl grid-cols-3 bg-slate-900 pt-8 pb-16 text-left text-white'>
              {deits &&
                deits
                  .filter(
                    (deit) =>
                      deit.location == selectedCity || selectedCity == ''
                  )
                  .filter((deit) => deit.gender == gender || gender == '')
                  .map((deit) => (
                    <UnstyledLink key={deit} href={`/profile/${deit?.id}`}>
                      <div className='mx-8 mt-16 flex cursor-pointer flex-col rounded-xl bg-slate-700 px-8 transition hover:-translate-y-2 hover:scale-105 hover:shadow-lg'>
                        <Image
                          className='-mt-8'
                          src='/images/power.png'
                          alt='profPic'
                          width={120}
                          height={120}
                        />
                        <div className='flex items-end'>
                          <p className='mt-2 mr-4 text-2xl font-medium'>
                            {deit?.name}
                          </p>
                          {deit?.gender && (
                            <div
                              className={`mr-3 w-9 rounded-xl bg-[#221D2F] px-3 py-1 text-center font-black
                          ${
                            deit.gender == 'male'
                              ? 'text-blue-500'
                              : 'text-pink-500'
                          }`}
                            >
                              {deit.gender == 'male' ? '♂️' : '♀️'}
                            </div>
                          )}
                        </div>
                        <div className='flex items-center'>
                          <Image
                            src='/images/star.png'
                            alt='star'
                            width={25}
                            height={20}
                          />
                          <p className='mx-2 text-2xl'>{deit?.rating}</p>
                          <p className='text-sm text-slate-200'>
                            ({deit?.rates})
                          </p>
                        </div>
                        <div className='mt-2 flex'>
                          {deit?.tags?.slice(0, 1).map((tag) => (
                            <div
                              key={tag}
                              className='mr-2 rounded-md bg-slate-600 py-1 px-2'
                            >
                              {tag}
                            </div>
                          ))}
                        </div>
                        <p className='mt-3 text-slate-200'>{deit?.desc}</p>

                        <p className='mt-8 mb-8 justify-self-end text-xl font-semibold'>
                          {deit?.price && convertToIDR(deit.price)}
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

import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';

import convertToIDR from '@/lib/converter';
import db from '@/lib/firebase';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Deit from '@/interfaces/Deit.interface';
import Service from '@/interfaces/Service.interface';

enum ProfilePages {
  Profile,
  Album,
  Reviews,
}

export default function HomePage() {
  const router = useRouter();
  const { id } = router.query;

  const [deit, setDeit] = React.useState<Deit>();
  const [services, setServices] = React.useState<Service[]>();

  const getProfileData = async () => {
    const deitData = await getDoc(doc(db, `dater/${id}`));
    onSnapshot(collection(db, `dater/${id}/services`), (services) => {
      const servicesData = services.docs.map((service) => {
        return {
          id: service.id,
          ...service.data(),
        };
      });

      setServices(servicesData as Service[]);
    });

    setDeit({ id: deitData.id, ...deitData.data() } as Deit);
  };

  React.useEffect(() => {
    getProfileData();
  });

  const [activePage, setActivePage] = React.useState<ProfilePages>(
    ProfilePages.Profile
  );

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
                <p className='text-4xl font-semibold'>{deit?.name}</p>
                <p className='text-2xl font-medium'>
                  {deit?.price && convertToIDR(deit.price)}
                </p>
                <div className='my-2 flex'>
                  {deit?.gender && (
                    <div
                      className={`mr-3 rounded-xl bg-[#221D2F] px-3 py-1
                          ${
                            deit.gender == 'male'
                              ? 'text-blue-500'
                              : 'text-pink-500'
                          }`}
                    >
                      {deit.gender == 'male' ? '♂️' : '♀️'}
                    </div>
                  )}
                  <div className='mr-3 rounded-xl bg-[#221D2F] px-3 py-1'>
                    {deit?.age}
                  </div>
                  <div className='mr-3 rounded-xl bg-[#221D2F] px-3 py-1'>
                    {deit?.location}
                  </div>
                </div>
                <p className='my-2 text-slate-200'>Tags</p>
                <div className='my-2 flex'>
                  {deit?.tags?.map((tag) => (
                    <div
                      key={tag}
                      className='mr-3 rounded-xl bg-[#221D2F] px-3 py-1'
                    >
                      {tag}
                    </div>
                  ))}
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
                  {services?.map((service, i) => (
                    <div key={i} className='mx-8 mb-4'>
                      <p>{service.name}</p>
                      <p className='text-sm text-slate-300'>
                        {service.price && convertToIDR(service.price)}
                      </p>
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
                  <p>{deit?.bio}</p>
                </div>
                <div className='mb-10 h-fit w-full rounded-xl bg-[#221D2F] px-8 py-10'>
                  <h2 className='mb-3'>Album</h2>
                  <div className='flex overflow-x-clip'>
                    {deit?.album?.map((image, i) => (
                      <Image
                        key={i}
                        className='mr-4'
                        src={`/images/${image}`}
                        alt='profile picture'
                        width={150}
                        height={150}
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
                    <p className='mx-2 text-2xl'>{deit?.rating}</p>
                    <p className='text-sm text-slate-200'>
                      {deit?.rates || 0} Reviews
                    </p>
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

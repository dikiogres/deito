import React from 'react';

import ShowcaseCard from '@/components/cards/showcaseCard';

import { Profile } from '@/types/profile.type';

const data: Profile[] = [
  {
    id: 1,
    img: '/images/profile1.jpg',
    name: 'Makima',
    description: 'Menyayangimu setiap saat',
    rating: 4,
    reviews: 69,
    interest: '#kentu',
  },
  {
    id: 2,
    img: '/images/profile2.jpg',
    name: 'Rukia',
    description: 'Menyayangimu setiap saat',
    rating: 4,
    reviews: 69,
    interest: '#kentu',
  },
  {
    id: 3,
    img: '/images/profile3.jpg',
    name: 'Yumeko Jabami',
    description: 'Menyayangimu setiap saat',
    rating: 4,
    reviews: 69,
    interest: '#kentu',
  },
];

const Showcase = () => {
  return (
    <section className=' bg-slate-900'>
      <p className='py-6 text-center text-3xl font-bold text-white'>
        Top Deits
      </p>
      <div className='grid grid-cols-1 justify-items-center p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
        {data?.map((item) => (
          <ShowcaseCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Showcase;

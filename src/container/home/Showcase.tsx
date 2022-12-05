import React from 'react';

import { profileDataItems } from '@/data/profileItems.data';

import ShowcaseCard from '@/components/cards/showcaseCard';

const Showcase = () => {
  return (
    <section className=' bg-slate-900'>
      <p className='py-6 text-center text-3xl font-bold text-white'>
        Top Deits
      </p>
      <div className='grid grid-cols-1 justify-items-center p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
        {profileDataItems?.map((item) => (
          <ShowcaseCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Showcase;

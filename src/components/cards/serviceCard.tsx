import React from 'react';

import { Service } from '@/types/service.type';

const ServiceCard = ({ item }: { item: Service }) => {
  return (
    <div
      className='flex h-64 w-48 rounded-lg p-6 shadow-lg transition duration-500 hover:scale-110 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800'
      style={{
        backgroundImage: `${item.img}`,
      }}
    >
      <div className='flex items-end'>
        <a
          href='#'
          className='inline-flex items-center rounded-lg bg-[#00000075] px-3 py-2 text-center text-sm font-medium text-white'
        >
          {item.dater}+ Deits
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;

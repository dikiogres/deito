import React from 'react';

const ServiceCard = () => {
  return (
    <div
      className='flex h-64 w-48 rounded-lg p-6 shadow-lg transition duration-500 hover:scale-110 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800'
      style={{
        backgroundImage: 'url(https://placekeanu.com/250/g)',
      }}
    >
      <div className='flex items-end'>
        <a
          href='#'
          className='inline-flex items-center rounded-lg bg-[#00000075] px-3 py-2 text-center text-sm font-medium text-white'
        >
          1+ Deits
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;

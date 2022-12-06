import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

const Service = () => {
  SwiperCore.use([Autoplay]);

  return (
    <section className='w-full bg-slate-900 py-14 text-white'>
      <div className='mx-auto  max-w-6xl'>
        <p className='py-6 text-center text-2xl font-semibold'>
          Service is available on more than 100+ cities around the world
        </p>
      </div>
      <Swiper
        // install Swiper modules
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        freeMode={true}
        spaceBetween={0}
        grabCursor={true}
        slidesPerView={7}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={5000}
      >
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='flex h-64 w-48 rounded-lg p-6 shadow-md dark:border-gray-700 dark:bg-gray-800'
            style={{
              backgroundImage: 'url(https://placekeanu.com/260/g)',
            }}
          >
            <div className='flex items-end'>
              <a
                href='#'
                className='inline-flex items-center rounded-lg bg-[#00000075] px-3 py-2 text-center text-sm font-medium text-white'
              >
                2+ Deits
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='flex h-64 w-48 rounded-lg p-6 shadow-md dark:border-gray-700 dark:bg-gray-800'
            style={{
              backgroundImage: 'url(https://placekeanu.com/270/g)',
            }}
          >
            <div className='flex items-end'>
              <a
                href='#'
                className='inline-flex items-center rounded-lg bg-[#00000075] px-3 py-2 text-center text-sm font-medium text-white'
              >
                3+ Deits
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='flex h-64 w-48 rounded-lg p-6 shadow-md dark:border-gray-700 dark:bg-gray-800'
            style={{
              backgroundImage: 'url(https://placekeanu.com/280/g)',
            }}
          >
            <div className='flex items-end'>
              <a
                href='#'
                className='inline-flex items-center rounded-lg bg-[#00000075] px-3 py-2 text-center text-sm font-medium text-white'
              >
                4+ Deits
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='flex h-64 w-48 rounded-lg p-6 shadow-md dark:border-gray-700 dark:bg-gray-800'
            style={{
              backgroundImage: 'url(https://placekeanu.com/290/g)',
            }}
          >
            <div className='flex items-end'>
              <a
                href='#'
                className='inline-flex items-center rounded-lg bg-[#00000075] px-3 py-2 text-center text-sm font-medium text-white'
              >
                5+ Deits
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='flex h-64 w-48 rounded-lg p-6 shadow-md dark:border-gray-700 dark:bg-gray-800'
            style={{
              backgroundImage: 'url(https://placekeanu.com/240/g)',
            }}
          >
            <div className='flex items-end'>
              <a
                href='#'
                className='inline-flex items-center rounded-lg bg-[#00000075] px-3 py-2 text-center text-sm font-medium text-white'
              >
                6+ Deits
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='flex h-64 w-48 rounded-lg p-6 shadow-md dark:border-gray-700 dark:bg-gray-800'
            style={{
              backgroundImage: 'url(https://placekeanu.com/230/g)',
            }}
          >
            <div className='flex items-end'>
              <a
                href='#'
                className='inline-flex items-center rounded-lg bg-[#00000075] px-3 py-2 text-center text-sm font-medium text-white'
              >
                7+ Deits
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Service;

import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import {
  serviceDataItems,
  serviceDataItems2,
} from '@/data/serviceDataItems.data';

import ServiceCard from '@/components/cards/serviceCard';

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
        className='my-10'
      >
        {serviceDataItems?.map((item) => (
          <SwiperSlide key={item.id}>
            <ServiceCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

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
          reverseDirection: true,
        }}
        speed={5000}
        className='my-10'
      >
        {serviceDataItems2?.map((item) => (
          <SwiperSlide key={item.id}>
            <ServiceCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Service;

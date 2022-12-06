import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import ServiceCard from '@/components/cards/serviceCard';

import { Service } from '@/types/service.type';

const data: Service[] = [
  {
    id: 1,
    img: '',
    dater: 3,
  },
];

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
          {data?.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Service;

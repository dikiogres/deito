import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[url('/images/hero.png')] dark:bg-gray-900">
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}
      >
        <div className='mx-auto grid min-h-screen max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
          <div className='mr-auto place-self-center lg:col-span-7'>
            <p className='font-lg max-w-2xl text-white dark:text-gray-400 md:text-lg lg:text-xl'>
              with Deito
            </p>
            <h1 className='mb-6 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-white dark:text-white md:text-5xl lg:mb-6 xl:text-6xl'>
              Find your Date
            </h1>
            <a
              href='#'
              className='mr-3 inline-flex items-center justify-center rounded-lg bg-pink-400 px-5 py-3 text-center text-base font-medium text-white  shadow-lg transition duration-500 hover:scale-110 hover:bg-pink-600 hover:shadow-2xl focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
            >
              Start Now
            </a>
          </div>
          {/* <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <Image src={Logo.src} alt="mockup" height='20' width='500'/>
              </div>                  */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

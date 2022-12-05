import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import Logo from '~/Logo.png';

export default function Header() {
  return (
    // <header className='sticky top-0 z-50 w-full bg-slate-800 text-white'>
    <header className='sticky top-0 z-50 w-full bg-slate-800 text-white'>
      <nav className='fixed top-0 left-0 z-20 w-full bg-slate-800 px-2 py-2.5 dark:bg-gray-900 sm:px-4'>
        <div className='container mx-auto flex flex-wrap items-center justify-between'>
          <Link href='/' className='flex items-center'>
            <Image src={Logo} alt='Logo' width={80} />
          </Link>
          <div className='flex space-x-4 md:order-2'>
            <button
              type='button'
              className='text-md mr-3 rounded-3xl bg-gray-600 px-10 py-2.5 text-center font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0'
            >
              Log in
            </button>
            <button
              type='button'
              className='text-md mr-3 rounded-3xl bg-pink-400 px-10 py-2.5 text-center font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0'
            >
              Register
            </button>
          </div>
        </div>
      </nav>
    </header>
    // </header>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import Logo from '~/Logo.png';

const links = [
  { href: '/deits', label: 'Deits' },
  { href: '/orders', label: 'Orders' },
];

export default function Header() {
  const router = useRouter();

  const deitoUser = localStorage.getItem('deito-user');

  const handleLogout = async () => {
    try {
      localStorage.removeItem('deito-user');
      router.push('/auth/login');
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    // <header className='sticky top-0 z-50 w-full bg-slate-800 text-white'>
    <header className='sticky top-0 z-50 w-full bg-slate-800 text-white'>
      <nav className=' w-full bg-slate-800 px-2 py-2.5 dark:bg-gray-900 sm:px-4'>
        <div className='container mx-auto flex flex-wrap items-center justify-between'>
          <div className='flex'>
            <Link href='/' className='mr-6 flex items-center'>
              <Image src={Logo} alt='Logo' width={80} />
            </Link>
            <nav>
              <ul className='flex items-center justify-between space-x-4'>
                {links.map(({ href, label }) => (
                  <li key={`${href}${label}`}>
                    <Link href={href} className=''>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {!deitoUser ? (
            <div className='flex space-x-4 justify-self-end md:order-2'>
              <button
                type='button'
                className='text-md mr-3 rounded-3xl bg-gray-600 px-10 py-2.5 text-center font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0'
              >
                <Link href='/auth/login'>Log in</Link>
              </button>
              <button
                type='button'
                className='text-md mr-3 rounded-3xl bg-pink-400 px-10 py-2.5 text-center font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0'
              >
                <Link href='/auth/register'>Register</Link>
              </button>
            </div>
          ) : (
            <ul>
              {/* <li className='my-3 mr-4 block items-center justify-self-end md:my-0 md:inline-block'>
                <Link href='/dashboard'>
                  <p className='font-semibold text-white transition'>
                    Dashboard
                  </p>
                </Link>
              </li> */}
              <li className='my-3 mr-4 block items-center md:my-0 md:inline-block '>
                <p
                  onClick={handleLogout}
                  className='cursor-pointer justify-self-end rounded-xl bg-pink-500 px-3 py-1 font-semibold text-white transition'
                >
                  Logout
                </p>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
    // </header>
  );
}

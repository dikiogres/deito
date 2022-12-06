import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import { useAuth } from '../../auth/context/authContext';

import Logo from '~/Logo.png';

const links = [{ href: '/deits', label: 'Deits' }];

export default function Header() {
  const { user, logOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOut();
      router.push('/login');
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    // <header className='sticky top-0 z-50 w-full bg-slate-800 text-white'>
    <header className='sticky top-0 z-50 w-full bg-slate-800 text-white'>
      <nav className=' w-full bg-slate-800 px-2 py-2.5 dark:bg-gray-900 sm:px-4'>
        <div className='container mx-auto flex flex-wrap items-center justify-between'>
          <Link href='/' className='flex items-center'>
            <Image src={Logo} alt='Logo' width={80} />
          </Link>
          {!user.uid ? (
            <div className='flex space-x-4 md:order-2'>
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
            <>
              <li className='my-3 mr-4 block items-center md:my-0 md:inline-block '>
                <Link href='/dashboard'>
                  <a
                    href=''
                    className='text-blue-800 transition hover:text-blue-900'
                  >
                    Dashboard
                  </a>
                </Link>
              </li>
              <li className='my-3 mr-4 block items-center md:my-0 md:inline-block '>
                <a
                  onClick={handleLogout}
                  className='cursor-pointer text-blue-800 transition hover:text-blue-900'
                >
                  Logout
                </a>
              </li>
            </>
          )}
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
      </nav>
    </header>
    // </header>
  );
}

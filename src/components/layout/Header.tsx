import Image from 'next/image';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import Logo from '~/Logo.png';

const links = [
  { href: '/', label: 'Route 1' },
  { href: '/', label: 'Route 2' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-slate-800 text-white'>
      <div className='layout flex h-14 items-center justify-between'>
        <div className='relative flex'>
          <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
            <Image src={Logo} alt='Logo' width={80} />
          </UnstyledLink>
        </div>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

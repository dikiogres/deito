import Image from 'next/image';
import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

import Logo from '~/Logo.png';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <Header />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <Image src={Logo} alt='Logo' />
            <p className='mt-2 text-sm text-gray-800'>
              Frontend & Backend Repository for Deito{' '}
            </p>
            <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='https://github.com/dikiogres/deito'>
                See the repository
              </ArrowLink>
            </p>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href=''>Nethan, Iyok and Dzikri</UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}

import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Hero from '@/container/Hero';
import Waiting from '@/container/home/Waiting';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <Hero />
        <Waiting />
      </main>
    </Layout>
  );
}

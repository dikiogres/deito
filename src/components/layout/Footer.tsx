import * as React from 'react';

export default function Footer() {
  return (
    <footer className='flex h-14 w-full items-center bg-slate-800 text-white'>
      <div className='mx-auto max-w-6xl'>
        © {new Date().getFullYear()} By Nethan, Iyok and Dzikri
      </div>
    </footer>
  );
}

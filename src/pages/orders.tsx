import {
  collectionGroup,
  doc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import * as React from 'react';

import 'react-datepicker/dist/react-datepicker.css';

import convertToIDR from '@/lib/converter';
import db from '@/lib/firebase';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  const [orders, setOrders] = React.useState([{}]);

  React.useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    const deitoUser = localStorage.getItem('deito-user');
    const currentUser = JSON.parse(deitoUser);

    const userOrders = query(
      collectionGroup(db, 'orders'),
      where('user', '==', doc(db, `users/${currentUser.id}`))
    );
    const ordersSnapshot = await getDocs(userOrders);

    const ordersData: object[] = [];
    ordersSnapshot.forEach((doc) => {
      const order = {
        id: doc.id,
        ...doc.data(),
      };
      ordersData.push(order);
    });

    setOrders(ordersData);
  };

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <div className='layout flex-co flex min-h-screen bg-[#13131A] font-poppins'>
          <div className='mx-auto mt-12 w-full max-w-6xl text-white'>
            <section className='flex flex-col pb-16'>
              <h1>My Dates</h1>
              <hr className='my-6' />
              {orders?.map((order, i) => (
                <div
                  key={i}
                  className='mb-4 flex items-center justify-between rounded-md bg-[#221D2F] py-4 px-6'
                >
                  <div>
                    <p className='my-1 text-2xl'>{order.name}</p>
                    <p className='my-1 text-xl'>
                      {order.total && convertToIDR(order.total)}
                    </p>
                    <p className='my-1'>
                      {order?.date?.toDate().toLocaleDateString('id-ID', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    {order.done && (
                      <p className='w-fit rounded-xl bg-green-700 px-3 py-1'>
                        Done
                      </p>
                    )}
                  </div>
                  {!order.done && (
                    <a
                      href='http://wa.me/089675854803'
                      className='h-fit w-fit cursor-pointer rounded-xl bg-green-500 px-6 py-3 text-white'
                    >
                      Chat on Whatsapp
                    </a>
                  )}
                </div>
              ))}
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}

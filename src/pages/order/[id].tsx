import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import * as React from 'react';
import Datepicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import convertToIDR from '@/lib/converter';
import db from '@/lib/firebase';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Deit from '@/interfaces/Deit.interface';
import Service from '@/interfaces/Service.interface';

export default function HomePage() {
  const router = useRouter();
  const { id } = router.query;

  const [deit, setDeit] = React.useState<Deit>();
  const [services, setServices] = React.useState<Service[]>();
  const [sessions, setSessions] = React.useState(1);
  const [total, setTotal] = React.useState(0);
  const [addOns, setAddOns] = React.useState(0);
  const [selectedDate, setDate] = React.useState(new Date());
  const [orders, setOrders] = React.useState([{}]);

  React.useEffect(() => {
    if (!router.isReady) return;

    getProfileData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  React.useEffect(() => {
    if (!services && !deit) return;

    let newTotal = 0;

    services?.forEach((service) => {
      if (service.ordered) {
        newTotal += service?.price;
      }
    });

    setAddOns(newTotal);

    newTotal += deit?.price * sessions;

    setTotal(newTotal);
  }, [services, deit, sessions]);

  const getProfileData = async () => {
    const deitData = await getDoc(doc(db, `dater/${id}`));
    setDeit({ id: deitData.id, ...deitData.data() } as Deit);

    const servicesSnapshot = await getDocs(
      collection(db, `dater/${id}/services`)
    );

    const servicesData: Service[] = [];
    servicesSnapshot.forEach((doc) => {
      const service = {
        id: doc.id,
        ...doc.data(),
        ordered: false,
      };
      servicesData.push(service as Service);
    });

    setServices(servicesData as Service[]);

    const ordersSnapshot = await getDocs(collection(db, `dater/${id}/orders`));
    const ordersData = [];
    ordersSnapshot.forEach((doc) => {
      ordersData.push(doc.data().date.toDate());
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
              <h1 className='my-6'>Order</h1>
              <hr />
              <form action=''>
                <div className='my-6 flex w-full items-center justify-between'>
                  <label htmlFor='' className='text-2xl font-medium'>
                    Session
                  </label>
                  <div className='flex items-center'>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setSessions(sessions == 1 ? 1 : sessions - 1);
                      }}
                      className='mx-2 rounded-xl bg-[#221D2F] px-4 py-2 text-xl text-white'
                    >
                      -
                    </button>
                    <input
                      type='number'
                      value={sessions}
                      contentEditable={false}
                      onKeyDown={(e) => e.preventDefault()}
                      className='mx-2 w-14 rounded-xl bg-[#221D2F] px-4 py-2 text-xl text-white'
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setSessions(sessions + 1);
                      }}
                      className='mx-2 rounded-xl bg-[#221D2F] px-4 py-2 text-xl text-white'
                    >
                      +
                    </button>
                    <p className='ml-4 text-2xl font-semibold'>
                      {deit?.price && convertToIDR(deit.price * sessions)}
                    </p>
                  </div>
                </div>
                <div className='mb-6 flex items-center justify-between'>
                  <label htmlFor='' className='text-2xl font-medium'>
                    Date
                  </label>
                  <div>
                    <Datepicker
                      selected={selectedDate}
                      className='self-justify-end rounded-xl bg-[#221D2F] px-4 py-2 text-xl text-white'
                      onChange={(date: Date) => setDate(date)}
                      minDate={new Date()}
                      excludeDates={orders}
                    />
                  </div>
                </div>
                <p className='mb-4 text-xl'>Choose additional services</p>
                {services?.map((service, i) => (
                  <div
                    key={i}
                    className='mb-4 flex items-center justify-between rounded-xl bg-[#221D2F] py-4 px-10'
                  >
                    <div className='flex'>
                      <input
                        type='checkbox'
                        checked={services[i].ordered}
                        onChange={() => {
                          const newServices: Service[] = [...services];
                          newServices[i].ordered = !services[i].ordered;
                          setServices(newServices);
                        }}
                        id={service.name}
                        className='mr-6 rounded-xl px-4 py-2 text-xl '
                      />
                      <label className='text-xl' htmlFor={service.name}>
                        {service.name}
                      </label>
                    </div>
                    <p className='text-lg font-semibold'>
                      {convertToIDR(service.price)}
                    </p>
                  </div>
                ))}
                <hr className='my-6' />
                <div className='mb-6 flex items-center justify-between'>
                  <p className='text-2xl font-medium'>Main Service</p>
                  <p className='text-2xl font-semibold'>
                    {deit?.price && convertToIDR(deit.price * sessions)}
                  </p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='text-2xl font-medium'>Add-On Services</p>
                  <p className='text-2xl font-semibold'>
                    {convertToIDR(addOns)}
                  </p>
                </div>
                <hr className='my-6' />
                <div className='flex items-center justify-between'>
                  <p className='text-2xl font-semibold'>
                    {convertToIDR(total || 0)}
                  </p>
                  <button className='rounded-xl bg-[#E97991] px-6 py-2 text-2xl text-white'>
                    Confirm
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}

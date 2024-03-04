import Layout from '@/components/Layout';
import Link from 'next/link';
import { Poppins } from '@next/font/google';
import { GetServerSidePropsContext } from 'next/types';
import { getSession } from 'next-auth/react';
import prisma from 'libs/prisma';
import { useState } from 'react';
import MiscellaneousDonationForm from '@/components/MiscellaneousDonationForm';

const poppins = Poppins({ subsets: ['latin'], weight: '600' });

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session: any = await getSession(context);

  let user = {};

  if (session) {
    const currentUser = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    user = {
      name: currentUser?.name,
      email: currentUser?.email,
      contact: currentUser?.contact,
    };
  }

  return {
    props: { user },
  };
}

export default function DonationsPage({
  user,
}: {
  user: {
    name: '';
    email: '';
    contact: '';
  };
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => setModalOpen(false);

  return (
    <Layout>
      <div className='px-5 lg:min-h-[80.5vh] lg:px-6'>
        <h2 className={`pt-8 text-2xl font-medium ${poppins.className}`}>
          Start Showing Some Kindness
        </h2>
        <p className='mt-2 text-sm text-gray-500'>
          Not everything has to cost a fortune...
        </p>

        {modalOpen ? (
          <MiscellaneousDonationForm user={user} handleClose={handleClose} />
        ) : null}

        <div className='flex w-full flex-col flex-wrap py-8 lg:flex-row'>
          <div className="mb-6 flex h-[10.5rem] justify-between rounded-xl border bg-[url('/clothes.png')] bg-cover p-3 px-4 lg:mr-3 lg:w-[49%]">
            <p className='mt-auto text-xl text-white'>Clothes</p>
            <Link href='/donations/clothes' className='mt-auto'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='white'
                className='h-6 w-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                />
              </svg>
            </Link>
          </div>

          <div className="mb-6 flex h-[10.5rem] justify-between rounded-xl border bg-[url('/food.png')] bg-cover p-3 px-4 lg:ml-3 lg:w-[49%]">
            <p className='mt-auto text-xl text-white'>Food</p>
            <Link href='/donations/food' className='mt-auto'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='white'
                className='mt-auto h-6 w-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                />
              </svg>
            </Link>
          </div>

          <div className="mb-6 flex h-[10.5rem] justify-between rounded-xl border bg-[url('/grains.png')] bg-cover p-3 px-4 lg:mr-3 lg:mb-0 lg:w-[49%]">
            <p className='mt-auto text-xl text-white'>Grains</p>
            <Link href='/donations/grains' className='mt-auto'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='white'
                className='h-6 w-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                />
              </svg>
            </Link>
          </div>

          <div className="flex h-[10.5rem] justify-between rounded-xl border bg-[url('/money.png')] bg-cover p-3 px-4 lg:ml-3 lg:w-[49%]">
            <p className='mt-auto text-xl text-white'>Money</p>
            <Link href='/donations/money' className='mt-auto'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='white'
                className='h-6 w-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                />
              </svg>
            </Link>
          </div>
        </div>

        <div>
          <h3 className={`${poppins.className} text-2xl`}>
            Want to go beyond the norms ?
          </h3>
          <p className='mt-2 text-sm text-gray-500'>
            Go beyond the regular donations model with &ldquo; Miscellaneous
            Donations &rdquo;
          </p>

          <div className='mt-8 flex flex-col p-2 lg:flex-row lg:items-center'>
            <p className='w-fit italic text-slate-900 lg:text-xl'>
              Donate anything to any NGO of your liking, <br />
              we will make sure they receive your kindness
            </p>
            <p
              className='mt-4 rounded border border-slate-900 from-indigo-500 via-purple-500 to-pink-500 p-2 text-center text-lg hover:bg-gradient-to-r lg:mt-0 lg:ml-auto lg:w-[65%]'
              onClick={() => setModalOpen(!modalOpen)}>
              Start Donating
            </p>
          </div>

          <p className='mt-4 mb-4 italic text-gray-500'>
            Note : We do not keep any cut&apos;s from your donations, we just
            act as a go between for you and the NGO
          </p>
        </div>
      </div>
    </Layout>
  );
}

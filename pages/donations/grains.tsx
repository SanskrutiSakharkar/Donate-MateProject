import DonationCard from '@/components/DonationCard';
import Layout from '@/components/Layout';
import { DonationType, Requests, UserType } from '@prisma/client';
import { GetServerSidePropsContext } from 'next/types';
import { getSession } from 'next-auth/react';
import Image from 'next/image';
import RequestModal from '@/components/RequestModal';
import { useState } from 'react';
import prisma from 'libs/prisma';
import { Poppins } from '@next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: '600' });

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session: any = await getSession(context);
  const requests = await prisma.requests.findMany({
    where: { type: DonationType.GRAINS },
  });

  let admin = false;
  let user = {};

  if (session) {
    switch (session.role) {
      case UserType.ADMIN:
        admin = true;
        break;

      case UserType.NGO:
        admin = true;
        break;

      default:
        admin;
    }
  }

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
    props: { admin, user, requests: JSON.parse(JSON.stringify(requests)) },
  };
}

export default function GrainsDonation({
  admin,
  user,
  requests,
}: {
  admin: boolean;
  user: {
    name: '';
    email: '';
    contact: '';
  };
  requests: Requests[];
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => setModalOpen(false);

  return (
    <>
      <Layout>
        <div className='px-5 lg:min-h-[80.5vh] lg:px-6'>
          {modalOpen ? (
            <RequestModal handleClose={handleClose} type='GRAINS' user={user} />
          ) : null}
          <div className='p-4 pb-2 lg:p-3'>
            <Image alt='' src='/grains1.png' width={1396} height={278} />
          </div>
          <div className='mx-2 flex flex-col border-b-2 border-b-gray-300 p-3 pb-6 lg:mx-5 lg:flex-row'>
            <h1
              className={`mb-3 text-3xl font-semibold lg:mb-0 lg:mr-6 lg:text-7xl ${poppins.className}`}>
              Grains Donation
            </h1>
            <p className='mt-auto text-justify text-sm text-gray-600 lg:ml-2'>
              Your donation of grain can help us continue our mission of
              fighting hunger and malnutrition in our community.Together, we can
              make a difference in the lives of those struggling with food
              insecurity. Please donate your grain to our NGO today.Your
              generosity can help us reach more people and provide them with the
              essential food they need to survive. Please donate your grain to
              our NGOs
            </p>
          </div>
          <div className='p-5 lg:mx-6 lg:p-3'>
            <div className='flex items-center'>
              <h2 className='text-3xl font-medium text-gray-500'>Requests</h2>
              {admin ? (
                <p
                  className='ml-auto flex cursor-pointer items-center rounded bg-blue-500 p-2 text-white'
                  onClick={() => setModalOpen(!modalOpen)}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='mr-2 h-7 w-7'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 4.5v15m7.5-7.5h-15'
                    />
                  </svg>{' '}
                  Add requests
                </p>
              ) : null}
            </div>
            <div className='mt-5'>
              {requests.map((request) => (
                <DonationCard key={request.id} request={request} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

import DonationCard from '@/components/DonationCard';
import Layout from '@/components/Layout';
import { getSession, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useReducer, useState } from 'react';
import prisma from 'libs/prisma';
import { initialUserStateType } from '@/types';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Requests } from '@prisma/client';

function reducer(
  state: initialUserStateType,
  action: {
    type: 'updateName' | 'updateEmail' | 'updateImage' | 'updateContact';

    value: string;
  }
) {
  switch (action.type) {
    case 'updateName':
      return { ...state, name: action.value };

    case 'updateEmail':
      return { ...state, email: action.value };

    case 'updateImage':
      return { ...state, image: action.value };

    case 'updateContact':
      return { ...state, contact: action.value };

    default:
      return state;
  }
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  const user = await prisma.user.findUnique({
    where: {
      //@ts-ignore
      email: session?.user?.email,
    },
  });

  const requests = await prisma.requests.findMany({
    where: { userId: user?.id },
  });

  let initialState = {};

  if (user) {
    initialState = {
      name: user.name,
      email: user.email,
      contact: user.contact,
      image: user.image,
    };
  }

  if (!session) {
    return {
      redirect: { destination: '/api/auth/signin' },
    };
  }
  return {
    props: { initialState, requests: JSON.parse(JSON.stringify(requests)) },
  };
}

export default function UserPage({
  initialState,
  requests,
}: {
  initialState: initialUserStateType;
  requests: Requests[];
}) {
  const { data: session } = useSession();
  const [updatable, setUpdatable] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  async function handleUpdate(e: any) {
    e.preventDefault();

    try {
      const res = await axios.post('/api/updateUser', { ...state });
      if (res.status === 200) {
        router.reload();
      }
    } catch (error) {
      alert(
        'There was an error while updating your details please try again later'
      );
    }
  }

  return (
    <Layout>
      <div className='flex w-full flex-col overflow-hidden py-[1.75rem] px-5 lg:h-[80.5vh] lg:flex-row'>
        <div className='flex flex-col lg:fixed lg:w-[23%]'>
          <img
            src={
              session?.user?.image ||
              `https://source.boringavatars.com/beam/250/${session?.user?.email}?square`
            }
            alt='User Image'
            className='mb-6 w-[75%] rounded-full'
          />
          {!updatable ? (
            <>
              <h1 className='mt-4 mb-3 px-3 text-2xl font-medium'>
                {state.name}
              </h1>
              <p className='mb-3 px-3 text-base text-slate-700'>
                {state.email}
              </p>
              <p className='mb-3 px-3 text-base text-slate-700'>
                {state.contact}
              </p>
              <p className='mb-3 break-words px-3 text-base text-slate-700'>
                {state.image}
              </p>
            </>
          ) : null}

          {updatable ? (
            <form className='' onSubmit={handleUpdate}>
              <input
                className='mt-4 mb-3 block w-full rounded border border-slate-400 bg-transparent px-3 text-2xl font-medium focus:border-blue-500 focus:outline-none'
                type='text'
                value={state.name}
                onChange={(e) =>
                  dispatch({ type: 'updateName', value: e.target.value })
                }
                placeholder='Enter your name'
              />

              <input
                className='mb-3 block w-full rounded border border-slate-400 bg-transparent px-3 text-slate-700 focus:border-blue-500 focus:outline-none '
                type='email'
                value={state.email}
                onChange={(e) =>
                  dispatch({ type: 'updateEmail', value: e.target.value })
                }
                placeholder='Enter your email'
              />

              <input
                className='mb-3 block w-full rounded border border-slate-400 bg-transparent px-3 text-slate-700 focus:border-blue-500 focus:outline-none '
                type='text'
                value={state.contact}
                onChange={(e) =>
                  dispatch({ type: 'updateContact', value: e.target.value })
                }
                placeholder='Enter your contact no.'
              />

              <input
                className='mb-3 block w-full break-words rounded border border-slate-400 bg-transparent px-3 text-slate-700 focus:border-blue-500 focus:outline-none '
                type='text'
                value={state.image}
                onChange={(e) =>
                  dispatch({ type: 'updateImage', value: e.target.value })
                }
                placeholder='Enter your image url to update your image'
              />

              <input
                className='mb-3 block w-full rounded bg-green-500 p-1 font-semibold text-white'
                type='submit'
                value='Update'
              />
            </form>
          ) : null}

          <div>
            <button
              className={`mt-1 mr-2 w-fit rounded ${
                !updatable ? 'ml-3 bg-green-500' : 'bg-red-600'
              }  p-2 px-4 text-white`}
              onClick={() => setUpdatable(!updatable)}>
              {!updatable ? 'Update' : 'Cancel'}
            </button>

            <Link
              className='ml-2 w-fit rounded bg-red-600 p-2 px-4 text-white'
              href='/api/auth/signout'>
              Sign out
            </Link>
          </div>
        </div>
        <div className='mt-5 overflow-y-scroll lg:ml-auto lg:w-[75%]'>
          <p className='w-full pb-3 text-2xl font-semibold lg:fixed'>
            Donations Requests by me
          </p>
          <div className='flex flex-wrap lg:mt-12'>
            {requests.map((request) => (
              <DonationCard key={request.id} request={request} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

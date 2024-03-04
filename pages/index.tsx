import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from '@next/font/google';
import { Roboto } from '@next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: '600' });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <>
      <Layout>
        <div className='flex-col p-2 px-5 lg:flex lg:flex-row lg:px-8'>
          <div>
            <h1
              className={`mt-2 text-6xl font-bold leading-tight text-slate-900 lg:text-[5rem] ${poppins.className}`}>
              A Little Kindness Goes a Long Way...
            </h1>
            <p className={`mt-7 text-gray-600 ${roboto.className}`}>
              Being kind to others charges no money. It is a unique
              characteristic of showing love and caring for others selflessly.
            </p>
          </div>
          <Image
            alt='hero-image'
            src='/heroIcon1.png'
            width={612}
            height={409}
          />
        </div>

        <div className='rounded-t-lg p-2 px-5 lg:px-8'>
          <h2 className={`pt-4 text-2xl font-medium ${poppins.className}`}>
            Start Showing Some Kindness
          </h2>
          <p className={`mt-2 text-sm text-gray-500 ${roboto.className}`}>
            Not everything has to cost a fortune...
          </p>

          <div className='my-5 flex w-full flex-col flex-wrap lg:flex-row'>
            <div className="mb-6 flex h-[10.5rem] justify-between rounded-xl border bg-[url('/clothes.png')] bg-cover p-3 px-4 lg:mr-3 lg:w-[49%]">
              <p className={`mt-auto text-xl text-white ${roboto.className}`}>
                Clothes
              </p>
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
              <p className={`mt-auto text-xl text-white ${roboto.className}`}>
                Food
              </p>
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
              <p className={`mt-auto text-xl text-white ${roboto.className}`}>
                Grains
              </p>
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
              <p className={`mt-auto text-xl text-white ${roboto.className}`}>
                Money
              </p>
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
        </div>

        <div className='rounded-t-lg p-2 px-5 lg:px-8'>
          <h2 className={`pt-4 text-2xl font-medium ${poppins.className}`}>
            Our Partner&apos;s
          </h2>
          <p className={`mt-2 text-sm text-gray-500 ${roboto.className}`}>
            Nothing great can be achieved alone, here are some of our partner
            NGO&apos;s
          </p>
          <div className='mt-4 mb-4 flex items-center overflow-x-scroll'>
            <Image
              src={'/partners/1.jpg'}
              width={200}
              height={100}
              alt='partner 1'
              className='mr-4 hidden h-fit w-[10%] md:block'
            />
            <Image
              src={'/partners/2.jpg'}
              width={200}
              height={100}
              alt='partner 1'
              className='mr-4 h-fit lg:w-1/12'
            />
            <Image
              src={'/partners/3.jpg'}
              width={200}
              height={100}
              alt='partner 1'
              className='mr-4 hidden h-fit w-[6.5%] md:block'
            />
            <Image
              src={'/partners/4.jpg'}
              width={200}
              height={100}
              alt='partner 1'
              className='mr-4 h-fit lg:w-1/12'
            />
            <Image
              src={'/partners/5.jpg'}
              width={200}
              height={100}
              alt='partner 1'
              className='mr-4 h-fit lg:w-1/12'
            />
            <Image
              src={'/partners/6.jpg'}
              width={200}
              height={100}
              alt='partner 1'
              className='mr-4 h-fit lg:w-1/12'
            />
          </div>
        </div>

        <div className='flex p-2 px-5 pb-8 lg:px-8'>
          <p
            className={`mr-4 hidden h-fit w-fit rounded-full bg-blue-600 p-1 px-4 text-center text-sm font-semibold text-white lg:block lg:h-16 lg:w-48 lg:p-[1.1rem] lg:text-base ${roboto.className}`}>
            Start Donating
          </p>
          <div className='flex w-full items-center justify-between rounded-full border border-black bg-white lg:h-16'>
            <input
              placeholder='Join our Newsletter'
              className='w-full rounded-l-full p-1 px-4 focus:outline-none'
            />
            <p className='m-1 w-1/2 rounded-full bg-black p-3 px-4 text-center text-sm text-white lg:w-28 lg:text-base'>
              Join Now
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}

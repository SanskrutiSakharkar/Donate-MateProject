import Link from 'next/link';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Poppins } from '@next/font/google';
import { Roboto } from '@next/font/google';
import Image from 'next/image';

const poppins = Poppins({ subsets: ['latin'], weight: '600' });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <>
      <div className='bg-white'>
        <div className='mx-3 flex justify-between rounded-b-lg border bg-white p-3 px-5 '>
          <p
            className={`flex items-center text-xl font-semibold ${poppins.className}`}>
            <Image
              src={'/icon-192x192.png'}
              width={40}
              height={40}
              alt='application logo'
              className='mr-2 h-auto w-1/5'
            />
            <Link href='/'>Donate Mate</Link>
          </p>
          <div className='block lg:hidden' onClick={() => setOpen(!open)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-7 w-7'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </div>

          <div
            className={`${
              open ? 'block' : 'hidden'
            } fixed inset-0 flex h-screen w-full flex-col bg-white p-4`}>
            <div className='mt-0 flex items-center px-4'>
              <p
                className={`flex items-center text-xl font-semibold ${poppins.className}`}>
                <Image
                  src={'/icon-192x192.png'}
                  width={40}
                  height={40}
                  alt='application logo'
                  className='mr-2 h-auto w-1/5'
                />
                <Link href='/'>Donate Mate</Link>
              </p>
              <div className='ml-auto' onClick={() => setOpen(!open)}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-7 w-7'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </div>
            </div>
            <div
              className={`my-4 flex flex-col items-center justify-center border-t border-t-gray-500 py-8 ${roboto.className}`}>
              <Link href='/donations'>
                <p className='m-1 px-32 py-4 text-xl'>Donate</p>
              </Link>
              <Link href='/about'>
                <p className='m-1 px-32 py-4 text-xl'>About</p>
              </Link>
              <Link href='/contact'>
                <p className='m-1 px-32 py-4 text-xl'>Contact</p>
              </Link>
              <Link href='/api/auth/signin'>
                <p className='m-1 px-32 py-4 text-xl '>Sign In</p>
              </Link>
            </div>
          </div>

          <ul className={`hidden lg:flex ${roboto.className} items-center`}>
            <li className='mr-5'>
              <Link href='/donations'>Donate</Link>
            </li>
            <li className='mr-5'>
              <Link href='/about'>About</Link>
            </li>
            <li className='mr-5'>
              <Link href='/contact'>Contact</Link>
            </li>
            <li className='font-semibold'>
              {session?.user ? (
                <Link href='/user'>{session.user.name}</Link>
              ) : (
                <Link href='/api/auth/signin'>Login/Signup</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

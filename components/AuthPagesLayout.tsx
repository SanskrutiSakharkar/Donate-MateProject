import Link from 'next/link';
import { Poppins } from '@next/font/google';
import { Roboto } from '@next/font/google';
import Image from 'next/image';

const poppins = Poppins({ subsets: ['latin'], weight: '600' });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export default function AuthPagesLayout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div className='flex h-screen w-full justify-center'>
      <div className='h-full p-5 lg:w-1/2'>
        <div className='flex items-end'>
          <Image src={'/applogo.png'} width={70} height={70} alt='App Logo' />

          <div className='ml-3'>
            <h1
              className={`${poppins.className} text-2xl font-semibold hover:text-blue-600`}>
              <Link href='/'>Donate Mate</Link>
            </h1>
            <p className={`${roboto.className} mt-1 text-sm `}>
              Donate for good
            </p>
          </div>
        </div>

        <div className='flex h-[95%] flex-col justify-center lg:p-16'>
          {children}
        </div>
      </div>

      <div className='ml-auto hidden h-full w-1/2 lg:block'>
        {/* <p
          className={`${roboto.className} fixed left-[65%] top-1/2 z-10 text-5xl font-semibold text-white`}>
          Donate For Good
        </p> */}
        <Image
          src={'/SignInPage.jpg'}
          width={640}
          height={100}
          priority
          alt='Login Page Image'
          className='h-full w-full rounded-l-lg'
        />
      </div>
    </div>
  );
}

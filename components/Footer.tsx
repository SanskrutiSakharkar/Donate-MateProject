import Link from 'next/link';
import { Roboto } from '@next/font/google';
import { Poppins } from '@next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: '600' });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export default function Footer() {
  return (
    <>
      <div className='rounded-t-lg bg-black p-2 pb-3 text-white'>
        <div className='flex items-center justify-between px-6 py-2'>
          <p className={`${poppins.className} text-lg font-semibold`}>
            Donate Mate
          </p>
          <ul className={`${roboto.className}  flex items-center`}>
            <Link href='/donations'>
              <li className='mr-4 text-sm lg:text-base'>Donate</li>
            </Link>
            <Link href='/about'>
              <li className='mr-4 text-sm lg:text-base'>About</li>
            </Link>
            <Link href='/contact'>
              <li className='text-sm lg:text-base'>Contact</li>
            </Link>
          </ul>
        </div>
        <ul className='flex px-6'>
          <li className='mr-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='h-4 w-4 invert lg:h-5 lg:w-5'>
              <path d='M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z' />
            </svg>
          </li>
          <li className='mr-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
              className='h-4 w-4 invert lg:h-5 lg:w-5'>
              <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'></path>
            </svg>
          </li>
          <li className='mr-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              className='lg:w-5sssss h-4 w-4 invert lg:h-5'>
              <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'></path>
            </svg>
          </li>
          <li>
            <svg
              viewBox='0 0 79 59'
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 invert lg:h-5 lg:w-5'>
              <path d='M71.0193 0H7.34682C3.28923 0 0 3.28923 0 7.34682V51.4278C0 55.4853 3.28923 58.7746 7.34682 58.7746H71.0193C75.0769 58.7746 78.3661 55.4853 78.3661 51.4278V7.34682C78.3661 3.28923 75.0769 0 71.0193 0ZM71.0193 7.34682V13.5924C67.5874 16.3871 62.1162 20.7327 50.4196 29.8916C47.8419 31.9192 42.7359 36.7903 39.1831 36.7335C35.6309 36.7909 30.5231 31.9184 27.9466 29.8916C16.2518 20.7341 10.7792 16.3875 7.34682 13.5924V7.34682H71.0193ZM7.34682 51.4278V23.0197C10.854 25.8132 15.8277 29.7332 23.4085 35.6694C26.7539 38.3028 32.6125 44.1161 39.1831 44.0808C45.7213 44.1161 51.5057 38.3872 54.9562 35.6707C62.5369 29.7346 67.5119 25.8135 71.0193 23.0199V51.4278H7.34682Z' />
            </svg>
          </li>
        </ul>
        <p className='mt-6 text-center text-xs'>
          &copy;2023 - Food Donation.inc
        </p>
      </div>
    </>
  );
}
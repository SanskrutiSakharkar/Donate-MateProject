import Layout from '@/components/Layout';
import Image from 'next/image';
import { Poppins } from '@next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: '600' });

export default function About() {
  return (
    <Layout>
      <div className='p-4'>
        <Image alt='hero-image' src='/about.png' width={1396} height={479} />
        <div className='my-4 px-1 lg:px-4'>
          <h1
            className={`text-4xl font-semibold lg:text-6xl ${poppins.className}`}>
            About Us
          </h1>
          <p className='my-2 text-sm text-slate-500'>
            Welcome to our donation application DonateMate !
          </p>
          <div className='my-7 lg:flex'>
            <p className='text-3xl font-semibold text-slate-600 lg:text-5xl'>
              What we do?
            </p>
            <p className='pt-2 text-justify lg:ml-auto lg:w-3/4 lg:pt-0 lg:pl-4'>
              We are a team of passionate individuals dedicated to making a
              positive impact in the world. Our mission is to connect people
              with causes they care about and make it easy for them to donate to
              organizations doing important work. We believe that everyone has
              the power to make a difference, no matter how big or small.
              That&apos;s why we&apos;ve created this platform to empower
              individuals to give back and support causes that matter to them
            </p>
          </div>
          <div className='my-7 flex flex-col-reverse lg:flex-row '>
            <p className='pt-2 text-justify lg:mr-auto lg:w-3/4 lg:pr-4'>
              Our team is made up of experienced professionals in technology,
              nonprofit management, and social impact. We&apos;re committed to
              creating a safe and secure platform for our users to make
              donations, and we work hard to ensure that every donation goes
              directly to the organizations and causes they choose to support.
            </p>
            <p className='text-5xl font-semibold text-slate-600'>Who we are?</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

import { GetServerSidePropsContext } from 'next';
import { getCsrfToken } from 'next-auth/react';
import Link from 'next/link';
import { Poppins } from '@next/font/google';
import { Roboto } from '@next/font/google';
import AuthPagesLayout from '@/components/AuthPagesLayout';

const poppins = Poppins({ subsets: ['latin'], weight: '600' });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

export default function SignInPage({ csrfToken }: any) {
  return (
    <AuthPagesLayout>
      <h2 className={`${roboto.className} text-3xl font-semibold`}>
        Hey 👋 ,<br />
        Welcome Back
      </h2>
      <p className={`${roboto.className} mt-1 text-xs text-slate-500`}>
        Enter your information to jump back into the application
      </p>
      <form
        method='post'
        action='/api/auth/callback/credentials'
        className={`${roboto.className} mt-10`}>
        <input name='csrfToken' type='hidden' defaultValue={csrfToken} />

        <div>
          <p>Email : </p>

          <input
            name='email'
            id='email'
            type='email'
            className='mt-1 w-full rounded border p-1 focus:border-blue-400 focus:outline-none'
          />
        </div>

        <div className='mt-4'>
          <p>Password : </p>

          <input
            name='password'
            id='password'
            type='password'
            className='mt-1 w-full rounded border p-1 focus:border-blue-400 focus:outline-none'
          />
        </div>

        <div className='mt-4 flex'>
          <input type='checkbox' name='Remember Me' />
          <label className='ml-1 text-sm'>Remember me</label>
          <p className='ml-auto text-xs text-blue-500'>Forgot password ?</p>
        </div>

        <input
          id='login'
          name='login'
          type='submit'
          value='Sign In'
          className='mt-5 ml-auto w-full rounded bg-blue-500 p-2 px-3 text-sm font-semibold text-white'
        />

        <p className='mt-4 text-center text-xs'>
          Don&apos;t have a account{' '}
          <Link href='/signup' className='text-blue-500 underline'>
            Sign Up
          </Link>{' '}
          for one
        </p>
      </form>
    </AuthPagesLayout>
  );
}

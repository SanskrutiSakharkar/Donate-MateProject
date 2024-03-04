import AuthPagesLayout from '@/components/AuthPagesLayout';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useReducer, useState } from 'react';
import { Poppins } from '@next/font/google';
import { Roboto } from '@next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: '600' });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

const initialState = {
  name: '',
  email: '',
  password: '',
  contact: '',
};

function reducer(
  state: typeof initialState,
  action: {
    type: 'updateName' | 'updateEmail' | 'updatePassword' | 'updateContact';

    value: string;
  }
) {
  switch (action.type) {
    case 'updateName':
      return { ...state, name: action.value };

    case 'updateEmail':
      return { ...state, email: action.value };

    case 'updatePassword':
      return { ...state, password: action.value };

    case 'updateContact':
      return { ...state, contact: action.value };

    default:
      return state;
  }
}

export default function SignUpPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [correct, setCorrect] = useState(false);
  const router = useRouter();

  function CheckPassword(password: string) {
    if (password === state.password) {
      return setCorrect(true);
    } else {
      return setCorrect(false);
    }
  }

  async function handleSignUp(e: any) {
    e.preventDefault();

    try {
      const res = await axios.post('/api/signup', { ...state });
      if (res.status === 200) {
        alert(
          'Sign Up Successful you can now login with the credentials that you just entered'
        );
        router.push('/signin');
      }
    } catch (error) {
      alert('There was an error while signing up please try again later');
    }
  }

  return (
    <AuthPagesLayout>
      <h2 className={`${roboto.className} text-4xl font-semibold`}>
        Register Yourself ✨
      </h2>
      <p className={`${roboto.className} mt-1 text-xs text-slate-500`}>
        Enter your information to register yourself with the application
      </p>

      <form className={`${roboto.className} mt-10`} onSubmit={handleSignUp}>
        <div>
          <p>Full Name : </p>

          <input
            type='text'
            className='mt-2 w-full rounded border p-1 focus:border-blue-400 focus:outline-none'
            onChange={(e) =>
              dispatch({ type: 'updateName', value: e.target.value })
            }
            value={state.name}
          />
        </div>

        <div className='mt-4'>
          <p>Email : </p>

          <input
            type='email'
            className='mt-2 w-full rounded border p-1 focus:border-blue-400 focus:outline-none'
            onChange={(e) =>
              dispatch({ type: 'updateEmail', value: e.target.value })
            }
            value={state.email}
          />
        </div>

        <div className='mt-4'>
          <p>Contact : </p>

          <input
            type='tel'
            className='mt-2 w-full rounded border p-1 focus:border-blue-400 focus:outline-none'
            onChange={(e) =>
              dispatch({ type: 'updateContact', value: e.target.value })
            }
            value={state.contact}
          />
        </div>

        <div className='mt-4'>
          <p>Password : </p>

          <input
            type='password'
            className='mt-2 w-full rounded border p-1 focus:border-blue-400 focus:outline-none'
            onChange={(e) =>
              dispatch({ type: 'updatePassword', value: e.target.value })
            }
            value={state.password}
          />
        </div>

        <div className='mt-4'>
          <p>Confirm Password : </p>

          <input
            type='password'
            className={`mt-2 w-full rounded border p-1 focus:border-blue-400 ${
              correct
                ? 'border-green-500 focus:border-green-500'
                : 'border-red-600 focus:border-red-500'
            } focus:outline-none`}
            onChange={(e) => CheckPassword(e.target.value)}
          />
        </div>

        <input
          type='submit'
          value='Sign Up'
          className='mt-4 ml-auto w-full rounded bg-blue-500 p-2 px-4 text-sm font-semibold text-white'
        />

        <p className='mt-4 text-center text-xs'>
          Already have a account{' '}
          <Link href='/signin' className='text-blue-500 underline'>
            Sign In
          </Link>{' '}
          instead
        </p>
      </form>
    </AuthPagesLayout>
  );
}

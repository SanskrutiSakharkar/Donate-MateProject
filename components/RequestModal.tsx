import { DonationType } from '@prisma/client';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useReducer } from 'react';

const initialState = {
  name: '',
  contact: '',
  email: '',
  amount: 0,
  address: '',
  details: '',
  formLink: '',
};

function reducer(
  state: typeof initialState,
  action: {
    type:
      | 'updateName'
      | 'updateEmail'
      | 'updateContact'
      | 'updateAmount'
      | 'updateAddress'
      | 'updateDetails'
      | 'updateFormLink';
    value: string | number | any;
  }
) {
  switch (action.type) {
    case 'updateName':
      return { ...state, name: action.value };

    case 'updateContact':
      return { ...state, contact: action.value };

    case 'updateEmail':
      return { ...state, email: action.value };

    case 'updateAmount':
      return { ...state, amount: action.value };

    case 'updateAddress':
      return { ...state, address: action.value };

    case 'updateDetails':
      return { ...state, details: action.value };

    case 'updateFormLink':
      return { ...state, formLink: action.value };

    default:
      return state;
  }
}

export default function RequestModal({
  handleClose,
  type,
  user,
}: {
  handleClose: () => void;
  type: DonationType;
  user: {
    name: '';
    email: '';
    contact: '';
  };
}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  async function handleSubmit(e: any) {
    e.preventDefault();

    let data = {};
    if (user) {
      data = {
        ...state,
        name: user.name,
        email: user.email,
        contact: user.contact,
        donationType: type,
      };
    } else {
      data = {
        ...state,
        donationType: type,
      };
    }

    try {
      const res = await axios.post('/api/request/create', data);
      if (res.status == 200) {
        router.reload();
      }
    } catch (error) {
      alert(
        'There was an error while adding the request,\nPlease try again later'
      );
    }
  }

  return (
    <div className='fixed inset-0 grid h-full w-full place-items-center bg-slate-800 bg-opacity-50'>
      <form
        className='h-max w-[95%] rounded bg-white p-3 lg:w-96'
        onSubmit={handleSubmit}>
        <div className='flex items-center'>
          <p className='text-lg font-semibold'>Add Request</p>
          <p className='ml-auto cursor-pointer' onClick={handleClose}>
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
          </p>
        </div>
        <div className='my-3 flex w-full flex-col'>
          <div className='my-2 flex'>
            <p className='mr-3 w-[50%]'>
              <p className='text-sm font-medium text-slate-800'>Name :</p>
              <input
                type='text'
                className='w-full border-b border-slate-300 pt-2 text-sm text-slate-700 outline-none'
                onChange={(e) =>
                  dispatch({ type: 'updateName', value: e.target.value })
                }
                value={user.name}
                disabled
                required
              />
            </p>
            <p className='w-[50%]'>
              <p className='text-sm text-slate-800'>Contact No :</p>
              <input
                type='tel'
                className='w-full border-b border-slate-300 pt-2 text-sm text-slate-700 outline-none'
                onChange={(e) =>
                  dispatch({ type: 'updateContact', value: e.target.value })
                }
                value={user.contact}
                disabled
                required
              />
            </p>
          </div>

          <div className='my-2 flex'>
            <p className='mr-3 w-[50%]'>
              <p className='text-sm text-slate-800'>Type :</p>
              <input
                type='text'
                className='w-full border-b border-slate-300 pt-2 text-sm capitalize text-slate-700 outline-none'
                value={type}
                disabled={true}
                required
              />
            </p>

            <p className='w-[50%]'>
              <p className='text-sm text-slate-800'>Amount :</p>
              <input
                type='number'
                className='w-full border-b border-blue-500 pt-2 text-sm outline-none'
                onChange={(e) =>
                  dispatch({ type: 'updateAmount', value: e.target.value })
                }
                required
                placeholder='Amount of clothes'
              />
            </p>
          </div>

          <p className='my-2'>
            <p className='text-sm text-slate-800'>Email :</p>
            <input
              type='email'
              className='w-full border-b border-slate-300 pt-2 text-sm text-slate-700 outline-none'
              onChange={(e) =>
                dispatch({ type: 'updateEmail', value: e.target.value })
              }
              value={user.email}
              disabled
              required
            />
          </p>

          <p className='my-2'>
            <p className='text-sm text-slate-800'>Form Link :</p>{' '}
            <input
              type='url'
              className='w-full border-b border-blue-500 py-2 text-sm capitalize outline-none'
              onChange={(e) =>
                dispatch({ type: 'updateFormLink', value: e.target.value })
              }
              required
              placeholder='Link to donation form'
            />
          </p>

          <p className='my-2'>
            <p className='text-sm text-slate-800'>Address :</p>
            <textarea
              className='h-32 w-full border-b border-blue-500 pt-2 text-sm outline-none'
              onChange={(e) =>
                dispatch({ type: 'updateAddress', value: e.target.value })
              }
              required
              placeholder='Address of Ngo'
            />
          </p>
          <p className='my-2'>
            <p className='text-sm text-slate-800'>Additional Details :</p>
            <textarea
              className='h-32 w-full border-b border-blue-500 pt-2 text-sm outline-none'
              onChange={(e) =>
                dispatch({ type: 'updateDetails', value: e.target.value })
              }
              required
              placeholder='Details about the Donation to be received'
            />
          </p>
          <p className='mt-2 ml-auto'>
            <input
              value='Add Request'
              type='submit'
              className='w-max cursor-pointer rounded bg-blue-500 p-2 px-3 text-sm font-semibold text-white outline-none'
            />
          </p>
        </div>
      </form>
    </div>
  );
}

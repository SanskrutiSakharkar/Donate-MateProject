import { DonationType } from '@prisma/client';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useReducer } from 'react';
import { ngoList } from '@/libs/ngolist';

const initialState = {
  name: '',
  contact: '',
  email: '',
  amount: 0,
  address: '',
  details: '',
  type: DonationType,
  ngoName: '',
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
      | 'updateDonationType'
      | 'updateNgoName';
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

    case 'updateDonationType':
      return { ...state, type: action.value };

    case 'updateNgoName':
      console.log(action.value);
      return { ...state, ngoName: action.value };

    default:
      return state;
  }
}

export default function MiscellaneousDonationForm({
  handleClose,

  user,
}: {
  handleClose: () => void;

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
      };
    } else {
      data = {
        ...state,
      };
    }

    try {
      const res = await axios.post('/api/miscellinousDonations', data);
      if (res.status == 200) {
        alert('Donation Request Received Successfully');
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
          <p className='text-lg font-semibold'>Miscellaneous Donations</p>
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
                required
              />
            </p>
          </div>

          <div className='my-2 flex'>
            <p className='mr-3 w-[50%]'>
              <p className='text-sm text-slate-800'>Type :</p>
              <select
                className='w-full border-b border-blue-500 bg-white pt-[0.7rem] text-sm capitalize text-slate-700 outline-none'
                onChange={(e) =>
                  dispatch({
                    type: 'updateDonationType',
                    value: e.target.value,
                  })
                }>
                <option>Select Donation Type</option>
                <option value={DonationType.CLOTHES}>Clothes</option>
                <option value={DonationType.GRAINS}>Grains</option>
                <option value={DonationType.MONEY}>Money</option>
                <option value={DonationType.FOOD}>Food</option>
              </select>
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
                placeholder='Amount of Donations'
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
              required
            />
          </p>

          <p className='my-2'>
            <p className='text-sm text-slate-800'>NGO To Donate To :</p>
            <select
              className='w-full border-b border-blue-500 bg-white pt-[0.7rem] text-sm capitalize text-slate-700 outline-none'
              onChange={(e) =>
                dispatch({
                  type: 'updateNgoName',
                  value: e.target.value,
                })
              }>
              <option>Select NGO to Donate to </option>
              {ngoList.map((ngo) => (
                <option key={ngo}>{ngo}</option>
              ))}
            </select>
          </p>

          <p className='my-2'>
            <p className='text-sm text-slate-800'>Pickup Address :</p>
            <textarea
              className='h-32 w-full border-b border-blue-500 pt-2 text-sm outline-none'
              onChange={(e) =>
                dispatch({ type: 'updateAddress', value: e.target.value })
              }
              required
              placeholder='Address to pickup donation from'
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

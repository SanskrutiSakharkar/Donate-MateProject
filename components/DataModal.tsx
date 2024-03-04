import { Requests } from '@prisma/client';

export default function DataModal({
  handleClose,
  request,
}: {
  handleClose: () => void;
  request: Requests;
}) {
  return (
    <div className='fixed inset-0 grid h-full w-full place-items-center bg-slate-800 bg-opacity-50'>
      <div className='h-max w-[95%] rounded bg-white p-3 lg:w-2/4'>
        <div className='flex items-center'>
          <p className='text-lg font-semibold'>
            Donation Request for {request.amount} Clothes by {request.name}
          </p>
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
        <div className='my-3 flex w-full flex-col text-slate-800'>
          <p className='mb-2 w-full break-all bg-white p-1 text-sm'>
            {request.details}
          </p>

          <p className='mb-2 text-sm'>
            Contact : {request.contact} | {request.email}
          </p>
          <p className='text-sm'>Address : {request.address}</p>

          <p className='mt-4 ml-auto'>
            <a
              href={request.formLink}
              target='_blank'
              rel='noreferrer'
              className='w-max cursor-pointer rounded bg-blue-500 p-2 px-3 text-sm font-semibold text-white outline-none'>
              Make Donations
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

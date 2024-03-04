import { Requests } from '@prisma/client';
import { useState } from 'react';
import DataModal from './DataModal';

export default function DonationCard({ request }: { request: Requests }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='my-1 w-full shrink-0 lg:flex lg:w-fit lg:flex-wrap'>
      {modalOpen ? (
        <DataModal
          request={request}
          handleClose={() => setModalOpen(!modalOpen)}
        />
      ) : null}
      <div
        className='mb-5 h-fit w-full rounded border border-black bg-slate-100 p-2 px-4 hover:shadow-md lg:mr-5 lg:w-fit'
        onClick={() => setModalOpen(true)}>
        <p className='mt-1 text-lg font-semibold'>
          Donation request for {request.amount} Clothes
        </p>

        <span className='my-2 flex items-center'>
          <p className='text-sm text-slate-700'>By : {request.name} </p>
          <p className='ml-auto text-sm text-slate-700'>
            Req. Amount : {request.amount}
          </p>
        </span>

        <p className='text-sm underline'>Read more</p>
      </div>
    </div>
  );
}

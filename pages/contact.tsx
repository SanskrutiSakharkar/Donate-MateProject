import Layout from '@/components/Layout';
import LoadingIcon from '@/components/Loading';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Poppins } from '@next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: '600' });

export default function About() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handelContact() {
    setLoading(true);
    const data = {
      name,
      contact,
      subject,
      email,
      message,
    };
    try {
      const res = await axios.post('/api/contact', data);
      if (res.status == 200) {
        alert('Message sent successfully');
        router.push('/');
      }
    } catch (error) {
      alert('There was an error in sending message');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <div className='p-4'>
        <Image alt='hero-image' src='/contact.png' width={1396} height={479} />
        <div className='my-4 px-1 lg:px-4'>
          <h1
            className={`text-4xl font-semibold lg:text-6xl ${poppins.className}`}>
            Contact Us
          </h1>
          <p className='my-2 text-sm text-slate-500'>
            Feel free to drop a message or visit us, we&apos;d love to have you
            with us
          </p>
          <div className='my-4 lg:my-7 lg:flex'>
            <div className='lg:w-1/4'>
              <p className='pb-2 text-3xl font-semibold text-slate-600 lg:pb-6'>
                Address
              </p>
              <p className='py-2 lg:py-3'>House no., Area, 44026</p>
              <p className='py-2 lg:py-3'>Contact no.</p>
              <p className='py-2 lg:py-3'>Email addresss</p>
            </div>
            <div className='flex-col pt-4 lg:flex lg:w-fit lg:border-l-2 lg:border-l-gray-400 lg:pt-0 lg:pl-16'>
              <p className='pb-3 text-3xl font-semibold text-slate-600 lg:pb-3'>
                Send us a message
              </p>

              <div className='mb-2 flex w-full items-center rounded border border-slate-300 bg-gray-300 opacity-80'>
                <p
                  className={`w-full p-1 text-center ${
                    subject === ''
                      ? 'rounded bg-blue-500 text-white'
                      : 'text-slate-600'
                  }`}
                  onClick={() => setSubject('')}>
                  Contact
                </p>
                <p
                  className={`ml-auto mr-auto w-full p-1 text-center ${
                    subject === 'Feedback for the app'
                      ? 'rounded bg-blue-500 text-white'
                      : 'text-slate-600'
                  }`}
                  onClick={() => setSubject('Feedback for the app')}>
                  Feedback
                </p>
              </div>

              <div className='lg:w-fit'>
                <input
                  placeholder='Name'
                  type='text'
                  className='my-2 w-full rounded bg-gray-300 p-2 focus:outline-none lg:mr-2 lg:w-fit'
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  placeholder='Contact'
                  type='tel'
                  className='my-2 w-full rounded bg-gray-300 p-2 focus:outline-none lg:ml-2 lg:w-fit'
                  required
                  onChange={(e) => setContact(e.target.value)}
                />
                <p>
                  <input
                    placeholder='Email'
                    type='email'
                    className='my-2 w-full rounded bg-gray-300 p-2 focus:outline-none'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </p>
                <p>
                  <input
                    placeholder='Subject'
                    type='text'
                    className='my-2 w-full rounded bg-gray-300 p-2 focus:outline-none'
                    required
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                  />
                </p>
                <p>
                  <textarea
                    placeholder='Message'
                    className='my-2 w-full  rounded bg-gray-300 p-2 focus:outline-none'
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </p>
              </div>
              <button
                className='ml-auto flex items-center justify-center rounded bg-black p-2 px-4 text-white'
                onClick={() => handelContact()}
                disabled={loading ? true : false}>
                {loading ? <LoadingIcon /> : null}
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

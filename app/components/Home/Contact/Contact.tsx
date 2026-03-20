'use client';
import React, { useState } from 'react';
import { BiEnvelope, BiMap, BiLogoLinkedin } from 'react-icons/bi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('loading');

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      }),
    });

    const data = await res.json();
    if (data.success) {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } else {
      setStatus('error');
    }
  } catch {
    setStatus('error');
  }
};

  return (
    <div className='pt-16 pb-16' id="Contact">
      <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200 flex justify-center mb-15'>
        Contact Info
      </h1>
      <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 items-center'>

        {/* left — contact info */}
        <div>
          <p className='text-gray-400 mt-6 text-base sm:text-lg'>
            Let's work together! Feel free to reach out for collaborations, opportunities, or just to say hello
          </p>
          <div className='mt-7'>
            <a href='mailto:rishabhtripathi1956@gmail.com'>
              <div className='flex items-center space-x-3 mb-4'>
                <BiEnvelope className='w-9 h-9 text-cyan-300' />
                <p className='text-xl font-bold text-gray-400'>rishabhtripathi1956@gmail.com</p>
              </div>
            </a>
            <a href='https://www.linkedin.com/in/rishabh-tripathi-575252290/'>
              <div className='flex items-center space-x-3 mb-4'>
                <BiLogoLinkedin className='w-9 h-9 text-cyan-300' />
                <p className='text-xl font-bold text-gray-400'>Rishabh Tripathi</p>
              </div>
            </a>
            <div className='flex items-center space-x-3 mb-4'>
              <BiMap className='w-9 h-9 text-cyan-300' />
              <p className='text-xl font-bold text-gray-400'>Delhi, India</p>
            </div>
          </div>
        </div>

        {/* right — form */}
        <form
          onSubmit={handleSubmit}
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          className='md:p-10 p-5 bg-[#131332] rounded-lg'
        >
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder='Name'
            required
            className='px-4 py-3.5 mt-6 bg-[#363659] text-white rounded-md w-full placeholder:text-white/70 outline-none'
          />
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='Email'
            required
            className='px-4 py-3.5 mt-6 bg-[#363659] text-white rounded-md w-full placeholder:text-white/70 outline-none'
          />
          <input
            type='tel'
            name='phone'
            value={form.phone}
            onChange={handleChange}
            placeholder='Number'
            className='px-4 py-3.5 mt-6 bg-[#363659] text-white rounded-md w-full placeholder:text-white/70 outline-none'
          />
          <textarea
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='Your message'
            required
            className='px-4 py-3.5 mt-6 bg-[#363659] text-white rounded-md w-full placeholder:text-white/70 outline-none h-[10rem]'
          />

          
          <button
  type="submit"
  className="relative bottom-0 flex justify-center items-center gap-2 border border-[#000] rounded-xl text-[#FFF] font-black bg-[#000] uppercase px-8 py-4 z-10 overflow-hidden ease-in-out duration-700 group hover:text-[#000] hover:bg-[#FFF] active:scale-95 active:duration-0 focus:bg-[#FFF] focus:text-[#000] isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFF] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700"
>
  <span
    className="truncate eaes-in-out duration-300 group-active:-translate-x-96 group-focus:translate-x-96"
    >Send Message</span>
  <div
    className="absolute flex flex-row justify-center items-center gap-2 -translate-x-96 eaes-in-out duration-300 group-active:translate-x-0 group-focus:translate-x-0"
  >
    <div
      className="animate-spin size-4 border-2 border-[#000] border-t-transparent rounded-full"
    ></div>
    Processing...
  </div>
  <svg
    className="fill-[#FFF] group-hover:fill-[#000] group-hover:-translate-x-0 group-active:translate-x-96 group-active:duration-0 group-focus:translate-x-96 group-focus:fill-[#000] ease-in-out duration-700"
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 512 512"
    height="16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"
    ></path>
  </svg>
             </button>

          {status === 'success' && (
            <p className='mt-4 text-green-400 font-medium'>✓ Message sent! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className='mt-4 text-red-400 font-medium'>Something went wrong. Try emailing directly.</p>
          )}
        </form>

      </div>
    </div>
  );
};

export default Contact;
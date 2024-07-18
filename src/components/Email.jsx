import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();


  function sendEmail(e){
    e.preventDefault();

    emailjs
      .sendForm('service_4ok504r', 'template_1egeymq', form.current, {
        publicKey: 'SRVXc1_brkObmiJZC',
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  }

  return (
    <form className='flex flex-col font-medium gap-5' ref={form} onSubmit={sendEmail}>
      <div className='items-start'> 
        
      </div>
      <div className='items-start'>
      <label className='block text-white text-sm  mb-2 font-thin tracking-tight'>Name</label>
      <input  placeholder='' className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500" type="text" name="user_name" required />
      </div>
      <div className='items-start'>
      <label className='block text-white text-sm  mb-2 font-thin tracking-tight'>Email</label>
      <input  placeholder='' className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500" type="email" name="user_email" required />
      </div>
      <div className='items-start'>
      <label className='block text-white text-sm font-thin tracking-tight mb-2'>Message</label>
      <textarea placeholder='' className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500" name="message" required />
      </div>
      <button className='cursor-pointer bg-purple-800 text-white border-none rounded p-2' type="submit">send</button>
    </form>
  );
};
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
    <form className='flex flex-col font-medium'  ref={form} onSubmit={sendEmail}>
      <label className='mt-2'>Name</label>
      <input type="text" name="user_name" />
      <label className='mt-2'>Email</label>
      <input type="email" name="user_email" />
      <label className='mt-2'>Message</label>
      <textarea className='max-w-full min-w-full w-full max-h-full min-h-full h-full outline-none border-neutral-500 rounded-md p-2' name="message" />
      <button className='mt-2 cursor-pointer bg-black text-white border-none' type="submit">send</button>
    </form>
  );
};
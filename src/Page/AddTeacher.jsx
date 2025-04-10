import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const AddTeacher = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [about, setAbout] = useState('');

  const fetchAdd = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append('fullname', fullname);
    formdata.append('email', email);
    formdata.append('phone_number', number);
    formdata.append('password', password);
    formdata.append('Role', 'USER');
    formdata.append('is_verified', 'false');

    // Fetch image or any other required file here
    fetch('https://skrinshoter.ru/sUWzKfusgqB')
      .then(response => response.blob())
      .then(blob => {
        formdata.append('image', blob, 'fixed-image.jpg');

        const requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow',
        };

        return fetch('https://api.ashyo.fullstackdev.uz/users/add', requestOptions);
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Reset form or redirect after successful addition
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='md:px-[35px] pr-[10px] pl-[30px] py-4'>
      <div className='flex flex-wrap gap-3 justify-between items-center'>
        <h1 className='text-[#4F4F4F] text-[20px] font-medium'>Teachers</h1>
        <button
          onClick={fetchAdd}
          className='flex items-center justify-center gap-x-2 w-[80px] h-[40px] rounded-[4px] bg-[#509CDB] text-white font-semibold hover:bg-blue-800 duration-300 max-sm:w-[50px]'
        >
          Save
        </button>
      </div>
      <div>
        <form onSubmit={fetchAdd} className='flex flex-col my-[30px]'>
          <label className='text-[#8A8A8A] text-[14px] font-medium mb-[5px]'>Full Name</label>
          <input
            type='text'
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className='w-full h-[42px] px-[10px] border border-gray-400 outline-none rounded-[4px] mb-[30px]'
          />

          <label className='text-[#8A8A8A] text-[14px] font-medium mb-[5px]'>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full h-[42px] px-[10px] border border-gray-400 outline-none rounded-[4px] mb-[30px]'
          />

          <label className='text-[#8A8A8A] text-[14px] font-medium mb-[5px]'>Phone Number</label>
          <input
            type='text'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className='w-full h-[42px] px-[10px] border border-gray-400 outline-none rounded-[4px] mb-[30px]'
          />

          <label className='text-[#8A8A8A] text-[14px] font-medium mb-[5px]'>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full h-[42px] px-[10px] border border-gray-400 outline-none rounded-[4px] mb-[30px]'
          />

          <label className='text-[#8A8A8A] text-[14px] font-medium mb-[5px]'>About</label>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className='w-full h-[180px] px-[10px] border border-gray-400 outline-none rounded-[4px] mb-[30px]'
          ></textarea>
        </form>
      </div>
    </div>
  );
};

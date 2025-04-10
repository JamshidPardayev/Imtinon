import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const goLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://api.ashyo.fullstackdev.uz/auth/login', { email, password });
      localStorage.setItem("token", response.data.token);
      navigate('/Dashboard'); 
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Invalid credentials. Please try again.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className='h-[100vh] bg-pink-50 content-center px-4'>
      <h1 className='text-[#4F4F4F] text-[36px] font-semibold text-center mb-[50px]'>Welcome, Log into your account</h1>
      <form onSubmit={goLogin} className='flex flex-col gap-y-[14px] justify-center items-center max-w-[512px] min-h-[382px] mx-auto bg-white'>
        {error && <p className='text-red-500'>{error}</p>}
        <p className='w-[240px] text-[16px] font-medium text-gray-500 text-center'>It is our great pleasure to have you on board!</p>
        <input 
          className='w-[240px] px-2 h-[42px] border border-gray-400 outline-none rounded-[4px]' 
          type="text" 
          placeholder='Enter your Login' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          className='w-[240px] px-2 h-[42px] border border-gray-400 outline-none rounded-[4px]' 
          type="password" 
          placeholder='Enter Password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button className='w-[240px] h-[42px] bg-[#2D88D4] text-[14px] font-bold text-white hover:bg-blue-800 duration-500 rounded-[4px]' type="submit">Login</button>
        <Link to="/Register">
          <button className='w-[240px] h-[42px] bg-gray-100 text-[14px] font-bold text-[#2D88D4] hover:bg-gray-300 duration-500 rounded-[4px]' type="button">Sign Up</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;

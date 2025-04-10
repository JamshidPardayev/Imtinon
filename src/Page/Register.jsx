import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!fullname || !email || !password) {
            setError('All fields are required.');
            return;
        }

        setLoading(true);

        try {
            const res = await axios.post('https://api.ashyo.fullstackdev.uz/auth/register', {  fullname, email, password });
            localStorage.setItem("token", res.data.token);
            localStorage.setItem('userData', JSON.stringify({ fullname, email }));
            setFullname('');
            setEmail('');
            setPassword('');
            navigate('/');
        } catch (error) {
            const message = error.response?.data?.message || 'An error occurred';
            setError(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='h-screen bg-pink-50 flex items-center justify-center px-4'>
            <div className='max-w-md w-full'>
                <h1 className='text-[#4F4F4F] text-[36px] font-semibold text-center mb-8'>Welcome, Sign up</h1>
                {error && <p className='text-red-500 text-center'>{error}</p>}
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 bg-white p-6 rounded shadow'>
                    <input
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        className='w-full px-2 h-10 border border-gray-400 outline-none rounded'
                        type="text"
                        placeholder='Enter your Name'
                        required
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full px-2 h-10 border border-gray-400 outline-none rounded'
                        type="email"
                        placeholder='Enter your Email'
                        required
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full px-2 h-10 border border-gray-400 outline-none rounded'
                        type="password"
                        placeholder='Enter Password'
                        required
                    />
                    <button
                        type="submit"
                        className='w-full h-10 bg-[#2D88D4] text-white font-bold hover:bg-blue-800 duration-500 rounded'
                    >
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                    <Link to="/">
                        <button
                            type="button"
                            className='w-full h-10 bg-gray-100 text-[#2D88D4] font-bold hover:bg-gray-300 duration-500 rounded'
                        >
                            Login
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Register;

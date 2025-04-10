import React from 'react'
import { Link } from 'react-router-dom'

export const AddTeacher = () => {
  return (
    <div className='md:px-[35px] pr-[10px] pl-[30px] py-4'>
        <div className='flex flex-wrap gap-3 justify-between items-center'>
                <h1 className='text-[#4F4F4F] text-[20px] font-medium'>Teachers</h1>
                <button className='flex items-center justify-center gap-x-2 w-[80px] h-[40px] rounded-[4px] bg-[#509CDB] text-white font-semibold hover:bg-blue-800 duration-300 max-sm:w-[50px] '>Save</button>
        </div>
        <div>
            <form action="" className='flex flex-col my-[30px]'>
                    <label htmlFor="" className='text-[#8A8A8A] text-[14px] font-medium mb-[5px]'>Full Name</label>
                    <input type="text"  className='w-full h-[42px] px-[10px] border border-gray-400 outline-none rounded-[4px] mb-[30px]'/>

                    <label htmlFor="" className='text-[#8A8A8A] text-[14px] font-medium mb-[5px]'>Email</label>
                    <input type="email"  className='w-full h-[42px] px-[10px] border border-gray-400 outline-none rounded-[4px] mb-[30px]'/>

                    <label htmlFor="" className='text-[#8A8A8A] text-[14px] font-medium mb-[5px]'>Phone Number</label>
                    <input type="number"  className='w-full h-[42px] px-[10px] border border-gray-400 outline-none rounded-[4px] mb-[30px]'/>

                    <label htmlFor="" className='text-[#8A8A8A] text-[14px] font-medium mb-[5px]'>Password</label>
                    <input type="password"  className='w-full h-[42px] px-[10px] border border-gray-400 outline-none rounded-[4px] mb-[30px]'/>

                    <label htmlFor="" className='text-[#8A8A8A] text-[14px] font-medium mb-[5px]'>About</label>
                    <textarea name="" id="" className='w-full h-[180px] px-[10px] border border-gray-400 outline-none rounded-[4px] mb-[30px]'></textarea>

                <div>

                </div>
            </form>
        </div>
    </div>
  )
}

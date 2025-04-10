import React from 'react'
import { FaUserTie } from "react-icons/fa6";
import { LuHeadset } from "react-icons/lu";
import { FaAngleUp } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { LuGraduationCap } from "react-icons/lu";

const Dashboard = () => {
  return (
    <div className='part3  flex items-end gap-x-1 px-[60px] max-lg:flex-col max-lg:items-start max-md:px-3'>
     <div>
      <h1 className='text-[#4f4f4f] font-semibold text-[36px] mt-[50px] max-md:text-[30px]'>Welcome to your dashboard, Udemy school</h1>
      <h2 className='text-[#4F4F4F] text-[24px] font-semibold mt-[20px] px-[60px] max-lg:px-0 max-md:text-[20px]'>Uyo/school/ @teachable.com</h2>
      <div className='px-[60px] my-[50px] max-lg:px-0'>
        <div className='flex items-start gap-x-[20px] mt-[40px] max-md:gap-x-3'>
          <p className='h-[36px] w-[36px] bg-[#EFF3FA] rounded-[8px] flex items-center justify-center mt-2 text-[#13296A] max-md:px-2'><FaUserTie /></p>
          <div>
            <h3 className='text-[#4F4F4F] text-[24px] font-medium max-md:text-[20px]'>Add other admins </h3>
            <p className='text-[#4F4F4F] text-[14px] max-w-[460px] mt-[10px]'>Create rich course content and coaching products for your students.
            When you give them a pricing plan, they'll appear on your site!</p>
          </div>
        </div>

        <div className='flex items-start gap-x-[20px] mt-[40px] max-md:gap-x-3'>
          <p className='h-[36px] w-[36px] bg-[#EFF3FA] rounded-[8px] flex items-center justify-center mt-2 text-[#13296A] max-md:px-2'><BsBank /></p>
          <div>
            <h3 className='text-[#4F4F4F] text-[24px] font-medium max-md:text-[20px]'>Add classes </h3>
            <p className='text-[#4F4F4F] text-[14px] max-w-[460px] mt-[10px]'>Create rich course content and coaching products for your students.
            When you give them a pricing plan, they'll appear on your site!</p>
          </div>
        </div>

        <div className='flex items-start gap-x-[20px] mt-[40px] max-md:gap-x-3'>
          <p className='h-[36px] w-[36px] bg-[#EFF3FA] rounded-[8px] flex items-center justify-center mt-2 text-[#13296A] max-md:px-2'><LuGraduationCap /></p>
          <div>
            <h3 className='text-[#4F4F4F] text-[24px] font-medium max-md:text-[20px]'>Add students </h3>
            <p className='text-[#4F4F4F] text-[14px] max-w-[460px] mt-[10px]'>Create rich course content and coaching products for your students.
            When you give them a pricing plan, they'll appear on your site!</p>
          </div>
        </div>
      </div>
     </div>
      <button className='flex items-center content-end mb-[50px] px-[24px] font-semibold text-white gap-x-2 w-[181px] h-[60px] rounded-[30px] bg-[#152259] hover:bg-blue-800 duration-300'><LuHeadset /> Support <FaAngleUp className='ml-5'/></button>
    </div>
  )
}

export default Dashboard
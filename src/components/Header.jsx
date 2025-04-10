import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { CgLogOut } from "react-icons/cg";

const Header = ({isOpen, setIsOpen}) => {
  return (
    <div className='sticky top-0 left-0 part2 min-h-[95px] py-2 bg-[#FCFAFA] flex  flex-wrap items-center gap-x-[15px] gap-y-3  justify-between w-full max-sm:overflow-x-hidden'>
        <FaArrowRightArrowLeft onClick={()=>{setIsOpen(!isOpen)}} className='text-[20px] text-[#333333] ml-[30px] hover:text-blue-600 cursor-pointer duration-300'/>
        <div className='flex items-center flex-wrap gap-y-3'>
            <div className='relative mr-[50px] max-sm:mr-[0px] max-sm:ml-[30px]'>
                <IoMdNotificationsOutline  className='text-[24px] hover:text-blue-600 cursor-pointer duration-300'/>  
                <p className='absolute top-[0px] right-0 h-[12px] w-[12px] rounded-[50%] bg-[#2D88D4]'></p>
            </div>
            <Link to={'/'}>
            <button className='flex items-center justify-center gap-x-2 w-[120px] h-[40px] bg-[#509CDB] rounded-[8px] text-[14px] text-white font-semibold mr-[35px] hover:bg-blue-800 duration-300 max-md:mr-3 max-sm:w-[50px] max-sm:ml-[30px]'><p className='max-sm:hidden'>Log Out</p> <CgLogOut  className='text-[18px]'/></button>
            </Link>
        </div>
    </div>
  )
}

export default Header
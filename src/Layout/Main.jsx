import React, { useState } from 'react'
import { Nav } from '../components/Nav'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Main = () => {
    const [isOpen, setIsOpen ] = useState(true);

  return (
    <div className='flex'>
       <div className="">
            <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
       </div>
        <div className="w-[100%]">
            <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Outlet/>
        </div>

    </div>
  )
}

export default Main
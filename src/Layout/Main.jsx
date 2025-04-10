import React, { useState } from 'react'
import { Nav } from '../components/Nav'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Main = () => {
    const [isOpen, setIsOpen ] = useState(true);

  return (
    <div className='flex'>
       <div className="max-w-[241px]">
            <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
       </div>
        <div className="w-full overflow-x-hidden">
            <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Outlet/>
        </div>

    </div>
  )
}

export default Main
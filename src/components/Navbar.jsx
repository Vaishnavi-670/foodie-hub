"use client"
import React, { useState } from 'react'
import Login from '../app/login/page'
import Link from 'next/link';
import Signup from '@/app/signup/page';



const Navbar = () => {

  const [login, setlogin] = useState(true);

  return (
    <div className=" hero ">
      <nav className="flex justify-between items-center h-20 w-full">
        <div className="nav-image">
          <img style={{ width: 150 }} src='https://s.tmimgcdn.com/scr/1200x627/242400/food-delivery-custom-design-logo-template_242462-original.png'></img>
        </div>
        <div className="nav-link">
          <ul className='flex list-none'>
            <li className='mx-2 my-2 px-2'>
              <Link href="./login" className="text-black text-lg font-medium no-underline">Login</Link>
              
            </li>
            <li className='mx-2 my-2 px-2'>
              <Link href="#" className="text-black text-lg font-medium no-underline">About</Link>
            </li>
            <li className='mx-2 my-2 px-2'>
              <Link href="#" className="text-black text-lg font-medium no-underline">Service</Link>
            </li>
            <li className='mx-2 my-2 px-2'>
              <Link href="#" className="text-black text-lg font-medium no-underline">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    )
}

export default Navbar
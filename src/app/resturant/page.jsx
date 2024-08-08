'use client'
import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Contact from '@/components/Contact'

const Resturant = () => {
  const [login, setlogin] = useState(true)
  return (
    <>
      <div className='container'>
        {/* <Navbar/> */}
        {
          login ? <Login /> : <Signup />
        }
        
      </div>
      {/* <ResturantFooter/> */}
      
    </>
  )
}

export default Resturant; 
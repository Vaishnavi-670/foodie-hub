'use client'
import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Login from '@/components/Login'
import Signup from '@/components/Signup'

const Resturant = () => {
  const [login, setlogin] = useState(true)
  return (
    <>
      <div className='container'>
        {/* <Navbar/> */}
        {
          login ? <Login /> : <Signup />
        }
        <div>
        <button className='btn btn-link text-primary border-0 m-2' onClick={() => setlogin(!login)}>
          {login ? "Do not have Account ?Signup" : " ALready have an Account ?Login"}
        </button></div>
      </div>
      {/* <ResturantFooter/> */}
    </>
  )
}

export default Resturant; 
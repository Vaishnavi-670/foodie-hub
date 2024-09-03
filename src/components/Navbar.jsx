import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="bg-transparent mr-4 ml-4 p-1 mt-2 w-[98%]">
        <div className="  flex items-center justify-between h-20">
          <div className="flex items-center">
            <img style={{ width: 150 }} src='https://s.tmimgcdn.com/scr/1200x627/242400/food-delivery-custom-design-logo-template_242462-original.png'></img>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-900 font-semibold hover:text-black px-3 py-2 rounded-full hover:bg-gray-200 transition duration-500 ease-in-out text-lg">Home</Link>
            <Link href="/shop" className="text-gray-900 hover:text-black px-3 font-semibold py-2 rounded-full hover:bg-gray-200 transition duration-500 ease-in-out text-lg">Shop</Link>
            <Link href="/aboutus" className="text-gray-900 hover:text-black px-3 py-2 font-semibold rounded-full hover:bg-gray-200 transition duration-500 ease-in-out text-lg">About Us</Link>
            <Link href="/contact" className="text-gray-900 hover:text-black px-3 py-2 font-semibold rounded-full hover:bg-gray-200 transition duration-500 ease-in-out text-lg">Contact</Link>
            <Link href="/faq" className="text-gray-900 hover:text-black px-3 py-2 font-semibold rounded-full hover:bg-gray-200 transition duration-500 ease-in-out text-lg">FAQ</Link>
          </div>
          <div className="flex items-center mr-3 space-x-4">
            <Link href='/login' className="text-gray-600 hover:text-black font-semibold text-lg">Log in</Link>
            <Link href='/signup' className="bg-gray-800 text-white px-5 py-2  rounded-full hover:bg-black transition duration-300 ease-in-out">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
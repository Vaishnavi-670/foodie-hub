"use client"
import Link from 'next/link'
import React from 'react'

const Signup = () => {
    return (
        <>
            <div className="h-[85vh]  flex justify-center items-center ">
                <div className="bg-gray-200  shadow-4xl p-5 rounded-3xl box-border border-black-800  text-center" style={{ height: '650px', width: '450px' }}>
                    <p className="font-sans text-3xl font-bold" style={{ margin: '5px 0 20px 0' }}>Sign up </p>
                    <form className="w-full  flex flex-col gap-4 mb-3.5">
                        <input type="email" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Enter your email" />
                        <input type="password" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Password" />
                        <input type="password" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Confirm Password" />
                        <input type="text" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Enter restaurant name" />
                        <input type="text" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Enter city" />
                        <input type="text" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Enter Full Address" />
                        <input type="number" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Enter contact Number" />
                        <button className="p-2.5 font-sans rounded-full border-0 outline-none bg-teal-500 text-white text-bold cursor-pointer shadow-md active:shadow-none hover:bg-teal-600">SignUp</button>
                        <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                            Already have an account?
                            <Link
                                className="ml-1 block font-sans text-sm font-bold leading-normal text-cyan-500 antialiased"
                                href="/login"
                            >
                                Log in
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup
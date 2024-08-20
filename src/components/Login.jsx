"use client"
import React  from 'react'

const Login = () => {
    return (
        <>
            <div className="min-h-screen flex justify-center items-center ">
                <div className=" bg-white shadow-2xl rounded-lg box-border text-center  flex flex-col justify-center items-center" style={{ height: '400px', margin: '10px 0 0 0', width: '350px', padding: '20px 30px', }}>
                    <p className=" font-sans text-3xl font-bold" style={{ margin: '10px 0 30px 0' }}>Login Page</p>
                    <form className="w-full flex flex-col gap-4 mb-3.5">
                        <input type="email" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Enter your email" />
                        <input type="password" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Password" />
                        <p className="underline m-0 text-right text-gray-600">
                            <span className="cursor-pointer font-sans text-xs font-bold hover:text-black">Forgot Password?</span>
                        </p>
                        <button className="p-2.5 font-sans rounded-full border-0 outline-none bg-teal-500 text-white text-base cursor-pointer shadow-md active:shadow-none hover:bg-teal-600">Login</button>
                        <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                            Don't have an account?
                            <a
                                className="ml-1 block font-sans text-sm font-bold leading-normal text-cyan-500 antialiased"
                                href="/signup"
                            >
                                Sign up
                            </a>
                        </p>
                    </form>

                </div>
            </div>




        </>
    )
}

export default Login
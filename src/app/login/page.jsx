"use client"
import { useFormik } from 'formik'
import Link from 'next/link'
import React  from 'react'

const Login = () => {
    const loginComponent = useFormik({
        initialValues:{
            email:'',
            password:'',
        },
        onSubmit: (values) => {
            console.log(values);
            
        }
    })
    return (
        <>
            <div className="h-[80vh] flex justify-center items-center ">
                <form onSubmit={loginComponent.handleSubmit} className=" bg-white shadow-2xl rounded-lg box-border text-center  flex flex-col justify-center items-center" style={{ height: '500px', margin: '15px 0 0 0', width: '400px', padding: '20px 30px', }}>
                    <p className=" font-sans text-3xl font-bold" style={{ margin: '10px 0 30px 0' }}>Log in </p>
                     <div className="w-full flex flex-col gap-4 mb-3.5">
                        <input id='email' onChange={loginComponent.handleChange} value={loginComponent.values.email} type="email" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Enter your email" />
                        <input id='password' onChange={loginComponent.handleChange} value={loginComponent.values.password} type="password" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Password" />
                        <p className="underline m-0 text-right text-gray-600">
                            <span className="cursor-pointer font-sans text-base font-bold hover:text-black">Forgot Password?</span>
                        </p>
                        <button className="p-2.5 font-sans rounded-full border-0 outline-none bg-teal-500 text-white text-base cursor-pointer shadow-md active:shadow-none hover:bg-teal-600">Login</button>
                        <p className="mt-6 flex justify-center text-base font-light leading-normal text-inherit antialiased">
                            Don't have an account?
                            <Link
                                className="ml-1 block font-sans  font-bold leading-normal text-cyan-500 antialiased"
                                href="/signup"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>

                </form>
            </div>




        </>
    )
}

export default Login
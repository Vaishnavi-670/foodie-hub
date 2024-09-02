"use client"
import { useFormik } from 'formik'
import Link from 'next/link'
import { enqueueSnackbar } from 'notistack'
import React from 'react'

const Signup = () => {
    const signupform = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            resturent: '',
            city: '',
            address: '',
            contactNumber: ''
        },
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            console.log(values)
            setSubmitting(true);

            const res = await fetch('http://localhost:5000/user/add',
                {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            setSubmitting(false);
            if (res.status ===200){
                enqueueSnackbar('Signed Up Successfully' ,{varient:'error'});

                const data = await res.json();
                localStorage.setItem('user', JSON.stringify(data));
            }
            else if (res.status === 401 ){
                enqueueSnackbar('Invalid Credientials' ,{varient:'error'});
            }else {
                enqueueSnackbar('Something Went Wrong' ,{varient:'error'});
            }

        }
    })
    return (
        <>
            <div className="h-[85vh]  flex justify-center items-center ">
                <form onSubmit={signupform.handleSubmit} className="bg-gray-200  shadow-4xl p-5 rounded-3xl box-border border-black-800  text-center" style={{ height: '650px', width: '450px' }}>
                    <p className="font-sans text-3xl font-bold" style={{ margin: '5px 0 20px 0' }}>Sign up </p>
                    <div className="w-full  flex flex-col gap-4 mb-3.5">
                        <input id='name' onChange={signupform.handleChange} value={signupform.values.name} type="name" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Enter your name" />
                        <input id='email' onChange={signupform.handleChange} value={signupform.values.email} type="email" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Enter your email" />
                        <input id='password' onChange={signupform.handleChange} value={signupform.values.password} type="password" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Password" />
                        <input id='confirmpassword' onChange={signupform.handleChange} value={signupform.values.confirmPassword} type="password" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Confirm Password" />
                        <input id='resturent' onChange={signupform.handleChange} value={signupform.values.resturent} type="text" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Enter resturant name" />
                        <input id='city' onChange={signupform.handleChange} value={signupform.values.city} type="text" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Enter city" />
                        <input id='address' onChange={signupform.handleChange} value={signupform.values.address} type="text" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Enter Full Address" />
                        <input id='contactNumber' onChange={signupform.handleChange} value={signupform.values.contactNumber} type="number" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Enter contact Number" />
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
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup
import React from 'react'

const Signup = () => {
  return (
    <>
    <div className="min-h-screen  flex justify-center items-center ">
      <div className="bg-gray-200  shadow-4xl rounded-lg box-border border-black-800 p-5 text-center"style={{height:'650px',width:'400px'}}>
        <p className="font-sans text-3xl font-bold" style={{ margin: '10px 0 30px 0' }}>Signup Page</p>
        <form className="w-full  flex flex-col gap-4 mb-3.5">
          <input type="email" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Enter your email" />
          <input type="password" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Password" />
          <input type="password" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Confirm Password" />
          <input type="text" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Enter restaurant name" />
          <input type="text" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Enter city" />
          <input type="text" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Enter Full Address" />
          <input type="number" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Enter contact Number" />
          <button className="p-2.5 font-sans rounded-full border-0 outline-none bg-teal-500 text-white text-bold cursor-pointer shadow-md active:shadow-none hover:bg-teal-600">SignUp</button>
        </form>
        </div>
      </div>
    </>
  )
}

export default Signup
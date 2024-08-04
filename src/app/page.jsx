import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <img src="" alt="" />
      <div className="flex flex-col gap-10 justify-center items-center ">
        <h1 className="text-6xl font-bold  justify-center items-center">Welcome to Foodie Hub</h1>
        <p>Discover the best food in town, curated by our experts.</p>
        <Link href="/search">
          <button className="text-white bg-blue-500 hover:bg-blue-700 px-12 py-4 rounded-lg">Get Started</button>
        </Link>

      </div>

    </>

  )
}

export default page
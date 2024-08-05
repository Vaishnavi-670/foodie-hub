import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    
      {/* <video style={{bottom:'0', zIndex:-1}} src=""></video> */}
        
  <div className="  text-black py-20 flex flex-col">
    <div className="container mx-auto flex flex-col  md:flex-row items-start justify-center  md:my-24">
      <div className=" w-full mt-7 lg:w-1/3 justify-center items-start ">
        <h1 className="text-6xl mt-7 font-bold  text-center text-orange-600 ">Welcome to Foodie Hub</h1>
        <h2 className="text-3xl mt-5 leading-relaxed md:leading-snug mb-2">Take a taste Come join us</h2>
        <p className="text-sm mt-3 md:text-base text-black mb-4">
        Discover the best food in town, curated by our experts.        </p>
        <Link href="/search">
          <button className=" text-black mt-2 bg-yellow-300 hover:bg-yellow-400  px-12 py-4 rounded-lg">Explore more</button>
        </Link>
      </div>
      <div className="p-8 mt-12 mb-6 md:ml-12 justify-center">
        <div className="h-48 flex flex-wrap content-center">
          <div>
            <img
              className="inline-block mt-28  lg:block animated-image"
              src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
              alt="TechFest Image 1"
            />
          </div>
          <div>
            <img
              className="inline-block mt-24 md:mt-0 p-8 md:p-0 animated-image"
              src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
              alt="TechFest Image 2"
            />
          </div>
          <div>
            <img
              className="inline-block mt-28  lg:block animated-image"
              src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
              alt="TechFest Image 3"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="z-30 relative items-center justify-center w-full h-full overflow-auto">
      <div
        className="inset-0 h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('https://media.istockphoto.com/id/1077760470/photo/pizza-with-cheese-and-tomato-sauce-isolated.webp?b=1&s=170667a&w=0&k=20&c=WocF5H4HoLteQPkYh8xsHLj2JVtiYnhnwWfCGwS325Y=')",
        }}
      ></div>
      <div className="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-orange-200 bg-opacity-75"></div>
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center">
        <div
          className="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://media.istockphoto.com/id/172268801/photo/slice-of-pizza.webp?b=1&s=170667a&w=0&k=20&c=FK9gad5WvYQTdjbO8qoZ7CF4_sZ3SBuftffl7aGBz94=')",
          }}
        >
          <div className="grid grid-cols-12 h-full">
            <div className="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
              <div className="border-l-4 border-red-500 py-20 px-5 mx-2 absolute left-0">
                <p className="italic text-black text-xl md:text-4xl lg:text-6xl uppercase text-center font-semibold">
                The Wonders Of Pizza
                </p>
              </div>
              <div className="absolute border-red-500 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
              <div className="relative bg-red-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                <div className="p-8">
                  <p className="text-white text-xs md:text-sm lg:text-xl mt-11 mb-4">
                  Pizza is a universally loved dish. Combining a variety of toppings with a delicious crust, pizza can be both comforting and exciting. A slice of pizza can be a quick snack or a gourmet experience.                  </p>
                  {/* <div className="bottom-0 absolute p-2 right-0">
                    <button className="opacity-75 bg-gray-100 hover:bg-pink-900 hover:text-white text-sm font-bold py-2 px-4 rounded inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>LEARN MORE</span>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
                  

    </>

  )
}

export default page
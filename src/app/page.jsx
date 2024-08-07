import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>

      {/* <video style={{bottom:'0', zIndex:-1}} src=""></video> */}

      <div className="  text-black py-20 flex flex-col bg-orange-100">
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
      {/* menu */}
      <div className='h-[400px] flex flex-col   w-full'>
        <h1 className='text-center text-5xl mt-4 p-0 text-orange-600 font-bold'>Our Menu</h1>
        <div className=' flex '>
          <div className="ml-3 rounded-full flex flex-col  mt-9  h-[250px] w-[270px] bg-slate-500">
            <img className='rounded-full object-fill h-full w-full' src="https://i.pinimg.com/236x/5d/e2/f3/5de2f31794bbeb3c9187a2cf24cba193.jpg" alt="" />
            <h2 className='text-center mt-3 text-lg'>Coffee</h2>
          </div>

          <div className="ml-4 rounded-full flex flex-col  mt-9  h-[250px] w-[270px] bg-slate-500">
            <img style={{ position: 'center', objectFit: 'cover' }} className='rounded-full  h-full w-full' src="https://i.pinimg.com/236x/a6/bd/06/a6bd06875bbca924cda90bc9885725fd.jpg" alt="" />
            <h2 className='text-center mt-3 text-lg'>Coffee</h2>
          </div>
          <div className="ml-3 rounded-full flex flex-col  mt-9  h-[250px] w-[270px] bg-slate-500">
            <img className='rounded-full object-fill h-[250px] w-[270px]' src="https://i.pinimg.com/236x/ab/22/b2/ab22b27ab8d6f9efc765feb700c3d6a2.jpg" alt="" />
            <h2 className='text-center mt-3 text-lg'>Coffee</h2>
          </div>
          <div className="ml-3 rounded-full flex flex-col  mt-9  h-[250px] w-[270px] bg-slate-500">
            <img className='rounded-full object-fill h-[250px] w-[270px]' src="https://i.pinimg.com/236x/14/98/0a/14980a9bec3957e4b5b56c026afdb8e2.jpg" alt="" />
            <h2 className='text-center mt-3 text-lg'>Coffee</h2>
          </div>
          <div className="ml-3 rounded-full flex flex-col  mt-9  h-[250px] w-[270px] bg-slate-500">
            <img className='rounded-full object-fill h-[250px] w-[270px]' src="https://i.pinimg.com/236x/69/6d/01/696d01e1564a8a489ff21c232a55adbc.jpg" alt="" />
            <h2 className='text-center mt-3 text-lg'>Coffee</h2>
          </div>
          <div className="ml-3 rounded-full flex flex-col  mt-9  h-[250px] w-[270px] bg-slate-500">
            <img className='rounded-full object-fill h-[250px] w-[270px]' src="https://i.pinimg.com/236x/89/3d/8d/893d8d574c1506d17b2f1cb565453797.jpg" alt="" />
            <h2 className='text-center mt-3 text-lg'>Coffee</h2>
          </div>
          <div className="ml-3 rounded-full flex flex-col  mt-9  h-[250px] w-[270px] bg-slate-500">
            <img className='rounded-full object-fill h-[250px] w-[270px]' src="https://i.pinimg.com/236x/a2/21/94/a221948320ea035ca6d5cfa64ce40430.jpg" alt="" />
            <h2 className='text-center mt-3 text-lg'>Coffee</h2>
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
      <div className='h-[600px] w-full flex flex-col'>
        <h1 className='text-center text-5xl mt-10 p-0 text-black font-bold'>How We <span className='text-orange-600'>Serve</span> you</h1>
        <div className='flex justify-evenly mt-12 h-96 w-full'>
        <div className=' p-6 rounded-lg w-80 items-center shadow-lg text-center flex flex-col transition-all duration-300   hover: shadow-orange-200'>
          <div className='flex justify-center  h-56 w-56'>
            <img className='h-full w-full'  src="https://media.istockphoto.com/id/1283085378/photo/blank-red-and-white-craft-burger-box-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=2kYhh3HhR7tbMVhMor_zUNFF9ei66QwnroMCV7wJbRc=" alt="" />
          </div>
          <h3 className='text-black font-bold text-xl'>Packed with Love</h3>
          <p className='mt-3 w-48'> We deliver the best experiences</p>
        </div>
        <div className=' p-6 rounded-lg w-80 shadow-lg items-center text-center flex flex-col transition-all duration-300   hover: shadow-orange-200'>
          <div className='flex justify-center  h-56 w-56'>
            <img className='h-full w-full' src="https://media.istockphoto.com/id/482021162/photo/takeout-delivery-fast-food-bag-package-container.jpg?s=612x612&w=0&k=20&c=Ln93iQgaV20A5TUbFvdYTHjHxe2q4PRjl2YG4zyK1gw=" alt="" />
          </div>
          <h3 className='text-black font-bold text-xl'>Automated Packaging</h3>
          <p className='mt-3'> 100% environment friendly packaging</p>
        </div>
        <div className=' p-6 rounded-lg w-80 items-center shadow-lg text-center flex flex-col transition-all duration-300   hover: shadow-orange-200'>
          <div className='flex justify-center items-center h-56 w-56'>
            <img className='h-full w-full' src="https://media.istockphoto.com/id/1981881148/photo/popcorn-buckets-in-a-big-heap-of-popcorn-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=YvjS3WbOhAWuSftd5-sgof-Aaw6grpGZxRDSMspspug=" alt="" />
          </div>
          <h3 className='text-black font-bold text-xl'>Serve hot Appetite</h3>
          <p className='w-48 mt-3'>Promise to deliver within 30 mins</p>
        </div>
        </div>
      </div>
     
        <div className="container-box mt-9">
        <div className="card-left">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/95/c6/e8/95c6e8d215c25db692ecfbb7b138a2db.jpg" />
          </div>
          <div className="card-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="card-top">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/eb/bf/0e/ebbf0e54e8c2f6d8dd5b9fb5df59a6ac.jpg" />
          </div>
          <div className="card-text">
            <p>Quisque cursus, metus vitae pharetra auctor.</p>
          </div>
        </div>
        <div className="card-right">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/b3/60/a4/b360a434d036bf60482dd57893fb4d2d.jpg" />
          </div>
          <div className="card-text">
            <p>Ut eu diam at pede suscipit sodales.</p>
          </div>
        </div>

        <div className="card-right">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/c4/40/0f/c4400f1f2c8441cb7c6eea6844a79135.jpg" />
          </div>
          <div className="card-text">
            <p>Donec lacus nunc, viverra nec, blandit vel, egestas et, augue.</p>
          </div>
        </div>
        <div className="card-top">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/26/c6/4b/26c64bef44546cdc05bc2233168f32ac.jpg" />
          </div>
          <div className="card-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/e9/a5/5a/e9a55a84854bc28bd50ab81960f371e8.jpg" />
          </div>
          <div className="card-text">
            <p>Ut eu diam at pede suscipit sodales.</p>
          </div>
        </div>
        <div className="card-left">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/1b/ad/61/1bad61c9ba4d8eb85e8a775605290a80.jpg" />
          </div>
          <div className="card-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/76/15/16/761516543db4e3a85bbae9de0eeb0c75.jpg" />
          </div>
          <div className="card-text">
            <p>Quisque cursus, metus vitae pharetra auctor.</p>
          </div>
        </div>
        <div className="card-right">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/53/95/16/539516b637f59351cb96024a174fcfb1.jpg" />
          </div>
          <div className="card-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="card-top">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/a7/c2/55/a7c255c3e78d2d36e70a36f059e94eac.jpg" />
          </div>
          <div className="card-text">
            <p>Integer lacinia sollicitudin massa. Cras metus.</p>
          </div>
        </div>
        <div className="card-left">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/d7/d7/b4/d7d7b45ee250f40f075d3beb2607b8ea.jpg" />
          </div>
          <div className="card-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="card-left">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/86/19/6a/86196a719c94e17763f55fe697f7e7dd.jpg" />
          </div>
          <div className="card-text">
            <p>Ut eu diam at pede suscipit sodales.</p>
          </div>
        </div>
        <div className="card-top">
          <div className="card-image">
            <img src="https://i.pinimg.com/474x/de/fe/83/defe834104aa7939e00dda5b3956b182.jpg" />
          </div>
          <div className="card-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/67/f0/ed/67f0edd24c5e55da071304c0c7d264dd.jpg" />
          </div>
          <div className="card-text">
            <p>Quisque cursus, metus vitae pharetra auctor.</p>
          </div>
        </div>
        <div className="card-top">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/dd/5b/e7/dd5be76e6403afadd208235bc2b78822.jpg" />
          </div>
          <div className="card-text">
            <p>Donec lacus nunc, viverra nec, blandit vel, egestas et, augue.</p>
          </div>
        </div>
        <div className="card-right">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/d7/d0/b7/d7d0b7d9ef3be7d532d7b7f12149272e.jpg" />
          </div>
          <div className="card-text">
            <p>Ut eu diam at pede suscipit sodales.</p>
          </div>

        </div>
        <div className="card-right">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/5f/67/03/5f6703d600dc71d1ea9eff1d3383231b.jpg" />
          </div>
          <div className="card-text">
            <p>Ut eu diam at pede suscipit sodales.</p>
          </div>

        </div>

      </div>

      <div className="outer   min-h-[800px]">
        <h1 className="text-6xl mt-16 font-bold  text-center text-orange-600 ">Best Selling Food</h1>
        <p className="text-black text-xl mt-4 font-bold  text-center">Discover the Amazing Flavor That Has Won Over Hearts and Taste Buds Everywhere</p>

        <div className="Box relative mt-28 w-full flex items-center justify-center flex-nowrap ">
          <div className="Card relative max-w-[300px] h-[215px]  m-4 p-5 flex flex-col shadow-lg transition-all duration-300 ease-in-out rounded-lg hover:h-[320px] ">
            <div className="image relative w-[260px] h-[260px] -top-1/2 left-2 shadow-md z-10">
              <img
                href="#"
                src="https://i.pinimg.com/474x/7f/80/2e/7f802e8e999de09e47b8075adec8f3d5.jpg"
                className="max-w-full rounded-lg h-[230px]"
              />
            </div>
            <div className="content relative  p-0 text-gray-900 -top-[140px] opacity-0 text-center   transition-all duration-300 ease-in-out hover:mt-8 hover:visible hover:opacity-100 hover:transition-delay-200">
              <h3 className=" font-bold mb-2">Chocolate Cake: A Rich and Irresistible Delight</h3>
              <p className="text-black  text-sm">Our cake is a masterpiece of baking perfection, combining moist, fluffy layers with rich, creamy frosting to create a dessert that is both irresistible and unforgettable. </p>
            </div>
          </div>
          <div className="Card relative max-w-[300px] h-[215px] bg-white  m-4 p-5 flex flex-col shadow-lg transition-all duration-300 ease-in-out rounded-lg hover:h-[320px]">
            <div className="image relative w-[260px] h-[260px] -top-1/2 left-2 shadow-md z-10">
              <img
                href="#"
                src="https://i.pinimg.com/236x/5c/c9/3d/5cc93d7b4c358a5f25f3f1f02d80acae.jpg"
                className="max-w-full rounded-lg h-[230px]"
              />
            </div>
            <div className="content relative -top-[140px] p-0 text-gray-900 text-center  opacity-0 transition-all duration-300 ease-in-out hover:mt-8 hover:visible hover:opacity-100 hover:transition-delay-200">
              <h3 className=" font-bold mb-2">Ultimate Combo: Cold Drink, Fries, and Burger Meal</h3>
              <p className="text-black text-sm">Indulge in the ultimate meal experience with our cold drink, fries, and burger combo. This classic trio is the perfect choice for anyone looking for a satisfying meal.</p>
            </div>
          </div>
          <div className="Card relative max-w-[300px] h-[215px] bg-white m-4 p-5 flex flex-col shadow-lg transition-all duration-300 ease-in-out rounded-lg hover:h-[320px]">
            <div className="image relative w-[260px] h-[260px] -top-1/2 left-2 shadow-md z-10">
              <img
                href="#"
                src="https://i.pinimg.com/236x/c3/8f/84/c38f847c770efc30085e2593e3dcfbe0.jpg"
                className="max-w-full rounded-lg"
              />
            </div>
            <div className="content relative -top-[140px] p-0 text-gray-900 text-center  opacity-0 transition-all duration-300 ease-in-out hover:mt-8 hover:visible hover:opacity-100 hover:transition-delay-200">
              <h3 className=" font-bold mb-2">Ultimate KFC Chicken Meal Combo</h3>
              <p className="text-black text-sm">This trio offers the ultimate KFC experience, combining our famous chicken with crispy fries and a refreshing drink to create a meal that's both satisfying and delicious.</p>
            </div>
          </div>
          <div className="Card relative max-w-[300px] h-[215px] bg-white m-4 p-5 flex flex-col shadow-lg transition-all duration-300 ease-in-out rounded-lg hover:h-[320px]">
            <div className="image relative w-[260px] h-[260px] -top-1/2 left-2 shadow-md z-10">
              <img
                href="#"
                src="https://i.pinimg.com/236x/fb/2c/53/fb2c537e39e393fd97e9843bd44fac32.jpg"
                className="max-w-full rounded-lg"
              />
            </div>
            <div className="content relative -top-[140px] p-0 text-gray-900 text-center  opacity-0 transition-all duration-300 ease-in-out hover:mt-8 hover:visible hover:opacity-100 hover:transition-delay-200">
              <h3 className=" font-bold mb-2">Perfect Combo: Cold Drink, Fries, and KFC Chicken Burgur</h3>
              <p className="text-black text-sm">Treat yourself to the perfect combination of flavors and satisfaction with our Cold Drink, Fries, and KFC Burger Combo And ensuring a delicious, fulfilling dining experience.</p>
            </div>
          </div>
          <div className="Card relative max-w-[300px] h-[215px] bg-white m-4 p-5 flex flex-col shadow-lg transition-all duration-300 ease-in-out rounded-lg hover:h-[320px]">
            <div className="image relative w-[260px] h-[260px] -top-1/2 left-2 shadow-md z-10">
              <img
                href="#"
                src="https://i.pinimg.com/564x/25/bb/62/25bb62c03bd13ccec5f48c9df3ddcfba.jpg"
                className="max-w-full ml-6 rounded-lg h-[240px] "
              />
            </div>
            <div className="content relative -top-[140px] p-0 text-gray-900 text-center  opacity-0 transition-all duration-300 ease-in-out hover:mt-8 hover:visible hover:opacity-100 hover:transition-delay-200">
              <h3 className=" font-bold mb-2">Refreshing Mojito: A Classic Cocktail Delight</h3>
              <p className="text-black text-sm"> This classic cocktail is the perfect blend of vibrant flavors, designed to invigorate your senses and provide a delightful escape from the ordinary.</p>
            </div>
          </div>

        </div>
      </div>




    </>

  )
}

export default page
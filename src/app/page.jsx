'use client'
import Link from 'next/link'
import React from 'react'
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const page = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      tablet: {
        smooth: true,
      },
      smartphone: {
        smooth: true,
      },
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  return (
    <div data-scroll-container ref={scrollRef}>
      <div className="  text-black py-15 flex flex-col ">
        <div className="container mx-auto flex font-semibold  md:flex-row items-start justify-center  md:my-20">
          <div className=" w-full mt-5 lg:w-1/2 justify-center items-start ">
            <h1 className="text-5xl  font-bold  text-center text-orange-700 ">Welcome to <span className='text-7xl text-orange-800'>Foodie Hub</span></h1>
            <h2 className="text-4xl mt-3 leading-relaxed md:leading-snug mb-2 ">Take a taste Come join us</h2>
            <p className="text-lg  mt-1 md:text-lg text-black ">Foodie Hub offers a mouthwatering selection of recipes, food reviews, </p>
            <p className="text-lg  md:text-lg text-black ">and culinary tips to satisfy your cravings</p>
            <p className="text-lg  md:text-lg text-black ">
              Discover the best food in town, curated by our experts.        </p>
            <Link href="/search">
              <button
                class="overflow-hidden  mt-4  w-36 p-2 h-12 bg-orange-200 text-black border-none rounded-3xl text-xl font-bold cursor-pointer relative z-10 group"
              >

                Explore
                <span
                  className="absolute w-40 h-32 -top-8 -left-2 bg-orange-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
                >
                </span>
                <span
                  className="absolute w-40 h-32 -top-8 -left-2 bg-orange-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
                ></span>
                <span
                  className="absolute w-40 h-32 -top-8 -left-2 bg-orange-700 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
                ></span>
                <span
                  className="group-hover:opacity-100 font-serif object-cover group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-4 z-10"
                >Foodie hub </span>
              </button>
            </Link>
          </div>
          <div className="p-8 mt-12 mb-6 md:ml-12 justify-center">
            <div className="h-72 flex flex-wrap content-center">
              <div>
                <img
                  className="inline-block h-72 mt-24  lg:block  animated-image" style={{ width: '100%', }}
                  src="https://i.pinimg.com/564x/a7/c2/55/a7c255c3e78d2d36e70a36f059e94eac.jpg"
                  alt="TechFest Image 1"
                />
              </div>
              <div>
                <img
                  className="inline-block h-80 mt-24 md:mt-0 p-8 md:p-0 animated-image"
                  src="https://i.pinimg.com/236x/5b/73/81/5b738129b1ded9d6c9178efe641e7537.jpg"
                  alt="TechFest Image 2"
                />
              </div>
              <div>
                <img
                  className="inline-block mt-28 h-72 lg:block animated-image"
                  src="https://i.pinimg.com/236x/2e/fd/14/2efd14f4cf086300149aced10fad7ce9.jpg"
                  alt="TechFest Image 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* menu */}
      <div className='h-[400px]   flex flex-col   w-full'>
        <h1 className='text-center text-5xl mt-7 p-0 text-orange-800 hover:text-orange-900 font-bold'>Our Menu</h1>
        <h3 className="text-black text-xl mt-3 font-bold  text-center ">
          Your ultimate destination for delicious recipes and food reviews
        </h3>
        <div className=' flex '>
          <div className="ml-4 menu-item rounded-full  flex flex-col mt-6 h-[220px] w-[220px] bg-slate-500" style={{ backgroundImage: "url('https://i.pinimg.com/236x/a2/21/94/a221948320ea035ca6d5cfa64ce40430.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
          <div className="ml-4 menu-item  rounded-full flex flex-col mt-9 w-[220px] bg-slate-500" style={{ backgroundImage: "url('https://i.pinimg.com/236x/f4/49/ac/f449ac2876d4f16f71cb8a2bba007e27.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
          <div className="ml-4 menu-item rounded-full flex flex-col mt-9 w-[220px] bg-slate-500" style={{ backgroundImage: "url('https://i.pinimg.com/236x/0a/62/70/0a627091e0fb0d6dcbea50a24452d380.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
          <div className="ml-4 menu-item rounded-full flex flex-col mt-9 w-[220px] bg-slate-500" style={{ backgroundImage: "url('https://i.pinimg.com/236x/68/c2/40/68c240f5797946566996da6780c9b61e.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
          <div className="ml-4 menu-item rounded-full flex flex-col mt-9 w-[220px] bg-slate-500" style={{ backgroundImage: "url('https://i.pinimg.com/236x/78/71/75/78717588ec02b0cd47dd772a60d69703.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
          <div className="ml-4 menu-item rounded-full flex flex-col mt-9 w-[220px] bg-slate-500" style={{ backgroundImage: "url('https://i.pinimg.com/236x/ab/22/b2/ab22b27ab8d6f9efc765feb700c3d6a2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
          <div className="ml-4 menu-item rounded-full flex flex-col mt-9 w-[220px] bg-slate-500" style={{ backgroundImage: "url('https://i.pinimg.com/236x/a0/cb/e2/a0cbe2c73e1185e727a74e22a782bc97.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
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

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="outer   min-h-[570px]">
        <h1 className="text-6xl mt-10 font-bold  text-center text-orange-800 ">Best Selling Food</h1>
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
      <div className='h-[600px] w-full flex flex-col'>
        <h1 className='text-center text-5xl p-0 text-black font-bold'>How We <span className='text-orange-800'>Serve</span> you</h1>
        <h3 className="text-black text-xl mt-3 font-bold  text-center fade-in-text">
          At Foodie Hub, we serve you by offering easy recipes, food trend reviews, </h3>
        <h3 className="text-black text-xl mt-0 font-bold  text-center fade-in-text">
          and expert tips to elevate your cooking </h3>
        <div className='flex justify-evenly mt-12 h-96 w-full'>
          <div className=' p-6 rounded-lg w-80 items-center shadow-lg text-center flex flex-col transition-all duration-300   hover: shadow-orange-200'>
            <div className='flex justify-center  h-56 w-56'>
              <img className='h-full w-full' src="https://media.istockphoto.com/id/1283085378/photo/blank-red-and-white-craft-burger-box-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=2kYhh3HhR7tbMVhMor_zUNFF9ei66QwnroMCV7wJbRc=" alt="" />
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
            <p>"Crispy, golden, and perfectly seasoned, our fries are the ultimate comfort food"</p>
          </div>
        </div>
        <div className="card-top">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/eb/bf/0e/ebbf0e54e8c2f6d8dd5b9fb5df59a6ac.jpg" />
          </div>
          <div className="card-text">
            <p>"Juicy, tender, and bursting with flavor, our chicken is a true comfort food favorite</p>
          </div>
        </div>
        <div className="card-right">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/b3/60/a4/b360a434d036bf60482dd57893fb4d2d.jpg" />
          </div>
          <div className="card-text">
            <p>Soft, sweet, and perfectly glazed, our donuts are a bite of pure indulgence.</p>
          </div>
        </div>
        <div className="card-right">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/c4/40/0f/c4400f1f2c8441cb7c6eea6844a79135.jpg" />
          </div>
          <div className="card-text">
            <p>our burgers are a bite of pure satisfaction. Every bite is a mouthwatering .</p>
          </div>
        </div>
        <div className="card-top">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/26/c6/4b/26c64bef44546cdc05bc2233168f32ac.jpg" />
          </div>
          <div className="card-text">
            <p>Cheesy, crispy, and loaded with your favorite toppings, our pizza is a slice of heaven in every bite</p>
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/e9/a5/5a/e9a55a84854bc28bd50ab81960f371e8.jpg" />
          </div>
          <div className="card-text">
            <p>our jelly cake is a sweet treat that melts in your mouth</p>
          </div>
        </div>
        <div className="card-left">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/1b/ad/61/1bad61c9ba4d8eb85e8a775605290a80.jpg" />
          </div>
          <div className="card-text">
            <p>Treat yourself to a moment of sweetness !</p>
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/76/15/16/761516543db4e3a85bbae9de0eeb0c75.jpg" />
          </div>
          <div className="card-text">
            <p>Flaky, buttery, and perfectly baked, our croissants are a deliciously indulgent treat.</p>
          </div>
        </div>
        <div className="card-right">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/53/95/16/539516b637f59351cb96024a174fcfb1.jpg" />
          </div>
          <div className="card-text">
            <p>Rich, smooth, and decadently sweet, our chocolate is pure bliss in every bite</p>
          </div>
        </div>
        <div className="card-top">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/a7/c2/55/a7c255c3e78d2d36e70a36f059e94eac.jpg" />
          </div>
          <div className="card-text">
            <p> A unique treat that’s both refreshing and indulgent!</p>
          </div>
        </div>
        <div className="card-left">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/d7/d7/b4/d7d7b45ee250f40f075d3beb2607b8ea.jpg" />
          </div>
          <div className="card-text">
            <p>"Savor our freshly baked cookies, perfectly crisp and chewy, crafted to satisfy your sweet cravings"</p>
          </div>
        </div>
        <div className="card-left">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/86/19/6a/86196a719c94e17763f55fe697f7e7dd.jpg" />
          </div>
          <div className="card-text">
            <p>"Enjoy our classic hot dogs, grilled to perfection and loaded with your favorite toppings for a satisfying bite"</p>
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
            <p>"Delight in our soft, moist cakes, perfect for any celebration or sweet craving"</p>
          </div>
        </div>
        <div className="card-top">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/dd/5b/e7/dd5be76e6403afadd208235bc2b78822.jpg" />
          </div>
          <div className="card-text">
            <p>"Wake up to the rich aroma of our freshly brewed coffee, crafted to energize and refresh"</p>
          </div>
        </div>
        <div className="card-right">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/d7/d0/b7/d7d0b7d9ef3be7d532d7b7f12149272e.jpg" />
          </div>
          <div className="card-text">
            <p>"Savor our deliciously cooked noodles, tossed in flavorful sauces for a quick, satisfying meal"</p>
          </div>
        </div>
        <div className="card-right">
          <div className="card-image">
            <img src="https://i.pinimg.com/236x/5f/67/03/5f6703d600dc71d1ea9eff1d3383231b.jpg" />
          </div>
          <div className="card-text">
            <p>"Enjoy our fresh sandwiches, packed with tasty ingredients for a quick and wholesome bite"</p>
          </div>
        </div>
      </div>
      <div className='h-[75vh] mt-16 mx-32 flex w-[84%]'>
        <div className='h-[75vh]   gap-8 w-1/2 '>
          <div className='flex  p-3 gap-8'>
            <img className='h-1/3 ' src="https://i.pinimg.com/236x/48/07/c5/4807c5c8f529743518bd8170ffb1b0ff.jpg" alt="" />
            <div className='flex justify-center flex-col'>
              <h1 className='text-3xl font-semibold text-orange-800'>Quality Food</h1>
              <p className='mt-2'> We pride ourselves on delivering top-notch food service with a focus on quality, freshness, and customer satisfaction.</p>
            </div>
          </div>
          <div className='flex p-3  gap-8'>
            <img className='h-1/3 ' src="https://i.pinimg.com/236x/e6/44/ca/e644ca372cd51cc46cb34408a2efdc43.jpg" alt="" />
            <div className='flex justify-center flex-col'>
              <h1 className='text-3xl font-semibold text-orange-800'>Ingredients</h1>
              <p className='mt-2'>We use only the freshest, highest-quality ingredients to ensure every dish is packed with flavor and nutrition.</p>
            </div>
          </div>
          <div className='flex p-0 gap-8'>
            <img className='h-1/3 w-44 ml-9' src="https://i.pinimg.com/236x/64/c5/71/64c57177b90d937f6ed9e6a6747930f0.jpg" alt="" />
            <div className='flex justify-center ml-9 flex-col'>
              <h1 className='text-3xl font-semibold text-orange-800'>Serve Hot</h1>
              <p className='mt-2'>We take pride in serving every dish hot and fresh, ensuring the best flavors and a satisfying experience with every bite.</p>
            </div>
          </div>
        </div>
        <div className='h-[75vh]   gap-8 w-1/2 '>
          <div className='flex p-4  gap-8'>
            <img className='h-1/3 w-40' src="https://i.pinimg.com/236x/5b/e1/c1/5be1c1893d4206e5fcea386e73065a51.jpg" alt="" />
            <div className='flex justify-center flex-col'>
              <h1 className='text-3xl font-semibold text-orange-800'>Cook Like a Chef</h1>
              <p className='mt-2'>Our team of culinary experts prepares every meal with precision, using professional techniques and the finest ingredients to ensure a dining experience that's nothing short of extraordinary.</p>
            </div>
          </div>
          <div className='flex p-4 mt-14 gap-8'>
            <img className='h-1/3 w-40' src="https://i.pinimg.com/236x/af/30/15/af3015948e137575e4d126ff859a1849.jpg" alt="" />
            <div className='flex justify-center flex-col'>
              <h1 className='text-3xl font-semibold text-orange-800'>Easy Recipies</h1>
              <p className='mt-2'>With straightforward instructions and readily available ingredients, you can create flavorful meals with ease. Perfect for busy days or cooking novices, these recipes make great food achievable in no time.</p>
            </div>
          </div>
        </div>
      </div>
{/* footer */}
      <div className="mx-auto ">
        <div className="relative top-20 z-10 w-3/4 mx-auto p-6 flex justify-between bg-white rounded-b-3xl shadow-2xl" >
          <h1 className="text-4xl font-black mt-5 text-orange-800">Subscribe To Our Newsletter</h1>
          <div className="w-2/5 mt-3">
            <input type="email" placeholder="enter your email here" className="mr-7 p-3.5 bg-orange-100 w-2/5 rounded-2xl border-none text-orange-900 font-semibold outline-none" />

            <button className="bg-gradient-to-r from-red-700 to-orange-500 hover:from-red-500 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
              Subscribe
            </button>

          </div>
        </div>
        <div className="bg-orange-900 py-28">
          <div className="relative top-12 w-4/5 mx-auto flex justify-between">
            <div className="text-gray-200 hover:text-gray-100 transition-all ease-in">
              <h1 className="text-5xl">Foodie Hub</h1>
              <div className="mt-4">
                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                  <a className="text-gray-200 cursor-pointer transition-all ease-in hover:text-gray-100">
                    <svg fill="currentColor" stroke-width="2"
                      className="w-6 h-7" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-200 cursor-pointer transition-all ease-in hover:text-gray-100">
                    <svg fill="currentColor" stroke-width="2"
                      className="w-6 h-7" viewBox="0 0 24 24">
                      <path
                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                      </path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-200 cursor-pointer transition-all ease-in hover:text-gray-100">
                    <svg fill="none" stroke="currentColor"
                      stroke-width="2" className="w-6 h-7" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-200 cursor-pointer hover:text-gray-100">
                    <svg fill="currentColor" stroke="currentColor"
                      stroke-width="0" className="w-6 h-7" viewBox="0 0 24 24">
                      <path stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                      </path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="pt-2">foodiehub@gmail.com</p>
              <p className="pt-2">(+62) 81234567890</p>
            </div>
            <ul className="list-none">
              <li className="mt-5">
                <h3 className="text-2xl font-bold">About Us</h3>
              </li>
              <li className="mt-5">
                <Link href="#" className="text-lg text-gray-200 hover:text-gray-100 transition-all ease-in">Find a location</Link>
              </li>
              <li class="mt-5">
                <Link href="/aboutus" className="text-lg text-gray-200 hover:text-gray-100 transition-all ease-in">Our Info</Link>
              </li>
              <li class="mt-5">
                <Link href="/features" className="text-lg text-gray-200 hover:text-gray-100 transition-all ease-in">Features</Link>
              </li>
            </ul>
            <ul className="list-none">
              <li className="mt-5">
                <h3 className="text-2xl font-bold">Service</h3>
              </li>
              <li className="mt-5">
                <Link href="#" className="text-lg text-gray-200 hover:text-gray-100 transition-all ease-in">Shop</Link>
              </li>
              <li className="mt-5">
                <Link href="/services" className="text-lg text-gray-200 hover:text-gray-100 transition-all ease-in">Our Services</Link>
              </li >
              <li className="mt-5">
                <Link href="#" className="text-lg text-gray-200 hover:text-gray-100 transition-all ease-in">Menu</Link>
              </li>
              <li className="mt-5">
                <Link href="#" className="text-lg text-gray-200 hover:text-gray-100 transition-all ease-in">Gift Cards</Link>
              </li>
            </ul>
            <ul className="list-none">
              <li className="mt-5">
                <h3 className="text-2xl font-bold">Privacy</h3>
              </li>
              <li className="mt-5">
                <a href="#" className="text-lg text-gray-200 hover:text-gray-100 transition-all ease-in">Privacy Policy</a>
              </li>
              <li className="mt-5">
                <Link href="#" className="text-lg text-gray-200 hover:text-gray-100 transition-all ease-in">Terms &amp; Condition</Link>
              </li>
              <li className="mt-5">
                <Link href="#" className="text-lg text-gray-200 hover:text-gray-100 transition-all ease-in"> Cookies </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page
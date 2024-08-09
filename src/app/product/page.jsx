import React from 'react';

const Product = () => {
  return (
    <>
      <header className="flex flex-col  w-full">
        <div className="flex flex-col mt-40 ml-36  w-[650px] text-left ">
          <h1 className="text-6xl text-orange-700 font-bold animated-text">
            Meet, Eat &
            <span className="text-6xl text-black font-normal animated-text"> Enjoy The True Taste</span>
          </h1>
          <p className="mt-3 text-lg text-dark font-normal sub-title animated-text">
            where we bring you authentic flavors, curated recipes, and dining experiences that capture the essence of great food. Discover the joy of delicious, genuine tastes with every bite </p>
          <button className="bg-orange-200 mt-5 hover:bg-orange-400 text-black font-bold py-3 w-40 px-6 rounded-full shadow-lg shadow-neutral-400 hover:text-orange-700 transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
            Keep holding
          </button>
        </div>


        {/* <div className='flex mt-20 justify-center h-[90vh] w-full'>
          <img style={{borderRadius:'50% '}} className=' h-[70vh] w-[50%]' src="https://i.pinimg.com/564x/9e/01/bd/9e01bd771930c0f918ce03cbdb7e56d7.jpg" alt="" />
         </div> */}

        <div className="custom-shape-divider-bottom-1723243014 absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block" style={{ width: 'calc(187% + 1.3px)', height: '500px', transform: 'rotateY(180deg)' }}>
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill fill-[#be4707]"></path>
          </svg>
        </div>
      </header>
    </>
  );
};

export default Product;
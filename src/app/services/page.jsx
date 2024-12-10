import Link from 'next/link';
import React from 'react';

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className=" mx-auto py-16 w-[85%] text-center px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-800 mb-4">Our Services</h1>
          <p className="text-lg max-w-2xl mx-auto">
            At Foodie Hub, we are dedicated to providing exceptional services that ensure a delightful experience for our customers. Discover the range of services we offer to make your dining and culinary journey unforgettable.
          </p>
        </div>

        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <video loop muted autoPlay className="rounded-lg h-[450px] border shadow-lg w-full object-cover" src="/dining.mp4"></video>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-orange-800 mb-4">Exceptional Dining Experience</h2>
              <p className="text-lg mb-4">
                Enjoy a top-notch dining experience at Foodie Hub, where we combine a warm, inviting atmosphere with a menu crafted from the finest ingredients. Whether you’re here for a casual meal or a special occasion, our staff is committed to providing excellent service.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fresh and locally sourced ingredients</li>
                <li>Customized menus for special events</li>
                <li>Cozy and comfortable dining environment</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-semibold text-orange-800 mb-4">Convenient Online Ordering</h2>
              <p className="text-lg mb-4">
                Experience the ease of ordering your favorite dishes online through our user-friendly platform. We ensure that your food reaches you hot and fresh, whether you’re ordering for yourself or catering for a group.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fast and easy online ordering</li>
                <li>Secure payment options</li>
                <li>Reliable and prompt delivery service</li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <video loop muted autoPlay className="rounded-lg h-[450px] border shadow-lg w-full object-cover" src="/Ordering.mp4"></video>
            </div>
          </div>
        </div>
        
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <video loop muted autoPlay className="rounded-lg h-[450px] border shadow-lg w-full object-cover" src="/Catering.mp4"></video>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-orange-800 mb-4">Professional Catering Services</h2>
              <p className="text-lg mb-4">
                Make your next event memorable with our professional catering services. We cater to events of all sizes, providing customized menus that meet your needs and exceed your expectations.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Customizable catering packages</li>
                <li>Experienced and professional staff</li>
                <li>Wide range of menu options</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-semibold text-orange-800 mb-4">Interactive Cooking Classes</h2>
              <p className="text-lg mb-4">
                Join our interactive cooking classes and learn from the best chefs. Whether you’re a beginner or an experienced cook, our classes are designed to enhance your culinary skills and inspire your creativity in the kitchen.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Hands-on cooking experience</li>
                <li>Expert guidance from professional chefs</li>
                <li>Recipes and techniques to take home</li>
              </ul>
            </div>
            <div className="order-1  md:order-2">
              <video loop muted autoPlay className="rounded-lg h-[450px] border shadow-lg w-full object-cover" src="/Cooking.mp4"></video>
            </div>
          </div>
        </div>
        <div className='h-[75vh] mt-16  flex w-full'>
          <div className='h-[75vh]  w-1/2 '>
            <div className='flex  '>
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
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-orange-800 mb-6">Ready to Experience the Best?</h2>
          <p className="text-lg mb-6">
            Contact us today to book a table, place an order, or learn more about our services. We’re here to make your culinary experience unforgettable!
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-orange-800 text-white font-semibold rounded-xl shadow-md hover:bg-orange-700 transition-all duration-300 ease-in"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ServicePage;

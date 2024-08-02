import React from 'react'

const Services = () => {
  return (
    <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Fast Delivery</h3>
                <p className="text-gray-600">Get your food delivered in no time with our super fast delivery service.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Fresh Ingredients</h3>
                <p className="text-gray-600">We use only the freshest ingredients to prepare your meals.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Wide Variety</h3>
                <p className="text-gray-600">Choose from a wide variety of cuisines and dishes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Services
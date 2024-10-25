import React from 'react';

const RestaurantPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('')" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-6xl font-bold text-white text-center">Welcome to Foodie Hub</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Featured Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/path-to-dish-image1.jpg" alt="Dish 1" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Dish Name 1</h3>
                <p className="text-gray-600">Description of the dish goes here. A short and enticing summary.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/path-to-dish-image2.jpg" alt="Dish 2" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Dish Name 2</h3>
                <p className="text-gray-600">Description of the dish goes here. A short and enticing summary.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/path-to-dish-image3.jpg" alt="Dish 3" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Dish Name 3</h3>
                <p className="text-gray-600">Description of the dish goes here. A short and enticing summary.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 mb-4">"Amazing food, great atmosphere! Highly recommend Foodie Hub!"</p>
              <p className="text-sm font-bold">- Customer Name 1</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 mb-4">"Best dining experience I've had in a long time. The dishes are exquisite."</p>
              <p className="text-sm font-bold">- Customer Name 2</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 mb-4">"Foodie Hub never disappoints. The flavors are out of this world."</p>
              <p className="text-sm font-bold">- Customer Name 3</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RestaurantPage;

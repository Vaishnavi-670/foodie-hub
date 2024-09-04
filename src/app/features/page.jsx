'use client'
import { useState } from 'react';

const FeaturesPage = () => {
  const features = [
    {
      title: "Fresh Ingredients",
      description: "We use only the freshest ingredients sourced from local farms to ensure the highest quality and taste in every dish we prepare.",
      icon: "🍅",
      image: "https://i.pinimg.com/736x/c3/68/e3/c368e370cae29f2961cfb94e05220a5f.jpg", 
    },
    {
      title: "Quick Delivery",
      description: "Enjoy our delicious food delivered to your doorstep quickly and efficiently with our reliable delivery service.",
      icon: "🚚",
      image: "https://i.pinimg.com/originals/d5/3f/d1/d53fd1ced69ae9fc41c0265fb416b34d.png", 
    },
    {
      title: "Online Reservations",
      description: "Book your table easily through our website, ensuring you have a spot at our restaurant whenever you desire.",
      icon: "📅",
      image: "https://i.pinimg.com/originals/4d/1f/79/4d1f7901a4ef1889e707c1420810cef8.jpg", 
    },
    {
      title: "Catering Services",
      description: "Our catering services are perfect for any event, providing a variety of options that will satisfy all your guests.",
      icon: "🎉",
      image: "https://i.pinimg.com/originals/1c/e1/4b/1ce14baa16f55d93829bae84e2c2d7a0.jpg", 
    },
    {
      title: "Customer Loyalty Program",
      description: "Earn points with every purchase and enjoy exclusive discounts and offers with our customer loyalty program.",
      icon: "🎁",
      image: "https://i.pinimg.com/736x/a1/ef/8a/a1ef8a2ad62b2c05ed85c046d0fc019d.jpg", 
    },
    {
      title: "Gluten-Free Options",
      description: "We offer a wide range of gluten-free dishes, ensuring everyone can enjoy our food regardless of dietary restrictions.",
      icon: "🌾",
      image: "https://i.pinimg.com/originals/6f/34/59/6f34592c5aee51df05bf9e364d253e79.jpg", 
    },
  ];

  return (
    <div className="min-h-screen   p-8">
      <div className=" w-[90%] mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12 ">Our Features</h1>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white h-[450px] p-5 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300"
            >
              <img src={feature.image} alt={feature.title} className="w-full h-[270px] object-cover rounded-md mb-4" />
              <div className="flex items-center mb-4">
                <div className="text-4xl">{feature.icon}</div>
                <h2 className="ml-4 text-2xl font-semibold text-gray-800">{feature.title}</h2>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default FeaturesPage;

'use client'
import { useState } from 'react';

const FeaturesPage = () => {
  const features = [
    {
      title: "Fresh Ingredients",
      description: "We use only the freshest ingredients sourced from local farms to ensure the highest quality and taste in every dish we prepare.",
      icon: "🍅",
      image: "/images/fresh-ingredients.jpg", // Add your image path here
    },
    {
      title: "Quick Delivery",
      description: "Enjoy our delicious food delivered to your doorstep quickly and efficiently with our reliable delivery service.",
      icon: "🚚",
      image: "/images/quick-delivery.jpg", // Add your image path here
    },
    {
      title: "Online Reservations",
      description: "Book your table easily through our website, ensuring you have a spot at our restaurant whenever you desire.",
      icon: "📅",
      image: "/images/online-reservations.jpg", // Add your image path here
    },
    {
      title: "Catering Services",
      description: "Our catering services are perfect for any event, providing a variety of options that will satisfy all your guests.",
      icon: "🎉",
      image: "/images/catering-services.jpg", // Add your image path here
    },
    {
      title: "Customer Loyalty Program",
      description: "Earn points with every purchase and enjoy exclusive discounts and offers with our customer loyalty program.",
      icon: "🎁",
      image: "/images/loyalty-program.jpg", // Add your image path here
    },
    {
      title: "Gluten-Free Options",
      description: "We offer a wide range of gluten-free dishes, ensuring everyone can enjoy our food regardless of dietary restrictions.",
      icon: "🌾",
      image: "/images/gluten-free-options.jpg", // Add your image path here
    },
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-r from-yellow-200 to-red-200 p-8">
      <div className=" w-[90%] mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12 ">Our Features</h1>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white h-[450px] p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300"
            >
              <img src={feature.image} alt={feature.title} className="w-full h-[240px] object-cover rounded-md mb-4" />
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

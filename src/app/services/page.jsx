import Link from 'next/link';
import React from 'react';

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-orange-50 text-gray-800">
      <div className=" mx-auto py-16 w-[85%] text-center px-4 sm:px-6 lg:px-8">
        
        {/* Introduction Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-800 mb-4">Our Services</h1>
          <p className="text-lg max-w-2xl mx-auto">
            At Foodie Hub, we are dedicated to providing exceptional services that ensure a delightful experience for our customers. Discover the range of services we offer to make your dining and culinary journey unforgettable.
          </p>
        </div>

        {/* Service 1: Dining Experience */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://example.com/your-image-dining.jpg"
                alt="Dining Experience"
                className="rounded-lg shadow-lg w-full"
              />
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

        {/* Service 2: Online Ordering */}
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
              <img
                src="https://example.com/your-image-online-ordering.jpg"
                alt="Online Ordering"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* Service 3: Catering Service */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://example.com/your-image-catering.jpg"
                alt="Catering Service"
                className="rounded-lg shadow-lg w-full"
              />
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

        {/* Service 4: Cooking Classes */}
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
            <div className="order-1 h-80 md:order-2">
              <img
                src="https://i.pinimg.com/236x/33/d1/cd/33d1cd1913f4e0c5b94e0b767a6920eb.jpg"
                alt="Cooking Classes"
                className="rounded-lg h-80 object-cover rotate-180 shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-semibold text-orange-800 mb-6">Ready to Experience the Best?</h2>
          <p className="text-lg mb-6">
            Contact us today to book a table, place an order, or learn more about our services. We’re here to make your culinary experience unforgettable!
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-orange-800 text-white font-semibold rounded-xl shadow-md hover:bg-orange-600 transition-all duration-300 ease-in"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ServicePage;

'use client'
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Pizza Margherita',
    image: 'https://via.placeholder.com/300x200',
    description: 'Classic Margherita pizza with fresh basil and mozzarella.',
    price: '$12.99',
  },
  {
    id: 2,
    name: 'Cheeseburger',
    image: 'https://via.placeholder.com/300x200',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 3,
    name: 'Cheeseburger',
    image: 'https://via.placeholder.com/300x200',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 4,
    name: 'Cheeseburger',
    image: 'https://via.placeholder.com/300x200',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 5,
    name: 'Cheeseburger',
    image: 'https://via.placeholder.com/300x200',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 6,
    name: 'Cheeseburger',
    image: 'https://via.placeholder.com/300x200',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 7,
    name: 'Cheeseburger',
    image: 'https://via.placeholder.com/300x200',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  
];

const ShopPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
            <a href={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-700 mb-2">{product.description}</p>
                <span className="text-lg font-bold">{product.price}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

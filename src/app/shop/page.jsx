'use client'
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Pizza Margherita',
    image: 'https://i.pinimg.com/236x/ce/a2/a4/cea2a41d9a3c52ccf55c170276646ed4.jpg',
    description: 'Classic Margherita pizza with fresh basil and mozzarella.',
    price: '$12.99',
  },
  {
    id: 2,
    name: 'Cheeseburger',
    image: 'https://i.pinimg.com/236x/be/21/2c/be212c7d44d362bea0fca7bbb7e76329.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 3,
    name: 'Chicken',
    image: 'https://i.pinimg.com/236x/eb/bf/0e/ebbf0e54e8c2f6d8dd5b9fb5df59a6ac.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 4,
    name: 'Chhole Bhature',
    image: 'https://i.pinimg.com/236x/19/2d/72/192d722849ed087bf9442e978544f954.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 5,
    name: 'Lassi',
    image: 'https://i.pinimg.com/474x/0d/63/95/0d63955633f10d7e41ecb56071d0a2ba.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 6,
    name: 'Biryani',
    image: 'https://i.pinimg.com/236x/50/01/0f/50010f51c84e814f5459e0cc57163c2b.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 7,
    name: 'Paratha',
    image: 'https://i.pinimg.com/474x/f0/31/3a/f0313a801ff2bcb92ac550ed107144e5.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 7,
    name: 'Poori',
    image: 'https://i.pinimg.com/236x/8a/89/b5/8a89b5043348a3439effdf63febdeeb0.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 7,
    name: 'Idli',
    image: 'https://i.pinimg.com/236x/f4/d5/35/f4d535a76f86f7c909f15cf0457ccbf2.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 7,
    name: 'Dosa',
    image: 'https://i.pinimg.com/236x/5c/4f/63/5c4f63f5c7726b46230e590530375797.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 7,
    name: 'Pasta',
    image: 'https://i.pinimg.com/236x/de/89/6e/de896eb3233bf0a05b312542b90a1633.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 7,
    name: 'Paneer Butter',
    image: 'https://i.pinimg.com/236x/e3/66/b7/e366b72bedbffa70db70e9b89a810e8f.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 7,
    name: 'Hakka Noodles',
    image: 'https://i.pinimg.com/236x/9f/3f/37/9f3f375c00058772baeeddde19fc867c.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 7,
    name: 'Alio Olio Pasta',
    image: 'https://i.pinimg.com/236x/68/77/22/6877222c104973e345a1eec45e0af148.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 7,
    name: 'Juice',
    image: 'https://i.pinimg.com/236x/5a/62/16/5a6216dbe302b7ad76c1793ad621cfda.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 7,
    name: 'Smoothie',
    image: 'https://i.pinimg.com/236x/58/3e/e4/583ee412325c7573109ac5da2781e4f7.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 7,
    name: 'Gulab Jamun',
    image: 'https://i.pinimg.com/736x/a9/3d/77/a93d77d3e242262f2c919bf66aef5b39.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 7,
    name: 'Cake',
    image: 'https://i.pinimg.com/236x/b8/2c/7e/b82c7e24183e7cbba71fb1027bc43029.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 7,
    name: 'Fries',
    image: 'https://i.pinimg.com/236x/9f/78/c9/9f78c97e5221b529783c9f1bd55a80f2.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 7,
    name: 'Paneer Fried Rice ',
    image: 'https://i.pinimg.com/236x/33/7d/4d/337d4dcc736df4959bbcacb8f92bbd7a.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 7,
    name: 'Momos',
    image: 'https://i.pinimg.com/236x/f6/6f/ab/f66fab7739e5fb385c15ddccf75a0ba2.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 7,
    name: 'Chilli Potatos',
    image: 'https://i.pinimg.com/474x/57/0e/fe/570efeef8f6064530581266d73d13252.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 7,
    name: 'Taco',
    image: 'https://i.pinimg.com/236x/1b/28/74/1b28742d168b493d4afd5a4378d2bc31.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 7,
    name: 'Soup',
    image: 'https://i.pinimg.com/236x/58/d5/3c/58d53cffabc556fb0d8dbabaf567085c.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 7,
    name: ' Saled',
    image: 'https://i.pinimg.com/236x/66/fd/1f/66fd1fca300c255f0b6e2134cd26a074.jpg',
    description: 'Juicy cheeseburger with lettuce, tomato, and pickles.',
    price: '$9.99',
  },
  {
    id: 7,
    name: 'Donut',
    image: 'https://i.pinimg.com/236x/8d/a4/3d/8da43dde29c98af372c0a2c93307e4a4.jpg',
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
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
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

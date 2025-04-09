import React from "react";
import Product from "../components/Product";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Store = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
        MUSIC
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {productsArr.map((product, index) => (
          <Product
            key={index}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </main>
  );
};

export default Store;

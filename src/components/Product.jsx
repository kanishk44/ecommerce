import React from "react";

const Product = ({ title, price, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 transition-transform duration-200 hover:-translate-y-1 flex flex-col items-center gap-4">
      <h3 className="text-xl font-semibold text-gray-800 text-center m-0">
        {title}
      </h3>
      <img
        src={imageUrl}
        alt={title}
        className="w-full max-w-[200px] h-auto object-cover rounded-md"
      />
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="text-xl font-bold text-gray-800">${price}</span>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 transition-colors duration-200">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Product;

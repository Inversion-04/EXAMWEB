import React from 'react'

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="h-52 object-contain mb-4"
      />
      <h2 className="font-semibold text-gray-800 text-center text-lg mb-2">
        {product.title}
      </h2>
      <p className="text-gray-700 font-medium mb-3">${product.price.toFixed(2)} USD</p>
      <button className="bg-black text-white w-full py-2 rounded-md font-medium hover:bg-gray-800 transition-colors">
        View Details
      </button>
    </div>
  )
}

export default ProductCard

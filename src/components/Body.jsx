import React, { useEffect, useState } from "react";
import Apicalling from "./Apicalling.jsx";
import ProductCard from "./ProductCard.jsx";
import Navbar from "./Navbar.jsx";

function Body() {
  const { allProducts } = Apicalling();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(allProducts);
  }, [allProducts]);

  if (!allProducts || allProducts.length === 0) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div>
      {/* Navbar with filtering */}
      <Navbar
        allProducts={allProducts}
        setFilteredProducts={setFilteredProducts}
      />

       <div className="flex flex-col items-center mt-8">
        <h1 className="text-3xl font-bold text-gray-900">Store</h1>
        <h3 className="text-gray-600">Buy with your Web3 wallet!</h3>
      </div>

      {/* Products grid */}
      <div className="w-10/12 m-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Body;

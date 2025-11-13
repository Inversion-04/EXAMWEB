import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";

function Navbar({ allProducts, setFilteredProducts }) {

  const handleSearch = (searchedText) => {
    const filtered = allProducts.filter((item) =>
      item.title.toLowerCase().includes(searchedText.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-sm border-b border-gray-200">
      {/* Left side - Logo + Title */}
      <div className="flex items-center gap-2">
        <LuShoppingCart className="text-2xl text-black" />
        <h1 className="text-xl font-semibold text-gray-900">
          Web3 Shopping Cart
        </h1>
      </div>

      {/* Right side - Search box */}
      <div className="flex items-center border border-gray-300 rounded-md px-3 py-1.5 bg-white shadow-sm w-72">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => handleSearch(e.target.value)}
          className="flex-1 bg-transparent outline-none text-gray-700 text-sm placeholder-gray-500"
        />
        <IoMdSearch className="text-gray-600 text-xl cursor-pointer hover:text-gray-800 ml-2" />
      </div>
    </nav>
  );
}

export default Navbar;

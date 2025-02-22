

import React from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import products from "./Products"; // Importing local products

const AllProd = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow cursor-pointer"
            onClick={() => navigate(`/products/${product.id}`)} // Navigate to ProductD
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-sm text-gray-600">Seller: {product.seller}</p>
              <p className="text-sm text-gray-500 mt-1">{product.description.slice(0, 100)}...</p>
              <p className="text-lg font-bold text-blue-600 mt-2">{product.price}</p>
              <div className="mt-4 flex justify-between items-center">
                <button className="flex items-center bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700">
                  <Plus className="mr-2" size={18} />
                  Add to Cart
                </button>
                <button className="text-blue-600 font-semibold">More like this ➡</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProd;
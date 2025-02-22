import React, { useState, useEffect } from "react";
import axios from "axios";

const AuctionPage = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts(1); // Load initial products
  }, []);

  const fetchProducts = async (pageNum) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products?limit=9&page=${pageNum}`
      );
      setProducts((prev) => [...prev, ...response.data]); // Append new products
      setPage(pageNum);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          🔥 Live Auction Items 🔥
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-5 rounded-lg shadow-lg hover:scale-105 transition-transform flex flex-col"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain rounded-md mb-4"
              />

              {/* Product Details */}
              <h2 className="text-lg font-semibold text-gray-800 h-12 overflow-hidden line-clamp-2">
                {product.title}
              </h2>
              <p className="text-gray-600">${product.price} (Starting Bid)</p>

              {/* Auction Description */}
              <p className="text-sm text-gray-500 italic mt-2">
                This is a live auction item. Place your bid before time runs out!
              </p>

              {/* Timer (Static for now) */}
              <p className="text-red-500 font-semibold mt-2">⏳ Ends in: 2h 30m</p>

              {/* Spacer to push button to bottom */}
              <div className="flex-grow"></div>

              {/* Bid Now Button */}
              <button className="bg-green-600 hover:bg-green-700 text-white w-full mt-3 py-2 rounded-lg text-lg">
                💰 Bid Now
              </button>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => fetchProducts(page + 1)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-lg"
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuctionPage;

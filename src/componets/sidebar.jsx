import React from "react";

const Sidebar = () => {
  return (
    <div className="text-white w-80 h-screen overflow-y-auto bg-gray-900">
    {/* Welcome Section */}
    <div className="bg-blue-700 h-12 flex items-center pl-4">
      <img
        src="/user-icon.svg" // Replace with the path to your user icon
        alt="User Icon"
        className="w-6 h-6 mr-2"
      />
      <h2 className="text-lg font-semibold">Welcome to the Smile Store!</h2>
    </div>

    {/* Categories Section */}
    <div className="mb-6 pl-4 my-4">
      <h3 className="text-md font-semibold mb-2">Categories</h3>
      <ul className="space-y-2 pl-0 list-none">
        <li className="cursor-pointer hover:text-gray-400">Electronics</li>
        <li className="cursor-pointer hover:text-gray-400">Antiques</li>
        <li className="cursor-pointer hover:text-gray-400">Art & Collectibles</li>
        <li className="cursor-pointer hover:text-gray-400">Vehicles</li>
        <li className="cursor-pointer hover:text-gray-400">Jewelry</li>
        <li className="cursor-pointer hover:text-gray-400">Real Estate</li>
        <li className="cursor-pointer hover:text-gray-400">Sports Memorabilia</li>
      </ul>
    </div>
    <hr className="border-gray-600 my-4" />

    {/* Trending Auctions */}
    <div className="mb-6 pl-4">
      <h3 className="text-md font-semibold mb-2">Trending Auctions</h3>
      <ul className="space-y-2 pl-0 list-none">
        <li className="cursor-pointer hover:text-gray-400">Most Bid Items</li>
        <li className="cursor-pointer hover:text-gray-400">Ending Soon</li>
        <li className="cursor-pointer hover:text-gray-400">Newly Listed</li>
      </ul>
    </div>

    <hr className="border-gray-600 my-4" />

    {/* Auction Services */}
    <div className="mb-6 pl-4">
      <h3 className="text-md font-semibold mb-2">Auction Services</h3>
      <ul className="space-y-2 pl-0 list-none">
        <li className="cursor-pointer hover:text-gray-400">Live Auctions</li>
        <li className="cursor-pointer hover:text-gray-400">Buy It Now</li>
        <li className="cursor-pointer hover:text-gray-400">Reserve Price Listings</li>
        <li className="cursor-pointer hover:text-gray-400">Consign Items</li>
        <li className="cursor-pointer hover:text-gray-400">Sell with Us</li>
      </ul>
    </div>

    <hr className="border-gray-600 my-4" />

    {/* Help and Settings Section */}
    <div className="mb-6 pl-4">
      <h3 className="text-md font-semibold mb-2">Help and Settings</h3>
      <ul className="space-y-2 pl-0 list-none">
        <li className="cursor-pointer hover:text-gray-400">Your Account</li>
        <li className="cursor-pointer hover:text-gray-400">Auction Rules</li>
        <li className="cursor-pointer hover:text-gray-400">Light/Dark Mode</li>
        <li className="cursor-pointer hover:text-gray-400">Sign In/Out</li>
      </ul>
    </div>
  </div>

  );
};

export default Sidebar;


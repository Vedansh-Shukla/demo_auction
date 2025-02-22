import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";  
import Sidebar from "./sidebar";
import LoginTab from "./Login";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [category, setCategory] = useState("All"); 
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    if (isSidebarVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isSidebarVisible]);

  const handleSign = () => {
    navigate("/Sign");
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate("/products");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="bg-gray-800 text-white shadow-lg">
      {/* Large Screen Navbar */}
      <div className="items-center justify-between px-4 py-2 hidden md:flex">
        <Link to="/">
          <img 
            src="./smilestorelogo.png" 
            alt="SmileStore" 
            className="w-20 h-8 cursor-pointer transition-all hover:outline hover:outline-2 hover:outline-white"
          />
        </Link>

        <div className="flex flex-col text-sm">
          <div className="flex items-center text-sm">
            <img src="/icons8-location-50.png" alt="Location" className="w-6 h-6 mr-2" />
            <span className="font-semibold">Deliver to</span>
          </div>
          <span>1234 Your Address</span>
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center flex-grow max-w-2xl mx-4">
          <div className="relative">
            <select
              className="bg-gray-700 text-white p-2 hover:bg-black rounded-l-lg h-full appearance-none pr-8"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>All</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home</option>
              <option>Books</option>
              <option>Art</option>
              <option>Collectibles</option>

            </select>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">▼</span>
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search for products"
            className="w-full p-2 text-black outline-none border-gray-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-blue-500 p-2 rounded-r-lg hover:bg-blue-600 flex items-center justify-center"
          >
            <SearchIcon className="text-white" />
          </button>
        </div>

        <button  className="flex items-center bg-gray-700 p-2 rounded-lg">
          <ShoppingCartIcon className="text-white" />
        </button>

        <button onClick={handleLoginClick} className="bg-blue-500 p-2 rounded-md hover:bg-blue-600">
          Login
        </button>

        {isLoginOpen && <LoginTab onClose={() => setIsLoginOpen(false)} />}
      </div>

      {/* Small Screen Navbar */}
      <div className="flex flex-col items-center justify-between px-4 py-2 md:hidden">
        <div className="flex items-center space-x-4 w-full justify-between">
          <button className="bg-gray-700 p-2 rounded-md" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Search Bar */}
          <div className="flex flex-grow items-center justify-center">
            <div className="flex items-center flex-grow rounded-r-lg max-w-2xl">
              <button
                onClick={handleSearch}
                className="bg-blue-500 p-2 hover:bg-blue-600 flex items-center rounded-l justify-center"
              >
                <SearchIcon className="text-white w-5 h-5" />
              </button>
              <input
                type="text"
                placeholder="Search for products"
                className="w-full p-2 text-black outline-none"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={handleSign} className="bg-blue-500 p-2 rounded-md text-sm font-medium hover:bg-blue-600">
              <PermIdentityIcon />
            </button>
            <button onClick={handleCartClick} className="flex items-center bg-gray-700 p-2 rounded-md">
              <ShoppingCartIcon className="text-white" />
            </button>
          </div>
        </div>

        {isSidebarVisible && (
          <div className="fixed inset-0 flex z-50">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleSidebar}></div>
            <div className="relative w-72 h-screen bg-gray-800 shadow-lg overflow-y-auto overflow-x-hidden max-h-screen">
              <Sidebar />
            </div>
            <button
              onClick={toggleSidebar}
              className="absolute top-4 left-[290px] text-white text-2xl p-2 rounded hover:bg-gray-700 transition"
            >
              ✖
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;


// src/pages/HomePage.js
import React from "react";
import Navbar from "../componets/Navbar";
import Navbar2 from "../componets/Navbar2";
import Sidebar from "../componets/sidebar";
import Footer from "../componets/Footer";
import AuctionPage from "../componets/Products";
// import { AuctionProducts } from "../componets/Products";
AuctionPage
// auctionProducts
const HomePage = () => {
  return (
    <div className="homePage flex flex-col min-h-screen w-full overflow-x-hidden">
      {/* Navbar Components */}
      <Navbar />
      <Navbar2 />
  
      <AuctionPage/>
      
      
      <Footer/>

      
    </div>
  );
};

export default HomePage;

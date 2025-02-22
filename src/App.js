// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
// import ProductPage from './pages/Productpage'; 
// Ensure the correct import path
// import ProductDes from './pages/ProductDes';
// import ProductD from '../src/componets/ProductD';
// import CartPage from './pages/Cartpage';
import LoginTab from './componets/Login';
import SignUp from './pages/Signup';
import AuctionPage from './componets/Products';
// AuctionPage
// SignUp
// LoginTab
function App() {
  return (
    <Router>
      <div className="App">
        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/products" element={<ProductPage />} /> */}
          {/* <Route path="/productdes" element={<ProductDes/>}/> */}
         {/* < Route path="pr" element={<ProductD/>}/> */}
         {/* <Route path="/cart" element={<CartPage />} /> */}
         <Route path="/login" element={<LoginTab/>}/>

         {/* <Route path="/Products/:id" element={<ProductDes />} /> */}
        {/* <Route path="productdesc" element={ProductDes}/> */}
        <Route path="/sign" element={<SignUp />} />
        <Route path="/product" element={<AuctionPage/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

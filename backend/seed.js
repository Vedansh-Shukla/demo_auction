import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/productModel.js";
import connectDB from "./config/mongodb.js";

dotenv.config();
connectDB();

const products = [
  { name: "iPhone 14", category: "Smartphone", price: 799, description: "Latest iPhone with A15 Bionic chip." },
  { name: "Samsung Galaxy S23", category: "Smartphone", price: 899, description: "Flagship phone with Dynamic AMOLED display." },
  { name: "MacBook Pro 16", category: "Laptop", price: 2499, description: "Powerful laptop for professionals." },
  { name: "Sony WH-1000XM5", category: "Headphones", price: 399, description: "Noise-canceling wireless headphones." },
  { name: "Dell XPS 13", category: "Laptop", price: 1199, description: "Ultrabook with InfinityEdge display." },
  { name: "Apple Watch Series 8", category: "Wearable", price: 499, description: "Smartwatch with health tracking." },
  { name: "AirPods Pro", category: "Headphones", price: 249, description: "Wireless earbuds with active noise cancellation." }
];

const insertData = async () => {
  try {
    await Product.deleteMany(); // Clear existing data
    await Product.insertMany(products);
    console.log("Product data added!");
    process.exit();
  } catch (error) {
    console.error("Error inserting data:", error);
    process.exit(1);
  }
};

insertData();

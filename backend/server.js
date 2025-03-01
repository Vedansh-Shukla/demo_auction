// import express from 'express'
// import cors from'cors'
// import 'dotenv/config'
// import mongoose from "mongoose";
// import connectDB from './config/mongodb.js';
// import connectCloudinary from './config/cloudinary.js';
// // import userRouter from './routes/userRoute.js';
// // import productRouter from './routes/productRoute.js';


// //App config
// const app= express()
// const port=process.env.PORT||4000
// connectDB()
// connectCloudinary()

// //middleware
// app.use(express.json())
// app.use(cors())

// //api end points
// // app.use('/api/user',userRouter)
// // app.use('/api/product',productRouter)
// // app.use('/api/user',userRouter)
// // mongoose.connect(process.env.MONGODB_URI, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   }).then(() => console.log("MongoDB Connected"))
// //     .catch((err) => console.error("MongoDB Connection Error:", err));
  
//   // Product Schema
//   const productSchema = new mongoose.Schema({
//     name: String,
//     show: String,
//     category: String,
//     type: String,
//     rating: Number,
//     seller: String,
//     price: Number,
//     image: String,
//     images: [String],
//     description: String
//   });
//   const Product = mongoose.model("Product", productSchema);
  
//   // API Route to Fetch All Products
//   app.get("/api/products", async (req, res) => {
//     try {
//       const products = await Product.find({});
//       res.json(products);
//     } catch (error) {
//       res.status(500).json({ message: "Server Error", error });
//     }
//   });



// app.get('/',(req,res)=>{
//     res.send("API IS WORKIGN")
// })



// app.listen(port,()=>console.log('server started on PORT:'+port))
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import searchRoutes from "./routes/search.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/search", searchRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

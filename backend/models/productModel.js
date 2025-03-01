import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  show: { type: String, required: true },
  type: { type: String, required: true },
  image: { type: String, required: true },
  special: { type: Number, required: true },
  seller: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  description: { type: String, required: true }
});

const Product = mongoose.model("Product", productSchema);
export default Product;


// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   category: { type: String, required: true },
//   price: { type: Number, required: true },
//   description: String,
// });

// const Product = mongoose.model("Product", productSchema);
// export default Product;

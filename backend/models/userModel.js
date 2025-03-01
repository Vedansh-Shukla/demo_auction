// import { Password } from "@mui/icons-material";
// import mongoose from "mongoose";
// const userSchema = new mongoose.Schema({
//     name:{ type: String, required:true},
//     email:{ type: String, required:true, unique:true},
//     password:{type:String, required:true},
//     cartData:{type:Object, default:{}}


// },{minimize:false})
// const userModel = mongoose.models.user || mongoose.model('user', userSchema);
// export default userModel
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      sparse: true, // Ensures that this field can be null if phone number is provided
    },
    phoneNumber: {
      type: String,
      unique: true,
      sparse: true, // Ensures that this field can be null if email is provided
    },
    password: {
      type: String,
      required: true,
    },
    cartData: {
      type: Object,
      default: {},
    },
  },
  { minimize: false }
);

const userModel =
  mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;

// import userModel from "../models/userModel.js";
// import validator from "validator";
// import bcrypt from "bcrypt"; // Fixed spelling mistake
// import jwt from "jsonwebtoken";

// const createToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" }); // Added expiration time
// };

// // Register User
// const registerUser = async (req, res) => {
//     try {
//         const { name, email, password } = req.body;

//         // Check if user already exists
//         const exists = await userModel.findOne({ email });
//         if (exists) {
//             return res.status(400).json({ success: false, message: "User already exists" });
//         }

//         // Validate email
//         if (!validator.isEmail(email)) {
//             return res.status(400).json({ success: false, message: "Please enter a valid email" });
//         }

//         // Validate password length
//         if (password.length < 8) { // Fixed `length` typo
//             return res.status(400).json({ success: false, message: "Please enter a strong password (min 8 characters)" });
//         }

//         // Hashing the password
//         const salt = await bcrypt.genSalt(10);
//         const hashPassword = await bcrypt.hash(password, salt);

//         // Create new user
//         const newUser = new userModel({
//             name,
//             email,
//             password: hashPassword
//         });

//         const user = await newUser.save();
//         const token = createToken(user._id);

//         res.status(201).json({ success: true, token });
//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
// };

// // Login User
// const loginUser = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Check if user exists
//         const user = await userModel.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ success: false, message: "Invalid credentials" });
//         }

//         // Compare passwords
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ success: false, message: "Invalid credentials" });
//         }

//         // Generate token
//         const token = createToken(user._id);
//         res.status(200).json({ success: true, token });
//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
// };

// // Admin Login (Currently Empty)
// const adminLogin = async (req, res) => {
//     // Add admin authentication logic here if needed
// };

// export { loginUser, registerUser, adminLogin };

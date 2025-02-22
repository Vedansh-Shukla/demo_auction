import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const LoginTab = ({ onClose }) => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleForgotPassword = () => {
    // Add functionality for forgot password
    alert("Forgot password functionality coming soon!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailOrPhone, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // Save JWT token
        onClose(); // Close the login modal
        window.location.reload(); // Reload to reflect changes
      } else {
        setError(data.message || "Invalid email/phone or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  const handleSignUpRedirect = () => {
    onClose();
    navigate("/Sign");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
    <div className="bg-white p-8 rounded-xl shadow-2xl w-[450px] relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl"
      >
        ✖
      </button>
  
      <h2 className="text-3xl font-bold mb-6 text-black text-center">Login</h2>
  
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
  
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email or Phone Number"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          className="w-full p-3 text-black border rounded-lg mb-4 outline-none text-lg"
          required
        />
  
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 text-black border rounded-lg outline-none text-lg pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-600 hover:text-black"
          >
            {showPassword ? (
              <VisibilityIcon className="w-5 h-5" />
            ) : (
              <VisibilityOffIcon className="w-5 h-5" />
            )}
          </button>
        </div>
  
        {/* Moved "Forgot your password?" button below the password field */}
        <div className="text-right mt-2">
          <button
            type="button"
            onClick={handleForgotPassword}
            className="text-blue-500 text-sm hover:underline"
          >
            Forgot your password?
          </button>
        </div>
  
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg text-lg font-semibold mt-4 hover:bg-blue-700"
        >
          Login
        </button>
      </form>
  
      <p className="text-center mt-5 text-gray-600 text-lg">
        New to Smile Store?{" "}
        <span onClick={handleSignUpRedirect} className="text-blue-500 cursor-pointer hover:underline">
          Create an account
        </span>
      </p>
    </div>
  </div>
  
  );
};

export default LoginTab;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Homepage

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    password: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form inputs
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required!";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Phone number or Email is required!";
    } else if (
      !/^\d{10}$/.test(formData.contact) &&
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.contact)
    ) {
      newErrors.contact = "Enter a valid phone number or email!";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required!";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters!";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Sign-Up Successful! 🎉");
        navigate("/"); // Redirect to homepage
      } else {
        alert(data.message || "Sign-up failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <img src="/smilestorelogo.png" alt="Smile Store Logo" className="w-[200px] h-14 mx-auto" />

        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Phone or Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Phone or Email</label>
            <input
              type="text"
              name="contact"
              placeholder="Enter phone or email"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Address Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Address</label>
            <textarea
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            ></textarea>
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="text-blue-500 hover:underline"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignUp;

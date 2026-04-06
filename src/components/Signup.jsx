import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Signup({ theme }) {
  const isDark = theme === "dark-theme";
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await signup(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className={`min-h-screen pt-28 flex justify-center items-start ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className={`w-[90%] max-w-md p-6 rounded-2xl shadow-lg ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className={`p-3 rounded-md border ${isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-black"}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className={`p-3 rounded-md border ${isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-black"}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className={`p-3 rounded-md border ${isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-black"}`}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className="bg-blue-600 text-white py-3 rounded-md">
            Create Account
          </button>
        </form>

        <p className="mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
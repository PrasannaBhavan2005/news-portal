import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Login({ theme }) {
  const isDark = theme === "dark-theme";
  const { login, loginWithGoogle, loginWithGithub } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleGoogle() {
    setError("");
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleGithub() {
    setError("");
    try {
      await loginWithGithub();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className={`min-h-screen pt-28 flex justify-center items-start ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className={`w-[90%] max-w-md p-6 rounded-2xl shadow-lg ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>

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

          <button type="submit" className="bg-blue-600 text-white py-3 rounded-md">
            Login with Email
          </button>
        </form>

        <div className="flex flex-col gap-3 mt-4">
          <button onClick={handleGoogle} className="bg-red-500 text-white py-3 rounded-md">
            Continue with Google
          </button>

          <button onClick={handleGithub} className="bg-gray-700 text-white py-3 rounded-md">
            Continue with GitHub
          </button>
        </div>

        <p className="mt-4">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
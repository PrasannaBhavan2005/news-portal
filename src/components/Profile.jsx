import React from "react";
import { useAuth } from "../context/AuthContext";

function Profile({ theme }) {
  const isDark = theme === "dark-theme";
  const { user } = useAuth();

  return (
    <div className={`min-h-screen pt-28 px-6 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className={`max-w-xl mx-auto p-6 rounded-2xl shadow-lg ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
        <h2 className="text-2xl font-bold mb-4">My Profile</h2>
        <p><span className="font-semibold">Name:</span> {user?.displayName || "Not set"}</p>
        <p><span className="font-semibold">Email:</span> {user?.email}</p>
        <p><span className="font-semibold">UID:</span> {user?.uid}</p>
      </div>
    </div>
  );
}

export default Profile;
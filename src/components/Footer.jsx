import React from "react";

function Footer({ theme }) {
  const isDark = theme === "dark-theme";

  return (
    <footer
      className={`footer w-full flex justify-center items-center py-4 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      Copyright &copy; 2026
    </footer>
  );
}

export default Footer;
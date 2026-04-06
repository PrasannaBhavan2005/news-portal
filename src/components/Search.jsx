import React from "react";

function Search({ theme }) {
  const isDark = theme === "dark-theme";

  return (
    <form className="search-bar my-8 text-center px-2 xs:mb-10 md:mb-16">
      <input
        type="text"
        name="search"
        className={`search-box md:w-2/4 sm:p-4 xs:px-2 rounded-md border outline-none ${
          isDark
            ? "bg-gray-900 text-white border-gray-700 placeholder-gray-400"
            : "bg-white text-black border-gray-300 placeholder-gray-500"
        }`}
        placeholder="Search News"
      />
      <button
        type="button"
        className={`btn px-4 py-2 rounded-md ml-2 ${
          isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        }`}
      >
        Search
      </button>
    </form>
  );
}

export default Search;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import countries from "./countries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";

function Header({ theme, toggleTheme }) {
  const [active, setActive] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const { user, logout } = useAuth();

  const category = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
    "politics",
  ];

  const isDark = theme === "dark-theme";

  async function handleLogout() {
    await logout();
    setActive(false);
  }

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 w-full h-auto z-10 flex items-center justify-around ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        } shadow-md`}
      >
        <h3 className="relative heading font-bold md:basis-1/6 text-2xl xs:basis-4/12 z-50 mb-5 mt-5">
          News Portal
        </h3>

        <ul
          className={
            active
              ? "nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end active"
              : "nav-ul flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end"
          }
        >
          <li>
            <Link to="/" onClick={() => setActive(false)}>
              All News
            </Link>
          </li>

          {/* CATEGORY DROPDOWN */}
          <li className="dropdown-li relative">
            <button
              type="button"
              className="font-semibold flex items-center gap-2 bg-transparent border-none cursor-pointer"
              onClick={() => {
                setShowCategoryDropdown(!showCategoryDropdown);
                setShowCountryDropdown(false);
              }}
            >
              Top-Headlines
              <FontAwesomeIcon
                className={
                  showCategoryDropdown
                    ? "down-arrow-icon down-arrow-icon-active"
                    : "down-arrow-icon"
                }
                icon={faCircleArrowDown}
              />
            </button>

            <ul
              className={
                showCategoryDropdown
                  ? "dropdown p-2 show-dropdown"
                  : "dropdown p-2"
              }
            >
              {category.map((element, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setShowCategoryDropdown(false);
                    setActive(false);
                  }}
                >
                  <Link
                    to={"/top-headlines/" + element}
                    className="flex gap-3 capitalize"
                  >
                    {element}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* COUNTRY DROPDOWN */}
          <li className="dropdown-li relative">
            <button
              type="button"
              className="font-semibold flex items-center gap-2 bg-transparent border-none cursor-pointer"
              onClick={() => {
                setShowCountryDropdown(!showCountryDropdown);
                setShowCategoryDropdown(false);
              }}
            >
              Country
              <FontAwesomeIcon
                className={
                  showCountryDropdown
                    ? "down-arrow-icon down-arrow-icon-active"
                    : "down-arrow-icon"
                }
                icon={faCircleArrowDown}
              />
            </button>

            <ul
              className={
                showCountryDropdown
                  ? "dropdown p-2 show-dropdown"
                  : "dropdown p-2"
              }
            >
              {countries.map((element, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setShowCountryDropdown(false);
                    setActive(false);
                  }}
                >
                  <Link
                    to={"/country/" + element?.iso_2_alpha}
                    className="flex gap-3"
                  >
                    <img
                      src={element?.png}
                      srcSet={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png 2x`}
                      alt={element?.countryName}
                    />
                    <span>{element?.countryName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* AUTH BUTTONS */}
          {user ? (
            <>
              <li>
                <Link to="/profile" onClick={() => setActive(false)}>
                  Profile
                </Link>
              </li>

              <li>
                <button
                  className="font-semibold bg-transparent border-none cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" onClick={() => setActive(false)}>
                  Login
                </Link>
              </li>

              <li>
                <Link to="/signup" onClick={() => setActive(false)}>
                  Signup
                </Link>
              </li>
            </>
          )}

          {/* DARK MODE TOGGLE */}
          <li>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="checkbox"
                id="checkbox"
                checked={isDark}
                onChange={toggleTheme}
              />
              <label htmlFor="checkbox" className="checkbox-label cursor-pointer">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <span className="ball"></span>
              </label>
            </div>
          </li>
        </ul>

        {/* MOBILE HAMBURGER */}
        <div
          className={active ? "ham-burger ham-open" : "ham-burger"}
          onClick={() => setActive(!active)}
        >
          <span className="lines line-1"></span>
          <span className="lines line-2"></span>
          <span className="lines line-3"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
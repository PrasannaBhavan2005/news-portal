import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import AllNews from "./components/AllNews";
import TopHeadlines from "./components/TopHeadlines";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryNews from "./components/CountryNews";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [theme, setTheme] = useState("light-theme");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) =>
      prev === "light-theme" ? "dark-theme" : "light-theme"
    );
  }

  return (
    <div className={`w-full min-h-screen ${theme}`}>
      <BrowserRouter>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<AllNews theme={theme} />} />
          <Route
            path="/top-headlines/:category"
            element={<TopHeadlines theme={theme} />}
          />
          <Route
            path="/country/:iso"
            element={<CountryNews theme={theme} />}
          />
          <Route path="/login" element={<Login theme={theme} />} />
          <Route path="/signup" element={<Signup theme={theme} />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile theme={theme} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
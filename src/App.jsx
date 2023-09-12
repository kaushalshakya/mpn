import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Advertise from "./pages/Advertise";
import Privacy from "./pages/Privacy";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function App() {
  const [theme, setTheme] = useState(null);
  const [dataTheme, setDataTheme] = useState(
    document.querySelector("html").getAttribute("data-theme")
  );

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    setTheme(currentTheme);

    // Set up an observer to observe changes to the data-theme attribute
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          setDataTheme(
            document.querySelector("html").getAttribute("data-theme")
          );
        }
      });
    });

    observer.observe(document.querySelector("html"), {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, [dataTheme]);
  return (
    <>
      <div
        className={
          theme !== "fantasy" ? "bg-[#e5e5e5] h-screen" : "bg-base-300"
        }
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path="/advertise" Component={Advertise} />
            <Route path="/privacy-policy" Component={Privacy} />
            <Route path="/register" Component={Register} />
            <Route path="/login" Component={Login} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

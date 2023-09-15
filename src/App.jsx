import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import Routes from "./Routes/Routes";

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
      <div className="bg-base-200 min-h-screen w-screen">
        <Router>
          <Routes />
        </Router>
      </div>
    </>
  );
}

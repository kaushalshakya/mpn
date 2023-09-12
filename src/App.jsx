import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Advertise from "./pages/Advertise";
import Privacy from "./pages/Privacy";
import Register from "./pages/Register";
import Login from "./pages/Login";

export default function App() {
  const theme = localStorage.getItem("theme");
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
        </Router>
      </div>
    </>
  );
}

import "./App.css";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import "./universal.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  const siteName = "Blogger";

  return (
    <div>
      <div className="navbar">
        <Navbar siteName={siteName} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import PostDesciption from "./components/PostDesciption/PostDesciption";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

function App() {
  const siteName = "Blogger";

  return (
    <div>
      <Navbar siteName={siteName} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/des/:id" element={<PostDesciption />} />
      </Routes>
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;

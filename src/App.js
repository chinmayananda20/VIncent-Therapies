import "./App.css";
import Navbar from "./components/common_components/Navbar";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "animate.css";
import Footer from "./components/common_components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

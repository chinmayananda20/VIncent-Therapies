import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import 'animate.css';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" alement={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

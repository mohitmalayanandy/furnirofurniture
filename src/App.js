import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import User from "./pages/User/User";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/wishlist" element={<Wishlist />}/>
        <Route path="/user" element={<User />}/>
        <Route path="/product" element={<SingleProduct />}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

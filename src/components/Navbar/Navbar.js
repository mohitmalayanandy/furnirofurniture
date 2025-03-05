import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState("")
  return (
    <div className="navbar">
      <div className="navbar-logo">
      <img src={assets.logo} alt="" className="logo" />
      <h2 className="logo-text">FURNIRO</h2>
      </div>
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu === "home"?"active":""}><Link to="/">Home</Link></li>
        <li onClick={()=>setMenu("shop")} className={menu === "shop"?"active":""}><Link to="/shop">Shop</Link></li>
        <li onClick={()=>setMenu("about")} className={menu === "about"?"active":""}><Link to="/about">About</Link></li>
        <li onClick={()=>setMenu("contact")} className={menu === "contact"?"active":""}><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="navbar-search-icon" className="navbar-search-icon" />
        <img src={assets.wishlist_icon} alt="navbar-wishlist-icon" className="navbar-wishlist-icon" />
        <img src={assets.cart_icon} alt="navbar-cart-icon" className="navbar-cart-icon" />
        <img src={assets.profile_icon} alt="navbar-profile-icon" className="navbar-profile-icon" />
      </div>
    </div>
  )
}

export default Navbar

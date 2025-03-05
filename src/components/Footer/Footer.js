import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} alt="" />
                    <h1>FURNIRO</h1>
                    <ul>
                        <li>+91 222-333-555</li>
                        <li>contact@furniro.com</li>
                    </ul>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className='footer-content-center1'>
                    <h2>Links</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="about/">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/blog">Blogs</Link></li>
                    </ul>
                </div>
                <div className='footer-content-center2'>
                    <h2>Help</h2>
                    <ul>
                        <li>Payment Option</li>
                        <li>Return</li>
                        <li>Privicy Policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>NEWSLETTER</h2>
                    <input type="text" placeholder='Enter Your Email' />
                    <button>Subscribe</button>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2025 @furniro.com - All Right Reserved</p>
        </div>
    )
}

export default Footer

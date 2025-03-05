import React from 'react'
import { assets } from '../../assets/assets'
import './Inspiration.css'
const Inspiration = () => {
    return (
        <div className="inspiration">
            <div className='inspiration-content'>
                <div className="text">
                <h2>50+ Beautiful rooms <br />inspiration</h2>
                <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <button>Explore More</button>
                </div>
                <img src={assets.inspiration_1} alt="" />
                <img src={assets.inspiration_2} alt="" />
            </div>
        </div>
    )
}

export default Inspiration

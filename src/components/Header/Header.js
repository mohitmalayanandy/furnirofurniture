import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <p>New Arrival !!!</p>
        <h1>Discover Our <br /> New Collection</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, perferendis ducimus ratione eius, natus enim inventore voluptatem voluptatibus ad omnis suscipit dolore veritatis aut optio minima mollitia nobis reiciendis, maxime unde id temporibus odit laboriosam? In, dolorum excepturi. A optio placeat eius nam. Dolorum, incidunt quae at hic deserunt fugiat?</p>
        <button><Link to="/shop">Shop Now</Link></button>
      </div>
    </div>
  )
}

export default Header

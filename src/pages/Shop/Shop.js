import React from 'react'
import './Shop.css'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'
const Shop = () => {
  return (
    <div className="shop">
        <ProductDisplay category='all' />
    </div>
  )
}

export default Shop

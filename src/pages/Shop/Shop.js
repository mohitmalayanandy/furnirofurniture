import React from 'react'
import './Shop.css'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'
import PageBanner from '../../components/PageBanner/PageBanner'
const Shop = () => {
  return (
    <div className="shop">
      <PageBanner />
      <ProductDisplay category='all' />
    </div>
  )
}

export default Shop

import React from 'react'
import './Home.css'
import Category from '../../components/Category/Category'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'
import Inspiration from '../../components/Inspiration/Inspiration'
import HashShare from '../../components/HashShare/HashShare'
import Header from '../../components/Header/Header'
const Home = () => {
  return (
    <div>
      <Header />
      <Category />
      <ProductDisplay category='all'/>
      <Inspiration />
      <HashShare />
    </div>
  )
}

export default Home

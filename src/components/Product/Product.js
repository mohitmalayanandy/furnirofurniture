import React from 'react';
import './Product.css';

const Product = ({ name, price, description, image }) => {
  return (
    <div className="product">
      <div className='product-img-container'>
        <img className='product-image' src={image} alt={name} />
        
      </div>
      <div className='product-info'>
        <h3 className='product-name'>{name}</h3>
        <p className='product-desc'>{description}</p>
        <p className='product-price'>₹{price}</p>
      </div>
    </div>
  );
};

export default Product;
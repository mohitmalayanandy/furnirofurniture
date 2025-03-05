import React from 'react';
import './ProductDisplay.css';
import { product_list } from '../../assets/assets';
import Product from '../Product/Product';

const ProductDisplay = ({ category }) => {
  return (
    <div className="product-display">
      <h2>Our Products</h2>
      <div className='product-display-list'>
        {product_list.map((item) => (
          (category === "all" || category === item.category) && (
            <Product
              key={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;

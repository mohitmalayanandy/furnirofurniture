import React from 'react';
import './HashShare.css';
import { product_list } from '../../assets/assets';

const HashShare = () => {
  return (
    <div className="hashshare">
      <p>Share Your setup with</p>
      <h2>#FurniroFurniture</h2>
      <div className="divider">
        <div className='divider-left'>
          <div className='divider-left-up'>
            <img src={product_list[0].image} alt="Bedroom Setup 1" />
            <img src={product_list[1].image} alt="Bedroom Setup 2" />
          </div>
          <div className='divider-left-down'>
            <img src={product_list[2].image} alt="Bedroom Setup 3" />
            <img src={product_list[3].image} alt="Bedroom Setup 4" />
          </div>
        </div>
        <div className='divider-center'>
          <img src={product_list[4].image} alt="Dining Setup" />
        </div>
        <div className='divider-right'>
          <div className='divider-right-up'>
            <img src={product_list[5].image} alt="Dining Setup 15" />
            <img src={product_list[6].image} alt="Dining Setup 11" />
          </div>
          <div className='divider-right-down'>
            <img src={product_list[7].image} alt="Dining Setup 7" />
            <img src={product_list[8].image} alt="Dining Setup 8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HashShare;
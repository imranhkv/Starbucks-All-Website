import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllProducts from './AllProducts';
import Favorite from './Favorite';
import Previous from './Previous';
import ShoppingCart from '../Cart/ShoppingCart';

function Menu() {
  return (
    <div>
      <div className="menu-main">
        <Routes>
          <Route path="//" element={<AllProducts />} />
          <Route path="/previous" element={<Previous />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </div>
  );
}

export default Menu;

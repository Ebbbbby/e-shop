import React from 'react'
import Navheader from '../header/Navheader';
import Categories from '../categories/Categories';
import Products from '../products/Products';


const Home = () => {
  return (
    <div>
    
      <Categories />
      <Products />
    </div>
  );
}

export default Home
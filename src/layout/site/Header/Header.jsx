import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';
import { FaUser, FaHeart, FaShoppingBasket, FaCog } from 'react-icons/fa';


const Header = () => {
  

  return (
  
      <header>
        <img
        className='logo'
          src="https://supro.arrowtheme.com/pub/media/logo/default/logo.png"
          alt="Logo"
        />
        <ul className="headerUl">


        <div class="dropdown">
 
          <li><Link to={'/'} style={{ textDecoration: "none", color: "black" }}>Home</Link></li>
              <div class="dropdown-content">
             <ul><li>Home1</li>
<li>Home2</li>
<li>Home3</li>
<li>Home4</li></ul>
  </div>
</div>



<div class="dropdown">
          <li><Link to={'/basket'} style={{ textDecoration: "none", color: "black" }}>Basket</Link></li>
          <div class="dropdown-content">
             <ul>
              <li>Home1</li>
               <li>Home2</li>
                <li>Home3</li>
                <li>Home4</li>
                </ul>
                </div>
                </div>


<div class="dropdown">
          <li>Products</li>
          <div class="dropdown-content">
             <ul>
              <li>Home1</li>
               <li>Home2</li>
                <li>Home3</li>
                <li>Home4</li>
                </ul>
                </div>
                </div>





          <div class="dropdown">      
          <li>Pages</li>
          <div class="dropdown-content">
             <ul>
              <li>Home1</li>
               <li>Home2</li>
                <li>Home3</li>
                <li>Home4</li>
                </ul>
                </div>
                </div>


          <div class="dropdown">      
          <li>Blog</li>
          <div class="dropdown-content">
             <ul>
              <li>Home1</li>
               <li>Home2</li>
                <li>Home3</li>
                <li>Home4</li>
                </ul>
                </div>
                </div>


            <div class="dropdown">      
          <li>Contact</li>
          <div class="dropdown-content">
             <ul>
              <li>Home1</li>
               <li>Home2</li>
                <li>Home3</li>
                <li>Home4</li>
                </ul>
                </div>
                </div>

        </ul>

        <div className="icons">
         <FaUser />
          <Link to={"wishlist"}><FaHeart /></Link> 
          <Link style={{textDecoration:"none",color:"black"}} to={'basket'}><FaShoppingBasket /></Link>
          <FaCog />
        </div>
      </header>

    
   
  );
};

export default Header;

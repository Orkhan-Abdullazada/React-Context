import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import './Home.css'
import { FaTwitter, FaFacebook, FaPinterest, FaGoogle, FaShoppingBasket} from 'react-icons/fa';

import { useContext } from 'react';
import MainContext from '../../../context';


export const Home = () => {
const{searchProduct,search,setSearch,}=useContext(MainContext)
  
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  autoplay: true,
  autoplaySpeed:2000,
    slidesToScroll: 1
  };

    return (

    <>
    <div className='sebet'><Link style={{textDecoration:"none", color:"white" }} to={'basket'}><FaShoppingBasket style={{fontSize:"25px"}}/></Link></div>
     <div className='icon'>
     <FaTwitter style={{color:"gray"}} /> <br />
      <FaFacebook style={{color:"gray"}}/><br />
      <FaPinterest style={{color:"gray"}}/><br />
      <FaGoogle style={{color:"gray"}}/></div>
      <div className='sliders'>
      
      <Slider {...settings}>
        <div className='slide'>
        <div className='maindiv'>
   

      <div className='text'>
         <p style={{color:"salmon", fontSize:"16px"}}>Special Price</p>
          <h1 style={{fontSize:"62px"}}>Regular <br /> Cotton Shirt</h1>
          <ul className='casual'>
            <li>Casual line</li>
            <li>Nylon mix fabric</li>
            <li>Waterpoof fabric</li>
            </ul>

          </div>
          </div>
          <img src="https://supro.arrowtheme.com/pub/media/wysiwyg/slider/slider-full-1.jpg" alt="" />
        </div>
        
        <div className='slide'>

        <div className='maindiv'>
   

   <div className='text'>
      <p style={{color:"salmon", fontSize:"16px"}}>Special Price</p>
       <h1 style={{fontSize:"62px"}}>Nylon Blend <br /> Outerwear</h1>
       <ul className='casual'>
         <li>Casual line</li>
         <li>Nylon mix fabric</li>
         <li>Waterpoof fabric</li>
         </ul>

       </div>
       </div>
         <img src="https://supro.arrowtheme.com/pub/media/wysiwyg/slider/slider-full-3.jpg" alt="" />
        </div>
        <div className='slide'>
        <div className='maindiv'>
   

   <div className='text'>
      <p style={{color:"salmon", fontSize:"16px"}}>Special Price</p>
       <h1 style={{fontSize:"62px"}}>Nylon Blend <br /> Jacket</h1>
       <ul className='casual'>
         <li>Casual line</li>
         <li>Nylon mix fabric</li>
         <li>Waterpoof fabric</li>
         </ul>

       </div>
       </div>
         <img src="https://supro.arrowtheme.com/pub/media/wysiwyg/slider/slider-full-2.jpg" alt="" />
        </div>
       
      </Slider>
    </div>

    <div className='ahref'>
      <a href="#">Best Seller</a>
    <a href="#">New Arials</a>
    <a href="#">Most Popular</a>
    </div>
    <input 
        type="text"
        className='inputSearch'
        ref={inputRef}
        value={search}
        placeholder='Search product'
        onChange={(e) => setSearch(e.target.value)}
      />
    <div className='cards'>
    {searchProduct.length > 0 ? (
                    searchProduct.map((item, index) => (
                       <Card item={item} key={index}/>
                    ))
                ) : (
                    <p>No matching products found.</p>
                )}
            </div>

</>
    )}
export default Home



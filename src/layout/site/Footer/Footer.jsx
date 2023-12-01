import React from 'react'
import './Footer.css'
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';
import { FaTwitter, FaFacebook, FaPinterest, FaGoogle } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer>
    
      <div className='footer-main '>  
        <img className='supro' src="https://supro.arrowtheme.com/pub/media/logo/default/logo.png" alt="" />
            <div className='about'>
              <p><FaMapMarker />    184 Main Rd E, St Albans VIC 3021, Australia</p>
                 <p> <FaEnvelope />      contact@company.com</p>
                  <p><FaPhone />     +001 2233 456</p>
             </div>

             <div>
              <p><b> Help & Information</b></p>
              <ul>
                <li>Track Order</li>
                <li>Premier Delivery</li>
                <li>Student Discount</li>
              </ul>
              </div>

              <div>
              <p><b>About Supro</b></p>
              <ul>
                <li>About us</li>
                <li>Careers</li>
                <li>Coporate</li>
                <li>Investors</li>
              </ul>
              </div>

              <div>
              <p><b>Online Shop</b></p>
              <ul>
                <li>Shoes</li>
                <li>Bags</li>
                <li>Wallets</li>
                <li>Belts</li>
              </ul>
              </div>
      </div>
      <div className='footer-down'><p>Copyright © 2023 Magento, Inc. All rights reserved.</p>
      <div className='iconlar'>
     <FaTwitter style={{color:"gray"}} /> 
      <FaFacebook style={{color:"gray"}}/>
      <FaPinterest style={{color:"gray"}}/>
      <FaGoogle style={{color:"gray"}}/></div>
      </div>
    </footer>
  )
}

export default Footer
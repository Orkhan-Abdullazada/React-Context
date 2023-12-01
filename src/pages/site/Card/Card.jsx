import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import MainContext from '../../../context'
import { FaHeart } from 'react-icons/fa';
import { FaShoppingBasket } from 'react-icons/fa'
const Card = ({item}) => {
  const {addToWishlist,addToBasket}=useContext(MainContext)
  return (

    <div className='card'>
  <img className='imgItem' src={item?.thumbnail} alt="" />
   <div className='cardBody'> 
   <h3>{item?.title}</h3>
    <p>{item?.price} Azn</p>
        <Link className='detailLink' to={`/${item?.id}`} >Detail</Link>
        <button className='addWish' onClick={(e)=>{
          addToWishlist(item.id) }}> <FaHeart /></button></div> 
 
   
          <button className='basket' onClick={(e)=>{
            addToBasket(item.id)
          }}><FaShoppingBasket style={{fontSize:"25px"}}/></button>
       
    </div>
  )
}

export default Card
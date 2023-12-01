
import React from 'react'
import './Wishlist.css'
import { useContext } from 'react'
import MainContext from '../../../context'
import { Link } from 'react-router-dom'
const Wishlist = () => {
    const{wishlist,handleDelete}=useContext(MainContext)
    return (
      <div className='cardlar'>
     
                       {wishlist.map((item, index) => (
                        <div className='card'>
                        <img className='imgItem' src={item?.thumbnail} alt="" />
                        <div className="cardBody">
                          <p>{item?.title}</p>
                          <p>{item?.price} Azn</p>
                              <Link className='detail' to={`/${item?.id}`} >Detail</Link>
                              <button className='deleteWishlist' onClick={()=> handleDelete(item.id)}>Delete</button>
                              </div></div>
                      )) }
                
                 
              </div>
    )
}

export default Wishlist
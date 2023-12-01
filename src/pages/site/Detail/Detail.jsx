import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import MainContext from '../../../context'
import './Detail.css'

const Detail = () => {
   const{item,setItem}=useContext(MainContext)
        const {id} = useParams()
   
      useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${id}`).then(res=>{
          setItem(res.data)
        })
      },[])

  return (
    <div className='detail'>   
       <img className='detailImg' src={item.thumbnail} alt="" />
    <div className='detail-text'> 
      <h4>{item.title}</h4>
      <span><b>Price : </b> {item.price} Azn</span> <br />
      <span><b>Description : </b>{item.description}</span>
      
      </div> 
</div>
  )
}

export default Detail
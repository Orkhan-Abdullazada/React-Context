import React from 'react'
import { useContext } from 'react'
import MainContext from '../../../context'
import './Basket.css'

const Basket = () => {
    const{basket,handleBasketDelete,counter,decrementCounter,incrementCounter}=useContext(MainContext)
  return (
    <div className='basketdiv'>
    <table>
  <tr>
    <th>Name</th>
    <th>Price</th>
    <th>Decrease</th>
    <th>Count</th>
    <th>Increase</th>
    <th>Delete</th>
    <th>Total Price</th>
   
  </tr>  
    {basket.map((item) => (
      <tr> 
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td><button onClick={decrementCounter}>-</button></td>
    <td>{counter}</td>
      <td><button onClick={incrementCounter}>+</button></td>
      <td><button onClick={()=> handleBasketDelete(item.id)}>Delete</button></td>
      <td></td>
    </tr>

   )) }


  </table></div>
  )
}

export default Basket
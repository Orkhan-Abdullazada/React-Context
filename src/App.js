import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Routes from "./router/Routes";
import MainContext from "./context";

const routes = createBrowserRouter(Routes);

const App = () => {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const[item,setItem]=useState({})
  const [basket, setBasket] = useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : []);
  const [wishlist, setWishlist] = useState(localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : []);
const [data, setData] = useState([]);
  
 
  useEffect(() => {
    axios.get(`https://dummyjson.com/products`)
      .then(res => {
        setData(res.data.products);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setError(err.message);
      });
  }, []);

  const addToWishlist = (id) => {
    let item = data.find(item => item.id === id);

    if (!wishlist.some(existingItem => existingItem.id === id)) {
      setWishlist([...wishlist, item]);
      localStorage.setItem("wishlist", JSON.stringify([...wishlist, item]));

     
      toast.success(`${item.title} added to wishlist!`);
    } else {
  
      toast.error(`${item.title} is already in your wishlist!`);
    }
  };

  const handleDelete = (id) => {
    let wishlistdelete = wishlist.find(item => item.id == id);
    wishlist.splice(wishlist.indexOf(wishlistdelete), 1);
    setWishlist([...wishlist]);
    localStorage.setItem("wishlist", JSON.stringify([...wishlist]));
    toast.error(`Product deleted from wishlist!`)
  };

  const searchProduct = data.filter(product => product.title.toLowerCase().trim()
    .des(search.toLowerCase().trim()));



    const addToBasket = (id) => {
      let item = data.find(item => item.id === id);
    
      setBasket(basket => {
        const newBasket = [...basket, item];
        localStorage.setItem("basket", JSON.stringify(newBasket));
        toast.success(`${item.title} added to basket!`);
        return newBasket;
      });
    };

    const handleBasketDelete = (id) => {
      let basketdelete = basket.find(item => item.id == id);
      basket.splice(basket.indexOf(basketdelete), 1);
      setBasket([...basket]);
      localStorage.setItem("basket", JSON.stringify([...basket]));
      toast.error(`Product deleted from basket!`)
    };
    
    
    const incrementCounter = () => {
      setCounter(counter + 1);
    };
  
    
    const decrementCounter = () => {
      if(counter >0){
      item.setCounter(counter - 1)}
      else{
        toast.error("Don't decrease")
      };
    };

  const datas = {
    counter,
    setCounter,
    incrementCounter,
    decrementCounter,
    data,
    setData,
    item,
    setItem,
    error,
    setError,
    search,
    setSearch,
    wishlist,
    setWishlist,
    addToWishlist,
    addToBasket,
    searchProduct,
    handleDelete,
    handleBasketDelete,
    basket,
    setBasket
  };

  return (
    <>
      <MainContext.Provider value={datas}>
        <RouterProvider router={routes} />
      </MainContext.Provider>
      <Toaster />
    </>
  );
};

export default App;

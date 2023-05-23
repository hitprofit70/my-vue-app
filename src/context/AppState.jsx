import { useState } from "react";
import AppContext from "./AppContext";
import ProductsData from "../APIData/ProductsData";
import PData from "../APIData/PData";
import PantsData from "../APIData/PantsData";
import SneakersData from "../APIData/SneakersData";
import toast from 'react-hot-toast';
// import { useNavigate } from "react-router-dom";

const AppState = ({ children }) => {
  // const navigate = useNavigate()
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(ProductsData);
  const [pants, setPants] = useState(PantsData);
  const [secondPants, setSecondPants] = useState(PData);
  const [sneakers, setSneakers] = useState(SneakersData);

  const addToCart = (products) => {
    // if (cart !=== 0 ) {
      
    // }
    setCart([...cart, products]);
    toast.success('Your item added already');
     console.log(cart)
  };

  return (
    <AppContext.Provider
      value={{ cart, addToCart, products, pants, secondPants, sneakers }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;

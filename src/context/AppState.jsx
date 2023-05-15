import { useState } from "react";
import AppContext from "./AppContext";
import ProductsData from "../APIData/ProductsData";
import PData from "../APIData/PData";
import PantsData from "../APIData/PantsData";
import SneakersData from "../APIData/SneakersData";
// import { useNavigate } from "react-router-dom";

const AppState = ({ children }) => {
  // const navigate = useNavigate()
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(ProductsData);
  const [pants, setPants] = useState(PantsData);
  const [secondPants, setSecondPants] = useState(PData);
  const [sneakers, setSneakers] = useState(SneakersData);

  const addToCart = (products) => {
    setCart([...cart, products]);
    // navigate("/cart");

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

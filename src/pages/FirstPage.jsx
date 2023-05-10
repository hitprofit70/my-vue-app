import TopNav from "../components/TopNav";
import Floor from "../components/Floor";
import SwipeImg from "../components/SwipeImg";
import ProductsCard from "../components/ProductsCard";
import ProductsData from '../APIData/ProductsData';
import { useState } from "react";

const FirstPage = () => {
  const [products, setProducts] = useState(ProductsData)

  return (
    <>
      <TopNav />
      <SwipeImg />
      <h3 className="text-center mt-5">Welcome To Our Shopping</h3>
      <div className="container mt-5">
        <div className="display-products mb-5">
         {products.map((p,index) =>
         ( <ProductsCard 
         key={index}
         id={p.id}
         name={p.name}
         pImg={p.pImg}
         price={p.price}
         />))}
        </div>

  
      </div>
      <Floor />
    </>
  );
};

export default FirstPage;

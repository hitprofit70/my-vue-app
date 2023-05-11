import TopNav from "../components/TopNav";
import Floor from "../components/Floor";
import ProductsCard from "../components/ProductsCard";
import SneakersData from "../APIData/SneakersData";
import { useState } from "react";

const SneakersPage = () => {
  const [sneakers, setSneakers] = useState(SneakersData);
  return (
    <>
    <TopNav/>
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col">
          {sneakers.map((ps,index) => (
           <ProductsCard
           key={index}
           id={ps.id}
           pImg={ps.pImg}
           name={ps.name}
           price={ps.price}
           />
          ))}
        </div>
      </div>
    </div>
    <Floor/>
    </>
  )
}

export default SneakersPage
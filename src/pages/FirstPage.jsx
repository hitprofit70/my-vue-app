import TopNav from "../components/TopNav";
import Floor from "../components/Floor";
import SwipeImg from "../components/SwipeImg";
import ProductsCard from "../components/ProductsCard";
import ProductsData from "../APIData/ProductsData";
import PantsData from "../APIData/PantsData";
import { useState } from "react";
import { Link } from "react-router-dom";

const FirstPage = () => {
  const [products, setProducts] = useState(ProductsData);
  const [pants, setPants] = useState(PantsData);

  return (
    <>
      <TopNav />
      <SwipeImg />
      <div className="container mt-5 mb-5">
        <h3 className="text-center mt-5 mb-5">Welcome To Our Shopping</h3>
        <div className="row">
          <Link to="/sneakers">
            <div className="subheading">Sneakers</div>
          </Link>
          <div className="col">
            {products.map((p, index) => (
              <ProductsCard
                key={index}
                id={p.id}
                name={p.name}
                pImg={p.pImg}
                price={p.price}
              />
            ))}
          </div>
        </div>
        <div className="row mt-5">
          <Link to="/pants">
            <div className="subheading">Pants</div>
          </Link>
          <div className="col">
            {pants.map((i, index) => (
              <ProductsCard
                key={index}
                id={i.id}
                name={i.name}
                pImg={i.pImg}
                price={i.price}
              />
            ))}
          </div>
        </div>
      </div>
      <Floor />
    </>
  );
};

export default FirstPage;

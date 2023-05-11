import TopNav from "../components/TopNav";
import Floor from "../components/Floor";
import ProductsCard from "../components/ProductsCard";
import { useState } from "react";
import PData from "../APIData/PData";

const PantsPage = () => {
  const [pants, setPants] = useState(PData);
  return (
    <div>
      <TopNav />
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col">
            {pants.map((z, index) => (
              <ProductsCard
                key={index}
                id={z.id}
                pImg={z.pImg}
                name={z.name}
                price={z.price}
              />
            ))}
          </div>
        </div>
      </div>
      <Floor />
    </div>
  );
};

export default PantsPage;

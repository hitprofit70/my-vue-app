import TopNav from "../components/TopNav";
import Floor from "../components/Floor";
import ProductsCard from "../components/ProductsCard";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const PantsPage = () => {
  const {secondPants} = useContext(AppContext);
  return (
    <div>
      <TopNav />
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col">
            {secondPants.map((z, index) => (
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

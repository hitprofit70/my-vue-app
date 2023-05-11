import TopNav from "../components/TopNav";
import Floor from "../components/Floor";
import ProductsCard from "../components/ProductsCard";

const PantsPage = () => {
  return (
    <div>
      <TopNav />
      <div className="container mt-5 mb-5">
        <ProductsCard />
      </div>
      <Floor />
    </div>
  );
};

export default PantsPage;

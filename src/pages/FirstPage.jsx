import TopNav from "../components/TopNav";
import Floor from "../components/Floor";
import SwipeImg from "../components/SwipeImg";
import ProductsCard from "../components/ProductsCard";

const FirstPage = () => {
  return (
    <>
      <TopNav />
      <SwipeImg />
      <h3 className="text-center mt-5">Welcome To Our Shopping</h3>
      <div className="container mt-5">
        <div className="display-products mb-5">
          <ProductsCard />
        </div>
      </div>
      <Floor />
    </>
  );
};

export default FirstPage;

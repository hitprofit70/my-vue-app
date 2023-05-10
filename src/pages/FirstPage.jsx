import TopNav from "../components/TopNav";
import Floor from "../components/Floor";
import SwipeImg from "../components/SwipeImg";
import ProductsCard from "../components/ProductsCard";
import ProductsData from '../APIData/ProductsData'

const FirstPage = () => {
  const add = () => {
   console.log(ProductsData)
  }
  return (
    <>
      <TopNav />
      <SwipeImg />
      <h3 className="text-center mt-5">Welcome To Our Shopping</h3>
      <div className="container mt-5">
        <div className="display-products mb-5">
          <ProductsCard />
        </div>
        <button onClick={add}>Test</button>

  
      </div>
      <Floor />
    </>
  );
};

export default FirstPage;

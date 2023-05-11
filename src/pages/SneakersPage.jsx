import TopNav from "../components/TopNav";
import Floor from "../components/Floor";
import ProductsCard from "../components/ProductsCard";

const SneakersPage = () => {
  return (
    <>
    <TopNav/>
    <div className="container mt-5 mb-5">
    <ProductsCard/>
    </div>
    <Floor/>
    </>
  )
}

export default SneakersPage
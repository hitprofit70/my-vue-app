import Floor from "../components/Floor";
import TopNav from "../components/TopNav";
import DeliveryForm from "../components/DeliveryForm";
import CartSummary from "../components/CartSummary";

const CheckoutPage = () => {
  return (
    <div>
      <TopNav />
      <div className="container">
        <div className="why">
          <DeliveryForm />
          <CartSummary />
        </div>
      </div>
      <Floor />
    </div>
  );
};

export default CheckoutPage;

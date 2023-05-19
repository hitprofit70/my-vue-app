import Floor from "../components/Floor";
import PaymentForm from "../components/PaymentForm";
import TopNav from "../components/TopNav";
import DeliveryForm from "../components/DeliveryForm";

const CheckoutPage = () => {
  return (
    <div>
      <TopNav />
      <DeliveryForm />
      <PaymentForm />
      <Floor />
    </div>
  );
};

export default CheckoutPage;

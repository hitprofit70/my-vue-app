import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const ShoppingCard = () => {
  const { cart } = useContext(AppContext);
  return (
    <div className="container mt-5">
      {cart.length === 0 && (
        <Card
          className="text-center mt-5 shadow bg-body rounded"
          style={{ height: "15rem" }}
        >
          <Card.Body>
            <Card.Title>Logo</Card.Title>
            <Card.Text className="mt-5">Your shopping cart is empty</Card.Text>
            <Link to="/">
           <button className="shopping-button">Contuine Shopping</button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default ShoppingCard;

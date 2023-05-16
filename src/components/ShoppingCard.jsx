import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ShoppingCard = () => {
  return (
    <div className="container mt-5">
      <Card className="text-center mt-5 shadow bg-body rounded" style={{height: "15rem"}}>
        <Card.Body>
          <Card.Title>Logo</Card.Title>
          <Card.Text className="mt-5">
          Your shopping cart is empty
          </Card.Text>
          <Button variant="dark" className="mt-5">Contuine Shopping</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShoppingCard;

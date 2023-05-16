import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";

const CartSummary = () => {
  return (
    <div className="container mt-5">
      <Col className="mb-5 shadow bg-body rounded"
        style={{
          width: "350px",
          height: "300px",
          marginLeft: "auto",
          border: "solid 1px",
        }}
      >
        <Stack className="text-center mt-3" gap={3}>
          <h4 className="bg-dark text-light" style={{width: "250px", marginLeft: "auto", marginRight: "auto"}}>Cart Summary</h4>
          <h6 className="border" style={{width: "250px", marginLeft: "auto", marginRight: "auto"}}>R23456.09</h6>
          <span className="border" style={{width: "250px", marginLeft: "auto", marginRight: "auto"}}>Free Delivery</span>
          <div className="">
            {" "}
            <button className="checkout-button mt-3">
              Proccesed to Checkout
            </button>
          </div>
        </Stack>
      </Col>
    </div>
  );
};

export default CartSummary;

import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";

const CartSummary = () => {
  const { cart } = useContext(AppContext);
  return (
    <div className="container mt-5">
      <Col
        className="mb-4 shadow bg-body rounded"
        style={{
          width: "350px",
          height: "250px",
          marginLeft: "auto",
        }}
      >
        <Stack className="text-center mt-3" gap={3}>
          <h4
            className="bg-dark text-light"
            style={{ width: "250px", marginLeft: "auto", marginRight: "auto" }}
          >
            Cart Summary
          </h4>
          <h6
            className="border"
            style={{ width: "250px", marginLeft: "auto", marginRight: "auto" }}
          >
            {" "}
            Total: R23456.09 <br></br>({cart.length} items)
          </h6>
          <span
            className="border"
            style={{ width: "250px", marginLeft: "auto", marginRight: "auto" }}
          >
            Free Delivery
          </span>
          <div className="">
            <Link to="/checkout">
              <button className="checkout-button mt-3">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </Stack>
      </Col>
      <Col
        className="mb-5 shadow bg-body rounded"
        style={{
          width: "350px",
          height: "150px",
          marginLeft: "auto",
        }}
      >
        <Stack className="text-center mt-3" gap={3}>
          <span
            className="text-center"
            style={{ width: "250px", marginLeft: "auto", marginRight: "auto" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-lock-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            </svg>
            Secure checkout
          </span>
          <span
            className="text-center"
            style={{ width: "250px", marginLeft: "auto", marginRight: "auto" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-credit-card-2-back-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0V4zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H0z" />
            </svg>
            Many ways to pay
          </span>
          <span
            className="center"
            style={{ width: "250px", marginLeft: "auto", marginRight: "auto" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-truck"
              viewBox="0 0 16 16"
            >
              <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
            Fast, reliable delivery
          </span>
        </Stack>
      </Col>
    </div>
  );
};

export default CartSummary;

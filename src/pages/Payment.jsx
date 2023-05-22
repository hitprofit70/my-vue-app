import TopNav from "../components/TopNav";
import Floor from "../components/Floor";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";
import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { cart } = useContext(AppContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [nameCard, setNameCard] = useState("");
  const [cardNo, setCardNo] = useState([]);
  const [cvv, setCvv] = useState([]);
  const [expireDate, setExpireDate] = useState([]);
  const navigate = useNavigate();

  const sendPayment = () => {
    if (!nameCard || !cardNo || !cvv || !expireDate) {
      toast.error("All the input are required.");
      return;
    } 

     if (nameCard && cardNo && cvv && expireDate) {
      localStorage.setItem('namecard', JSON.stringify(nameCard));
      localStorage.setItem('cardno', JSON.stringify(cardNo))
      localStorage.setItem('cvv', JSON.stringify(cvv))
      localStorage.setItem('expiredate', JSON.stringify(expireDate))
      toast.success("Payment successfully.");
      navigate("/")
      return;
     }


  }


  const calculateTotal = () => {
    let total = 0;
    for (let index = 0; index < cart.length; index++) {
      total += cart[index].price;

      setTotalPrice(total);
    }
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  return (
    <div>
      <TopNav />
      <div className="container mt-5 mb-5">
        <div className="why">
          <div
            className="delivery-form shadow bg-body rounded"
            style={{
              width: "900px",
              height: "300px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <h4 className="text-center">Payment Details</h4>
            <input
              type="text"
              style={{ width: "400px", marginLeft: "20px" }}
              className="shadow bg-body rounded mt-5"
              placeholder="Name on Card"
              value={nameCard} onChange={(e) => setNameCard(e.target.value)}
            />
            <input
              type="number"
              style={{ width: "400px", marginLeft: "20px" }}
              className="shadow bg-body rounded"
              placeholder="Card Number"
              value={cardNo} onChange={(e) => setCardNo(e.target.value)}
            />
            <input
              type="number"
              style={{ width: "400px", marginLeft: "20px" }}
              className="shadow bg-body rounded"
              placeholder="Security Code"
              value={cvv} onChange={(e) => setCvv(e.target.value)}
            />
            <input
              type="date"
              style={{ width: "400px", marginLeft: "20px" }}
              className="shadow bg-body rounded"
              value={expireDate} onChange={(e) => setExpireDate(e.target.value)}
            />
              <button className="payment-button mt-3" onClick={sendPayment}>Complete Purchase</button>
          </div>
          <Col
            className="shadow bg-body rounded"
            style={{
              width: "350px",
              height: "250px",
              marginLeft: "auto",
            }}
          >
            <Stack className="text-center mt-3" gap={3}>
              <h4
                className="bg-dark text-light"
                style={{
                  width: "250px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Cart Summary
              </h4>
              <h6
                className="border"
                style={{
                  width: "250px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                R{new Intl.NumberFormat().format(totalPrice)}
                <br></br>({cart.length} items)
              </h6>
              <span
                className="border"
                style={{
                  width: "250px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                To Pay R{new Intl.NumberFormat().format(totalPrice)}
              </span>
              <div className="">
                <div className="secure-checkout-button mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    fill="currentColor"
                    className="bi bi-lock-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                  </svg>
                  Secure Checkout
                </div>
              </div>
            </Stack>
          </Col>
        </div>
      </div>
      <Floor />
    </div>
  );
};

export default Payment;

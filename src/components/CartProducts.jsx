import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const CartProducts = () => {
  return (
    <div>
      <ListGroup className="container mt-5">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <img
              src="https://cdn.shopify.com/s/files/1/0473/6965/0340/products/4c44db31d62852d6e629cb8924c6a9954e0ddf10_GZ6201_Adidas_ADI2000_Energy_Ink_Footwear_White_Gum_5_os_1_768x768.jpg?v=1660264421"
              alt=""
              className=""
              style={{ width: "150px", height: "150px" }}
            />
            <div className="fw-bold">Nike Air Force 1</div>
            <div className="fw-bold">R1 299.95</div>
          </div>
          <button className="btn btn-dark mt-5">Remove</button>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <img
              src="https://sheshalifestyle.com/wp-content/uploads/2023/03/RS-EFEKT-AR.png"
              alt=""
              className=""
              style={{ width: "150px", height: "150px" }}
            />
            <div className="fw-bold">Puma RS</div>
            <div className="fw-bold">R1 799.95</div>
          </div>
          <button className="btn btn-dark mt-5">Remove</button>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default CartProducts;

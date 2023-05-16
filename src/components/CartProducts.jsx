import ListGroup from "react-bootstrap/ListGroup";

const CartProducts = ({pImg, name, price}) => {
  return (
    <div className="container mb-5">
      <ListGroup className="shadow bg-body rounded">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <img
              src={pImg}
              alt=""
              className="shadow bg-body rounded"
              style={{ width: "150px", height: "150px" }}
            />
            <div className="fw-bold mt-2">{name}</div>
            <div className="fw-bold">R{price}</div>
          </div>
          <button className="btn btn-dark mt-5">Remove</button>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default CartProducts;

import Card from "react-bootstrap/Card";

const ProductsCard = ({id,pImg, name, price}) => {
  return (
    <div className="container">
      <div className="row" style={{ gap: "0rem" }}>
        <Card
          className="card text-center"
          style={{ width: "20rem", height: "30rem" }}
        >
          <Card.Img
            style={{ width: "18rem", height: "15rem", objectFit: "cover" }}
            src={pImg}
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>R{price}</Card.Title>
            <h2 style={{ color: "yellow" }}>***</h2>
          </Card.Body>
          <button className="view-button mb-3">View</button>
        </Card>
      </div>
    </div>
  );
};

export default ProductsCard;

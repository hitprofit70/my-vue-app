import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ProductsCard = ({ id, pImg, name, price }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col" style={{ margin: "10px" }}>
          <Card className="shadow bg-body rounded" style={{ width: "18rem", height: "26rem", objectFit: "cover" }}>
            <Card.Img
              className="Imgsrc mt-3"
              style={{
                width: "15rem",
                height: "15rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src={pImg}
            />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>R{price}</Card.Text>
              <button className="view-button">View</button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;

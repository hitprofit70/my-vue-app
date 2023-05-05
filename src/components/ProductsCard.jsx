import Card from "react-bootstrap/Card";

const ProductsCard = () => {
  return (
    <div className="container">
      <div className="row" style={{gap: "0rem"}}>
        <Card className="card text-center" style={{ width: "20rem", height: "30rem"}}>
          <Card.Img
            style={{width: "18rem", height: "15rem", objectFit: "cover" }}
            src="https://images.unsplash.com/photo-1661605813204-8c7662c1a5f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlYXRoZXIlMjBzbmVha2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Card.Body>
            <Card.Title>New Balance Lightnavy</Card.Title>
            <Card.Title>R1 199.95</Card.Title>
            <h2 style={{ color: "yellow" }}>***</h2>
          </Card.Body>
          <button className="view-button mb-3">View</button>
        </Card>

        <Card className="card text-center" style={{ width: "20rem", height: "30rem"}}>
          <Card.Img
            style={{width: "18rem", height: "15rem", objectFit: "cover" }}
            src="https://images.unsplash.com/photo-1661605813204-8c7662c1a5f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlYXRoZXIlMjBzbmVha2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Card.Body>
            <Card.Title>New Balance Lightnavy</Card.Title>
            <Card.Title>R1 199.95</Card.Title>
            <h2 style={{ color: "yellow" }}>***</h2>
          </Card.Body>
          <button className="view-button mb-3">View</button>
        </Card>

        <Card className="card text-center" style={{ width: "20rem", height: "30rem"}}>
          <Card.Img
            style={{width: "18rem", height: "15rem", objectFit: "cover" }}
            src="https://images.unsplash.com/photo-1661605813204-8c7662c1a5f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlYXRoZXIlMjBzbmVha2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Card.Body>
            <Card.Title>New Balance Lightnavy</Card.Title>
            <Card.Title>R1 199.95</Card.Title>
            <h2 style={{ color: "yellow" }}>***</h2>
          </Card.Body>
          <button className="view-button mb-3">View</button>
        </Card>

        <Card className="card text-center" style={{ width: "20rem", height: "30rem"}}>
          <Card.Img
            style={{width: "18rem", height: "15rem", objectFit: "cover" }}
            src="https://images.unsplash.com/photo-1661605813204-8c7662c1a5f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlYXRoZXIlMjBzbmVha2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Card.Body>
            <Card.Title>New Balance Lightnavy</Card.Title>
            <Card.Title>R1 199.95</Card.Title>
            <h2 style={{ color: "yellow" }}>***</h2>
          </Card.Body>
          <button className="view-button mb-3">View</button>
        </Card>


      </div>
    </div>
  );
};

export default ProductsCard;

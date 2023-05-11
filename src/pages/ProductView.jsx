import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductsData from "../APIData/ProductsData";
import TopNav from "../components/TopNav";
import Floor from "../components/Floor";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductView = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    setProducts(() => {
      return ProductsData.find((p) => p.id === Number(id));
    });
  }, [id]);

  return (
    <div>
      <TopNav />
      <div className="container mt-5 mb-5">
        {products && (
          <div className="row">
            <Row>
              <Col
                style={{ width: "350px", height: "350px" }}
              >
                <img className="mt-4"
                  src={products.pImg}
                  alt=""
                  style={{ width: "300px", height: "300px", marginRight: "auto", marginLeft: "auto" }}
                />
              </Col>
              <Col style={{ width: "350px", height: "350px" }}>
                <Stack className="text-center mr-5 mt-3 mb-3" gap={3}>
                  <h4 className="bg-dark mr-5 text-light">{products.name}</h4>
                  <h6 className="border">R{products.price}</h6>
                  <span className="border">Free Delivery</span>
                  <div className="">
                    {" "}
                    <button
                      className="add-button mt-3"
                      onClick={() => addtoCart(products)}
                    >
                      AddtoCart
                    </button>
                  </div>
                </Stack>
              </Col>
            </Row>
          </div>
        )}
      </div>
      <Floor />
    </div>
  );
};

export default ProductView;

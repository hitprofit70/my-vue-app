import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductsData from "../APIData/ProductsData";
import PantsData from "../APIData/PantsData";
import TopNav from "../components/TopNav";
import Floor from "../components/Floor";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

const ProductView = () => {
  const [index, setIndex] = useState(0);
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const [pants, setPants] = useState(null);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    setProducts(() => {
      return ProductsData.find((p) => p.id === Number(id));
    });
  }, [id]);
  useEffect(() => {
    setPants(() => {
      return PantsData.find((p) => p.id === Number(id));
    });
  }, [id]);

  return (
    <div>
      <TopNav />
      <div className="container mt-5 mb-5">
        {products && (
          <div className="row">
            <Row>
              <Col style={{ width: "350px", height: "350px" }}>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item>
                    <img
                      style={{ width: "100%", height: "300px" }}
                      src={products.pImg}
                      alt="First slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      style={{ width: "100%", height: "300px" }}
                      src={products.pImg}
                      alt="Second slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      style={{ width: "100%", height: "300px" }}
                      src={products.pImg}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
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
        {pants && (
          <div className="row">
            <Row>
              <Col style={{ width: "350px", height: "350px" }}>
                <Carousel>
                  <Carousel.Item>
                    <img
                      style={{ width: "100%", height: "300px" }}
                      src={pants.pImg}
                      alt="First slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      style={{ width: "100%", height: "300px" }}
                      src={pants.pImg}
                      alt="Second slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      style={{ width: "100%", height: "300px" }}
                      src={pants.pImg}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col style={{ width: "350px", height: "350px" }}>
                <Stack className="text-center mr-5 mt-3 mb-3" gap={3}>
                  <h4 className="bg-dark mr-5 text-light">{pants.name}</h4>
                  <h6 className="border">R{pants.price}</h6>
                  <span className="border">Free Delivery</span>
                  <div className="">
                    {" "}
                    <button
                      className="add-button mt-3"
                      onClick={() => addtoCart(pants)}
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

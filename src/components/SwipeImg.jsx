import Carousel from "react-bootstrap/Carousel";

const SwipeImg = () => {
  return (
    <div className="container mt-5">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 shadow bg-body rounded"
            src="https://images.pexels.com/photos/1737957/pexels-photo-1737957.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Our Shopping</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 shadow bg-body rounded"
            src="https://images.pexels.com/photos/8938734/pexels-photo-8938734.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Purchase Your Products</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 shadow bg-body rounded"
            src="https://media.istockphoto.com/id/1350880582/photo/online-shopping.jpg?s=612x612&w=0&k=20&c=-oFYGMjP_s-Ly7AH-tK8C1F9VOGElRAuGgAwBKQ7pyU="
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Our Customer Be Happy And Revecied The Delivery</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SwipeImg;

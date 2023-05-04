import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const SwipeImg = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        className="container mt-5"
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1148923865/photo/young-women-with-shopping-bags-standing-on-the-street.jpg?s=612x612&w=0&k=20&c=QzFps4dqUvrJ9pVFalCIV0YIl4STcf1rruGMk5XJGq8="
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Our Shopping</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1353378996/photo/mature-black-couple-doing-online-shopping-with-credit-card-card-at-home.jpg?s=612x612&w=0&k=20&c=KE6NnylVxAvCOOMbjvrgMg0QIKSCcj9eGYY--fMZrmo="
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Purchase Your Products</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1350880582/photo/online-shopping.jpg?s=612x612&w=0&k=20&c=-oFYGMjP_s-Ly7AH-tK8C1F9VOGElRAuGgAwBKQ7pyU="
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Our Customer Be Happy And Revecied The Delivery</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default SwipeImg;

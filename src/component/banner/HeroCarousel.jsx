import React from "react";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../../images/b2.jpg";
import banner2 from "../../images/b10.jpg";
import banner3 from "../../images/b18.jpg";

const HeroCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block banner-carousel"
          src={banner1}
          alt="First slide"
          width="100%"
          height="500px"
        />
        <Carousel.Caption>
          <h3>Summer Comfort</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block banner-carousel"
          src={banner2}
          alt="Second slide"
          width="100%"
          height="500px"
        />

        <Carousel.Caption>
          <h3>Simple</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block banner-carousel"
          src={banner3}
          alt="Third slide"
          width="100%"
          height="500px"
        />

        <Carousel.Caption>
          <h3>Meet the Coporate World</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;

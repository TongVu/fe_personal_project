import Carousel from "react-bootstrap/Carousel";

export default function Slider() {
  return (
    <Carousel variant="dark" className="align-middle">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./book1.jpeg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome Stranger</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./book2.jpeg")}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Knowledge Is For Sharing</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./book3.jpg")}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Just A Click At Your Fingertips</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

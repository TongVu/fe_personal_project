import { Container, Navbar } from "react-bootstrap";

export default function SomeWherePage() {
  return (
    <>
      <h1>Some where page</h1>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>Brand text</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

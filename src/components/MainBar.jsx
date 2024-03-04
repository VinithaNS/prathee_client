import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MainBar = () => {
  return (
    <>
      <Navbar className="title" expand="lg">
        <Container>
          <Navbar.Brand href="/">
           
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ color: "white" }}>
              <Nav.Link href="/">
                <span
                  style={{
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  Home
                </span>
              </Nav.Link>

              <Nav.Link href="/employees">
                <span style={{ color: "white", fontWeight: "600" }}>
                  EmployeeInfo
                </span>
              </Nav.Link>

              <Nav.Link href="/login">
                <span style={{ color: "white", fontWeight: "600" }}>Login</span>{" "}
              </Nav.Link>
              <Nav.Link href="/register">
                <span style={{ color: "white", fontWeight: "600" }}>
                  Register
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainBar;

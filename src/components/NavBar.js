import React, { useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";

const NavBar = ({ filterBySearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const onSearch = (e) => {
    e.preventDefault();
    filterBySearch(searchValue);
    setSearchValue("");
  };
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <div className="brand">مطعم الطازج جدًا</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="ابحث..."
              className="mx-2"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <button onClick={onSearch} className="btn-search p-2">
              بحث
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

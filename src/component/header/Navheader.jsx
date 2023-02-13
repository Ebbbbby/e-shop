import React, { useState} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.css";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "../../images/logo2.png";
import "../../component/header/navheader.css";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { FcPlus } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { Badge, Modal } from "react-bootstrap";

const Navheader = () => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = ()=> setShow(false)
  const handleShow = () => setShow(true);
  return (
    <>
    <Navbar className="nav__bg" expand="sm">
      <Container className="w-100" style={{}}>
        <Navbar.Brand>
          <img src={Logo} alt="" width="90" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle />

          <div>
            <Form
              className="d-flex align-items-center justify-content-around"
              onSubmit={(e) => e.preventDefault}
            >
              <div className="d-flex align-items-center search__icon">
                <Form.Control
                  type="search"
                  placeholder="Search for Products,Brands and Categories"
                  className="input__form mx-3"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {/* <FaSearch className="icon" /> */}
              </div>
              <Button variant="outline-none px-3 search__btn">SEARCH</Button>
            </Form>
          </div>
          <div className="d-flex align-items-center account__hover">
            <MdOutlineSupervisorAccount className="account__icon" />
            <Dropdown>
              <Dropdown.Toggle
                variant="none"
                id="dropdown-basic"
                className="dropdown__toggle"
              >
                Account
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown__menu">
                <Dropdown.Item className="dropdown sign__in">
                  <Link to="signIn">SIGN IN</Link>
                </Dropdown.Item>

                <hr></hr>

                <Dropdown.Item className="dropdown">
                  <MdOutlineSupervisorAccount className="icon" />
                  My Account
                </Dropdown.Item>

                <Dropdown.Item href="#/action-3" className="dropdown">
                  <FaSave className="icon" />
                  Orders
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" className="dropdown">
                  <FaRegHeart className="icon" />
                  Saved Items
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" className="dropdown">
                  <FcPlus className="icon" />
                  <Link
                    to="/addItem"
                    style={{ color: "", textDecoration: "none" }}
                  >
                    Add Products
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="d-flex align-items-center cart__container" onClick={handleShow}>
            <FaShoppingCart className="cart" />
            <Badge bg="secondary" className="mb-4 cart__counter">
              9
            </Badge>
          </div>
      </Container>
    </Navbar>
    <Modal show ={show} onHide = {handleClose}>
     <Modal.Header closeButton>
      <Modal.Title>Shopping Cart</Modal.Title>
      <Modal.Body>
        <h1>This is the Modal Body</h1>
      </Modal.Body>

     </Modal.Header>
    </Modal>
    </>
  );
};

export default Navheader;


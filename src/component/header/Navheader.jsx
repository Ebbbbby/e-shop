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
import { useContext } from "react";
import { CartContext } from "../../context/Context";
import Card from "react-bootstrap/Card";

const Navheader = () => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = ()=> setShow(false)
  const handleShow = () => setShow(true);
  const GlobalState = useContext(CartContext)
  const state = GlobalState.state;
  const dispatch = GlobalState.dispatch;

  const handleChange = (e, {value})=>{
    const searchText = value.trim().replace(/" "/g, "")
    // searchProducts(searchText)(dispatch)
  }
  const total = state.reduce((total , item)=>{
    return (total + item.price* item.quantity)
  }, 0)
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
                  onChange={handleChange}
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
          <div
            className="d-flex align-items-center cart__container"
            onClick={handleShow}
          >
            <FaShoppingCart className="cart" />
            <Badge bg="secondary" className="mb-4 cart__counter">
              {state.length}
            </Badge>
          </div>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {state.length === 0 ? "No item in cart" : `cart ${state.length}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {state.map((item, idx) => {
            return (
              <Card style={{ width: "28rem" }} key={idx}>
                <div className="d-flex mt-4">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    className="modal__images"
                  />
                  <Card.Body>
                    <div className="mt-3">
                      <Card.Text>{item.title}</Card.Text>
                      <Card.Text>$ {item.price.toFixed(2)}</Card.Text>
                      <Card.Text> $ {item.quantity * item.price}</Card.Text>
                      <div className=" d-flex justify-content-between align-items-center">
                        <Button
                          className="cart__counter"
                          onClick={() => {
                            if (item.quantity > 1) {
                              dispatch({ type: "DECREMENT", payload: item });
                            } else {
                              dispatch({ type: "REMOVE", payload: item });
                            }
                          }}
                        >
                          <strong>-</strong>
                        </Button>

                        <Card.Text>{item.quantity}</Card.Text>
                        <Button
                          className="cart__counter"
                          onClick={() =>
                            dispatch({ type: "INCREMENT", payload: item })
                          }
                        >
                          <strong>+</strong>
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </div>

                <Button
                  className="cart__counter mt-3"
                  onClick={() => dispatch({ type: "REMOVE", payload: item })}
                >
                  Remove
                </Button>

                <hr />
              </Card>
            );
          })}
        </Modal.Body>
        <Card.Text className="mx-auto">TOTAL : ${total}</Card.Text>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navheader;


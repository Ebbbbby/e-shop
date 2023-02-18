import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./product.css";
import Button from "react-bootstrap/Button";
import "../Pagination/pagination.css";
import { useContext } from "react";
import { CartContext } from "../../context/Context";

const Product = ({ product, loading }) => {
  const GlobalState = useContext(CartContext);
  const dispatch = GlobalState.dispatch;
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "",
          justifyContent: "space-around",
        }}
      >
        {product.map((item, index) => {
          item.quantity = 1;

          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Container
                fluid={true}
                style={{ margin: "0 auto" }}
                className="product__container align-items-center mt-5 px-4 border"
              >
                <Card
                  className="align-items-center card"
                  style={{
                    width: "17rem",
                    marginTop: "3rem",
                    margin: "2rem auto",
                  }}
                >
                  <Link
                    to={`/productdetails/${item.id}`}
                    className="product__link"
                  >
                    <Card.Img
                      style={{
                        width: 250,
                        height: 250,
                      }}
                      variant="top"
                      src={item.image}
                      className="card__images"
                    />

                    <Card.Body key={item.id}>
                      <Card.Text className="title">{item.title}</Card.Text>

                      <Card.Title> ${item.price}</Card.Title>
                    </Card.Body>
                  </Link>
                  <div className="buttons">
                    <Button
                      className="add__cart"
                      onClick={() => dispatch({ type: "ADD", payload: item })}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card>
              </Container>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;

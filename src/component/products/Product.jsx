import React from 'react'
import {Card, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './product.css'
import Button from 'react-bootstrap/Button'
import '../Pagination/pagination.css'

const Product = ({product, loading}) => {
  if(loading){
    return <h2>Loading...</h2>
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
        {product.map(({ id, title, price, image }) => (
          <div
            key={id}
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
                <Link to={`/productdetails/${id}`} className="product__link">
                  <Card.Img
                    style={{
                      width: 250,
                      height: 250,
                    }}
                    variant="top"
                    src={image}
                    className="card__images"
                  />

                  <Card.Body key={id}>
                    <Card.Text className="title">{title}</Card.Text>

                    <Card.Title> ${price}</Card.Title>
                  </Card.Body>
                </Link>
                <div className="buttons">
                  <Button className="add__cart">Add to Cart</Button>
             
                </div>
              </Card>
            </Container>
          </div>
        ))}
      </div>
    </>
  );

}

export default Product
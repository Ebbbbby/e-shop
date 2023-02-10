import React from 'react'
import {Card, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './product.css'
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
            <Link to={`/productdetails/${id}`} className="product__link">
              <Container
                fluid={true}
                style={{ margin: "0 auto" }}
                className="product__container align-items-center mt-5 px-4 d-flex border"
              >
                <Card
                  className="align-items-center d-flex card"
                  style={{
                    width: "17rem",
                    marginTop: "3rem",
                    margin: "2rem auto",
                  }}
                >
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
                </Card>
              </Container>
            </Link>
          </div>
        ))}
      </div>
    </>
  );

}

export default Product
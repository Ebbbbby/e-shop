import React from 'react'
import { useState } from 'react'
import {Card, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './product.css'

const Product = ({product}) => {
    const {id, image, title, price} = product
  return (
    <>
      <Link to={`/productdetails/${id}`} className= 'product__link'>
        <Container
          fluid={true}
          className="product__container align-items-center mt-5 px-4"
        >
          <Card
            className=" align-items-center d-flex card"
            style={{ width: "17rem", marginTop: "3rem", margin: "2rem auto" }}
          >
            <Card.Img
              style={{ width: 250, height: 250 }}
              variant="top"
              src={image}
              className="card__images"
            />
            <Card.Body key = {id}>
              <Card.Text className="title">{title}</Card.Text>
              <Card.Title> ${price}</Card.Title>
            </Card.Body>
          </Card>
        </Container>
      </Link>
    </>
  );
}

export default Product
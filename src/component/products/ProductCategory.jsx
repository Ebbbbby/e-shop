import React from "react";
import { useParams } from "react-router-dom";
import { Col } from "react-bootstrap";
import Product from "./Product";
import axios from "axios";
import { useState, useEffect } from "react";

const base_url = "https://fakestoreapi.com";

const ProductCategory = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const categoryName = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const endpoint = `${base_url}/products/category/${categoryName.cartItem}`;
        const response = await axios.get(endpoint);
        setProducts(response.data);
        setLoading(true);
      } catch (error) {
        alert(error.message);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getProducts();
  }, []);


  return (
    <>
      <div className="d-flex flex-wrap mt-5 bg-white">
        {loading &&
          products.map((product) => (
            <Col key={product.id}>
              <Product product={product} />
            </Col>
          ))}
      </div>
    </>
  );
};

export default ProductCategory;

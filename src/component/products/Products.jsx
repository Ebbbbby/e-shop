import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {Col, Row} from 'react-bootstrap'
import Product from "./Product";
import CustomPagination from "../Pagination/CustomPagination";


const Products = () => {
  const product_url = `https://fakestoreapi.com/products`;
  const [page, setPage] = useState(1)
  const [numOfPages ,setNumOfPage]= useState()

    useEffect(()=>{
      getProducts()
    }, []);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

const getProducts = async () => {
    try {
     const response = await axios.get(product_url)
       setProducts(response.data)

       setLoading(true)

    } catch (error) {
       alert(error.message);

    }

}

return (
  <>
    <div className="d-flex flex-wrap mt-5 bg-white">
      {loading &&
        products.map((product) => (
          <Col key={product.id}>
            <Product product={product} />
          </Col>
        ))}
        <CustomPagination page= {page} setPage= {setPage}/>
    </div>
  </>
);




};

export default Products;



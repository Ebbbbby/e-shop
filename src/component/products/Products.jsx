import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Col} from "react-bootstrap";
import Product from "./Product";
import CustomPagination from "../Pagination/CustomPagination";

const product_url = "https://fakestoreapi.com/products";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [totalPost, setTotalPost] = useState(0);

  useEffect(() => {
    getProducts();
  }, []);


  const getProducts = async () => {
    try {
      const response = await axios.get(product_url);
      setLoading(true);
      setProducts(response.data);
      setTotalPost(response.data.length);

      setLoading(false);
    } catch (error) {
      alert(error.message);
    }
  };
  //get current post
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = products.slice(indexOfFirstPost, indexOfLastPost);
  //change page
   const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextPage = () => setCurrentPage(currentPage + 1);

  return (
    <>
      <div className="d-flex flex-wrap mt-5 bg-white">
        <Col>
          <Product product={currentPost} loading={loading} />
          <div className="mt-4">
            <CustomPagination
              postPerPage={postPerPage}
              totalPost={totalPost}
              paginate={paginate}
              prevPage={prevPage}
              nextPage={nextPage}
              currentPage={currentPage}
            />
          </div>
        </Col>
      </div>
    </>
  );
};

export default Products;

import React, { useState, useEffect } from "react";
import {Container } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import CateCard from "./CateCard";
import HeroCarousel from "../banner/HeroCarousel";
import './categories.css'

const BASE_URL = "https://fakestoreapi.com/products/categories";

const Categories = () => {
  const [productCate, setProductCate] = useState([]);
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchProdCate();
  }, []);

  const fetchProdCate = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(BASE_URL);
      setProductCate(response.data);
      setIsLoading(false)

    } catch (error) {
      alert(error.message = "Error loading this page");
    }
  };

  return (
    <Container
      fluid={true}
      className=" category__container w-100 d-flex px-5"
      style={{ marginTop: "7rem" }}
    >
      <div className="w-25 border cate__card">
        {loading ? (
          <Spinner
            animation="border"
            style={{ color: "#e3256b", marginLeft:'7rem', marginTop:'1rem'}}
            className="spinner"
          />
        ) : (
          productCate.map((cate__item) => {
            return <CateCard key={cate__item.id} cateItem={cate__item} />;
          })
        )}
      </div>
      <div className="w-75 border">
        <HeroCarousel />
      </div>
    </Container>
  );
};

export default Categories;

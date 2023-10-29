import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { useContext } from "react";
import { CartContext } from "../../context/Context";


const ProductDetail = () => {
    const GlobalState = useContext(CartContext);
    const dispatch = GlobalState.dispatch;
  const base_url = "https://fakestoreapi.com";
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  const [loading, setLoading] = useState(false);

  const getProductsDetails = async () => {
    try {
      setLoading(true);
      const endpoint = `${base_url}/products/${id}`;
      const response = await axios.get(endpoint);
      setProductDetails(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getProductsDetails();
  }, []);

  const { title, price, description, category, image} = productDetails;

  //   console.log(productDetails)
  return (

    <>
      <Container className="details__container py-4">
        <div className=" details__card  d-flex ">
          <div className="mx-3">
            <img
              style={{ width: 370, height: 350 }}
              variant="top"
              src={image}
              className="card__images"
              alt="title"
            />
          </div>
          <div className="details__text">
            {loading ? (
              <Spinner
                animation="border"
                style={{
                  color: "#e3256b",
                  marginLeft: "7rem",
                }}
                className="spinner"
              />
            ) : (
              <div>
                {" "}
                <h4>{title}</h4>
                <p className="lead">${price}</p>
                <p className="lead">{category}</p>
                <span className="">{description}</span>
              </div>
            )}

            <div className="mt-4 d-flex justify-content-between">
              <Button className="add__cart p-2" onClick={()=> dispatch({type:'ADD', payload:productDetails})}>Add to Cart</Button>
              <Button className="add__cart p-2">
                <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
                  {" "}
                  Go back
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetail;

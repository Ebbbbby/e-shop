import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const addproduct__url = "https://fakestoreapi.com/products";
const options = [
  "Electronics",
  "Men's Clothing",
  "Women's Clothing",
  "Jewelery",
];

const AddProduct = () => {
  const navigate = useNavigate();

   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm();

   const onSubmit = (e) => {
     e.preventDefault();

   };

   const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");


  const addPost = async() => {
    if(title ===''||category===''|| file===''|| price===''||description===''){
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("description", title);
    formData.append("category", price);
    formData.append("title",description);
    formData.append("price",category);
   const config = {
     headers: { "content-type": "multipart/form-data" },
   };
try {
 await axios
   .post(addproduct__url, formData, config)
   .then((response) => {
     console.log(response.data);
   })

} catch (error) {
     console.error(error);
     alert("Failed to add product");
   };




  };



  return (
    <>
      <form
        className="container mb-3"
        style={{ marginTop: "7rem" }}
        onSubmit={onSubmit}
      >
        <Row className="mb-3">
          <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
            />
          </Form.Group>
          {errors.title && <p>Please check the title</p>}

          <Form.Group controlId="" className="col col-sm-6">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form-control"
            />
          </Form.Group>
          {errors.title && <p>Please check the price</p>}
        </Row>

        <Row className="mb-3">
          <Form.Select
            className="col col-sm-6"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option>Select Category</option>
            {options.map((option, index) => (
              <option value={option || ""} key={index}>
                {option}
              </option>
            ))}
          </Form.Select>
          {errors.title && <p>Please check the category</p>}

          <Form.Group controlId="formFile" className="col col-sm-6">
            <Form.Label>Choose Image</Form.Label>
            <Form.Control
              type="file"
              name="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="" className="col col-sm-6">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="{3}"
              className="form-control"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          {errors.title && <p>Please add description</p>}
        </Row>
        <Row className="mb-3">
          <Form.Group className="col col-sm-6">
            <button
              onClick={addPost}
              type="submit"
              className="me-4 btn btn-success btn-lg btn-block"
            >
              Add Product
            </button>
            <button
              type="reset"
              className="me-4 btn btn-danger btn-lg btn-block"
            >
              Cancel
            </button>
          </Form.Group>
        </Row>
      </form>
    </>
  );
};

export default AddProduct;

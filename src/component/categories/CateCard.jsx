import React from "react";
import { Link } from "react-router-dom";

const CateCard = ({ cateItem }) => {

  return (
    <ul style={{ width: "18rem" , marginTop:'1rem'}} className=" category__item">
      <li>
        <Link to={`products/${cateItem}`} className = "item">{cateItem}</Link>
        <hr />
      </li>
    </ul>
  );
};



export default CateCard;

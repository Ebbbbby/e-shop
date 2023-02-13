import React from "react";
import { Link } from "react-router-dom";

const CateCard = ({ cateItem }) => {
  
  return (
    <ul style={{ width: "18rem" , marginTop:'1rem'}} className=" category__item">
      <li key={cateItem}>
        <Link to={`products/${cateItem}`} className = "item" style={{border:'1px solid red'}}>{cateItem}</Link>
      </li>
    </ul>
  );
};



export default CateCard;

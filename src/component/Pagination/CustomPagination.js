import * as React from "react";
import Button from "react-bootstrap/Button";



 function CustomPagination({ postPerPage, totalPost,paginate, prevPage, nextPage, currentPage}) {
  const pageNumber =[];
  for (let i = 1; i <= Math.ceil(totalPost/postPerPage); i++) {
     pageNumber.push(i)

  }


   return (
     <nav>
       <ul className="pagination justify-content-center">
      
           <li>
             <Button onClick={() => prevPage()}>Prev</Button>
           </li>

         {pageNumber.map((number) => (
           <li key={number} className="page-item">
             <a onClick={() => paginate(number)} className="page-link">
               {number}
             </a>
           </li>
         ))}

         {pageNumber.length !== currentPage && (
           <li>
             <Button onClick={() => nextPage()}>Next</Button>
           </li>
         )}
       </ul>
     </nav>
   );
 }
export default CustomPagination;

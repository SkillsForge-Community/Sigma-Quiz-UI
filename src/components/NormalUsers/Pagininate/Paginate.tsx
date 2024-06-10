import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";

import { IconContext } from "react-icons";
import "./styles.css";

interface PaginatedItemsProps {
  numOfPages:number
}

const PaginatedItems: React.FC<PaginatedItemsProps> = ({ numOfPages }) => {
  const [page, setPage] = useState<number>(0);

  return (
    <div>
      <ReactPaginate
        containerClassName={"pagination"}
        activeClassName={"actives"}
        pageClassName={"page-item"}
        pageRangeDisplayed={numOfPages}
        marginPagesDisplayed={0}
        onPageChange={(event) => setPage(event.selected)}
        pageCount={50} 
        breakLabel={""}
        previousLabel={
          <div className="page-icons-container">
          <BiSolidLeftArrow 
          className="page-icons" />
            </div>
          
            
          
        }
        nextLabel={
          <div className="page-icons-container">
          <BiSolidRightArrow 
          className="page-icons" />
          </div>
          
           
         
        }
      />
    </div>
  );
}

export default PaginatedItems;

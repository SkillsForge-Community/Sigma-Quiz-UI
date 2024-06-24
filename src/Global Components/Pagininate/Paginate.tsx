import React from "react";
import ReactPaginate from "react-paginate";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";
import "./styles.css";

interface PaginatedItemsProps {
  numOfPages: number;
  
}

const PaginatedItems: React.FC<PaginatedItemsProps> = ({ numOfPages }) => {
  return (
    <div>
      <ReactPaginate
        containerClassName={"pagination"}
        activeClassName={"actives"}
        pageClassName={"page-item"}
        pageRangeDisplayed={numOfPages}
        marginPagesDisplayed={0}
        pageCount={50}
        breakLabel={""}
        previousLabel={
          <div className="page-icons-container">
            <BiSolidLeftArrow className="page-icons" />
          </div>
        }
        nextLabel={
          <div className="page-icons-container">
            <BiSolidRightArrow className="page-icons" />
          </div>
        }
      />
  
    </div>
  );
};

export default PaginatedItems;

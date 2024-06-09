import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import "./styles.css";

interface PaginatedItemsProps {
  itemsPerPage: number;
}

const PaginatedItems: React.FC<PaginatedItemsProps> = ({ itemsPerPage }) => {
  const [page, setPage] = useState<number>(0);

  return (
    <div>
      <ReactPaginate
        containerClassName={"pagination"}
        activeClassName={"actives"}
        pageClassName={"page-item"}
        pageRangeDisplayed={30}
        marginPagesDisplayed={0}
        onPageChange={(event) => setPage(event.selected)}
        pageCount={50} 
        breakLabel={""}
        previousLabel={
          <IconContext.Provider value={{ color: "#B8C1CC", size: "36px"}}>
            <AiFillLeftCircle className="page-icons" />
          </IconContext.Provider>
        }
        nextLabel={
          <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
            <AiFillRightCircle className="page-icons" />
          </IconContext.Provider>
        }
      />
    </div>
  );
}

export default PaginatedItems;

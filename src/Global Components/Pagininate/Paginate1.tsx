import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { Round, Question } from "../../features/getQuizResultSlice";
import "./styles.css";
import { Heading, Text } from "@chakra-ui/react";

interface PaginatedItemsProps {
  numOfPages: number;
  pageCount: number | undefined;
  testRound?: Round;
  questions?: Question[];
}

const answeredStyles = {
  color: "#FF0000",
  fontFamily: '"Poppins", sans-serif',
  fontWeight: 500,
  fontStyle: "normal",
  fontSize: "18px",
};




const PaginatedItems1: React.FC<PaginatedItemsProps> = ({
  pageCount,
  numOfPages,
  testRound,
  questions,
}) => {
  const [page, setPage] = useState<number>(0);
  const [pageContent, setPageContent] = useState<string>("");
  const [/* answeredCorrectly */, setAnsweredCorrectly] = useState<boolean | null | undefined>(null);

  const handlePageClick = (event: { selected: number }) => {
    setPage(event.selected);
    const answer = testRound?.questions.find(
      (question) => question.question_number === event.selected + 1
    );
    const schoolName = answer?.answered_by?.schoolRegistration?.school?.name;
    setPageContent(schoolName ? `Answered by ${schoolName}` : `Question ${answer?.question_number}`);
    setAnsweredCorrectly(answer?.answered_correctly || false);
  };

  useEffect(() => {
    if (testRound) {
      handlePageClick({ selected: 0 });
    }
  }, [testRound,handlePageClick]);

  const getPageItemClassName = (pageNumber: number): string => {
    const answer = testRound?.questions.find(
      (question) => question.question_number === pageNumber + 1
    );
    const answeredCorrectly = answer?.answered_correctly;
    if (answeredCorrectly === true) {
      return "correct";
    } else if (answeredCorrectly === false) {
      return "wrong";
    } else {
      return "default";
    }
  };

  return (
    <div>
      <ReactPaginate
        containerClassName={"pagination"}
        activeClassName={"actives"}
        pageClassName={getPageItemClassName(page)}
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
        onPageChange={handlePageClick}
        pageCount={typeof pageCount === "number" ? pageCount : 0}
        breakLabel={""}
        pageRangeDisplayed={numOfPages}
        marginPagesDisplayed={0}
      />
      {testRound && (
        <div className="page-content">
          <br />
          <Heading as="h4" sx={answeredStyles}>
            <Text>{pageContent}</Text>
          </Heading>
        </div>
      )}
    </div>
  );
};

export default PaginatedItems1;

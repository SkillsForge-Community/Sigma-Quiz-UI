import React, { useState, useEffect, useCallback } from "react";
import ReactPaginate from "react-paginate";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { Round, Question } from "../Types/Types";
import "./styles.css";
import { Heading, Text } from "@chakra-ui/react";
import { getID } from "../../features/getQuestionID";
import { useAppDispatch } from "../../app/Hooks";
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




const AnsweredBy: React.FC<PaginatedItemsProps> = ({
  pageCount,
  numOfPages,
  testRound,
  questions,
}) => {
  const [/* page */, setPage] = useState<number>(0);
  const [pageContent, setPageContent] = useState<string>("");
  const [/* answeredCorrectly */, setAnsweredCorrectly] = useState<boolean | null | undefined>(null);
  const dispatch=useAppDispatch()
  const handlePageClick = useCallback((event: { selected: number }) => {
    setPage(event.selected);
    const question = testRound?.questions.find(
      (question) => question.question_number === event.selected + 1
    );
    dispatch(getID(question?.id))
    const schoolName = question?.answered_by?.schoolRegistration?.school?.name;
    setPageContent(schoolName ? `Answered by ${schoolName}` : `Question ${question?.question_number}`);
    setAnsweredCorrectly(question?.answered_correctly || false);
  }, [testRound,dispatch])

  useEffect(() => {
    if (testRound) {
      handlePageClick({ selected: 0 });
    }
  }, [testRound,handlePageClick]);

  return (
    <>
      <ReactPaginate
        containerClassName={"pagination"}
        activeClassName={"actives"}
        pageClassName={"page-item"}
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
    </>
  );
};

export default AnsweredBy;

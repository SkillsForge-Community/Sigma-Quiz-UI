import React, { useState, useEffect, useCallback, useRef } from "react";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { Round } from "../Types/Types";
import { Box, Flex, GridItem, Heading, SystemCSSProperties, Text } from "@chakra-ui/react";
import { getID } from "../../features/getQuestionID";
import { useAppDispatch } from "../../app/Hooks";

interface PaginatedItemsProps {
  numOfPages: number;
  pageCount: number | undefined;
  testRound?: Round;
}

const answeredStyles = {
  color: "#FF0000",
  fontFamily: '"Poppins", sans-serif',
  fontWeight: 500,
  fontStyle: "normal",
  fontSize: "18px",
};

const questionStyles: SystemCSSProperties = {
  width: "35px",
  height: "26px",
  padding: '2px 5px 2px 5px',
  gap: "10px",
  textAlign: "center",
  color: "rgba(51, 51, 51, 1)",
  cursor: "pointer"
};

const iconStyle: SystemCSSProperties = {
  backgroundColor: "rgba(237, 237, 237, 1)",
  width: "26px",
  height: "26px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer"
};

const question_containerStyles: SystemCSSProperties = {
  gap: "9.37px",
  overflowX: "auto",
  scrollBehavior: "smooth",
  overflowY: "hidden"
};

const ITEMS_PER_PAGE = 10;

const AnsweredBy: React.FC<PaginatedItemsProps> = ({
  pageCount,
  numOfPages,
  testRound,
}) => {
  const [page, setPage] = useState<number>(0);
  const [pageContent, setPageContent] = useState<string>("");
  const dispatch = useAppDispatch();
  const questionContainerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = useCallback((selected: number) => {
    setPage(selected);
    const question = testRound?.questions.find(
      (question) => question.question_number === selected
    );
    dispatch(getID(question?.id));
    const schoolName = question?.answered_by?.schoolRegistration?.school?.name;
    setPageContent(schoolName ? `Answered by ${schoolName}` : `Question ${question?.question_number}`);
  }, [testRound, dispatch]);

  useEffect(() => {
    if (testRound) {
      handlePageClick(1);
    }
  }, [testRound, handlePageClick]);

  const handlePageChange = (direction: "prev" | "next") => {
    let newPage = page;
    if (direction === "prev" && page > 1) {
      newPage = page - 1;
    } else if (direction === "next" && page < (testRound?.questions?.length || 1)) {
      newPage = page + 1;
    }
    setPage(newPage);

    const newCurrentPage = Math.floor((newPage - 1) / ITEMS_PER_PAGE);
    if (newCurrentPage !== currentPage) {
      setCurrentPage(newCurrentPage);
    }
    handlePageClick(newPage);
  };

  useEffect(() => {
    if (questionContainerRef.current) {
      questionContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  const sortedQuestions = testRound?.questions?.slice().sort((a, b) => a.question_number - b.question_number);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedQuestions = sortedQuestions?.slice(startIndex, endIndex);
  console.log(testRound)
  const questions = displayedQuestions?.map((item, index) => {
    const isCurrentPage = item.question_number === page;
    const wasAnsweredIncorrectly = item.answered_by?.id && item.answered_correctly === false;
  
    return (
      <GridItem
        onClick={() => handlePageClick(item.question_number)}
        key={index}
        sx={{
          ...questionStyles,
          backgroundColor: isCurrentPage ? "rgba(143, 25, 231, 1)" : "none",
          color: isCurrentPage ? "rgba(255, 255, 255, 1)" : "none",
          borderRadius: "4px"
        }}
        bg={wasAnsweredIncorrectly ? "rgba(255, 0, 0, 0.2)" : "rgba(237, 237, 237, 1)"}>
        {item.question_number}
      </GridItem>
    );
  });
  

  return (
    <>
      <Flex direction={"row"} sx={question_containerStyles} ref={questionContainerRef}>
        <Box sx={iconStyle} onClick={() => handlePageChange("prev")}>
          <BiSolidLeftArrow />
        </Box>
        <Flex direction={"row"} gap={"9.37px"}>
          {questions}
        </Flex>
        <Box sx={iconStyle} onClick={() => handlePageChange("next")}>
          <BiSolidRightArrow />
        </Box>
      </Flex>
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

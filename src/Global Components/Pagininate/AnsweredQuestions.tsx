import React, { useState, useRef, useEffect } from "react";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { Question } from "../Types/Types";
import { Box, Flex, GridItem, SystemCSSProperties } from "@chakra-ui/react";

interface PaginatedItemsProps {
    answeredQuestion: Question[] | undefined;
}

const questionStyles: SystemCSSProperties = {
    width: "35px",
    height: "26px",
    padding: '2px 5px 2px 5px',
    gap: "10px",
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)"
};
const iconStyle: SystemCSSProperties = {
    backgroundColor: "rgba(237, 237, 237, 1)",
    width: "26px",
    height: "26px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer"
}
const question_containerStyles: SystemCSSProperties = {
    gap: "9.37px",
    overflowX: "auto",
    scrollBehavior: "smooth"
}

const ITEMS_PER_PAGE = 10;

const AnsweredQuestions: React.FC<PaginatedItemsProps> = ({
    answeredQuestion
}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const questionContainerRef = useRef<HTMLDivElement>(null);

    const handlePageChange = (direction: "prev" | "next") => {
        if (direction === "prev" && currentPage > 0) {
            setCurrentPage(currentPage - 1);
        } else if (direction === "next" && (currentPage + 1) * ITEMS_PER_PAGE < (answeredQuestion?.length || 0)) {
            setCurrentPage(currentPage + 1);
        }
    };

    useEffect(() => {
        if (questionContainerRef.current) {
            questionContainerRef.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
        }
    }, [currentPage]);

    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const displayedQuestions = answeredQuestion?.slice(startIndex, endIndex);
    const answered_questions = displayedQuestions?.map((item, index) => {
        return (
            <GridItem
                key={index}
                sx={questionStyles}
                bg={item.answered_correctly ? "rgba(31, 175, 56, 1)" : "rgba(255, 0, 0, 1)"}>
                {item.question_number}
            </GridItem>
        );
    });

    return (
        <Flex direction={"row"} sx={question_containerStyles} ref={questionContainerRef}>
            <Box sx={iconStyle} onClick={() => handlePageChange("prev")}>
                <BiSolidLeftArrow />
            </Box>
            <Flex direction={"row"} gap={"9.37px"}>
                {answered_questions}
            </Flex>
            <Box sx={iconStyle} onClick={() => handlePageChange("next")}>
                <BiSolidRightArrow />
            </Box>
        </Flex>
    );
};

export default AnsweredQuestions;

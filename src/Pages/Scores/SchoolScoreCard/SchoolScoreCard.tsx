import React from 'react';
import { Flex, Box, Text, SimpleGrid, Spacer, SystemCSSProperties } from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RxSlash } from "react-icons/rx";
const subTitleStyles: SystemCSSProperties = {
    color: "rgba(117, 117, 117, 1)",
    fontFamily: "Poppins, sans-serif",
    fontWeight: " 400",
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight:"27px",
    height:'27px',
    width:"210px",
    wordWrap:"normal",
wordBreak:"keep-all"
}
const subvaluesStyles:SystemCSSProperties={
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Poppins, sans-serif",
  fontWeight: "400",
  fontStyle: "normal",
  fontSize: "18px",
  textAlign:"left",
  alignContent:"start",
  alignItems:"start",
  width:"100px",
wordWrap:"normal",
wordBreak:"keep-all"
}
interface SchoolScoreCardProps {
    schoolName: string;
    score: number | undefined;
    totalScore: number;
    test: string | undefined;
    timeTaken: string;
    questionsAttempted: number | undefined;
    correctAnswers: number;
    wrongAnswers: number;
    overallResult: string;
    position: string;
}

const SchoolScoreCard: React.FC<SchoolScoreCardProps> = ({
    schoolName,
    score,
    totalScore,
    test,
    timeTaken,
    questionsAttempted,
    correctAnswers,
    wrongAnswers,
    overallResult,
    position
}) => {
    return (
        <>
            <Flex justify={"space-between"} width="790px" m="10px 10px 5px 24px">
                <Text className="school-name">{schoolName}</Text>
                <Flex gap='1px' alignItems={"center"} justify={'center'}>See More<MdKeyboardArrowRight /></Flex>
            </Flex>
            <Flex>

                <SimpleGrid columns={2}   alignItems={"center"} p="35px 35px 35px 14px" width="806px"  height="272px" m='20px' boxShadow='0px 0px 4px 0px rgba(0, 0, 0, 0.25)' borderRadius='10px' borderStyle='solid'>
                    <Box className="Score-details" fontSize={"44px"} color={"rgba(47, 215, 144, 1)"}>
                        <Text className="actual-score">{score}</Text>
                        <RxSlash /> {totalScore}
                    </Box>


                    <Flex direction={"column"} width={"446px"} height={'212px'} gap={"10px"}>
                        <Flex w="326px" h="27px" gap={"10px"}>
                            <Box sx={subTitleStyles}><Text>Test:</Text></Box>
                            <Spacer />
                            <Box sx={subvaluesStyles}><Text>{test}</Text></Box>
                        </Flex>
                        <Flex w="326px"  h="27px" gap={"10px"}>
                            <Box sx={subTitleStyles}><Text>Time taken:</Text></Box>
                            <Spacer />
                            <Box sx={subvaluesStyles}><Text>{timeTaken}</Text></Box>
                        </Flex>
                        <Flex w="326px" h="27px" gap={"10px"}>
                            <Box sx={subTitleStyles}><Text>Questions attempted:</Text></Box>
                            <Spacer />
                            <Box  sx={subvaluesStyles}><Text>{questionsAttempted}</Text></Box>
                        </Flex>
                        <Flex w="326px" h="27px" gap={"10px"}>
                            <Box sx={subTitleStyles}><Text>Correct answers:</Text></Box>
                            <Spacer />
                            <Box sx={subvaluesStyles}><Text>{correctAnswers}</Text></Box>
                        </Flex>
                        <Flex w="326px" h="27px" gap={"10px"}>
                            <Box sx={subTitleStyles}><Text>Wrong answers:</Text></Box>
                            <Spacer />
                            <Box sx={subvaluesStyles}><Text>{wrongAnswers}</Text></Box>
                        </Flex>
                        <Flex w="326px" h="27px" gap={"10px"}>
                            <Box sx={subTitleStyles}><Text>Overall result:</Text></Box>
                            <Spacer />
                            <Box sx={subvaluesStyles}><Text>{overallResult}</Text></Box>
                        </Flex>
                    </Flex>
                </SimpleGrid>
                <Box color={"rgba(47, 215, 144, 1)"} fontSize={"44px"} className="Score-details" m='auto'>
                    <Text className="actual-score">{position}</Text>
                </Box>

            </Flex>
        </>
    );
};

export default SchoolScoreCard;

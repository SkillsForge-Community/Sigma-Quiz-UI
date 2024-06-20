import React from 'react';
import { Flex, Box, Text, SimpleGrid } from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";

import { RxSlash } from "react-icons/rx";

interface SchoolScoreCardProps {
    schoolName: string;
    score: number;
    totalScore: number;
    test: string;
    timeTaken: string;
    questionsAttempted: number;
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

                <SimpleGrid columns={3} gap={10} alignItems={"center"} width="790px" height="272px" p='30px' m='20px' boxShadow='0px 0px 4px 0px rgba(0, 0, 0, 0.25)' borderRadius='10px' borderStyle='solid'>
                    <Box className="Score-details">
                        <Text className="actual-score">{score}</Text>
                        <RxSlash /> {totalScore}
                    </Box>
                    <Box className="details-subtitles">
                        <Text>Test:</Text>
                        <Text>Time taken:</Text>
                        <Text>Questions attempted:</Text>
                        <Text>Correct answers:</Text>
                        <Text>Wrong answers:</Text>
                        <Text>Overall result:</Text>
                    </Box>
                    <Box className="details-subvalues">
                        <Text>{test}</Text>
                        <Text>{timeTaken}</Text>
                        <Text>{questionsAttempted}</Text>
                        <Text>{correctAnswers}</Text>
                        <Text>{wrongAnswers}</Text>
                        <Text>{overallResult}</Text>
                    </Box>
                </SimpleGrid>
                <Box className="Score-details" m='auto'>
                    <Text className="actual-score">{position}</Text>
                </Box>

            </Flex>
        </>
    );
};

export default SchoolScoreCard;

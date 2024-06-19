import React from 'react';
import { useState } from "react";
import { 
    Flex, 
    Grid, 
    GridItem, 
    Box, 
    Text, 
    SimpleGrid, 
    Spacer, 
    Button,
    Heading
} from "@chakra-ui/react";
import { FaPen, FaPlus } from "react-icons/fa";
import { BsSlashLg } from "react-icons/bs";
import { IconContext } from "react-icons";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Sidebar from "../../Global Components/Sidebar/Sidebar";
import SchoolScoreCard from './SchoolScoreCard/SchoolScoreCard';
import pfp from "../../assets/Images/Profile picture.svg";

const crudOperationsStyles = {
    cursor: "pointer",
    transition: "1s",
    borderRadius: "7px",
    margin: "0 auto",
    padding: "7px",
    height: "38px",
    gap: "3x",
    backgroundColor: "rgba(143, 25, 231, 1)",
    ":hover": {backgroundColor: "purple"}
}
const crudStyles = {
    color: "rgba(255, 255, 255, 1)",
    gap: "8px",
    fontSize: "16px",
}
const crudIconStyles = {
    backgroundColor: "rgba(237, 237, 237, 1)",
    padding: "5px",
    borderRadius: "5px"
}

const Scores = () => {
    const [activeButton, setActiveButton] = useState<string>("Round 1");

    const handleButtonClick = (button: string) => {
        setActiveButton(button);
    };

    const btnStyles = {
        backgroundColor: "rgba(237, 237, 237, 1)",
        fontFamily: "Poppins",
        fontWeight: "400",
        fontSize: "16px",
        color: "rgba(51, 51, 51, 1)",
    };

    const rounds = ['Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5', 'Overall'];

    return (
        <Grid templateColumns='repeat(5, 1fr)'>
            <GridItem as='aside' colSpan={1} height="1024px" bg='#EDEDED'>
                <Sidebar />
            </GridItem>
            <GridItem as='main' colSpan={4} p="10px" pos='relative'>
                <SimpleGrid spacing={5} p="20px">
                    <Flex>
                        <Box>
                            <Text fontSize={"20px"}>Categories</Text>
                        </Box>
                        <Spacer />
                        <Flex align={"center"}>
                            <Flex alignItems={"center"} gap="20px">
                                <Text>Welcome, Jenner</Text>
                                <img src={pfp} alt="Profile" />
                                <MdOutlineKeyboardArrowDown />
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex>
                        <Flex height="47px" width="633px">
                            {rounds.map((round, index) => (
                                <Box
                                    key={index}
                                    className={`round-button ${activeButton === round ? 'active' : ''}`}
                                    onClick={() => handleButtonClick(round)}
                                    width="104px"
                                    height='47px'
                                >
                                    {round}
                                </Box>
                            ))}
                        </Flex>
                        <Spacer />
                        <Button sx={btnStyles}>
                            <Flex gap={"7px"}>
                                <Flex gap={"10px"}>
                                    <Text>Edit</Text>
                                    <FaPen />
                                </Flex>
                                <BsSlashLg />
                                <Flex gap={"10px"}>
                                    <Text>Add</Text>
                                    <FaPlus />
                                </Flex>
                            </Flex>
                        </Button>
                    </Flex>
                </SimpleGrid>

                <Box w="156px" sx={crudOperationsStyles} float={'right'} width='130px' pos='absolute' top='169px' left='900px'>
                    <Flex alignItems={"center"} justifyContent={"center"}>
                        <IconContext.Provider value={{ color: "rgba(0, 0, 0, 1)" }}>
                            <Heading as={"h5"} sx={crudStyles}>
                                <Flex alignItems={"center"} justifyContent={"center"}>
                                    Edit
                                    <Text as={"span"} sx={crudIconStyles}>
                                        <FaPen />
                                    </Text>
                                </Flex>
                            </Heading>
                            <span
                            style={{
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                            }}
                            >
                            /
                            </span>
                            <Heading as={"h5"} sx={crudStyles}>
                                <Flex alignItems={"center"} justifyContent={"center"}>
                                    Add
                                    <Text as={"span"} sx={crudIconStyles}>
                                        <FaPlus />
                                    </Text>
                                </Flex>
                            </Heading>
                        </IconContext.Provider>
                    </Flex>
                </Box>

                <SchoolScoreCard
                    schoolName="Ambassadors College, Sango Ota"
                    score={23}
                    totalScore={50}
                    test="General knowledge quiz"
                    timeTaken="1 hr 40 min"
                    questionsAttempted={25}
                    correctAnswers={21}
                    wrongAnswers={4}
                    overallResult="80%"
                    position="2nd"
                />

            </GridItem>
        </Grid>
    );
}

export default Scores;

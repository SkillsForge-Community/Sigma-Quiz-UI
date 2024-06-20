import React from 'react'
import { useState } from "react";
import pfp from "../../assets/Images/Profile picture.svg";
import Sidebar from "../../Global Components/Sidebar/Sidebar";
import PaginatedItems from "../../Global Components/Pagininate/Paginate";
import {
    Flex,
    Grid,
    GridItem,
    Heading,
    Box,
    Text,
    SimpleGrid,
    Spacer,
    Button,
    Input,
    HStack,
    InputRightAddon,
    InputGroup,
} from "@chakra-ui/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import { FaPlus } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { BsSlashLg } from "react-icons/bs";

const inputStyles = {
    backgroundColor: "white",
    FontFamily: "Poppins",
    fontSize: "15px",
    color: "rgba(51, 51, 51, 1)"
};

const Questions = () => {
    const [activeButton, setActiveButton] = useState<string>("Round 1");
    const [clickedRightButtonIndex, setClickedRightButtonIndex] = useState<number | null>(null);
    const [isWrongClicked, setIsWrongClicked] = useState(false);

    const handleButtonClick = (button: string) => {
        setActiveButton(button);
    };

    const handleRightClick = (index: number) => {
        setClickedRightButtonIndex(index);
        setIsWrongClicked(false);
    };

    const handleWrongClick = () => {
        setClickedRightButtonIndex(null);
        setIsWrongClicked(true);
    };

    const rightStyles = (isClicked: boolean) => ({
        background: isClicked ? "purple" : "white",
        color: isClicked ? "white" : "black",
        cursor: "pointer",
        _hover: {
            background: "purple",
            color: "white",
        },
    });

    const wrongStyles = {
        background: isWrongClicked ? "red" : "white",
        color: isWrongClicked ? "white" : "black",
        _hover: {
            background: "red",
            color: "white",
        },
    };

    const rightValues = ["Right", "+5", "+4", "+3", "+2", "+1"];

    return (
        <Grid templateColumns='repeat(5, 1fr)'>
            <GridItem as='aside' colSpan={1} height="1024px" bg='#EDEDED'>
                <Sidebar />
            </GridItem>
            <GridItem as='main' colSpan={4} p="10px">
                <SimpleGrid  spacing={5} p="20px">
                    <Flex>
                        <Box >
                            <Text fontSize={"20px"}>Manage Questions</Text>
                        </Box>
                        <Spacer />
                        <Flex align={"center"}>
                            <Flex alignItems={"center"} gap="20px">
                                <h5>Welcome, Jenner</h5>
                                <img src={pfp} alt="profile pic" />
                                <MdOutlineKeyboardArrowDown />
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex>
                        <Flex height="47px" width="633px">
                            {['Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5', 'Overall'].map((round, index) => (
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
                        <Button fontFamily='Poppins' fontWeight='400' fontSize='16px' bgColor="rgba(237, 237, 237, 1)" color="rgba(51, 51, 51, 1)">
                            <Flex gap={"7px"}>
                                <Flex gap={"10px"}>
                                    <h5>Edit</h5>
                                    <FaPen />
                                </Flex>
                                <BsSlashLg />
                                <Flex gap={"10px"}>
                                    <h5>Add</h5>
                                    <FaPlus />
                                </Flex>
                            </Flex>
                        </Button>
                    </Flex>
                </SimpleGrid>
                <Box>
                    <Heading as='h6' size='sm' m='20px'>Questions</Heading>
                    <PaginatedItems numOfPages={30} />
                </Box>
                <Box m='40px 20px' p='20px' bg='#EDEDED' borderRadius='20px' pos='relative'>
                    <Flex justify={'space-between'} m="20px 0">
                        <Heading as='h4' size='md'>Question 1</Heading>
                        {clickedRightButtonIndex !== null && (
                            <Box p='5px' borderRadius='50%' bgColor={'green'} color={'white'} pos="absolute" top="-10px" right="2px">
                                <FaCheck />
                            </Box>
                        )}
                        {isWrongClicked && (
                            <Box p='5px' borderRadius='50%' bgColor={'red'} color={'white'} pos="absolute" top="-10px" right="2px">
                                <ImCancelCircle />
                            </Box>
                        )}
                    </Flex>
                    <Text m='20px 0'>School</Text>
                    <HStack m='10px'>
                        <InputGroup>
                            <Input placeholder='Ambassadors College International Ota' sx={inputStyles} maxW='389px' size='md' />
                            <InputRightAddon sx={inputStyles}><MdOutlineKeyboardArrowDown /></InputRightAddon>
                        </InputGroup>
                        <Spacer />
                        <HStack spacing={3} fontFamily='Poppins' fontWeight='400' fontSize='16px'>
                            <Flex justify={'space-around'} borderRadius='5px' bgColor={'white'}>
                                {rightValues.map((value, index) => (
                                    <Box p='7px' m='1px 3px' key={index} sx={rightStyles(clickedRightButtonIndex === index)} onClick={() => handleRightClick(index)}>
                                        {value}
                                    </Box>
                                ))}
                            </Flex>
                            <Button  sx={wrongStyles} onClick={handleWrongClick}>Wrong</Button>
                        </HStack>
                    </HStack>
                </Box>
            </GridItem>
        </Grid>
    )
}

export default Questions
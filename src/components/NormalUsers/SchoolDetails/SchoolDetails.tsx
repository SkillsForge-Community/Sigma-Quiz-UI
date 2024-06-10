import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HStack, Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr, SimpleGrid, Button } from '@chakra-ui/react';
import PaginatedItems from "../Pagininate/Paginate";
import { IoIosArrowForward } from "react-icons/io";
import { RxSlash } from "react-icons/rx";
import "./Details.css";
import { useNavigate } from "react-router-dom";
function SchoolDetails() {
    const { schools } = useParams();
    const [activeButton, setActiveButton] = useState<string>("");
    const navigate = useNavigate()
    const handleButtonClick = (button: string) => {
        setActiveButton(button);
    };
    return (
        <main className="test-details">
            <SimpleGrid spacing={5}>
                <HStack spacing={504}>
                    <Box w='auto' h='30px'>
                        <h4 className="testDetails">Test Details</h4>
                    </Box>
                    <Box w='334px' h='30px'>
                        <h4 className="school-name">{schools} College, Sango Ota</h4>
                    </Box>
                </HStack>
                <SimpleGrid className="filter-buttons" columns={6} spacing={30} height="47px" width="613px">
                    {['Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5', 'Overall'].map((round, index) => (
                        <Box
                            key={index}
                            className={`round-button ${activeButton === round ? 'active' : ''}`}
                            onClick={() => handleButtonClick(round)}
                            width="73"
                            height='27px'
                        >
                            {round}
                        </Box>
                    ))}
                </SimpleGrid>
            </SimpleGrid>
            <SimpleGrid spacing={10} >
                <div>
                    <br />
                    <h5 className="questions">Questions</h5>
                    <Box className="school-detailsPages">
                    <PaginatedItems numOfPages={30} />
                    </Box>
                    
                    <br />
                    <HStack spacing={554}>
                        <Box w='221px' h='27px'>
                            <h4 className="Answered">Answered by School two</h4>
                        </Box>
                        <Box w='171px' h='27px'>
                            <Link to="/select-quiz">
                                <h4 className="manage">Manage Questions</h4>
                            </Link>
                                </Box>
                            </HStack>
                        </div>
                        <HStack alignItems={"center"} spacing={504}>
                            <Box w={"auto"}>
                                <h5 className="answer">Answered Questions</h5>
                                <PaginatedItems numOfPages={10} />
                            </Box>
                            <Box >
                                <Button rightIcon={<IoIosArrowForward />} className="view-details"
                                    onClick={() => navigate("/users/test-details", { state: { schools: schools } })}>
                                    view details
                                </Button>

                            </Box>
                        </HStack>
                        <TableContainer>
                            <Table variant='none' size='lg' width="100%">
                                <Thead>
                                    <Tr>
                                        <Th>Scores</Th>
                                        <Th>Total</Th>
                                        <Th>Position</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>
                                            <span className="Score">
                                                <span className="actual-score">13</span>
                                                <RxSlash /> 17
                                            </span>
                                        </Td>
                                        <Td>
                                            <span className="Score">
                                                <span className="actual-score">50</span>
                                                <RxSlash /> 60
                                            </span>
                                        </Td>
                                        <Td className="Score second">2nd</Td>
                                    </Tr>
                                    <Tr>
                                        <Td><span className="Score actual-score">50</span></Td>
                                        <Td><span className="Score actual-score">150</span></Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </SimpleGrid>
                </main>
                );
}

                export default SchoolDetails;

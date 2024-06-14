import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HStack, Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr, SimpleGrid, Button, background } from '@chakra-ui/react';
import PaginatedItems from "../Pagininate/Paginate";
import { IoIosArrowForward } from "react-icons/io";
import { RxSlash } from "react-icons/rx";
import "./Details.css";
import { useNavigate } from "react-router-dom";
import { Flex, Spacer } from "@chakra-ui/react";
type authenticateProps = {
    isAdmin: boolean
}
const btnStyles={
    backgroundColor:"rgba(237, 237, 237, 1)",
    FontFamily:"Poppins",
    fontWeight:"400",
    fontSize: "16px",
    color:"rgba(51, 51, 51, 1)"
}
const filteruestionsStyles={
    backgroundColor:"rgba(237, 237, 237, 1)",
    FontFamily:"Poppins",
    fontWeight:"500",
    fontSize: "18px",
    color:btnStyles.color
}
function SchoolDetails({ isAdmin }: authenticateProps) {
    const { schools } = useParams();
    const navigate = useNavigate()
    return (
        <main className="test-details">
           

            <SimpleGrid spacing={10}>
                <div>
                    <br />
                    <h5 className="questions">Questions</h5>
                    <Box className="school-detailsPages">
                        <PaginatedItems numOfPages={30} />
                    </Box>

                    <br />
                    <Box className="details-two">
                        <Box w='221px' h='27px'>
                            <h4 className="Answered">Answered by School two</h4>
                        </Box>
                        <Box w='171px' h='27px'>
                            <Link to="/select-quiz">
                                <h4 className="manage">Manage Questions</h4>
                            </Link>
                        </Box>
                    </Box>
                </div>
                {isAdmin&& <Flex>
                    <Button sx={filteruestionsStyles}>Right</Button>
                    <Spacer/>
                    <Button  sx={filteruestionsStyles}>Bonus</Button>
                    <Spacer/>
                    <Button  sx={filteruestionsStyles}>Wrong</Button>

                </Flex>}
                <HStack className="details-two">
                    <Box w={"auto"}>
                        <h5 className="answer">Answered Questions</h5>
                        <PaginatedItems numOfPages={10} />
                    </Box>
                    <Box >
                        <Button rightIcon={<IoIosArrowForward />} className="view-details"
                            onClick={() => navigate(isAdmin?"/subadmin/test-details":"/users/test-details", { state: { schools: schools } })}>
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

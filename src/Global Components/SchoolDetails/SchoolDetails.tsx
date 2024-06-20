import { Link, useParams } from "react-router-dom";
import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr, SimpleGrid, Button, Heading } from '@chakra-ui/react';
import PaginatedItems from "../Pagininate/Paginate";
import { IoIosArrowForward } from "react-icons/io";
import { RxSlash } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { Flex, Spacer } from "@chakra-ui/react";
import Header from "../../Global Components/Dashboad Header/Header";
import { useAppSelector } from "../../app/Hooks";

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
const questionsStyles = {
    color: "rgba(51, 51, 51, 1)",
    fontFamily: '"Poppins", sans-serif',
  fontweight: 500,
  fontStyle: "normal",
}
const answeredStyles = {
    color: "#FF0000",
    fontFamily: '"Poppins", sans-serif',
  fontWeight: 500,
  fontStyle: "normal",
  fontSize: "18px"
}
const manageStyles = {
    color: "rgba(51, 51, 51, 0.6)",
    textDecoration: "underline",
    fontFamily: '"Poppins", sans-serif',
  fontWeight: 500,
  fontStyle: "normal",
  fontSize: "18px"
}
const scoreStyles = {
    borderRadius: "50%",
    width: "146px",
    height: "146px",
    boxShadow: "0px 6px 12px 0px #00000040",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "36px",
    fontFamily: '"Poppins", sans-serif',
  fontWeight: 700,
  fontStyle: "normal",
  lineHeight: "54px"
}

function SchoolDetails() {
    const { schools } = useParams();
    const navigate = useNavigate()
    const token=useAppSelector(state=>state.auth.access_token)
    return (
        <Box padding={"20px"} >
           <Header isAdmin={token? true :false}/>

            <SimpleGrid spacing={10}>
                <div>
                    <br />
                    <Heading as={"h5"} sx={questionsStyles}>Questions</Heading>
                    <Box pr={"100px"}>
                        <PaginatedItems numOfPages={30} />
                    </Box>

                    <br />
                    <Flex justifyContent={"space-between"}>
                        <Box w='221px' h='27px'>
                            <Heading as={"h4"} sx={answeredStyles}>Answered by School two</Heading>
                        </Box>
                        <Box w='171px' h='27px'>
                            <Link to="/select-quiz">
                                <Heading as={"h4"} sx={manageStyles}>Manage Questions</Heading>
                            </Link>
                        </Box>
                    </Flex>
                </div>
                {token&& <Flex>
                    <Button sx={filteruestionsStyles}>Right</Button>
                    <Spacer/>
                    <Button  sx={filteruestionsStyles}>Bonus</Button>
                    <Spacer/>
                    <Button  sx={filteruestionsStyles}>Wrong</Button>

                </Flex>}
                <Flex justifyContent={"space-between"}alignItems={"center"}>
                    <Box w={"auto"}>
                        <h5 className="answer">Answered Questions</h5>
                        <PaginatedItems numOfPages={10} />
                    </Box>
                    <Box >
                    <Flex justifyContent={"center"} alignItems={"center"} gap={"10px"}  padding={"5px 20px 5px 20px"}>
                        <Button backgroundColor={"#EDEDED"} rightIcon={<IoIosArrowForward /> }
                            onClick={() => navigate(token?"/subadmin/test-details":"/users/test-details", { state: { schools: schools } })}>
                            view details
                        </Button>
                            </Flex >

                    </Box>
                </Flex>
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
                                    <Flex sx={scoreStyles}>
                                        <span className="actual-score">13</span>
                                        <RxSlash /> 17
                                    </Flex>
                                </Td>
                                <Td>
                                <Flex sx={scoreStyles}>
                                        <span className="actual-score">50</span>
                                        <RxSlash /> 60
                                    </Flex>
                                </Td>
                                <Td>
                                <Flex sx={scoreStyles} backgroundColor={"#8F19E7"} color={"gold"} transitionDuration={"1s"}> 2nd
                                    </Flex>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td><Flex sx={scoreStyles} color={"#02C309"} >50</Flex></Td>
                                <Td><Flex sx={scoreStyles} color={"#02C309"} >150</Flex></Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </SimpleGrid>
        </Box>
    );
}

export default SchoolDetails;
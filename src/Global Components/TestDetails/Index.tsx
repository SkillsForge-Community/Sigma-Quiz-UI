import { SimpleGrid, Box, Button, Flex, Spacer } from "@chakra-ui/react"
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./TestDetails.css"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PaginatedItems from "../Pagininate/Paginate";
import { RxSlash } from "react-icons/rx";
import { BsSlashLg } from "react-icons/bs";
import { FaPen, FaPlus } from "react-icons/fa";
interface LocationState {
    schools: string;
}
const btnStyles={
    backgroundColor:"rgba(237, 237, 237, 1)",
    FontFamily:"Poppins",
    fontWeight:"400",
    fontSize: "16px",
    color:"rgba(51, 51, 51, 1)"
}
type authenticateProps = {
    isAdmin: boolean
}
function TestDetails({isAdmin}:authenticateProps) {
    const navigate = useNavigate()
    const [activeButton, setActiveButton] = useState<string>("Round 1");
    const location = useLocation()
    const { schools } = location.state as LocationState
    const handleButtonClick = (button: string) => {
        setActiveButton(button);
    };
    return (
        <SimpleGrid spacing={10} className="testDetails">

            <SimpleGrid spacing={8}>
                <Flex width="1285px" alignItems={"center"} justifyItems={"space-between"}>
                    <Box className="back-button">
                        <IoIosArrowBack className="go-back" onClick={() => navigate(-1)} />
                        <h4>Test Details</h4>
                    </Box>
                    <Spacer/>
                    <Box >
                        <h4 className="school-name">{schools} College, Sango Ota</h4>
                    </Box>
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
                    {
                        isAdmin &&
                        <Button sx={btnStyles}>
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
                    }
                </Flex>
            </SimpleGrid>
            <SimpleGrid spacing={5}>
            <SimpleGrid columns={2} spacing={223} >
            <SimpleGrid gap={10} alignItems={"center"} className="score-stats" columns={3} width={"790px"} height="272px">
                <Box className="Score-details">
                    <span className="actual-score">13</span>
                    <RxSlash /> 17
                </Box>
                    <div className="details-subtitles">
                        <Box >Test :</Box>
                        <Box >Time taken :</Box>
                        <Box >Questions attempted :</Box>
                        <Box >Correct answers :</Box>
                        <Box >Wrong answers :</Box>
                        <Box >Overall result :</Box>
                    </div>
                    <div className="details-subvalues">
                       {!isAdmin && <Box>General knowledge quiz</Box>}
                       {isAdmin && <Box>{activeButton}</Box>}
                        <Box>1 hr 40 min</Box>
                        <Box>25</Box>
                        <Box>21</Box>
                        <Box>4</Box>
                        <Box>80%</Box>
                    </div>
                </SimpleGrid>
                <SimpleGrid columns={1} columnGap={"33px"} className="pages" alignItems={"center"} width="494.81px" height="272px">
                    <PaginatedItems numOfPages={14}/>
                    <PaginatedItems numOfPages={14}/>
                    <PaginatedItems numOfPages={14}/>
                    <PaginatedItems numOfPages={14}/>
                    <PaginatedItems numOfPages={14}/>

                </SimpleGrid>
                </SimpleGrid>
                <SimpleGrid width="328px" height="48px" columnGap={"70px"} columns={2}>
                    <Button variant="none" className="download">Download pdf</Button>
                    <Button variant="none" className="exit" onClick={()=>navigate(-1)}>Exit</Button>
                </SimpleGrid>
                </SimpleGrid>
        </SimpleGrid>
    )
}
export default TestDetails
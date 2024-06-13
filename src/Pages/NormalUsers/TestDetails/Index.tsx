import { SimpleGrid, Box, Button } from "@chakra-ui/react"
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./TestDetails.css"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PaginatedItems from "../Pagininate/Paginate";
import { RxSlash } from "react-icons/rx";
interface LocationState {
    schools: string;
}
function TestDetails() {
    const navigate = useNavigate()
    const [activeButton, setActiveButton] = useState<string>("");
    const location = useLocation()
    const { schools } = location.state as LocationState
    const handleButtonClick = (button: string) => {
        setActiveButton(button);
    };
    return (
        <SimpleGrid spacing={10} className="testDetails">

            <SimpleGrid spacing={1}>
                <SimpleGrid width="1285px" alignItems={"center"} justifyItems={"space-between"}>
                    <Box className="back-button">
                        <IoIosArrowBack className="go-back" onClick={() => navigate(-1)} />
                        <h4>Test Details</h4>
                    </Box>
                    <Box >
                        <h4 className="school-name">{schools} College, Sango Ota</h4>
                    </Box>
                </SimpleGrid>
                <SimpleGrid className="filter-buttons"  pl="45px" columns={6} spacing={30} height="47px" width="613px">
                    {['Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5', 'Overall'].map((round, index) => (
                        <Box
                            key={index}
                            className={`round-button ${activeButton === round ? 'active' : ''}`}
                            onClick={() => handleButtonClick(round)}
                            width="73"
                            height='47px'
                        >
                            {round}
                        </Box>
                    ))}
                </SimpleGrid>
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
                        <Box>General knowledge quiz</Box>
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
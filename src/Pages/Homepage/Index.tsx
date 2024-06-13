import infor from "../../assets/Images/info.png"
import { IoPlayCircleOutline } from "react-icons/io5"
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import './styles.css'; 
import Logo from "../../Global Components/Logo/Logo";
import { Box, HStack, Select, VStack } from "@chakra-ui/react";
const Homepage = () => {
    const navigate=useNavigate()
    return (
        <div className="Home">
            <Logo/>
            <div className="title">
                <h1>Sigma Roseline Etuokwu Quiz Competition</h1>
                <h3>Quiz competition involving secondary schools from all over Nigeria. Instilling the spirit of knowledge. Held @ the premier University; University of Ibadan</h3>
            </div>
            <div className="dropdowns">
                <Select borderRadius="45px" icon={<MdKeyboardArrowDown/>}  className="dropdown-menu" height="90px"  width="491px" bg="white" placeholder="Select quiz to view">
                </Select>
                
                <button className="submit" onClick={()=>navigate('/login')} type="submit">View Quiz</button>
            </div>
            <div className="quizes">
                <h4>2024 Quiz</h4>
                <h4>2023 Quiz</h4>
                <h4>2022 Quiz</h4>
            </div>
            <div className="video">
                <VStack
                    spacing={4}
                    align='stretch'
                    width="357px"
                    height="141px"
                    padding="12px 16px 12px 16px"
                >
                    <Box h='74px' w="325px">
                        <HStack spacing='24px'>
                            <Box   className="img-info">
                                <div >
                                    <img src={infor} className="info-img" alt="" />
                                </div>
                            </Box>
                            <Box className="info-text">
                                <h3>Watch our documentary on the Quiz Competition</h3>
                                <p>Sigma Club</p>
                            </Box>
                        </HStack>
                    </Box>
                    <Box h='31px' w="325px" className="info-button">
                       
                            <button onClick={() => navigate("/About")}><IoPlayCircleOutline />Play Video</button>
                       
                    </Box>
                </VStack>
            
                
                

            </div>



        </div>
    )
}
export default Homepage
import { SimpleGrid, Flex, Spacer, Button,Box } from "@chakra-ui/react";
import pfp from "../../assets/Images/Profile picture.svg"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { BsSlashLg } from "react-icons/bs";
import { useState } from "react";
import { useParams } from "react-router-dom";
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
export default function Header({ isAdmin }: authenticateProps){
    const {schools}=useParams()
    const [activeButton, setActiveButton] = useState<string>("Round 1");
    const handleButtonClick = (button: string) => {
        setActiveButton(button);
    };
    return(
        <SimpleGrid spacing={5}>
        <Flex>
            <Box >
                <h4 className="testDetails">Test Details</h4>
            </Box>
            <Spacer />
            <Flex align={"center"}>
                <Flex alignItems={"center"} wrap={"nowrap"} w='334px' h='30px'>
                    <h4 className="school-name">{schools} College, Sango Ota</h4>
                </Flex>
                {isAdmin && <Flex alignItems={"center"} gap="20px">
                    <h5>Welcome, Jenner</h5>
                    <img src={pfp} alt="profile pic" />
                    <MdOutlineKeyboardArrowDown />
                </Flex>}
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
    )
}
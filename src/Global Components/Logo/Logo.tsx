import { Box, HStack, VStack } from "@chakra-ui/react"
import logo from "../../assets/Images/logo.svg"
import "./Logo.css"
function Logo() {
    return (
        <div className="logos">
            <HStack spacing='4px' width="306px" height="93px">
                <Box w='162.38px' h='115px'>
                    <img src={logo} className="logo" alt="logo" />
                </Box>
                <Box w='270px'>
                    <VStack

                        spacing={4}
                        align='stretch'
                        className="logo-texts"
                    >
                        <Box h='46px' w="260">
                            <h4 className="logo-text">Sigma Club</h4>
                        </Box>
                        <Box h='37px' w="129">
                            <h5 className="logo-text1">Since 1950</h5>
                        </Box>

                    </VStack>
                    <div >


                    </div>
                </Box>
            </HStack>


        </div>
    )
}
export default Logo
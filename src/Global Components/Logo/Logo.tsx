import { Box, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import logo from "../../assets/Images/logo.svg";

type logoTextStyleType = {
    color: string
    lineHeight: string
    fontFamily: string
    fontWeight: number,
    fontStyle: string
    fontSize: string
}
function Logo() {
  const logoTextStyle1: logoTextStyleType = {
    color: "#8F19E7",
    lineHeight: "28px",
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: "30px",
  };
  const logoTextStyle2: logoTextStyleType = {
    color: "#8F19E7",
    lineHeight: "16px",
    fontSize: "24px",
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 600,
    fontStyle: "normal",
  };
  return (
    <Flex
      alignItems={"center"}
      gridArea={"logos"}
      w={"296px"}
      h={"93px"}
      gap={"10px"}
    >
      <Flex
        width="306px"
        height="93px"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box w="162.38px" h="115px">
          <Image src={logo} w={"89.07px"} h={"93px"} alt="logo" />
        </Box>
        <Box w="270px">
          <VStack spacing={4} align="stretch">
            <Box h="46px" w="260">
              <Heading as={"h4"} sx={logoTextStyle1}>
                Sigma Club
              </Heading>
            </Box>
            <Box h="37px" w="129">
              <Heading as={"h5"} sx={logoTextStyle2}>
                Since 1950
              </Heading>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
}
export default Logo;

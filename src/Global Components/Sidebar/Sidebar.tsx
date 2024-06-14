import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { BsPercent } from "react-icons/bs";
import { LuSchool } from "react-icons/lu";
import { SimpleGrid } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { MdAccountCircle } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { RiGraduationCapFill } from "react-icons/ri";

const linkStyles = {
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
};
const linksStyles = {
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  padding: "5px",
  height: "47px",
  overflow: "visible",
  fontFamily: `"Poppins", sans-serif`,
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "16px",
  color: "rgba(51, 51, 51, 0.6)",
  transition: "10ms",
  _hover: {
    color: "#8F19E7",
    boxShadow: " 2px 2px 15px 1px #00000040",
    borderLeft: " 5px solid #8F19E7",
    borderTop: 0,
    borderRight: 0,
    borderBottom: 0,
  },
};
const activeLinkStyle = {
  color: "#8F19E7",
  boxShadow: " 2px 2px 15px 1px #00000040",
  borderLeft: " 5px solid #8F19E7",
  borderTop: 0,
  borderRight: 0,
  borderBottom: 0,
};
const crudOperationsStyles = {
  cursor: "pointer",
  transition: "1s",
  borderRadius: "7px",
  margin: "0 auto",
  padding: "7px",
  height: "38px",
  gap: "3x",
  backgroundColor: "rgba(143, 25, 231, 1)",
  ":hover": { backgroundColor: "purple" },
};

const crudStyles = {
  color: "rgba(255, 255, 255, 1)",
  gap: "8px",
  fontSize: "16px",
};
const crudIconStyles = {
  backgroundColor: "rgba(237, 237, 237, 1)",
  padding: "5px",
  borderRadius: "5px",
};
function Sidebar() {
  const location = useLocation();
  return (
    <div>
      <SimpleGrid spacing={10}>
        <Box h="40px">
          <Flex sx={linkStyles}>
            <Select
              width="158px"
              placeholder="QUIZ 2024"
              fontSize={"20px"}
              fontWeight={600}
            ></Select>
          </Flex>
        </Box>

        <SimpleGrid spacing={5}>
          <Box h="40px">
            <Heading as={"h5"} className="sidebar-schools">
              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                gap={"10px"}
              >
                <RiGraduationCapFill size={"26px"} />
                Schools
              </Flex>
            </Heading>
          </Box>

          {[
            { to: "/subadmin/Ambassadors", label: "Ambassadors" },
            { to: "/subadmin/School-Two", label: "School Two" },
            { to: "/subadmin/School-Three", label: "School Three" },
            { to: "/subadmin/School-Four", label: "School Four" },
            { to: "/subadmin/School-Five", label: "School Five" },
            { to: "/subadmin/School-Six", label: "School Six" },
          ].map((link, index) => (
            <NavLink key={index} to={link.to}>
              <Flex
                sx={{
                  ...linksStyles,
                  ...(location.pathname === link.to && activeLinkStyle),
                }}
              >
                <h5>{link.label}</h5>
              </Flex>
            </NavLink>
          ))}
          <Box w="156px" sx={crudOperationsStyles}>
            <Flex alignItems={"center"} justifyContent={"center"}>
              <IconContext.Provider value={{ color: "rgba(0, 0, 0, 1)" }}>
                <Heading as={"h5"} sx={crudStyles}>
                  <Flex alignItems={"center"} justifyContent={"center"}>
                    Edit
                    <Text as={"span"} sx={crudIconStyles}>
                      <FaPen />
                    </Text>
                  </Flex>
                </Heading>
                <span
                  style={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  /
                </span>
                <Heading as={"h5"} sx={crudStyles}>
                  <Flex alignItems={"center"} justifyContent={"center"}>
                    Add
                    <Text as={"span"} sx={crudIconStyles}>
                      <FaPlus />
                    </Text>
                  </Flex>
                </Heading>
              </IconContext.Provider>
            </Flex>
          </Box>
        </SimpleGrid>

        <SimpleGrid spacing={5}>
          <Box h="40px">
            <Heading as={"h5"}>
              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                gap={"10px"}
              >
                <BsPercent size={"26px"} />
                Scores
              </Flex>
            </Heading>
          </Box>
          <NavLink to="/subadmin/All-Schools">
            <Heading as={"h5"} sx={{...linksStyles, ...(location.pathname === "/subadmin/All-Schools" && activeLinkStyle)}}>
              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                gap={"10px"}
              >
                <LuSchool size={"26px"} />
                All Schools
              </Flex>
            </Heading>
          </NavLink>
          <NavLink to="/select-quiz">
            <Heading as={"h5"} sx={linksStyles}>
              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                gap={"10px"}
              >
                <CiCircleQuestion size={"26px"} />
                Manage Questions
              </Flex>
            </Heading>
          </NavLink>
          <Box h="40px" className="link">
            <Heading as={"h5"}>
              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                gap={"10px"}
              >
                <MdAccountCircle size={"26px"} />
                Account
              </Flex>
            </Heading>
          </Box>
          <NavLink to="manage-users">
            <Heading as={"h5"} sx={{...linksStyles, ...(location.pathname === "manage-users" && activeLinkStyle)}}>
              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                gap={"10px"}
              >
                <FaUsers size={"26px"} />
                Manage Users
              </Flex>
            </Heading>
          </NavLink>
          <NavLink to="account-settings">
            <Heading as={"h5"} sx={{...linksStyles, ...(location.pathname === "account-settings" && activeLinkStyle)}}>
              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                gap={"10px"}
              >
                <CiSettings size={"26px"} />
                My Account
              </Flex>
            </Heading>
          </NavLink>
        </SimpleGrid>
      </SimpleGrid>
    </div>
  );
}
export default Sidebar;

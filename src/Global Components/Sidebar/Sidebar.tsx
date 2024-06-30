import {
  Box,
  Flex,
  Heading,
  SystemCSSProperties,
  Text,
} from "@chakra-ui/react";
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
import { useAppSelector } from "../../app/Hooks";
import { useEffect, useMemo, useState } from "react";
import LoadingIcons from "react-loading-icons";
const linkStyles: SystemCSSProperties = {
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
};

const linksStyles: SystemCSSProperties = {
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
};

const activeLinkStyle: SystemCSSProperties = {
  color: "#8F19E7",
  boxShadow: " 2px 2px 15px 1px #00000040",
  borderLeft: " 5px solid #8F19E7",
  borderTop: 0,
  borderRight: 0,
  borderBottom: 0,
};

const crudOperationsStyles: SystemCSSProperties = {
  cursor: "pointer",
  transition: "1s",
  borderRadius: "7px",
  margin: "0 auto",
  padding: "7px",
  height: "38px",
  gap: "3x",
  backgroundColor: "rgba(143, 25, 231, 1)",
};

const crudStyles: SystemCSSProperties = {
  color: "rgba(255, 255, 255, 1)",
  gap: "8px",
  fontSize: "16px",
};

const crudIconStyles: SystemCSSProperties = {
  backgroundColor: "rgba(237, 237, 237, 1)",
  padding: "5px",
  borderRadius: "5px",
};

type School = {
  id: string;
  name: string;
  state: string;
  address: string;
};



function Sidebar() {
  const location = useLocation();
  const isLoggedIn = useAppSelector((state) => !!state.auth.access_token);
  const [schools, setSchools] = useState<School[] | null>(null); // Specify initial state as null
  const { data, loading, error } = useAppSelector(
    (state) => state.getQuizResult
  ); // Specify type for data
  const [errorMessage, setErrorMessage] = useState<string>("");
  const loggedInUser = useAppSelector((state) => state.auth.user);
  const quizID=useAppSelector(state=>state.getID.quizId)
  console.log(quizID)
  const activeSchool = useMemo(() => {
    return schools?.find(school => {
      return location.pathname.includes(school.id)
    });
  }, [schools, location.pathname]);

  useEffect(() => {
    if (data) {
      const schools = data.schoolRegistrations.map(
        (registration) => registration.school
      );
      setSchools(schools);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      setErrorMessage("Error fetching test details, try agin later!");
    }
  }, [error]);

  return (
    <div>
      {loading ? (
        <Flex alignItems="center" justifyContent="center" height="100%">
          <LoadingIcons.Bars width={"60px"} height={"60px"} color="grey" />
        </Flex>
      ) : data ? (
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
              {schools && schools.length > 0 ? (
                schools.map((school, index) => {
                  return (
                    <NavLink key={index} to={`schools/${school.id}`}>
                      <Flex
                        _hover={{
                          color: "#8F19E7",
                          boxShadow: " 2px 2px 15px 1px #00000040",
                          borderLeft: " 5px solid #8F19E7",
                          borderTop: 0,
                          borderRight: 0,
                          borderBottom: 0,
                        }}
                        sx={{
                          ...linksStyles,
                          ...(school.id === activeSchool?.id &&
                            activeLinkStyle),
                        }}
                      >
                        <h5>{school.name}</h5>
                      </Flex>
                    </NavLink>
                  );
                })
              ) : (
                <Flex color={"red"} sx={linksStyles} align={"center"}>
                  No Data
                </Flex>
              )}
              {isLoggedIn && (
                <Box w="156px" sx={crudOperationsStyles}>
                  <Flex alignItems={"center"} justifyContent={"center"}>
                    <IconContext.Provider value={{ color: "rgba(0, 0, 0, 1)" }}>
                      <Heading as={"h5"} sx={crudStyles}>
                        <Flex alignItems={"center"} justifyContent={"center"}>
                          Edit
                          <Text
                            as={"span"}
                            sx={crudIconStyles}
                            _hover={{ backgroundColor: "purple" }}
                          >
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
              )}
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
              <NavLink to="results">
                <Heading
                  as={"h5"}
                  sx={{
                    ...linksStyles,
                    ...(location.pathname.endsWith("results") &&
                      activeLinkStyle),
                  }}
                >
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
              {isLoggedIn && (
                <NavLink to={`manage-questions`}>
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
              )}
              {isLoggedIn && (
                <Flex flexDir={"column"} gap={"20px"}>
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
                  <NavLink to="/subadmin/manage-users">
                    <Heading
                      as={"h5"}
                      sx={{
                        ...linksStyles,
                        ...(location.pathname.endsWith("manage-users") &&
                          activeLinkStyle),
                      }}
                    >
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
                  <NavLink to={`profile/${loggedInUser?.id}/settings`}>
                    <Heading
                      as={"h5"}
                      sx={{
                        ...linksStyles,
                        ...(location.pathname.endsWith("settings") &&
                          activeLinkStyle),
                      }}
                    >
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
                </Flex>
              )}
            </SimpleGrid>
          </SimpleGrid>
        </div>
      ) : (
        <Flex
          alignItems="center"
          textAlign={"center"}
          color={"red"}
          justifyContent="center"
          height="100%"
        >
          {errorMessage}
        </Flex>
      )}
    </div>
  );
}

export default Sidebar;

import { Box, Flex, border } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { BsPercent } from "react-icons/bs";
import { LuSchool } from "react-icons/lu";
// import "./Sidebar.css"
import { SimpleGrid } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { IconContext } from 'react-icons';
import { MdAccountCircle } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";

const linkStyles = {
    textAlign: "center"
}
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
  border: "1px solid red"
}

function Sidebar() {
    return (
        <div>
            <SimpleGrid
                spacing={10}
            >
                <Box h='40px' className='link'>
                    <Flex sx={linkStyles}>
                    <Select width="158px" placeholder='QUIZ 2024' >
                    </Select>
                    </Flex>
                </Box>

                <SimpleGrid
                    spacing={5}
                >
                    <Box h='40px' className='link' sx={linksStyles}>
                        <Flex>
                        <h5 className='sidebar-schools' style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                            Schools
                        </h5>
                        </Flex>
                    </Box>
                    <NavLink to="/subadmin/Ambassadors" className='links'>
                    <Flex sx={linksStyles}>
                        <h5 >
                            Ambassadors
                        </h5>
                        </Flex>
                    </NavLink>
                    <NavLink  className='links' to="/subadmin/School-Two"   >
                    <Flex sx={linksStyles}>
                        <h5>
                            School Two
                        </h5>
                        </Flex>
                    </NavLink>
                    <NavLink  className='links' to="/subadmin/School-Three" >
                    <Flex sx={linksStyles}>
                        <h5 >
                            School Three
                        </h5>
                        </Flex>
                    </NavLink>
                    <NavLink  className='links' to="/subadmin/School-Four" >
                        <h5 >
                            School Four
                        </h5>
                    </NavLink>
                    <NavLink  className='links' to="/subadmin/School-Five" >
                        <h5 >
                            School Five
                        </h5>
                    </NavLink>
                    <NavLink className='links' to="/subadmin/School-Six" >
                        <h5 >
                            School Six
                        </h5>
                    </NavLink>
                    <Box w="156px" className='crud-operations'>
                        <IconContext.Provider value={{color:"rgba(0, 0, 0, 1)"}}>
                        <h5 className='crud'>
                            Edit 
                            <span className='crud-icons'>
                            <FaPen />
                            </span>
                            
                        </h5>
                        <span style={{color:"white", display:"flex", alignItems:"center"}}>/</span>
                        <h5 className='crud'>
                            Add 
                            <span className='crud-icons'>
                               
                            <FaPlus />
                           
                            </span>
                           
                        </h5>
                        </IconContext.Provider>
                    </Box>
                    
                </SimpleGrid>
                <SimpleGrid spacing={5}>
                    <Box h='40px' className='link'>
                        <h5 style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                            <BsPercent size={"26px"}/>
                            Score
                        </h5>
                    </Box>
                    <NavLink  className='links' to="/subadmin/All-Schools" >
                        <h5 style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                            <LuSchool size={"26px"}/>
                            All Schools
                        </h5>
                    </NavLink>
                    <NavLink  className='links' to="/select-quiz">
                        <h5 style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <CiCircleQuestion size={"26px"}/>
                        Manage Questions
                        </h5>
                    </NavLink>
                    <Box h='40px' className='link'>
                        <h5 style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <MdAccountCircle size={"26px"}/>

                            Account
                        </h5>
                    </Box>
                    <NavLink  className='links' to="manage-users" >
                        <h5 style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <FaUsers size={"26px"}/>
                        Manage Users
                        </h5>
                    </NavLink>
                    <NavLink  className='links' to="account-settings" >
                        <h5 style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                            
                        <CiSettings size={"26px"}/>

                            My Account
                        </h5>
                    </NavLink>
                </SimpleGrid>
            </SimpleGrid>


        </div>
    )
}
export default Sidebar
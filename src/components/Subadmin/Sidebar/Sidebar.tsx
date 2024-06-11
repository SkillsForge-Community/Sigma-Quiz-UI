import { Box } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { GiGraduateCap } from "react-icons/gi";
import { BsPercent } from "react-icons/bs";
import { LuSchool } from "react-icons/lu";
import "./Sidebar.css"
import { SimpleGrid } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { IconContext } from 'react-icons';
import { color } from 'framer-motion';
function Sidebar() {
    return (
        <div>
            <SimpleGrid
                spacing={10}

            >
                <Box h='40px'  className='link'>
                    <Select width="158px"  placeholder='QUIZ 2024' >

                    </Select>
                </Box>

                <SimpleGrid
                    spacing={5}
                >
                    <Box h='40px' className='link'>
                        <h5 style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                            Schools
                        </h5>
                    </Box>
                    <NavLink to="/subadmin/Ambassadors" className='links'>
                        <h5 style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                            Ambassadors
    
                        </h5>
                    </NavLink>
                    <NavLink  className='links' to="/subadmin/School-Two"   >
                        <h5>
                            School Two
                        </h5>
                    </NavLink>
                    <NavLink  className='links' to="/subadmin/School-Three" >
                        <h5 >
                            School Three
                        </h5>
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
                        <IconContext.Provider value={{color:"black"}}>
                        <h5 className='crud'>
                            Edit 
                            <span className='crud-icons'>
                            <FaPen />
                            </span>
                            
                        </h5>
                        <span>/</span>
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
                            <BsPercent />
                            Score
                        </h5>
                    </Box>
                    <NavLink  className='links' to="/subadmin/All-Schools" >
                        <h5 style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                            <LuSchool />
                            All Schools
                        </h5>
                    </NavLink>
                    <NavLink  className='links' to="/select-quiz">
                        <h5 style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                            <LuSchool />
                            Manage Questions
                        </h5>
                    </NavLink>
                    <Box h='40px' className='link'>
                        <h5 style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                            <BsPercent />
                            Account
                        </h5>
                    </Box>
                    <NavLink  className='links' to="/subadmin" >
                        <h5 style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                            <LuSchool />
                            Manage Users
                        </h5>
                    </NavLink>
                    <NavLink  className='links' to="/subadmin/My-Account" >
                        <h5 style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                            <LuSchool />
                            My Account
                        </h5>
                    </NavLink>
                </SimpleGrid>
            </SimpleGrid>


        </div>
    )
}
export default Sidebar
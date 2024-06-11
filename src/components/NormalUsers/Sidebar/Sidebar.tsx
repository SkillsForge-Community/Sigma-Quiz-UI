import { Box } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { GiGraduateCap } from "react-icons/gi";
import { BsPercent } from "react-icons/bs";
import { LuSchool } from "react-icons/lu";
import "./Sidebar.css"
import { SimpleGrid } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
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
                    spacing={4}
                >
                    <Box h='40px' className='link'>
                        <h5 className='sidebar-schools' style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                            <GiGraduateCap />
                            Schools
                        </h5>
                    </Box>
                    <NavLink to="/users/Ambassadors" className='links'>
                        <h5 style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                            Ambassadors
    
                        </h5>
                    </NavLink>
                    <NavLink  className='links' to="/users/School-Two"   >
                        <h5>
                            School Two
                        </h5>
                    </NavLink>
                    <NavLink  className='links' to="/users/School-Three" >
                        <h5 >
                            School Three
                        </h5>
                    </NavLink>
                    <NavLink  className='links' to="/users/School-Four" >
                        <h5 >
                            School Four
                        </h5>
                    </NavLink>
                    <NavLink  className='links' to="/users/School-Five" >
                        <h5 >
                            School Five
                        </h5>
                    </NavLink>
                    <NavLink className='links' to="/users/School-Six" >
                        <h5 >
                            School Six
                        </h5>
                    </NavLink>
                </SimpleGrid>
                <SimpleGrid>
                    <Box h='40px' className='link'>
                        <h5 style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                            <BsPercent />
                            Score
                        </h5>
                    </Box>
                    <NavLink  className='links' to="/users/All-Schools" >
                        <h5 style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                            <LuSchool />
                            All Schools
                        </h5>
                    </NavLink>
                </SimpleGrid>
            </SimpleGrid>


        </div>
    )
}
export default Sidebar
import { Box, SimpleGrid } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { NavLink, Outlet } from "react-router-dom"
import "./update.css"
import { RiArrowLeftWideLine } from "react-icons/ri";
export default function UpdateUser(){
    const navigate=useNavigate()
    return(
        <div>
           <div className="update-header">
                    <Box className="update-header-inner">
                        <div className="update-back-button" onClick={()=>navigate(-1)}>
                            <RiArrowLeftWideLine />

                            <h5>Back</h5>
                        </div>
                        <NavLink className="update-link" to="/subadmin/update-user">
                            Personal
                        </NavLink>
                        <NavLink className="update-link" to="/">
                            Functions
                        </NavLink>
                    </Box>
           </div>
           <form action="">
            
           </form>
        </div>
    )
}
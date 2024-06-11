import { Box } from "@chakra-ui/react"
import { useNavigate, Outlet } from "react-router-dom"
import { NavLink} from "react-router-dom"
import "./update.css"
import { RiArrowLeftWideLine } from "react-icons/ri";
export default function UpdateUser(){
    const navigate=useNavigate()
    return(
        <div>
           <div className="update-header">
                    <Box className="update-header-inner">
                        <div className="update-back-button" onClick={()=>navigate("/subadmin")}>
                            <RiArrowLeftWideLine />

                            <h5>Back</h5>
                        </div>
                        <NavLink className="update-link" to="/subadmin/update-user">
                            Personal
                        </NavLink>
                        <NavLink className="update-link" to="/subadmin/update-user/user-functions">
                            Functions
                        </NavLink>
                    </Box>
           </div>
           <Outlet/>
        </div>
    )
}
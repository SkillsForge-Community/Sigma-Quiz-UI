import { Box } from "@chakra-ui/react"
import { useNavigate, Outlet } from "react-router-dom"
import { NavLink} from "react-router-dom"
import "./styles.css"
import { RiArrowLeftWideLine } from "react-icons/ri";
import { useAppSelector } from "../../../app/Hooks";
export default function UpdateUser(){
    const navigate=useNavigate()
    const quizId = useAppSelector(state => state.getID.quizId)

    return(
        <div>
           <div className="update-header">
                    <Box className="update-header-inner">
                        <div className="update-back-button" onClick={()=>navigate(`/subadmin/${quizId}`)}>
                            <RiArrowLeftWideLine />

                            <h5>Back</h5>
                        </div>
                        <NavLink className="update-link" to="profile">
                            Personal
                        </NavLink>
                        <NavLink className="update-link" to="user-functions">
                            Functions
                        </NavLink>
                    </Box>
           </div>
           <Outlet/>
        </div>
    )
}
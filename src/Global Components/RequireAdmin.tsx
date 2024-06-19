import { useLocation,Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../app/Hooks"
function RequireAuth(){
    const location= useLocation()
    const token =useAppSelector(state=>state.auth.access_token);
    console.log(token)
    return(
        token ? <Outlet/>: <Navigate to ="/login" state={{from :location}} replace/>
    )
}
export default RequireAuth
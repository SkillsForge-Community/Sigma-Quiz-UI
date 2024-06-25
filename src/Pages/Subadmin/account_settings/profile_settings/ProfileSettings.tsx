import './profileSettings.css'
import { FaUserCircle } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { useAppSelector } from '../../../../app/Hooks';
import axios from 'axios';
import { useState } from 'react';
import { Box, Button, Spinner } from '@chakra-ui/react';

const ProfileSettings = () => {
  const token = useAppSelector((state) => state.auth.access_token);
  const user=useAppSelector(state=>state.auth.user)
  const [updatedFirstName, setUpdatedFirstName] = useState("")
  const [updatedLastName, setUpdatedLastName] = useState("")
  const [updatedEmail, setUpdatedEmail] = useState("")
  const [message, setMessage] = useState("")
  const [err, setErr] = useState("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const updateProfile = async () => {
    const profileObject = {
    "first_name": updatedFirstName,
    "last_name": updatedLastName,
    "email": updatedEmail 
    }
    try {
      setIsLoading(true)
      await axios.put("https://sigma-website-backend-51b4af465e71.herokuapp.com/api/users/me", profileObject, {
        headers: {
          Authorization : `Bearer ${token}`
        }
      })
      setIsLoading(false)
      setMessage("Successfully updated profile")
      setUpdatedFirstName("")
      setUpdatedLastName("")
      setUpdatedEmail("")
    } catch (error) {
      setIsLoading(false)
      if(axios.isAxiosError(error)){
        console.log(error);
        setErr(error.message)
      } 
    }
   
  }
  return (
    <div className='profile-settings'>

      <div className="profile-img">
        <FaUserCircle size={80} color='#9a9a9a'/>
        <div className="profile-img-text">
          <IoIosAdd size={28}/><span>Add picture</span>
        </div>
      </div>

      <span className="profile-name"  style={{marginTop: '10px'}}>{user?.first_name}</span>

    <form action="">
      <div className="profile-form">
        <div className="field">
          <label htmlFor="">First Name</label>
          <input type="text" defaultValue={user?.first_name} onChange={(e) => setUpdatedFirstName(e.target.value)}/>
        </div>
        <div className="field">
          <label htmlFor="">Last Name</label>
          <input type="text" defaultValue={user?.last_name}  onChange={(e) => setUpdatedLastName(e.target.value)}/>
        </div>
        <div className="field">
          <label htmlFor="">Email Address</label>
          <input type="text" defaultValue={user?.email}  onChange={(e) => setUpdatedEmail(e.target.value)}/>
        </div>
        {isLoading? <Box w={"10%"} m={"0 auto"}> <Spinner textAlign={"center"} color="#8F19E7"/> </Box>:
        <Button className='update-profile' onClick={updateProfile}>Update Profile</Button>}
      </div>
      <Box my={"1.5em"} textAlign={"center"}>
        {message && <Box color={"green"}>{message}</Box>}
        {err && <Box color={"red"}>{err}. Try again</Box>}
        </Box>
      </form>
    </div>
  )
}

export default ProfileSettings
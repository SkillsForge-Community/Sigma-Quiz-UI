import React, { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { FaUserCircle } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";


const PasswordSettings = () => {


  const [showOldPassword, setShowOldPassword] = useState<boolean>(false)
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
  const buttonStyle = {
    ':hover': {
      bgColor: '#9F29f7'
    }
  } 


  return (
    <Box bg={'white'} w={"60%"} h={'815px'} borderRight={'1px solid rgba(0, 0, 0, 0.2)'} py={'50px'}>
      
      <div className="profile-img">
        <FaUserCircle size={80} color='#9a9a9a'/>
        <div className="profile-img-text">
          <IoIosAdd size={28}/><span>Add picture</span>
        </div>
      </div>

      <span className="profile-name" style={{marginTop: '10px'}}>Yande Stephens</span>

      <form action="" style={{marginTop: '60px'}}>
        <FormControl w={'fit-content'} mx={'auto'} position={'relative'} mb={'40px'} isRequired>
            <FormLabel>Old Password</FormLabel>
            <Input type={showOldPassword ? 'text' : 'password'} h={'75px'} w={'520px'} color={'#333'}/>
            {!showOldPassword && <MdOutlineRemoveRedEye size={26} onClick={() => setShowOldPassword(prev => !prev)} style={{position: 'absolute', right: '15px', top: '52%'}}/>}
            {showOldPassword && <IoEyeOffOutline size={26} onClick={() => setShowOldPassword(prev => !prev)} style={{position: 'absolute', right: '15px', top: '52%'}}/>}
        </FormControl>

        <FormControl w={'fit-content'} mx={'auto'} position={'relative'} mb={'40px'} isRequired>
            <FormLabel>New Password</FormLabel>
            <Input type={showNewPassword ? 'text' : 'password'} h={'75px'} w={'520px'} color={'#333'}/>
            {!showNewPassword && <MdOutlineRemoveRedEye size={26} onClick={() => setShowNewPassword(prev => !prev)} style={{position: 'absolute', right: '15px', top: '52%'}}/>}
            {showNewPassword && <IoEyeOffOutline size={26} onClick={() => setShowNewPassword(prev => !prev)} style={{position: 'absolute', right: '15px', top: '52%'}}/>}
        </FormControl>

        <FormControl w={'fit-content'} mx={'auto'} position={'relative'} mb={'40px'} isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input type={showConfirmPassword ? 'text' : 'password'} h={'75px'} w={'520px'} color={'#333'}/>
            {!showConfirmPassword && <MdOutlineRemoveRedEye size={26} onClick={() => setShowConfirmPassword(prev => !prev)} style={{position: 'absolute', right: '15px', top: '52%'}}/>}
            {showConfirmPassword && <IoEyeOffOutline size={26} onClick={() => setShowConfirmPassword(prev => !prev)} style={{position: 'absolute', right: '15px', top: '52%'}}/>}
        </FormControl>

        <Button type='submit' h={'75px'} w={'520px'} mx={'auto'} display={'block'} color={'white'} bgColor={'#8F19E7'} sx={buttonStyle}>Update Password</Button>
      </form>
      
    </Box>
  )
}

export default PasswordSettings
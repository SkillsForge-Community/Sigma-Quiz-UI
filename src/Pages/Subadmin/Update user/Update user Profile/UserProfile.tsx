import { Box, Button, FormControl, FormLabel, HStack, Input, Select, Stack, VStack, useDisclosure } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import "./UserProfile.css"
import Confirmation from '../../../../Global Components/Modals/Confirmation/Confirmation'
import { FormEvent, SetStateAction, useState } from 'react'
function UserProfile() {
    const [checked,setChecked]=useState<boolean>(false)
    const [inputValue, setInputValue] = useState('');
    const [email,setEmail]=useState<string>("")
    const [lastname,setlastName]=useState<string>("")
    const [firstname,setfirstName]=useState<string>("")

    const [password,setPassword]=useState<string>("")
    const [created,setCreated]=useState<string>()
    const [loginDate,setLoginDate]=useState<string>("")

    const handleInputChange = (e: { target: { value: SetStateAction<string> } }) => {
        if (checked) {
          setInputValue(e.target.value);
        }
      };
      const { isOpen, onOpen, onClose } = useDisclosure()
      function handleSubmit(e: FormEvent<HTMLFormElement>){
            e.preventDefault()
            if (!firstname || ! lastname || !email || !password || !created || !loginDate || (checked || !inputValue)){
                return false
            }
               

      }
      function handlePasswordReset(){
        onOpen()
      }
    return (
        <div className='updateProfileUser'>
            <Confirmation isOpen={isOpen} onClose={onClose} />
            <SimpleGrid spacing={2}>
                <Box>
                    <h5>Personal Information</h5>
                </Box>
                <form className='updateProfileForm' onSubmit={e=> handleSubmit(e)}>
            <input type="checkbox" onChange={()=>setChecked(!checked)}  id="checkbox" checked={checked}/> 
            <label htmlFor="checkbox">&nbsp;{checked?"Enabled":"Disable"}</label>
                    <div className='profile-form'>
                        <Stack spacing={5}>
                            <FormControl>
                                <SimpleGrid gridTemplateColumns={'115px 1fr'} alignItems={"center"}>
                                    <FormLabel>Name:</FormLabel>

                                    <HStack spacing="62px">
                                        <Input type='text' value={firstname} onChange={(e)=>setfirstName(e.target.value)} width="320px" height="49px" placeholder='First' required/>
                                        <Input type='text' value={lastname} onChange={(e)=>setlastName(e.target.value)} width="320px" height="49px" placeholder='Last' required/>
                                    </HStack>
                                </SimpleGrid>


                            </FormControl>
                            <FormControl>
                                <SimpleGrid spacing={4} gridTemplateColumns={'100px 1fr'} alignItems={"center"}>
                                    <FormLabel>Email:</FormLabel>
                                    <Input width="702px" value={email} onChange={(e)=>setEmail(e.target.value)} height="49px" type='email' required/>
                                </SimpleGrid>


                            </FormControl>
                            <FormControl >
                                <SimpleGrid spacing={4} gridTemplateColumns={'100px 1fr'} alignItems={"center"}>
                                    <FormLabel>Status:</FormLabel>
                                    <Input width="289px"           
                                    onChange={handleInputChange}
                                    height="49px" value={checked?inputValue: "Disabled"} 
                                    type='text' style={{transitionDuration:"1s",color: !checked ?"red":""}}   
                                    readOnly={!checked}
                                    required
                                    />
                                </SimpleGrid>

                            </FormControl>
                            <FormControl >
                                <SimpleGrid spacing={4} gridTemplateColumns={'100px 1fr'} alignItems={"center"}>
                                    <FormLabel>Role:</FormLabel>
                                    <Select variant='outline' width="289px" height="49px" placeholder='Super admin' />
                                </SimpleGrid>
                            </FormControl>
                           
                            <Button  className='update-buttonA' variant={"none"}  _hover={{opacity:"0.8", transitionDuration:"0.5s"}} type="submit" style={{display:'flex', }}>Update</Button>
                        </Stack>
                        <Stack>
                            <VStack>
                                <FormControl>
                                    <SimpleGrid spacing={4} gridTemplateColumns={'130px 1fr'}>
                                        <FormLabel>Password:</FormLabel>

                                        <div className='profile-password'>
                                            <Input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} width="289px" height="49px" required/>
                                            <Button type='reset' width="289px" height="49px" onClick={handlePasswordReset}>Reset Password</Button>
                                        </div>
                                    </SimpleGrid>

                                </FormControl>

                            </VStack>
                            <VStack>
                                <FormControl>
                                    <SimpleGrid spacing={4} gridTemplateColumns={'130px 1fr'} alignItems={"center"}>
                                        <FormLabel>Date Created:</FormLabel>
                                        <Input width="289px" value={created} onChange={(e)=>setCreated(e.target.value)} height="49px" placeholder='Select Date and Time' type='datetime-local' required/>
                                    </SimpleGrid>


                                </FormControl>
                                <FormControl>
                                    <SimpleGrid spacing={4} gridTemplateColumns={'130px 1fr'} alignItems={"center"}>
                                        <FormLabel>Last Login Date:</FormLabel>
                                        <Input value={loginDate} onChange={(e)=>setLoginDate(e.target.value)} width="289px" height="49px" placeholder='Select Date and Time' type='datetime-local' required/>
                                    </SimpleGrid>


                                </FormControl>
                            </VStack>

                        </Stack>
                    </div>
                </form>
            </SimpleGrid>
        </div>
    )
}
export default UserProfile
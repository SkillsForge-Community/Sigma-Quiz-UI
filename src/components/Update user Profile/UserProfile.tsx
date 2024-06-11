import { Box, FormControl, FormHelperText, FormLabel, HStack, Input, Select, Stack, VStack, useDisclosure } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import "./UserProfile.css"
import VerticallyCenter from '../Validation/ValidationMessage'
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
                onOpen()
            }
               

      }
    return (
        <div className='updateProfileUser'>
            <VerticallyCenter message='Please fill all input boxes!' isOpen={isOpen} onClose={onClose}/>
            <SimpleGrid>
                <Box>
                    <h5>Personal Information</h5>
                </Box>
                <form onSubmit={e=> handleSubmit(e)}>
                    
            <input type="checkbox" onChange={()=>setChecked(!checked)}  id="checkbox" checked={checked}/>
            <label htmlFor="checkbox">{checked?"Enabled":"Disable"}</label>
                    <div className='profile-form'>
                    
                        <Stack>
                            
                            <FormControl>

                                <SimpleGrid    gridTemplateColumns={'115px 1fr'} alignItems={"center"}>
                                    <FormLabel>Name:</FormLabel>

                                    <HStack spacing="62px">
                                        <Input type='text' value={firstname} onChange={(e)=>setfirstName(e.target.value)} width="320px" height="49px" placeholder='First' />
                                        <Input type='text' value={lastname} onChange={(e)=>setlastName(e.target.value)} width="320px" height="49px" placeholder='Last' />
                                    </HStack>
                                </SimpleGrid>


                            </FormControl>
                            <FormControl>
                                <SimpleGrid spacing={4} gridTemplateColumns={'100px 1fr'} alignItems={"center"}>
                                    <FormLabel>Email:</FormLabel>
                                    <Input width="702px" value={email} onChange={(e)=>setEmail(e.target.value)} height="49px" type='email' />
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
                                    />
                                </SimpleGrid>

                            </FormControl>
                            <FormControl >
                                <SimpleGrid spacing={4} gridTemplateColumns={'100px 1fr'} alignItems={"center"}>
                                    <FormLabel>Role:</FormLabel>
                                    <Select variant='outline' width="289px" height="49px" placeholder='Super admin' />
                                </SimpleGrid>
                            </FormControl>
                           <br />
                           <br />
                           <br />
                           <br />
                            <button type="submit" className='update-button' style={{display:'flex', }}>Update</button>
                        </Stack>
                        <Stack>
                            <VStack>
                                <FormControl>
                                    <SimpleGrid spacing={4} gridTemplateColumns={'130px 1fr'}>
                                        <FormLabel>Password:</FormLabel>

                                        <div className='profile-password'>
                                            <Input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} width="289px" height="49px" />
                                            <Input type='reset' width="289px" height="49px" value="Reset Password" />
                                        </div>
                                    </SimpleGrid>

                                </FormControl>

                            </VStack>
                            <VStack>
                                <FormControl>
                                    <SimpleGrid spacing={4} gridTemplateColumns={'130px 1fr'} alignItems={"center"}>
                                        <FormLabel>Date Created:</FormLabel>
                                        <Input width="289px" value={created} onChange={(e)=>setCreated(e.target.value)} height="49px" placeholder='Select Date and Time' type='datetime-local' />
                                    </SimpleGrid>


                                </FormControl>
                                <FormControl>
                                    <SimpleGrid spacing={4} gridTemplateColumns={'130px 1fr'} alignItems={"center"}>
                                        <FormLabel>Last Login Date:</FormLabel>
                                        <Input value={loginDate} onChange={(e)=>setLoginDate(e.target.value)} width="289px" height="49px" placeholder='Select Date and Time' type='datetime-local' />
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
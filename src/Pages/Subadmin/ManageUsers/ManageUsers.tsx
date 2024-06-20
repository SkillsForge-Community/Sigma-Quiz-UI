import { Box, Button, Input, InputGroup, InputLeftAddon, useToast } from '@chakra-ui/react';
import { CiSearch } from 'react-icons/ci';
import "./ManageUsers.css";
import { IconContext } from 'react-icons';
import { useCallback, useEffect, useState } from 'react';
import VerticallyCenter from '../../../Global Components/Modals/Validation/ValidationMessage';
import { useDisclosure } from '@chakra-ui/react';
import pfp from "../../../assets/Images/Profile picture.svg"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { SimpleGrid } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
import { useAppSelector } from '../../../app/Hooks';

export default function ManageUsers() {
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [search, setSearch] = useState<string>("");
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const navigate=useNavigate()
    const userName=useAppSelector(state=>state.auth.user?.first_name)
    const [isSuperAdmin, setSuperAdmin]=useState<boolean>(false)
    const toast = useToast()
    const roles =useAppSelector(state=>state.auth.user?.roles[0]);
    
    function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {

        if (e.key === "Enter") {
            if (!search) {
                onOpen();
            }
        }
    }
    function handleSearchs() {
        if (!search) {
            onOpen();
        }
    }
    type Users = {
        name: string
        email: string
        dateCreated: string
        lastLogin: string
        status: boolean
    }
    const users: Users[] = [
        {
            name: "Stephen Walmart",
            email: "stephenwalmart@gmail.com",
            dateCreated: "08/09/23",
            lastLogin: "08/09/23 - 08:00AM",
            status: true
        },
        {
            name: "Stephen Walmart",
            email: "stephenwalmart@gmail.com",
            dateCreated: "08/09/23",
            lastLogin: "08/09/23 - 08:00AM",
            status: true
        },
        {
            name: "Stephen Walmart",
            email: "stephenwalmart@gmail.com",
            dateCreated: "08/09/23",
            lastLogin: "08/09/23 - 08:00AM",
            status: false
        },
        {
            name: "Stephen Walmart",
            email: "stephenwalmart@gmail.com",
            dateCreated: "08/09/23",
            lastLogin: "08/09/23 - 08:00AM",
            status: false
        },
        {
            name: "Stephen Walmart",
            email: "stephenwalmart@gmail.com",
            dateCreated: "08/09/23",
            lastLogin: "08/09/23 - 08:00AM",
            status: true
        },
        {
            name: "Stephen Walmart",
            email: "stephenwalmart@gmail.com",
            dateCreated: "08/09/23",
            lastLogin: "08/09/23 - 08:00AM",
            status: true
        },
        {
            name: "Stephen Walmart",
            email: "stephenwalmart@gmail.com",
            dateCreated: "08/09/23",
            lastLogin: "08/09/23 - 08:00AM",
            status: true
        },
        {
            name: "Stephen Walmart",
            email: "stephenwalmart@gmail.com",
            dateCreated: "08/09/23",
            lastLogin: "08/09/23 - 08:00AM",
            status: true
        },
        {
            name: "Stephen Walmart",
            email: "stephenwalmart@gmail.com",
            dateCreated: "08/09/23",
            lastLogin: "08/09/23 - 08:00AM",
            status: false
        },
        {
            name: "Stephen Walmart",
            email: "stephenwalmart@gmail.com",
            dateCreated: "08/09/23",
            lastLogin: "08/09/23 - 08:00AM",
            status: true
        },
        {
            name: "Stephen Walmart",
            email: "stephenwalmart@gmail.com",
            dateCreated: "08/09/23",
            lastLogin: "08/09/23 - 08:00AM",
            status: true
        },
        {
            name: "Stephen Walmart",
            email: "stephenwalmart@gmail.com",
            dateCreated: "08/09/23",
            lastLogin: "08/09/23 - 08:00AM",
            status: true
        },
        {
            name: "Stephen Walmart",
            email: "stephenwalmart@gmail.com",
            dateCreated: "08/09/23",
            lastLogin: "08/09/23 - 08:00AM",
            status: true
        }
    ]
    const handleAdmin = useCallback(() => {
        return roles === "super-admin";
    }, [roles]);
   const handleUser= (index:number)=>{
        setActiveIndex(activeIndex === index ? null : index)
        navigate("/subadmin/update-user")
   }
    const manage_users = users.map((user, index) => {
        return (
            <Tr onClick={()=>handleUser(index)}
                className={`mange-users-data ${activeIndex === index ? "active-mange-users-data" : ""}`} key={index}>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{user.dateCreated}</Td>
                <Td>{user.lastLogin}</Td>
                <Td className='active-status' style={{ color: (user.status) ? "rgba(4, 194, 35, 1)" : "rgba(255, 64, 64, 1)" }}>{user.status ? "Active" : "Inactive"}</Td>
            </Tr>
        )
    })
    const handleCreateAccount=()=>{
        if(isSuperAdmin){
            navigate("/Signin")
        }else{
            toast({
                variant:"none",
                title: `Not Authorised!`,
                position: "top",
                isClosable: true,
                containerStyle:{
                    backgroundColor:"red.500",
                    color:"white"

                }
              })
           

        }
    }
    useEffect(() => {
        setSuperAdmin(handleAdmin());
    }, [handleAdmin]);
    return (
        <>
            <VerticallyCenter isOpen={isOpen} onClose={onClose} message='Search cannot be empty!' />
            <div className='ManageUsers'>
                <div className='search-profile'>
                    <InputGroup width="573px" height="50px" className='input-group'>
                        <InputLeftAddon id='search-button'>
                            <IconContext.Provider value={{ color: "rgba(143, 25, 231, 1)" }}>
                                <CiSearch onClick={handleSearchs} />
                            </IconContext.Provider>
                        </InputLeftAddon>
                        <Input
                            onKeyUp={handleSearch}
                            onChange={e => setSearch(e.target.value)}
                            id='search-users'
                            type='text'
                            placeholder='Search User'
                        />
                    </InputGroup>
                    <Box className='profile'>
                        <h5>Welcome, {userName}</h5>
                        <div className='profile'>
                            <img src={pfp} alt='profile' />
                            <MdOutlineKeyboardArrowDown />

                        </div>

                    </Box>
                </div>
                <SimpleGrid spacing={4}>
                    <Box className='addMembers'>
                        <div>
                            <h4 className='table-title'>manage Users</h4>
                        </div>
                        <div>
                            <Button className='table-button' onClick={handleCreateAccount}>Add Members</Button>
                        </div>
                    </Box>
                    <TableContainer>
                        <Table variant='none'>
                            <Thead className='mange-users-table'>
                                <Tr>
                                    <Th>Name</Th>
                                    <Th>Email Address</Th>
                                    <Th>Date Created</Th>
                                    <Th>Last Login</Th>
                                    <Th >Status</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {manage_users}
                            </Tbody>

                        </Table>
                    </TableContainer>
                </SimpleGrid>
            </div>
        </>
    );
}

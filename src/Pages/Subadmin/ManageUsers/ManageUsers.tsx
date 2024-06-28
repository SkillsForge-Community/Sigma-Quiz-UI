import {
    Box, Button, Input, InputGroup, InputLeftAddon, useToast,
    Table, Thead, Tbody, Tr, Th, Td, TableContainer,
    SimpleGrid, useDisclosure
} from '@chakra-ui/react';
import { CiSearch } from 'react-icons/ci';
import "./ManageUsers.css";
import { IconContext } from 'react-icons';
import { useCallback, useEffect, useState } from 'react';
import VerticallyCenter from '../../../Global Components/Modals/Validation/ValidationMessage';
import pfp from "../../../assets/Images/Profile picture.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAppSelector } from '../../../app/Hooks';
import LoadingIcons from 'react-loading-icons';
import { AppConstants } from '../../../Global Components/AppConstants/AppConstants';

interface errs {
    message: string;
}

type Users = {
    first_name: string;
    last_name: string;
    email: string;
    dateCreated: string;
    lastLogin: string;
    status: boolean;
};

export default function ManageUsers() {
    const [isLoading, setLoading] = useState<boolean>(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [search, setSearch] = useState<string>("");
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const navigate = useNavigate();
    const userName = useAppSelector(state => state.auth.user?.first_name);
    const [isSuperAdmin, setSuperAdmin] = useState<boolean>(false);
    const toast = useToast();
    const roles = useAppSelector(state => state.auth.user?.roles[0]);
    const token = useAppSelector(state => state.auth.access_token);
    const [users, setUsers] = useState<Users[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<Users[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const getUsers = useCallback(async () => {
        try {
            setLoading(true);
            console.log("Access Token:: ", token);
            const response = await axios.get(`${AppConstants.baseUrl}/users`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setLoading(false);
            setUsers(response.data);
            setFilteredUsers(response.data);
        } catch (error:any) {
            const err = error as errs;
            setErrorMessage(err.message);
            setLoading(false);
            toast({
                variant: "none",
                title: `${err.message}`,
                position: "top",
                isClosable: true,
                containerStyle: {
                    backgroundColor: "red.500",
                    color: "white"
                }
            });
            
            // navigate to login if unauthenticated
            if (error.response.data?.statusCode === 401) {
              navigate("/Login");
            }
        }
    }, [toast, token]);

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    function handleSearch(e: { target: { value: string } }) {
        const query: string = e.target.value;
        setSearch(query);

        if (query) {
            const filtered = users.filter(user =>
                `${user.first_name} ${user.last_name}`.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredUsers(filtered);
        } else {
            setFilteredUsers(users);
        }
    }

    function handleSearchs() {
        if (!search) {
            onOpen();
        } else {
            const filtered = users.filter(user =>
                `${user.first_name} ${user.last_name}`.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredUsers(filtered);
        }
    }

    const handleAdmin = useCallback(() => {
        return roles === "super-admin";
    }, [roles]);

    const handleUser = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
        navigate("/subadmin/update-user");
    }

    const handleCreateAccount = () => {
        if (isSuperAdmin) {
            navigate("/Signin");
        } else {
            toast({
                variant: "none",
                title: `Not Authorized!`,
                position: "top",
                isClosable: true,
                containerStyle: {
                    backgroundColor: "red.500",
                    color: "white"
                }
            });
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
                            onChange={handleSearch}
                            id='search-users'
                            type='text'
                            placeholder='Search User'
                            value={search}
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
                            <h4 className='table-title'>Manage Users</h4>
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
                                    <Th>Status</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {errorMessage ? (
                                    <Tr color={"red"}>
                                        <Td colSpan={5} textAlign={"center"}>{errorMessage}!</Td>
                                        
                                    </Tr>
                                ) : isLoading ? (
                                    <Tr>
                                        <Td ><LoadingIcons.ThreeDots width={"50%"} fill="rgba(60, 63, 69, 0.35)" /></Td>
                                        <Td><LoadingIcons.ThreeDots width={"50%"} fill="rgba(60, 63, 69, 0.35)" /></Td>
                                        <Td><LoadingIcons.ThreeDots width={"50%"} fill="rgba(60, 63, 69, 0.35)" /></Td>
                                        <Td><LoadingIcons.ThreeDots width={"50%"} fill="rgba(60, 63, 69, 0.35)" /></Td>
                                        <Td><LoadingIcons.ThreeDots width={"50%"} fill="rgba(60, 63, 69, 0.35)" /></Td>
                                    </Tr>
                                ) : filteredUsers.length > 0 ? (
                                    filteredUsers.map((user, index) => (
                                        <Tr
                                            onClick={() => handleUser(index)}
                                            className={`mange-users-data ${activeIndex === index ? "active-mange-users-data" : ""}`}
                                            key={index}
                                        >
                                            <Td>{`${user.first_name || "Not found"} ${user.last_name || "Not found"}`}</Td>
                                            <Td>{user.email || "Not found"}</Td>
                                            <Td>{user.dateCreated || "2024"}</Td>
                                            <Td>{user.lastLogin || "2024"}</Td>
                                            <Td className='active-status' style={{ color: user.status ? "rgba(4, 194, 35, 1)" : "rgba(255, 64, 64, 1)" }}>
                                                {user.status ? "Active" : "Inactive"}
                                            </Td>
                                        </Tr>
                                    ))
                                ) : (
                                    <Tr>
                                        <Td colSpan={5} textAlign={"center"}>Data not found</Td>
                                    </Tr>
                                )}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </SimpleGrid>
            </div>
        </>
    );
}

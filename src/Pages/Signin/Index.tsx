import React, { useEffect, useState } from "react";
import Logo from "../../Global Components/Logo/Logo";
import { RiLockPasswordLine } from "react-icons/ri";
import {useNavigate } from "react-router-dom";
import { Select, SimpleGrid} from '@chakra-ui/react';
import "./styles.css";
import VerticallyCenter from "../../Global Components/Modals/Validation/ValidationMessage";
import { useAppDispatch } from "../../app/Hooks";
import { useRegisterMutation } from "../../features/authApiSlice";
import { setRegistrationData } from "../../features/registerAuthSlice";
import {
    useDisclosure,
    Stack,
    HStack,
    Box,
    Input,
    InputRightElement,
    InputGroup,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage
} from '@chakra-ui/react';
import { BiShow, BiHide } from "react-icons/bi";
import CountDown from "../../Global Components/CountDown";
import LoadingIcons from "react-loading-icons";
interface LoginError {
    data: { message: string }
    status?: number
    statusCode?: number
}

function Signin() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [errormessage, setErrorMessage] = useState<string>("");
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isEmailError, setisEmailError] = useState(true);
    const [isPasswordError, setisPasswordError] = useState(true);
    const [isFirstNameError, setisFirstNameError] = useState(true);
    const [isLastNameError, setsetLastNameError] = useState(true);
    const roles = ["super-admin", "quiz-master", "adhocroles"];
    const [selectValue, setSelectValue] = useState<string[]>(["super-admin"]);
    const navigate = useNavigate();
    const [register, { isLoading }] = useRegisterMutation();
    const dispatch = useAppDispatch();

    const handleFirstNameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setFirstName(e.target.value);
        setisFirstNameError(false);
    };
    const handleLastName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setLastName(e.target.value);
        setsetLastNameError(false);
    };
    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
        setisEmailError(false);
    };
    useEffect(() => {
        setisEmailError(email === '' && true);
        setisPasswordError(password === '' && true);
        setisFirstNameError(firstName === '' && true);
        setsetLastNameError(lastName === '' && true);
    }, [email, password, firstName, lastName]);

    const handlePasswordInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(e.target.value);
        setisPasswordError(false);
    };

    function ValidateEmail(inputText: string) {
        const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return mailformat.test(inputText);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (firstName && lastName && email && password && ValidateEmail(email)) {
            try {
                const { data } = await register(
                    {
                        email: email,
                        first_name: firstName,
                        last_name: lastName,
                        roles: selectValue,
                        password: password
                    }).unwrap();
                dispatch(setRegistrationData({ ...data }));
                console.log("success");
                setEmail("");
                setFirstName("");
                setLastName("");
                setPassword("");
                setSelectValue([""]);
                navigate('/subadmin');
            } catch (error) {
                const err = error as LoginError;
                console.log(error);
                onOpen();
                if (err?.data.message) {
                    onOpen();
                    setErrorMessage(err?.data.message);
                } else if (err?.status === 400) {
                    onOpen();
                    setErrorMessage(err?.data.message);
                } else if (err?.status === 401) {
                    onOpen();
                    setErrorMessage(err?.data.message);
                } else if (err?.status === 404) {
                    onOpen();
                    setErrorMessage(err?.data.message);
                }
            }
        }
    };

    const handleDropDown = (role: string) => {
        console.log(role);
        setSelectValue([role]);
    };

    const roleOptions = roles.map((item, index) => {
        return (
            <option key={index} value={item} className="dropdown-item">
                {item}
            </option>
        );
    });

    useEffect(() => {
        console.log(selectValue);
    }, [selectValue]);

    return (
        <>
            <VerticallyCenter message={errormessage} isOpen={isOpen} onClose={onClose} />
            <div className="form">
                <SimpleGrid className="signin" minChildWidth='120px' alignItems="center" spacing='40px'>
                    <Box>
                        <Logo />
                    </Box>
                    <Box>
                        <div>
                            <h3 className="Signin-title">Get Started</h3>
                            <h5 className="Signin-time">Provide your information in <span><CountDown /></span> minutes</h5>
                        </div>
                    </Box>
                </SimpleGrid>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={10} align="center">
                        <HStack className="names" width="761px" spacing={10}>
                            <Box width="358px">
                                <FormControl isInvalid={isFirstNameError}>
                                    <FormLabel className="FormLabel">First Name</FormLabel>
                                    <Input
                                        type='text'
                                        value={firstName}
                                        onChange={handleFirstNameChange}
                                        errorBorderColor='red.300'
                                        height="60px"
                                        style={{ borderColor: isFirstNameError ? "red" : "#33333380" }}
                                        placeholder="Type Here"
                                        className="firstName"
                                    />
                                    {isFirstNameError && (
                                        <FormErrorMessage style={{ color: isFirstNameError ? "red" : "#333333" }}>
                                            First Name is required.
                                        </FormErrorMessage>
                                    )}
                                </FormControl>
                            </Box>
                            <Box width="358px">
                                <FormControl isInvalid={isLastNameError}>
                                    <FormLabel className="FormLabel">Last Name</FormLabel>
                                    <Input
                                        type='text'
                                        value={lastName}
                                        onChange={handleLastName}
                                        errorBorderColor='red.300'
                                        className="lastName"
                                        style={{ borderColor: isLastNameError ? "red" : "#33333380" }}
                                        placeholder="Type Here"
                                        height="60px"
                                    />
                                    {isLastNameError && (
                                        <FormErrorMessage style={{ color: isLastNameError ? "red" : "#333333" }}>
                                            Last Name is required.
                                        </FormErrorMessage>
                                    )}
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl isInvalid={isEmailError}>
                            <FormLabel className="FormLabel">Email</FormLabel>
                            <Input
                                type='email'
                                value={email}
                                onChange={handleInputChange}
                                errorBorderColor='red.300'
                                className="input"
                                style={{ borderColor: isEmailError ? "red" : "#33333380" }}
                                placeholder="Type Here"
                                height="60px"
                            />
                            {isEmailError && (
                                <FormErrorMessage style={{ color: isEmailError ? "red" : "#333333" }}>
                                    Email is required.
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl isInvalid={isPasswordError}>
                            <FormLabel className="FormLabel">
                                <div className="password">
                                    <p> Password</p>
                                    <RiLockPasswordLine />
                                </div>
                            </FormLabel>
                            <InputGroup>
                                <Input
                                    style={{ borderColor: isPasswordError ? "red" : "#33333380" }}
                                    type={show ? 'text' : 'password'}
                                    value={password}
                                    onChange={handlePasswordInputChange}
                                    className="input"
                                    placeholder="Type Here"
                                    height="60px"
                                />
                                <InputRightElement width='4.5rem' alignItems="center">
                                    <Button variant="unstyled" className="password-button" bg="none" pt="10px" h='1.75rem' size='md' onClick={() => setShow(!show)}>
                                        {show ? <BiShow width="1000px" /> : <BiHide width="10px" />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            {isPasswordError && (
                                <FormErrorMessage style={{ color: isPasswordError ? "red" : "#333333" }}>
                                    Password is required.
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl>
                            <FormLabel className="FormLabel">Role</FormLabel>
                            <Select
                                border="2px"
                                height="60px"
                                variant="outline"
                                className="dropdown"
                                onChange={(e) => handleDropDown(e.target.value)}
                                value={selectValue[0]}
                            >
                                {roleOptions}
                            </Select>
                        </FormControl>
                        <Button variant={"none"}  _hover={{backgroundColor:"none", opacity:"0.7"}} className="login-button" type="submit"
                            isLoading={isLoading}
                            spinner={<LoadingIcons.ThreeDots width={"60%"}/>}>Create Account</Button>
                    </Stack>
                </form>
            </div>
        </>
    );
}

export default Signin;

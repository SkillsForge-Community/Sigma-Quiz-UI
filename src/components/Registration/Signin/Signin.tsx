import React, { useEffect, useState } from "react";
import Logo from "../../Logo";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { Select, SimpleGrid } from '@chakra-ui/react'
import "./Signin.css"
import VerticallyCenter from "../../Validation/ValidationMessage";
import {
    
   
    Stack,
    HStack,
    Box,
    StackDivider,
    Input,
    InputRightElement,
    InputGroup,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage
} from '@chakra-ui/react';
import { BiShow, BiHide } from "react-icons/bi";
import CountDown from "../../CountDown";

function Signin() {
    const [ errorMessage,setErrorMessage ] = useState(false); // Initialize useDisclosure hook

    const [show, setShow] = useState(false);
    const [input, setInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isEmailError, setisEmailError] = useState(true);
    const [isPasswordError, setisPasswordError] = useState(true);
    const [isFirstNameError, setisFirstNameError] = useState(true);
    const [isLastNameError, setsetLastNameError] = useState(true);
    const [submit, setSubmit] = useState<boolean>(true);
    const navigate = useNavigate();

    const handleFirstNameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setFirstName(e.target.value);
        setisFirstNameError(false);
    };
    const handleLastName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setLastName(e.target.value);
        setsetLastNameError(false);
    };
    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setInput(e.target.value);
        setisEmailError(false);
    };
    useEffect(() => {
        setisEmailError(input === '' && true);
        setisPasswordError(passwordInput === '' && true);
        setisFirstNameError(firstName === '' && true);
        setsetLastNameError(lastName === '' && true);
    }, [input, passwordInput, firstName, lastName]);
    const handlePasswordInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPasswordInput(e.target.value);
        setisPasswordError(false);
    }
    function ValidateEmail(inputText: string) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return mailformat.test(inputText);
    }
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event?.preventDefault();
        if (firstName && lastName && input && passwordInput && ValidateEmail(input)) {
            navigate('/');
            return true;
        }
        else {
            setErrorMessage(true)
            return false;
        }
    }

    return (
        <>        
            {errorMessage && <VerticallyCenter />}
            <div className="form">
                <SimpleGrid className="signin" minChildWidth='120px' spacing='40px'>
                    <Box>
                        <Logo />
                    </Box>
                    <Box >
                        <div>
                            <h3 className="Signin-title">Get Started</h3>
                            <h5 className="Signin-time">Provide your information in <span><CountDown /></span> minutes</h5>
                        </div>
                    </Box>
                </SimpleGrid>
                <form onSubmit={event => setSubmit(handleSubmit(event))}>
                    <Stack
                        divider={<StackDivider borderColor='gray.200' />}
                        spacing={20}
                        align="center"
                    >
                        
                        <HStack className="names" spacing={10}>
                            <Box>
                                <FormControl isInvalid={isFirstNameError}>
                                    <FormLabel className="FormLabel">First Name</FormLabel>
                                    <Input
                                        type='text'
                                        value={firstName}
                                        onChange={handleFirstNameChange}
                                        errorBorderColor='red.300'
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
                            <Box >
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
                                value={input}
                                onChange={handleInputChange}
                                errorBorderColor='red.300'
                                className="input"
                                style={{ borderColor: isEmailError ? "red" : "#33333380" }}
                                placeholder="Type Here"
                            />
                            {isEmailError && (
                                <FormErrorMessage style={{ color: isEmailError ? "red" : "#333333" }}>
                                    Email is required.
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl isInvalid={isPasswordError}>
                            <FormLabel className="FormLabel">Password <RiLockPasswordLine /></FormLabel>
                            <InputGroup>
                                <Input
                                    style={{ borderColor: isPasswordError ? "red" : "#33333380" }}
                                    type={show ? 'text' : 'password'}
                                    value={passwordInput}
                                    onChange={handlePasswordInputChange}
                                    className="input"
                                    placeholder="Type Here"
                                />
                                <InputRightElement width='4.5rem' alignItems="center">
                                    <Button className="password-button" h='1.75rem' size='sm' onClick={() => setShow(!show)}>
                                        {show ? <BiHide className="showIcon" /> : <BiShow className="showIcon" />}
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
                            <select className="dropdown">
                                <option className="dropdown-item"></option>
                                <option className="dropdown-item">United Arab Emirates</option>
                                <option className="dropdown-item">Nigeria</option>
                            </select>
                        </FormControl>
                        <button className="login-button" type="submit">Sign Up</button>
                    </Stack>
                </form>
                <div>
                    <h5 className="account">Already Have an account?&nbsp; <NavLink to="/login">Log In</NavLink> </h5>
                </div>
            </div>
        </>
    );
}

export default Signin;

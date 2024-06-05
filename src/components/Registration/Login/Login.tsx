import React, { useEffect, useState } from "react";
import Logo from "../../Logo";
import "./Login.css"
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";

import {
    Stack,
    HStack,
    VStack,
    Box,
    StackDivider,
    Input,
    InputRightElement,
    InputGroup,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    InputLeftElement,
    Center,
    Wrap,
} from '@chakra-ui/react';
import { BiShow, BiHide } from "react-icons/bi";
import CountDown from "../../CountDown";
function Login() {
    const [show, setShow] = useState(false);
    const [input, setInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [isEmailError, setisEmailError] = useState(true)
    const [isPasswordError, setisPasswordError] = useState(true)
    const [submit, setSubmit] = useState<boolean>(true)
    const navigate = useNavigate()

    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setInput(e.target.value)

        setisEmailError(false)
    };
    useEffect(() => {
        setisEmailError(input == '' && true)
        setisPasswordError(passwordInput == '' && true)

    }, [input, passwordInput])
    const handlePasswordInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPasswordInput(e.target.value);
        setisPasswordError(false)
    }
    function ValidateEmail(inputText: string) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return mailformat.test(inputText);
    }
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event?.preventDefault()
        if (input && passwordInput && ValidateEmail(input)) {
            navigate('/');
            return true
        }
        else {
            return false
            
        }
    }

    function showSubmit() {
        console.log(handleSubmit)
    }
    return (
        <div className="form">
            <div className="login">
                <Logo />
                <div>
                    <h3 className="login-title">Log In</h3>
                    <h5 className="time">Provide your information in <span><CountDown /></span>  minutes</h5>
                </div>

            </div>

            <form onSubmit={event => setSubmit(handleSubmit(event))}>
                <Stack
                    divider={<StackDivider borderColor='gray.200' />}
                    spacing={20}
                    align="center"
                >
                    {!submit && (
                        <p
                            style={{ color: !submit ? "red" : "#333333" }}
                        >Email is not in the required format.</p>
                    )}
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
                            <FormErrorMessage
                                style={{ color: isEmailError ? "red" : "#333333" }}
                            >Email is required.</FormErrorMessage>
                        )}
                    </FormControl>

                    <FormControl isInvalid={isPasswordError}>
                        <FormLabel className="FormLabel">Password<RiLockPasswordLine /></FormLabel>
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
                            <FormErrorMessage style={{ color: isPasswordError ? "red" : "#333333" }}
                            >Password is required.</FormErrorMessage>
                        )}
                    </FormControl>
                    <button className="login-button" onClick={showSubmit} type="submit">Login</button>
                </Stack>
            </form>
            <div>
                <h5 className="account">Don't have an account?&nbsp; <NavLink to="/Signin">Sign Up</NavLink> </h5>
            </div>
        </div>
    );
}

export default Login;

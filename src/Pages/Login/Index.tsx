import React, { useEffect, useState } from "react";
import "./styles.css"
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import VerticallyCenter from "../../Global Components/Modals/Validation/ValidationMessage";
import { useAppDispatch } from "../../app/Hooks";
import { setCredentials } from "../../features/AuthSlice";
import { useLoginMutation } from "../../features/authApiSlice";
import {
    useDisclosure,
    Stack,
    Input,
    InputRightElement,
    InputGroup,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
} from '@chakra-ui/react';
import { BiShow, BiHide } from "react-icons/bi";
import CountDown from "../../Global Components/CountDown";
import Logo from "../../Global Components/Logo/Logo";

interface LoginError {
    response?: any;
    originalStatus?: number;
}

function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [errormessage, setErrorMessage] = useState<string>("")
    const [show, setShow] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [passwordInput, setPasswordInput] = useState<string>('');
    const [isEmailError, setisEmailError] = useState<boolean>(true)
    const [isPasswordError, setisPasswordError] = useState<boolean>(true)
    const navigate = useNavigate()
    const [login] = useLoginMutation()
    const dispatch = useAppDispatch()

    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value)
        setisEmailError(false)
    };

    useEffect(() => {
        setisEmailError(email === '' && true)
        setisPasswordError(passwordInput === '' && true)
    }, [email, passwordInput])

    const handlePasswordInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPasswordInput(e.target.value);
        setisPasswordError(false)
    }

    function ValidateEmail(inputText: string) {
        const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return mailformat.test(inputText);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (email && passwordInput && ValidateEmail(email)) {
            try {
                const userData = await login({ email, passwordInput }).unwrap();
                dispatch(setCredentials({ ...userData, email }));
                setEmail("");
                setPasswordInput("");
                navigate('/subadmin');
            } catch (error) {
                const err = error as LoginError;
                if (err?.response) {
                    onOpen();
                    setErrorMessage("No Server Response");
                } else if (err?.originalStatus === 400) {
                    onOpen();
                    setErrorMessage("Missing Email or Password");
                } else if (err?.originalStatus === 401) {
                    onOpen();
                    setErrorMessage("Unauthorized");
                } else {
                    onOpen();
                    setErrorMessage("Login Failed");
                }
            }
        }
    }

    return (
        <>
            <VerticallyCenter message={errormessage} isOpen={isOpen} onClose={onClose} />
            <div className="form">
                <div className="login">
                    <Logo />
                    <div>
                        <h3 className="login-title">Log In</h3>
                        <h5 className="time">Provide your information in <span><CountDown /></span> minutes</h5>
                    </div>
                </div>
                <form onSubmit={event => handleSubmit(event)}>
                    <Stack spacing={4} align="center">
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
                                <FormErrorMessage
                                    style={{ color: isEmailError ? "red" : "#333333" }}
                                >Email is required.</FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl isInvalid={isPasswordError}>
                            <FormLabel className="FormLabel">
                                <div className="password">
                                    <p>Password</p>
                                    <RiLockPasswordLine />
                                </div>
                            </FormLabel>
                            <InputGroup>
                                <Input
                                    style={{ borderColor: isPasswordError ? "red" : "#33333380" }}
                                    type={show ? 'text' : 'password'}
                                    value={passwordInput}
                                    onChange={handlePasswordInputChange}
                                    className="input"
                                    placeholder="Type Here"
                                    height="60px"
                                />
                                <InputRightElement width='4.5rem' alignItems="center">
                                    <Button variant={"none"} className="password-button" bg="none" pt="10px" h='1.75rem' size='md' onClick={() => setShow(!show)}>
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
                        <button className="login-button" type="submit">Login</button>
                    </Stack>
                </form>
                <div>
                    <h5 className="account">Don't have an account?&nbsp; <NavLink style={{ color: "#8F19E7", textDecoration: "underline" }} to="/Signin">Sign Up</NavLink> </h5>
                </div>
            </div>
        </>
    );
}

export default Login;

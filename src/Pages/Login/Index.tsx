import React, { useEffect, useState } from "react";
import "./styles.css"
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import VerticallyCenter from "../../Global Components/Modals/Validation/ValidationMessage";
import { useAppDispatch } from "../../app/Hooks";
import { setCredentials } from "../../features/AuthSlice";
import { useLoginMutation } from "../../features/authApiSlice";
import LoadingIcons from 'react-loading-icons'
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
    data: { message: string }
    status?: number
    error:string
}

function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [errormessage, setErrorMessage] = useState<string>("")
    const [show, setShow] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isEmailError, setisEmailError] = useState<boolean>(true)
    const [isPasswordError, setisPasswordError] = useState<boolean>(true)
    const navigate = useNavigate()
    const [login, { isLoading }] = useLoginMutation()
    const dispatch = useAppDispatch()

    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value)
        setisEmailError(false)
    };

    useEffect(() => {
        setisEmailError(email === '' && true)
        setisPasswordError(password === '' && true)
    }, [email, password])

    const handlePasswordInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(e.target.value);
        setisPasswordError(false)
    }

    function ValidateEmail(inputText: string) {
        const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return mailformat.test(inputText);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (email && password && ValidateEmail(email)) {
            try {
                const userData = await login({ email, password }).unwrap();
                dispatch(setCredentials({ ...userData }));
                console.log(userData)
                setEmail("");
                setPassword("");
                navigate('/subadmin');
            } catch (error) {
                const err = error as LoginError;
                console.log(err);
                onOpen();
                if (err?.error) {
                    setErrorMessage(err?.error);
                } else if (err?.status === 400) {
                    setErrorMessage(err?.data.message);
                } else if (err?.status === 401) {
                    setErrorMessage(err?.data.message);
                } else if (err?.status === 404) {
                    setErrorMessage(err?.data.message);
                }else if (err.status){
                    setErrorMessage(err?.data.message);
                }
                else {
                    setErrorMessage(err?.data.message);
                }
            }
        }
    };


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
                    <Stack spacing={10} align="center">
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
                                    value={password}
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
                        <Button variant={"none"} _hover={{backgroundColor:"none", opacity:"0.7"}} className="login-button" type="submit"
                            isLoading={isLoading}
                            spinner={<LoadingIcons.ThreeDots width={"60%"}/>}>Login</Button>
                    </Stack>
                </form>
            </div>
        </>
    );
}

export default Login;

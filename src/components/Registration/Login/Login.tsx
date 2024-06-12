import React, { useEffect, useState } from "react";
import "./Login.css"
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";

import VerticallyCenter from "../../Validation/ValidationMessage";
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
import CountDown from "../../CountDown";
import Logo from "../../Logo/Logo";
function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [errormessage, setErrorMessage]=useState<string>("")
    const [show, setShow] = useState(false);
    const [input, setInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [isEmailError, setisEmailError] = useState(true)
    const [isPasswordError, setisPasswordError] = useState(true)
    const navigate = useNavigate()

    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setInput(e.target.value)

        setisEmailError(false)
    };
    useEffect(() => {
        setisEmailError(input ==='' && true)
        setisPasswordError(passwordInput === '' && true)

    }, [input, passwordInput])
    const handlePasswordInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPasswordInput(e.target.value);
        setisPasswordError(false)
    }
    function ValidateEmail(inputText: string) {
        const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return mailformat.test(inputText);
    }
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event?.preventDefault()
        if (input && passwordInput && ValidateEmail(input)) {
            navigate('/select-quiz');
            return true
        }
        if(!input || !passwordInput){
            onOpen()
            setErrorMessage("Please fill all input fields")
        }
        else {
            setErrorMessage("inputs must contain alpha-numeric characters")
            onOpen()
            return false
            
        }
    }

    function showSubmit() {
        console.log(handleSubmit)
    }
    return (
        <>            <VerticallyCenter message={errormessage} isOpen={isOpen} onClose={onClose}/>
       
        <div className="form">
            <div className="login">
                <Logo />
                <div>
                    <h3 className="login-title">Log In</h3>
                    <h5 className="time">Provide your information in <span><CountDown /></span>  minutes</h5>
                </div>

            </div>

            <form onSubmit={event => handleSubmit(event)}>
                <Stack
                    spacing={4}
                    align="center"
                >
                    
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
                            height="60px"

                        />
                        {isEmailError && (
                            <FormErrorMessage
                                style={{ color: isEmailError ? "red" : "#333333" }}
                            >Email is required.</FormErrorMessage>
                        )}
                    </FormControl>

                    <FormControl isInvalid={isPasswordError}>
                        <FormLabel className="FormLabel"> <div  className="password">
                            <p> Password</p>
                           
                        <RiLockPasswordLine />
                            </div></FormLabel>
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
                                <Button variant={"none"} className="password-button" bg="none" pt="10px"  h='1.75rem' size='md' onClick={() => setShow(!show)}>
                                    {show ? <BiShow width="1000px"   />: <BiHide width="10px"  /> }
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
                <h5 className="account">Don't have an account?&nbsp; <NavLink style={{color:"#8F19E7", textDecoration:"underline"}} to="/Signin">Sign Up</NavLink> </h5>
            </div>
        </div>
        </>
    );
}

export default Login;

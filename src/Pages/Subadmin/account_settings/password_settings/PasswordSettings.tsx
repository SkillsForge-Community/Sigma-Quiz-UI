import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import VerticallyCenter from "../../../../Global Components/Modals/Validation/ValidationMessage";
import axios from "axios";
import { useAppSelector } from "../../../../app/Hooks";

const PasswordSettings = () => {
  const token = useAppSelector((state) => state.auth.access_token);
  // -- modal variables
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("")
  const [err, setErr] = useState<string>("")
  // -- states for inputs
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // -- states to control password visibility
  const [showOldPassword, setShowOldPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
    
  const buttonStyle = {
    ":hover": {
      bgColor: "#9F29f7",
    },
  };

  // --- update password function
  const handleUpdatePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (oldPassword === "" || newPassword === "" || confirmPassword === "") {
      return;
    }
    if (newPassword !== confirmPassword) {
      onOpen();
      return;
    }
    updatePassword();
  };

  //integrating the updatepassword api
  const updatePassword = async () => {
    const passwordObject = {
      "old_password": oldPassword,
      "new_password": newPassword,
    };
    try {
      setIsLoading(true);
      const res = await axios.put(
        "https://sigma-website-backend-51b4af465e71.herokuapp.com/api/auth/password/change",
        passwordObject,
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );
      setIsLoading(false);
      setMessage(res.data.message)
      setOldPassword("")
      setNewPassword("")
      setConfirmPassword("")
    } catch (error) {
      setIsLoading(false)
      if(axios.isAxiosError(error)){
        console.log(error);
        setErr(error.message)
      } 
    }
  };

  return (
    <Box
      bg={"white"}
      w={"60%"}
      h={"815px"}
      borderRight={"1px solid rgba(0, 0, 0, 0.2)"}
      py={"50px"}
    >
      {/* DISPLAY ERROR MODAL IF PASSWORDS DO NOT MATCH   */}
      <VerticallyCenter
        isOpen={isOpen}
        onClose={onClose}
        message="Passwords do not match"
      />

      {/* PROFILE PICTURE BOX */}
      <Box w={"90%"} mx={"auto"} pos={"relative"}>
        <FaUserCircle size={80} color="9a9a9a" style={{ margin: "auto" }} />
        <Flex
          pos={"absolute"}
          left={"calc(56%)"}
          align={"center"}
          top={"45%"}
          opacity={"0.8"}
        >
          <IoIosAdd size={28} />
          <Text fontWeight={"400"}>Add Picture</Text>
        </Flex>
        <Text
          fontSize={"24px"}
          fontWeight={"600"}
          color={"#333333"}
          w={"fit-content"}
          mx={"auto"}
          mt={"10px"}
        >
          Yande Stephens
        </Text>
      </Box>

      {/* UPDATE PASSWORD FORM */}
      <form
        action=""
        onSubmit={handleUpdatePassword}
        style={{ marginTop: "60px" }}
      >
        <FormControl
          w={"fit-content"}
          mx={"auto"}
          position={"relative"}
          mb={"40px"}
          isRequired
        >
          <FormLabel>Old Password</FormLabel>
          <Input
            type={showOldPassword ? "text" : "password"}
            h={"75px"}
            w={"520px"}
            color={"#333"}
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          {!showOldPassword && (
            <MdOutlineRemoveRedEye
              size={26}
              onClick={() => setShowOldPassword((prev) => !prev)}
              style={{
                position: "absolute",
                right: "15px",
                top: "52%",
                zIndex: "100",
              }}
            />
          )}
          {showOldPassword && (
            <IoEyeOffOutline
              size={26}
              onClick={() => setShowOldPassword((prev) => !prev)}
              style={{
                position: "absolute",
                right: "15px",
                top: "52%",
                zIndex: "100",
              }}
            />
          )}
        </FormControl>

        <FormControl
          w={"fit-content"}
          mx={"auto"}
          position={"relative"}
          mb={"40px"}
          isRequired
        >
          <FormLabel>New Password</FormLabel>
          <Input
            type={showNewPassword ? "text" : "password"}
            h={"75px"}
            w={"520px"}
            color={"#333"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          {!showNewPassword && (
            <MdOutlineRemoveRedEye
              size={26}
              onClick={() => setShowNewPassword((prev) => !prev)}
              style={{
                position: "absolute",
                right: "15px",
                top: "52%",
                zIndex: "100",
              }}
            />
          )}
          {showNewPassword && (
            <IoEyeOffOutline
              size={26}
              onClick={() => setShowNewPassword((prev) => !prev)}
              style={{
                position: "absolute",
                right: "15px",
                top: "52%",
                zIndex: "100",
              }}
            />
          )}
        </FormControl>

        <FormControl
          w={"fit-content"}
          mx={"auto"}
          position={"relative"}
          mb={"40px"}
          isRequired
        >
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type={showConfirmPassword ? "text" : "password"}
            h={"75px"}
            w={"520px"}
            color={"#333"}
            display={"block"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {!showConfirmPassword && (
            <MdOutlineRemoveRedEye
              size={26}
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              style={{
                position: "absolute",
                right: "15px",
                top: "52%",
                zIndex: "100",
              }}
            />
          )}
          {showConfirmPassword && (
            <IoEyeOffOutline
              size={26}
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              style={{
                position: "absolute",
                right: "15px",
                top: "52%",
                zIndex: "100",
              }}
            />
          )}
        </FormControl>

          {isLoading? <Box w={"10%"} m={"0 auto"}> <Spinner textAlign={"center"} color="#8F19E7"/> </Box>: <Button
          type="submit"
          h={"75px"}
          w={"520px"}
          mx={"auto"}
          display={"block"}
          color={"white"}
          bgColor={"#8F19E7"}
          sx={buttonStyle}
        >
          Update Password
        </Button>}

        <Box my={"1.5em"} textAlign={"center"}>
        {message && <Box color={"green"}>{message}</Box>}
        {err && <Box color={"red"}>{err}. Try again</Box>}
        </Box>
      </form>
    </Box>
  );
};

export default PasswordSettings;

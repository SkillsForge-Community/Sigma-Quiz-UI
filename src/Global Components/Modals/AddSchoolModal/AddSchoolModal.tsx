// AddSchoolModal.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { LuPlusCircle } from "react-icons/lu";
import "./addschoolmodal.css";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";
interface AddSchoolModalProps {
  onClose: () => void;
  onAddSchool: (school: string) => void;
}

type backArrowStyleType = {
    textDecoration: string
    color: string
    transition: string
    _hover: {
      color: string
    },
};
type addSchoolButtonStyleType = {
    padding: string
    fontSize: string
    color: string
    backgroundColor: string
    border: string
    borderRadius: string
    cursor: string
    transition: string
    width: string
    height: string
    gap: string
    _hover: {
      backgroundColor: string
    },
}

const AddSchoolModal: React.FC<AddSchoolModalProps> = ({
  onClose,
  onAddSchool,
}) => {
  const [schoolName, setSchoolName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (schoolName.trim()) {
      onAddSchool(schoolName);
      setSchoolName("");
    }
  };

  const backArrowStyle: backArrowStyleType = {
    textDecoration: "none",
    color: "#000",
    transition: "color 0.3s",
    _hover: {
      color: "#8F19E7",
    },
  };
  const addSchoolButtonStyle: addSchoolButtonStyleType = {
    padding: "10px 15px",
    fontSize: "16px",
    color: "white",
    backgroundColor: "#8F19E7",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background 0.3s",
    width: "215px",
    height: "60px",
    gap: "10px",
    _hover: {
      backgroundColor: "#9d48df",
    },
  };

  return (
    <Box
      className="modal"
      pos={"absolute"}
      backgroundColor={"#fff"}
      p={"30px"}
      w={"1040.8px"}
      h={"630px"}
      borderRadius={"10px"}
      top={"30px"}
      left={"260px"}
    >
      <Box className="modal-content">
        <Flex
          alignItems={"center"}
          fontSize={"24px"}
          gap={"50px"}
          mb={"35px"}
          className="head"
        >
          <Box>
            <Box sx={backArrowStyle}>
              <Link className="back" to="/Addschool" onClick={onClose}>
                <IoIosArrowBack />
              </Link>
            </Box>
          </Box>
          <Heading
            as={"h2"}
            fontSize={"20px"}
            fontWeight={600}
            lineHeight={"30px"}
            textAlign={"left"}
          >
            Add School to Quiz
          </Heading>
        </Flex>

        <Flex
          justifyContent={"space-between"}
          mb={"25px"}
          className="container"
        >
          <Box className="modal-form school-field" mb={"15px"} w={"567px"}>
            <Box
              display={"block"}
              mb={"5px"}
              fontSize={"16px"}
              fontWeight={500}
              lineHeight={"24px"}
              textAlign={"left"}
              color={"#333"}
              marginBottom={"15px"}
            >
              <label>School Name</label>
            </Box>
            <input
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              placeholder="Ambassadors College"
              className="input-field"
            />
          </Box>
          <Flex
            flexDir={"column"}
            className="modal-form date-field"
            mb={"15px"}
          >
            <Box
              display={"block"}
              mb={"5px"}
              fontSize={"16px"}
              fontWeight={500}
              lineHeight={"24px"}
              textAlign={"right"}
              color={"#333"}
              marginBottom={"15px"}
            >
              <label>Date Created</label>
            </Box>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              backgroundColor={"#EDEDED"}
              border={"none"}
              w={"100%"}
              borderRadius={"4px"}
              fontSize={"16px"}
              p={"10px"}
            >
              <FaCalendarAlt color="rgba(51, 51, 51, 0.6)" />
              <input type="date" />
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <Button
            type="submit"
            onClick={handleSubmit}
            className="add-school-btn"
            sx={addSchoolButtonStyle}
            ml={"auto"}
          >
            <Flex alignItems={"center"} justifyContent={"center"}>
              <LuPlusCircle size={24} className="plus-icon" />
            </Flex>
            Add School
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default AddSchoolModal;

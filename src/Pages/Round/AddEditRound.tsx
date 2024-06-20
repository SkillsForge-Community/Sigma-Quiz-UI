import { Container, Flex, FormControl, FormLabel, Input, Select, Spacer, Text, Box, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineTrash } from "react-icons/hi2"
import { GoPlusCircle } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import AddSchoolToRoundModal from '../../Global Components/Modals/AddSchoolToRoundModal/AddSchoolToRoundModal';

const AddEditRound = () => {

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState<boolean>(false)

    const removeTextStyle = {
        cursor: 'pointer',
        ':hover': {
            color: '#8F19E7'
        }
    }

    const buttonStyle = {
        ':hover': {
            bgColor: '#6F19C7'
        }
    }
    const formatDate = (date : Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const schoolList = ['Ambassadors College, Sango ota', 'Kings College, Lagos', 'Bovas International, Ibadan', 'Bovas International, Ibadan', 'Kings College, Lagos', 'Bovas International, Ibadan']
    
    return (
        <Container maxW={'100%'} minH={'100vh'} p={'0px'}>

            {/* HEADER CONTENTS */}
            <Flex w={'100%'} align={'center'} p={"30px 3%"}>
                <IoIosArrowBack style={{ marginRight: '40px', cursor: 'pointer' }} size={24} onClick={() => navigate(-1)} />
                <Text>Edit/Add Round</Text>
                <Spacer />
                <Text fontWeight={'500'} color={'#333333'}>Welcome, Jenner</Text>
                <FaUserCircle style={{ marginLeft: '20px', color: '#bababa' }} size={50} />
                <IoIosArrowDown style={{ marginLeft: '7px', color: '#8F19E7', fontSize: '24px' }} />
            </Flex>

            {/* FIRST ROW */}
            <Flex mt={'35px'} w={'100%'} px={"3%"}>
                <FormControl>
                    <FormLabel>Round Name</FormLabel>
                    <Input type='text' defaultValue='2024 Roseline Etuokwu Quiz Competition' w={'530px'} h={'60px'} bg={'#ededed'} borderRadius={'10px'} pl={'50px'} color={'#333333'}/>
                </FormControl>
                <FormControl ml={'50px'}>
                    <FormLabel>Round Position</FormLabel>
                    <Select w={'137px'} h={'60px'} bg={'#ededed'} borderRadius={'10px'} >
                        <option value="">1st</option>
                        <option value="">2nd</option>
                        <option value="">3rd</option>
                        <option value="">4th</option>
                    </Select>
                </FormControl>
                <Spacer />
                <FormControl w={'fit-content'}>
                    <FormLabel textAlign={'right'}>Date Created</FormLabel>
                    <Input type='date' color={'#333333'} w={'250px'} h={'60px'} bg={'#ededed'} borderRadius={'10px'} value={formatDate(new Date())} />
                </FormControl>
            </Flex>

            {/* SECOND ROW - AUTHORIZED SCHOOLS SECTION */}
            <Box my={'70px'} boxShadow={'4px 4px 30px rgba(0, 0, 0, 0.25)'} p={"40px 30px"} w={'100%'}>
                <Text fontWeight={600} mb={'20px'}>Authorized schools (6)</Text>
                <Flex wrap={'wrap'} gap={'30px'} fontSize={'15px'} >
                    {schoolList.map((school, index) => (
                        <Flex key={index} bg={'#ededed'} borderRadius={'30px'} p={'15px 20px'} gap={'20px'} color={'#333333'}>
                            <Text>{school}</Text>
                            <Flex align={'center'} textDecoration={'underline'} gap={'5px'} sx={removeTextStyle}>
                                <HiOutlineTrash size={18} />
                                Remove
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
                
                <Button onClick={() => setShowModal(true)} w={'200px'} ml={'calc(100% - 200px)'} mt={'20px'} h={'60px'} bg={'#8F19E7'} color={'white'} borderRadius={'10px'} display={'flex'} alignItems={'center'} gap={'5px'} sx={buttonStyle}>
                    <GoPlusCircle size={20} />
                    Add School
                </Button>
            </Box>

            {/* LAST ROW */}
            <Flex my={'60px'} py={'40px'} boxShadow={'4px 4px 30px rgba(0, 0, 0, 0.25)'}  w={'100%'} align={'center'} justify={'space-around'}>
                <FormControl w={'fit-content'}>
                    <FormLabel>Number of Schools</FormLabel>
                    <Select  w={'137px'} h={'60px'} bg={'#ededed'} borderRadius={'10px'} >
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                    </Select>
                </FormControl>
                <FormControl w={'fit-content'}>
                    <FormLabel>Questions Per School</FormLabel>
                    <Select  w={'137px'} h={'60px'} bg={'#ededed'} borderRadius={'10px'} >
                        <option value="">10</option>
                        <option value="">20</option>
                        <option value="">30</option>
                        <option value="">40</option>
                        <option value="">50</option>
                    </Select>
                </FormControl>
                <FormControl w={'fit-content'}>
                    <FormLabel>Total Number of Questions</FormLabel>
                    <Input  w={'137px'} h={'60px'} bg={'#ededed'} borderRadius={'10px'} color={'#333333'} defaultValue={100}/> 
                </FormControl>
                <FormControl w={'fit-content'}>
                    <FormLabel>Mark per Question</FormLabel>
                    <Select  w={'137px'} h={'60px'} bg={'#ededed'} borderRadius={'10px'} >
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                    </Select>
                </FormControl>
                <FormControl w={'fit-content'}>
                    <FormLabel>Marks to bonus</FormLabel>
                    <Select w={'137px'} h={'60px'} bg={'#ededed'} borderRadius={'10px'} >
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                    </Select>
                </FormControl>
            </Flex>

            {/* MODAL TO ADD SCHOOL TO ROUND  */}
            {showModal &&  <AddSchoolToRoundModal setShowModal={setShowModal}/>}


        </Container>
    )
}

export default AddEditRound
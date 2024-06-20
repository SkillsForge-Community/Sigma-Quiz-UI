import { Box, Button, Container, Flex, Input, Spacer, Text } from '@chakra-ui/react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import RoundCard from './RoundCard';
import { useNavigate } from 'react-router-dom';

type roundListType = {
    roundname: string,
    marks: number, 
    bonus: number, 
    NoOfSchools: number,
    date: Date
}

const Round = () => {

    const navigate = useNavigate();

    const roundList : roundListType[] = [
        {
            roundname: 'Round 1', 
            marks: 5,
            bonus: 2,
            NoOfSchools: 5,
            date: new Date()
        },
        {
            roundname: 'Round 2', 
            marks: 5,
            bonus: 2,
            NoOfSchools: 5,
            date: new Date()
        },
        {
            roundname: 'Round 3', 
            marks: 5,
            bonus: 2,
            NoOfSchools: 5,
            date: new Date()
        },
        {
            roundname: 'Round 4', 
            marks: 5,
            bonus: 2,
            NoOfSchools: 5,
            date: new Date()
        },
        {
            roundname: 'Round 5', 
            marks: 5,
            bonus: 2,
            NoOfSchools: 5,
            date: new Date()
        },
        {
            roundname: 'Round 6', 
            marks: 5,
            bonus: 2,
            NoOfSchools: 5,
            date: new Date()
        },
    ]

  return (
    <Container maxW={"100%"} minH={'100vh'} p={"30px 3%"}>

        {/* TOP CONTENT */}
        <Flex align={'center'}>
            <IoIosArrowBack style={{marginRight: '70px'}} size={24}/>
            <Box pos={'relative'} h={"fit-content"}>
                <Input type='text' placeholder='Search round' w={"550px"} h={'50px'} pl={'70px'} bg={'#ededed'}></Input>
                <IoIosSearch style={{position: 'absolute', top: '50%', transform: "translateY(-50%)", left: '20px', color: '#8F19E7', zIndex: '100'}} size={24}/>
            </Box>
            <Spacer />
            <Text fontWeight={'500'} color={'#333333'}>Welcome, Jenner</Text>
            <FaUserCircle style={{marginLeft: '20px', color: '#bababa'}} size={50}/>
            <IoIosArrowDown style={{marginLeft: '7px', color: '#8F19E7', fontSize: '24px'}}/>
        </Flex>

        {/* MAIN CONTENT */}
        <Box w={'75%'} mx={'auto'} my={'80px'}>
            <Flex w={'100%'} align={'flex-end'}>
                <Text>Add/Edit Round</Text>
                <Spacer />
                <Button bg={'#ededed'} fontWeight={'400'} color={"#333333"} w={'180px'} h={'40px'} onClick={() => navigate('/round/add')}>Create New Round</Button>
            </Flex>

            {/* TABLE HEAD */}
            <Flex h={'50px'} w={'100%'} bg={'#8F19E7'} align={'center'} justifyContent={'space-between'} px={'20px'} mt={'20px'}>
                <Text color={'#fff'} fontSize={'15px'} width={'21%'}>Round Name</Text>
                <Text color={'#fff'} fontSize={'15px'} width={'21%'}>Marks (Bonus)</Text>
                <Text color={'#fff'} fontSize={'15px'} width={'21%'}>No of Schools</Text>
                <Text color={'#fff'} fontSize={'15px'} width={'13%'} textAlign={'right'}>Date Created</Text>
                <Text color={'#fff'} fontSize={'15px'} width={'27%'} textAlign={'right'} pr={'20px'}>Action</Text>
            </Flex>

            {/* TABLE CONTENT (LIST OF ROUNDS) */}
            {roundList.map((round, index) => (
                <RoundCard roundname={round.roundname} marks={round.marks} bonus={round.bonus} NoOfSchools={round.NoOfSchools} date={round.date}/>
            ))}
            
        </Box>
    </Container>
  )
}

export default Round
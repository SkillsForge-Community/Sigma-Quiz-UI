import { Box, Button, Container, Flex, Input, Spacer, Text, Spinner, Alert, AlertIcon } from '@chakra-ui/react'
import { IoIosArrowBack, IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import RoundCard from './RoundCard';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

type RoundListType = {
    roundname: string,
    marks: number, 
    bonus: number, 
    NoOfSchools: number,
    date: Date
}

const Round = () => {

    const navigate = useNavigate();
    const [roundList, setRoundList] = useState<RoundListType[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRoundList = async () => {
            try {
                const response = await axios.get('https://sigma-website-backend-51b4af465e71.herokuapp.com/api/sigma-quiz/rounds', {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZUB5YW5qdS5jb20iLCJ1c2VyX2lkIjoiOTJlNWUxNmEtMjE5Zi00Mzk4LTlmYTQtMDBlMThiNTA3MjJlIiwiZW1haWwiOiJhZGVAeWFuanUuY29tIiwiaWF0IjoxNzE2NDc4ODQyLCJleHAiOjE3MTY3MzgwNDJ9.f89ADwqIzJbxlR2TMOsy68RI5pJnhLcCQvlhmkpc8Rg'
                    }
                });
                
                const rounds: RoundListType[] = response.data.map((round:any) => ({
                    roundname: round.name,
                    marks: round.marks_per_question,
                    bonus: round.marks_per_bonus_question,
                    NoOfSchools: round.no_of_schools,
                    date: new Date(round.created_at)
                }));
                setRoundList(rounds);
                setError(null); // Clear any previous errors
            } catch (error) {
                setError('Error fetching round list. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchRoundList();
        console.log(fetchRoundList())
    }, []);

    const filteredRounds = roundList.filter(round => 
        round.roundname.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const createRound = async () => {
        const newRound = {
            quizId: '2cd1bcf2-e621-49af-aa89-9e21a05759a2', // Make sure this is a valid UUID
            name: 'Mock Round',
            round_number: 1,
            no_of_questions: 10,
            no_of_schools: 5,
            marks_per_question: 1,
            marks_per_bonus_question: 2
        };
        try {
            const response = await axios.post('https://sigma-website-backend-51b4af465e71.herokuapp.com/api/sigma-quiz/rounds', newRound, {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZUB5YW5qdS5jb20iLCJ1c2VyX2lkIjoiOTJlNWUxNmEtMjE5Zi00Mzk4LTlmYTQtMDBlMThiNTA3MjJlIiwiZW1haWwiOiJhZGVAeWFuanUuY29tIiwiaWF0IjoxNzE2NDc4ODQyLCJleHAiOjE3MTY3MzgwNDJ9.f89ADwqIzJbxlR2TMOsy68RI5pJnhLcCQvlhmkpc8Rg', 
                    'Content-Type': 'application/json'
                }
            });
            console.log('Round created successfully:', response.data);
        } catch (error) {
            console.error('Error creating round:', error.response?.data || error.message);
        }
    };

    return (
    <Container maxW={"100%"} minH={'100vh'} p={"30px 3%"}>

        {/* TOP CONTENT */}
        <Flex align={'center'}>
            <IoIosArrowBack style={{marginRight: '70px'}} size={24}/>
            <Box pos={'relative'} h={"fit-content"}>
                <Input type='text' placeholder='Search round' w={"550px"} h={'50px'} pl={'70px'} bg={'#ededed'} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></Input>
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
                
            {/* Loading State */}
            {loading && (
                <Flex justifyContent="center" alignItems="center" h="100vh">
                    <Spinner size="xl" />
                </Flex>
            )}
            {/* Error State */}
            {error && (
                <Alert status="error" mt="20px">
                    <AlertIcon />
                    {error}
                </Alert>
            )}
            {/* Empty State */}
            {!loading && !error && roundList.length === 0 && (
                <Text mt="20px" textAlign="center">No rounds available.</Text>
            )}    

            {/* TABLE HEAD */}
                {/* {!loading && !error && roundList.length > 0 && ( */}
                <Flex h={'50px'} w={'100%'} bg={'#8F19E7'} align={'center'} justifyContent={'space-between'} px={'20px'} mt={'20px'}>
                    <Text color={'#fff'} fontSize={'15px'} width={'21%'}>Round Name</Text>
                    <Text color={'#fff'} fontSize={'15px'} width={'21%'}>Marks (Bonus)</Text>
                    <Text color={'#fff'} fontSize={'15px'} width={'21%'}>No of Schools</Text>
                    <Text color={'#fff'} fontSize={'15px'} width={'13%'} textAlign={'right'}>Date Created</Text>
                    <Text color={'#fff'} fontSize={'15px'} width={'27%'} textAlign={'right'} pr={'20px'}>Action</Text>
                </Flex>
            {/* )} */}

            {/* TABLE CONTENT (LIST OF ROUNDS) */}
            {!loading && !error && filteredRounds.length > 0 && (
                filteredRounds.map((round: RoundListType, index: number) => (
                    <RoundCard 
                        key={index} 
                        roundname={round.roundname} 
                        marks={round.marks} 
                        bonus={round.bonus} 
                        NoOfSchools={round.NoOfSchools} 
                        date={round.date}
                    />
                ))
            )}
        
        </Box>
    </Container>
    )
}

export default Round
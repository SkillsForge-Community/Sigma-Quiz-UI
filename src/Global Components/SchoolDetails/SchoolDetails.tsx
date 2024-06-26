import { Link, useParams } from "react-router-dom";
import { Box, Table, TableContainer, Text, Tbody, Td, Th, Thead, Tr, SimpleGrid, Button, Heading, useTheme, Flex, Spacer } from '@chakra-ui/react';
import PaginatedItems1 from "../Pagininate/AnsweredByPaginate";
import { IoIosArrowForward } from "react-icons/io";
import { RxSlash } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/Hooks";
import LoadingIcons from "react-loading-icons";
import { useEffect, useState } from "react";
import { SchoolRegistration, RoundParticipation, Round } from "../Types/Types";
import { BsSlashLg } from "react-icons/bs";
import { FaPen, FaPlus } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import pfp from "../../assets/Images/Profile picture.svg";


const roundBtnStyles = {
    cursor: "pointer",
    fontWeight: 400,
    fontStyle: "normal",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 19px 10px 15px",
    fontSize: "16px",
    transition: "background-color 0.3s, border-radius 0.3s",
    color: "rgba(51, 51, 51, 1)",
    borderRadius: "10px",
    width: "104px",
    height: "47px"
};
const btnStyles = {
    backgroundColor: "rgba(237, 237, 237, 1)",
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: "16px",
    color: "rgba(51, 51, 51, 1)",
};

const filterQuestionsStyles = {
    backgroundColor: "rgba(237, 237, 237, 1)",
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: "18px",
    color: btnStyles.color,
};

const questionsStyles = {
    color: "rgba(51, 51, 51, 1)",
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 500,
    fontStyle: "normal",
};

const manageStyles = {
    color: "rgba(51, 51, 51, 0.6)",
    textDecoration: "underline",
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: "18px",
};

const scoreStyles = {
    borderRadius: "50%",
    width: "146px",
    height: "146px",
    boxShadow: "0px 6px 12px 0px #00000040",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "36px",
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 700,
    fontStyle: "normal",
    lineHeight: "54px",
};

function SchoolDetails() {
    const { schoolsID } = useParams();
    const navigate = useNavigate();
    const token = useAppSelector((state) => state.auth.access_token);
    const { data, loading, error } = useAppSelector((state) => state.getQuizResult);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [schoolDetails, setSchoolDetails] = useState<SchoolRegistration | undefined>();
    const [roundParticipation, setRoundParticipation] = useState<RoundParticipation | undefined>();
    const [rounds, setRounds] = useState<Map<string, Round>>(new Map());
    const [testRound, setTestRound] = useState<Round | undefined>();
    const [totalQuestions, setTotalQuestions] = useState<number>(0);
    const [activeButton, setActiveButton] = useState<string>("Round 1");
    const [RoundansweredCorrectly, setRoundAnsweredCorrectly] = useState<number>(0);
    const [RoundansweredQuestions, setRoundAnsweredQuestions] = useState<number>(0);
    const [quizCorrectAnswers, setQuizCorrectAnswers] = useState<number>(0);
    const [roundScore, setRoundScore] = useState<number>(0);
    const [quizScore, setQuizScore] = useState<number>(0);
    console.log(testRound)

    const handleButtonClick = (currentRound: RoundParticipation, button: string) => {
        setActiveButton(button);
        setRoundParticipation(currentRound);
        setTestRound(rounds.get(currentRound.roundId));
    };

    const theme = useTheme();
    const userName = useAppSelector(state => state.auth.user?.first_name);
    useEffect(() => {
        if (schoolsID && data) {
            const roundMap = new Map<string, Round>();
            const roundParticipationMap = new Map<string, Round>();
    
            const school = data.schoolRegistrations.find((school) => school.schoolId === schoolsID);
    
            data.rounds.forEach((round) => {
                roundMap.set(round.id, round);
            });
    
            data.schoolRegistrations.forEach((schReg) => {
                schReg.rounds.forEach((roundsParticipation) => {
                    const round = roundMap.get(roundsParticipation.roundId);
                    if (round) {
                        roundParticipationMap.set(roundsParticipation.roundId, round);
                    }
                });
            });
    
            setRounds(roundParticipationMap);
            setRoundScore(roundParticipation?.score || 0);
            const answeredCorrectly = school?.rounds[0].answered_questions.filter(item => item.answered_correctly).length || 0;
            setRoundAnsweredCorrectly(answeredCorrectly);
            const answeredQuestion = school?.rounds[0].answered_questions.length || 0;
            setRoundAnsweredQuestions(answeredQuestion);
    
            setTotalQuestions(Array.from(roundParticipationMap.values()).reduce((acc, round) => acc + round.no_of_questions, 0));
            const totalCorrectAnswers = Array.from(roundParticipationMap.values()).reduce((acc, round) => {
                return acc + round.questions.filter(item => item.answered_correctly).length;
            }, 0);
            setQuizCorrectAnswers(totalCorrectAnswers);
    
            if (school) {
                setSchoolDetails(school);
                setQuizScore(school.score || 0);
            } else {
                setErrorMessage("School details not found.");
            }
    
            if (!roundParticipation) {
                setRoundParticipation(school?.rounds[0]);
            }
    
            if (!testRound) {
                setTestRound(data.rounds[0]);
            }
    
        } else if (error) {
            setErrorMessage("Error fetching test details. Please try again later!");
        }
    }, [data, error, schoolsID,roundParticipation, testRound]);
    
    return (
        <>
            {loading ? (
                <Flex alignItems="center" justifyContent="center" color="red">
                    <LoadingIcons.Bars width={"60px"} height={"60px"} fill="grey" />
                </Flex>
            ) : error ? (
                <Flex alignItems="center" justifyContent="center" color="red">
                    {errorMessage}
                </Flex>
            ) : data && data.schoolRegistrations.length > 0 ? (
                <Box padding="20px">
                    <SimpleGrid spacing={5} p="20px" fontFamily={"Poppins, sans-serif"}>
                        <Flex>
                            <Box >
                                <Text fontSize={"20px"}>{schoolDetails?.quiz.title}</Text>
                            </Box>
                            <Spacer />
                            <Flex align={"center"}>
                                <Flex alignItems={"center"} wrap={"nowrap"} w='334px' h='30px'>
                                    <h4 className="school-name">{schoolDetails?.school.name}</h4>
                                </Flex>
                                {token && <Flex alignItems={"center"} gap="20px">
                                    <h5>Welcome, {userName}</h5>
                                    <img src={pfp} alt="profile pic" />
                                    <MdOutlineKeyboardArrowDown />
                                </Flex>}
                            </Flex>
                        </Flex>
                        <Flex>
                            <Flex height="47px" width="633px">
                                {schoolDetails?.rounds.map((round, index) => (
                                    <Box sx={{ ...roundBtnStyles, backgroundColor: activeButton === `Round ${index + 1}` ? theme.colors.gray["200"] : "transparent", borderRadius: activeButton === `Round ${index + 1}` ? "10px" : "none" }}
                                        key={index}
                                        className={`round-button ${activeButton === `Round ${index + 1}` ? 'active' : ''}`}
                                        onClick={() => handleButtonClick(round, `Round ${index + 1}`)}
                                        width="104px"
                                        height='47px'
                                    >
                                        {`Round ${index + 1}`}
                                    </Box>
                                ))}
                            </Flex>
                            <Spacer />
                            {
                                token &&
                                <Button sx={btnStyles}>
                                    <Flex gap={"7px"}>
                                        <Flex gap={"10px"}>
                                            <h5>Edit</h5>
                                            <FaPen />
                                        </Flex>
                                        <BsSlashLg />
                                        <Flex gap={"10px"}>
                                            <h5>Add</h5>
                                            <FaPlus />
                                        </Flex>
                                    </Flex>
                                </Button>
                            }
                        </Flex>
                    </SimpleGrid>
                    <SimpleGrid spacing={10}>
                        <div>
                            <br />
                            <Heading as="h5" sx={questionsStyles}>
                                Questions
                            </Heading>
                            <Flex direction={"column"} justifyContent="space-between">
                                <Box pr="100px">
                                    <PaginatedItems1 testRound={testRound} questions={testRound?.questions} pageCount={testRound?.no_of_questions} numOfPages={30} />
                                </Box>
                                <br />
                                <Box mt={"55px"} ml={"800px"} position={"absolute"} w="" h="27px">
                                    <Link to={`../manage-questions`}>
                                        <Heading as="h4" sx={manageStyles}>
                                            Manage Questions
                                        </Heading>
                                    </Link>


                                </Box>
                            </Flex>
                        </div>
                        {token && (
                            <Flex>
                                <Button sx={filterQuestionsStyles}>Right</Button>
                                <Spacer />
                                <Button sx={filterQuestionsStyles}>Bonus</Button>
                                <Spacer />
                                <Button sx={filterQuestionsStyles}>Wrong</Button>
                            </Flex>
                        )}
                        <Flex justifyContent="space-between" alignItems="center">
                            <Box w="auto">
                                <h5 className="answer">Answered Questions</h5>
                                <PaginatedItems1 numOfPages={20} pageCount={RoundansweredQuestions} />
                            </Box>
                            <Box>
                                <Flex justifyContent="center" alignItems="center" gap="10px" padding="5px 20px 5px 20px">
                                    <Button
                                        backgroundColor="#EDEDED"
                                        rightIcon={<IoIosArrowForward />}
                                        onClick={() => navigate(token ? "/subadmin/test-details" : "/users/test-details", { state: { schools: schoolDetails?.school.name } })}
                                    >
                                        View Details
                                    </Button>
                                </Flex>
                            </Box>
                        </Flex>
                        <TableContainer>
                            <Table variant="none" size="lg" width="100%">
                                <Thead>
                                    <Tr>
                                        <Th>Scores</Th>
                                        <Th>Total</Th>
                                        <Th>Position</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>
                                            <Flex sx={scoreStyles}>
                                                <span className="actual-score">{RoundansweredCorrectly}</span>
                                                <RxSlash /> {RoundansweredQuestions ? RoundansweredQuestions : 0}
                                            </Flex>
                                        </Td>
                                        <Td>
                                            <Flex sx={scoreStyles}>
                                                <span className="actual-score">{quizCorrectAnswers}</span>
                                                <RxSlash /> {totalQuestions}
                                            </Flex>
                                        </Td>
                                        <Td>
                                            <Flex sx={{ ...scoreStyles, backgroundColor: "#8F19E7", color: "gold", transitionDuration: "1s" }}>{roundParticipation?.position || 0}</Flex>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <Flex sx={{ ...scoreStyles, color: "#02C309" }}>{roundScore}</Flex>
                                        </Td>
                                        <Td>
                                            <Flex sx={{ ...scoreStyles, color: "#02C309" }}>{quizScore}</Flex>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </SimpleGrid>
                </Box>
            ) : (
                <Flex alignItems="center" justifyContent="center" color="red">
                    No data found
                </Flex>
            )}
        </>
    );
}

export default SchoolDetails;

import { useCallback, useEffect } from 'react';
import { getOrdinal } from '../../Global Components/Ordinal';
import { useState } from "react";
import {
    Flex,
    Grid,
    GridItem,
    Box,
    Text,
    SimpleGrid,
    Spacer,
    Button,
    Heading,
    SystemCSSProperties,
    useTheme
} from "@chakra-ui/react";
import { FaPen, FaPlus } from "react-icons/fa";
import { BsSlashLg } from "react-icons/bs";
import { IconContext } from "react-icons";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import SchoolScoreCard from './SchoolScoreCard/SchoolScoreCard';
import pfp from "../../assets/Images/Profile picture.svg";
import { useAppSelector } from '../../app/Hooks';
import { Round } from '../../Global Components/Types/Types';
import LoadingIcons from 'react-loading-icons';
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
    height: "47px",
};
const crudOperationsStyles: SystemCSSProperties = {
    cursor: "pointer",
    transition: "1s",
    borderRadius: "7px",
    margin: "0 auto",
    padding: "7px",
    height: "38px",
    gap: "3x",
    backgroundColor: "rgba(143, 25, 231, 1)",
};
const crudStyles: SystemCSSProperties = {
    color: "rgba(255, 255, 255, 1)",
    gap: "8px",
    fontSize: "16px",
};
const crudIconStyles: SystemCSSProperties = {
    backgroundColor: "rgba(237, 237, 237, 1)",
    padding: "5px",
    borderRadius: "5px"
}

const Scores = () => {
    const theme = useTheme();
    const { data, loading, error } = useAppSelector((state) => state.getQuizResult);
    const [quizRound, setQuizRound] = useState<Round | undefined>();
    const [errorMessage, setErrorMessage] = useState<string>("");
    const userName=useAppSelector(state=>state.auth.user?.first_name)
    useEffect(() => {
        setQuizRound(undefined)
    }, [])
    const getSchoolDetails = useCallback(() => {
        if (data) {
            if (!quizRound) {
                const currentRound = data.rounds[0]
                console.log(currentRound)
                const roundMap = new Map<string, Round>();
                roundMap.set(currentRound.id, currentRound)
                const roundParticipationMap = new Map<string, Round>();
                data && data.schoolRegistrations.forEach((schReg) => {
                    schReg.rounds.forEach((roundsParticipation) => {
                        const round = roundMap.get(roundsParticipation.roundId);
                        if (round) {
                            roundParticipationMap.set(roundsParticipation.roundId, round);
                        }
                    });
                });
                setQuizRound(roundParticipationMap.get(currentRound.id));
            }

        } else if (error) {
            setErrorMessage("Error fetching test details. Please try again later!");
        }

    }, [data, error, quizRound]);

    useEffect(() => {
        getSchoolDetails();
    }, [data, error, getSchoolDetails]);
    const [activeButton, setActiveButton] = useState<string>("Round 1");

    const handleButtonClick = (
        currentRound: Round,
        button: string
    ) => {
        const roundMap = new Map<string, Round>();
        roundMap.set(currentRound.id, currentRound)

        const roundParticipationMap = new Map<string, Round>();
        data && data.schoolRegistrations.forEach((schReg) => {
            schReg.rounds.forEach((roundsParticipation) => {
                const round = roundMap.get(roundsParticipation.roundId);
                if (round) {
                    roundParticipationMap.set(roundsParticipation.roundId, round);
                }
            });
        });
        setActiveButton(button);
        setQuizRound(roundParticipationMap.get(currentRound.id));
    };
    const allSchools = data?.schoolRegistrations.map(item => {
        const roundParticipation = item.rounds.find(roundParticipation => quizRound?.id === roundParticipation.roundId)
        console.log(roundParticipation)
        return (<SchoolScoreCard
            schoolName={item.school.name}
            score={roundParticipation?.score || 0}
            totalScore={item.score || 0}
            test={"Test"}
            timeTaken="1 hr 40 min"
            questionsAttempted={roundParticipation?.answered_questions.length || 0}
            correctAnswers={
                roundParticipation?.answered_questions.filter((item) => item.answered_correctly).length || 0}
            wrongAnswers={
                roundParticipation?.answered_questions.filter((item) => !item.answered_correctly).length || 0}
            overallResult={`${Math.round((roundParticipation?.score || 0) / (item.score || 0) * 100) }%`}
            position={getOrdinal(roundParticipation?.position || 0)}
        />)
    })
   
    return (
        <>
        {
        loading?
                (
                    <Flex alignItems = "center" justifyContent = "center" color = "red" >
                    <LoadingIcons.Bars width={"60px"} height={"60px"} fill="grey" />
        </Flex >
                ) 
        :
        error ?
        (
        <Flex alignItems="center" justifyContent="center" color="red">
            {errorMessage}
        </Flex>
        ) 
        :
        data && data?.schoolRegistrations.length > 0 ?
        (
        <Grid >
            <GridItem as='main' colSpan={4} p="10px" pos='relative'>
                <SimpleGrid spacing={5} p="20px">
                    <Flex>
                        <Box>
                            <Text fontSize={"20px"}>Categories</Text>
                        </Box>
                        <Spacer />
                        <Flex align={"center"}>
                            <Flex alignItems={"center"} gap="20px">
                                <Text>Welcome, {userName}</Text>
                                <img src={pfp} alt="Profile" />
                                <MdOutlineKeyboardArrowDown />
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex>
                        <Flex height="47px" width="633px">
                            {data?.rounds.map((round, index) => (
                                <Box
                                    sx={{
                                        ...roundBtnStyles,
                                        backgroundColor:
                                            activeButton === `Round ${index + 1}`
                                                ? theme.colors.gray["200"]
                                                : "transparent",
                                        borderRadius:
                                            activeButton === `Round ${index + 1}` ? "10px" : "none",
                                    }}
                                    key={index}
                                    className={`round-button ${activeButton === `Round ${index + 1}` ? "active" : ""
                                        }`}
                                    onClick={() =>
                                        handleButtonClick(round, `Round ${index + 1}`)
                                    }
                                    width="104px"
                                    height="47px"
                                >
                                    {`Round ${index + 1}`}
                                </Box>
                            ))}
                        </Flex>
                        <Spacer />
                        <Button fontFamily='Poppins' fontWeight='400' fontSize='16px' bgColor="rgba(237, 237, 237, 1)" color="rgba(51, 51, 51, 1)">
                            <Flex gap={"7px"}>
                                <Flex gap={"10px"}>
                                    <Text>Edit</Text>
                                    <FaPen />
                                </Flex>
                                <BsSlashLg />
                                <Flex gap={"10px"}>
                                    <Text>Add</Text>
                                    <FaPlus />
                                </Flex>
                            </Flex>
                        </Button>
                    </Flex>
                </SimpleGrid>

                <Box w="156px" sx={crudOperationsStyles} float={'right'} width='130px' pos='absolute' top='169px' left='900px'>
                    <Flex alignItems={"center"} justifyContent={"center"}>
                        <IconContext.Provider value={{ color: "rgba(0, 0, 0, 1)" }}>
                            <Heading as={"h5"} sx={crudStyles}>
                                <Flex alignItems={"center"} justifyContent={"center"}>
                                    Edit
                                    <Text as={"span"} sx={crudIconStyles}>
                                        <FaPen />
                                    </Text>
                                </Flex>
                            </Heading>
                            <span
                                style={{
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                /
                            </span>
                            <Heading as={"h5"} sx={crudStyles}>
                                <Flex alignItems={"center"} justifyContent={"center"}>
                                    Add
                                    <Text as={"span"} sx={crudIconStyles}>
                                        <FaPlus />
                                    </Text>
                                </Flex>
                            </Heading>
                        </IconContext.Provider>
                    </Flex>
                </Box>

                {allSchools}

            </GridItem>
        </Grid>)
        : (
            <Flex alignItems="center" justifyContent="center" color="red">
                No data found
            </Flex>
        )
    }
    </>
    );
}

export default Scores;

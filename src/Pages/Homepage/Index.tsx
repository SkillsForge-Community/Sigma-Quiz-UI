import infor from "../../assets/Images/info.png";
import { IoPlayCircleOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Logo from "../../Global Components/Logo/Logo";
import { Box, Button, HStack, Select, SystemCSSProperties, VStack, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "../../app/Hooks";

const Homepage = () => {
  const toast=useToast()
  const navigate = useNavigate();
  type quizType = {
    id?: string;
    year?: number;
    title?: string;
    description?: string;
    date?: string;
  };

  const [quizes, setQuizes] = useState<quizType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const token = useAppSelector(state => state.auth.access_token)
  const [quizId, setQuizId] = useState<string>("")
  useEffect(() => {
    const getAllQuizzes = () => {
      setIsLoading(true);
      axios
        .get(
          "https://sigma-website-backend-51b4af465e71.herokuapp.com/api/sigma-quiz"
        )
        .then((res) => {
          setQuizes(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError("Error Fetching Quizes. Try Again");
          setIsLoading(false);
        });
    };
    getAllQuizzes();
  }, [setQuizes]);
  const loginButtonStyle: SystemCSSProperties = {
    backgroundColor: "rgba(143, 25, 231, 1)",
    color: "rgb(255, 255, 255)",
    marginLeft: "auto",
  };

  const reversedQuizzes = useMemo(() => {
    return quizes.slice().reverse();
  }, [quizes])
  const handleQuizChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedQuizId = event.target.value;
    setQuizId(selectedQuizId);
  };
  const handleQuizId = () => {
    if (quizId) {
      navigate(`${token ? "/subadmin" : `/users/${quizId}`}`)
    }
    else {
      toast({
        variant: "none",
        title: `Select a quiz`,
        position: "top",
        isClosable: true,
        containerStyle: {
          backgroundColor: "red.500",
          color: "white"
        }
      });
    }
  }
  return (

    <Box className="Home">
      <Logo />
      <Button _hover={{
        cursor: "pointer",
        backgroundColor: "rgba(143, 25, 231, 1)",
      }}
        className="login-link"
        onClick={() => navigate("/login")}
        sx={loginButtonStyle}
      >
        Log In
      </Button>
      <div className="title">
        <h1>Sigma Roseline Etuokwu Quiz Competition</h1>
        <h3>
          Quiz competition involving secondary schools from all over Nigeria.
          Instilling the spirit of knowledge. Held @ the premier University;
          University of Ibadan
        </h3>
      </div>
      <div className="dropdowns">
        <Select
          borderRadius="45px"
          icon={<MdOutlineKeyboardArrowDown color="red" />}
          className="dropdown"
          height="90px"
          variant={"outline"}
          width="491px"
          bg="white"
          placeholder="Select a quiz" 

          onChange={handleQuizChange}
        >
          {isLoading ? (
            <option>Loading...</option>
          ) : error ? (
            <option>{error}</option>
          ) : quizes?.length > 0 ? (
            reversedQuizzes.map((quiz: quizType) => (
              <option key={quiz.id} value={quiz.id}>
                {quiz.title}
              </option>
            ))
          ) : (
            <option>No data found</option>
          )}
        </Select>

        <button
          className="submit"
          onClick={handleQuizId}
          type="submit"
        >
          View Quiz
        </button>
      </div>
      <div className="quizes">
        {quizes &&
          quizes
            .slice(0, 3)
            .map((quiz: quizType, index) => (
              <h4 key={index}>{quiz.year} Quiz</h4>
            ))}
      </div>
      <div className="video">
        <VStack
          spacing={4}
          align="stretch"
          width="357px"
          height="141px"
          padding="12px 16px 12px 16px"
        >
          <Box h="74px" w="325px">
            <HStack spacing="24px">
              <Box className="img-info">
                <div>
                  <img src={infor} className="info-img" alt="" />
                </div>
              </Box>
              <Box className="info-text">
                <h3>Watch our documentary on the Quiz Competition</h3>
                <p>Sigma Club</p>
              </Box>
            </HStack>
          </Box>
          <Box h="31px" w="325px" className="info-button">
            <button onClick={() => navigate("/About")}>
              <IoPlayCircleOutline />
              Play Video
            </button>
          </Box>
        </VStack>
      </div>
    </Box>
  );
};
export default Homepage;

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppConstants } from "../Global Components/AppConstants/AppConstants";
import axios from "axios";


type AnsweredBy = {
  id: string;
  roundId: string;
  schoolRegistrationId: string;
  score: number;
  position: number;
  schoolRegistration?: SchoolRegistration;
};

export type Question = {
  id: string;
  roundId: string;
  question_number: number;
  answered_by: AnsweredBy | null;
  answered_correctly: boolean | null;
  bonus_to: AnsweredBy | null;
};

type School = {
  id: string;
  name: string;
  state: string;
  address: string;
};

type Quiz = {
  id: string;
  year: number;
  title: string;
  description: string | null;
  date: string;
};

export type SchoolRegistration = {
  id: string;
  quizId: string;
  schoolId: string;
  quiz: Quiz;
  school: School;
  rounds: RoundParticipation[];
  score: number;
  position: number;
};

export type RoundParticipation = {
  id: string;
  roundId: string;
  schoolRegistrationId: string;
  score: number;
  position: number;
  answered_questions: Question[];
  bonus_questions: Question[];
};

export type Round = {
  id: string;
  quizId: string;
  name: string;
  round_number: number;
  no_of_questions: number;
  no_of_schools: number;
  marks_per_question: number;
  marks_per_bonus_question: number;
  schoolParticipations: RoundParticipation[];
  questions: Question[];
};

type QuizEvent = {
  id: string;
  year: number;
  title: string;
  description: string | null;
  date: string;
  rounds: Round[];
  schoolRegistrations: SchoolRegistration[];
};
type InitialState = {
  loading: boolean;
  data:  QuizEvent | null;
  error: string | null;
};

// Create the async thunk for fetching quiz results
export const getQuizResult = createAsyncThunk("get-result/getQuizResult", async (quiz_id: (string|undefined)) => {
  const response = await axios.get(`${AppConstants.baseUrl}/sigma-quiz/${quiz_id}/results`);
  return response.data;
});

// Define the initial state
const initialState: InitialState = {
  loading: false,
  data: null,
  error: null,
};

// Create the slice for quiz results
const getResult = createSlice({
  name: "get-result",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQuizResult.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    });
    builder.addCase(getQuizResult.fulfilled, (state, action: PayloadAction<QuizEvent>) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(getQuizResult.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.error.message || "Failed to fetch";
    });
  },
});

export default getResult.reducer;

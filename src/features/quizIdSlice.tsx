import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
interface QuizState {
  quizId: string;
}
const quizId = cookies.get('quizId') || '';
const initialState: QuizState = {
  quizId
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuizId(state, action: PayloadAction<string>) {
      state.quizId = action.payload;
      cookies.set('quizId', action.payload)
    },
  },
});

export const { setQuizId } = quizSlice.actions;

export default quizSlice.reducer;

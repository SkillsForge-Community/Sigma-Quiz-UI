import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppConstants } from "../Global Components/AppConstants/AppConstants";
import axios from "axios";
import { Results } from "../Global Components/Sidebar/Sidebar";



type InitialState = {
  loading: boolean;
  data:  Results | null;
  error: string | null;
};

// Create the async thunk for fetching quiz results
export const getQuizResult = createAsyncThunk<Results, string | undefined>("get-result/getQuizResult", async (quiz_id: (string|undefined)) => {
  const response = await axios.get<Results>(`${AppConstants.baseUrl}/sigma-quiz/${quiz_id}/results`);
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
    builder.addCase(getQuizResult.fulfilled, (state, action: PayloadAction<Results>) => {
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

import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/AuthSlice";
import { apiSlice } from "./api/apiSlice";
import getQuizResultSlice from "../features/getQuizResultSlice";
import quizIdSlice from "../features/quizIdSlice";
import getQuestionID from "../features/getQuestionID";
export const store= configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        auth:AuthSlice,
        getQuizResult:getQuizResultSlice,
        getID: quizIdSlice,
        getQuestionID
    },
    middleware: getDefaultMiddleware=>getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})
export type RootStore= ReturnType <typeof store.getState>
export type AppDispatch= typeof store.dispatch
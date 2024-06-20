import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootStore } from "../store";
import { constants } from "../../Global Components/AppConstants/AppConstants";
// Define the base query with headers setup
const baseQuery = fetchBaseQuery({
    baseUrl: constants.baseUrl,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootStore).auth.access_token;
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    }
});



export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: (builder) => ({}),
    
});

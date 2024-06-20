import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootStore } from "../store";
// Define the base query with headers setup
const baseQuery = fetchBaseQuery({
    baseUrl: "https://sigma-website-backend-51b4af465e71.herokuapp.com",
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

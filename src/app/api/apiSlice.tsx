import { createApi, fetchBaseQuery, BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { RootStore } from "../store";
import { setCredentials, logout } from "../../features/AuthSlice";
import { FetchArgs } from "@reduxjs/toolkit/dist/query/fetchBaseQuery";


// Define the base query with headers setup
const baseQuery = fetchBaseQuery({
    baseUrl: "",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootStore).auth.token;
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    }
});

// Base query with reauthentication logic
const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, unknown> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 403) {
        console.log("Send refresh token");

        // Type the refreshResult
        const refreshResult = await baseQuery('/refresh', api, extraOptions);

        if (refreshResult?.data) {
            const user = (api.getState() as RootStore).auth.user;
            const token = (api.getState() as RootStore).auth.token;

            api.dispatch(setCredentials({ user, token }));

            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logout());
        }
    }

    return result;
};

// Use baseQueryWithReauth with createApi
export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({})
});
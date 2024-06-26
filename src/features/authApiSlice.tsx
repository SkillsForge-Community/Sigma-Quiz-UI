import { apiSlice } from "../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: "post",
                body: { ...credentials },
            }),
        }),
        register: builder.mutation({
            query: (newAdmin) => ({
                url: '/auth/register/admin',
                method: 'post',
                body: { ...newAdmin },
            }),
        }),
        getQuizResults: builder.query({
            query: () => ({
                url: `/sigma-quiz`,
                method: 'get',
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useGetQuizResultsQuery } = authApiSlice;

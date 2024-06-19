import { apiSlice } from "../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/api/auth/login',
                method: "post",
                body: { ...credentials },
            }),
        }),
        register: builder.mutation({
            query: (newAdmin) => ({
                url: '/api/auth/register/admin',
                method: 'post',
                body: { ...newAdmin },
            }),
        }),
        
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApiSlice;

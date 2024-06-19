import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    user: {
        email: string;
        first_name: string;
        id: string;
        last_name: string;
        roles: string;
    } | null;
    access_token?: string ;
};
const state=localStorage.getItem('state') && JSON.parse(localStorage.getItem('state')!)
const initialState: InitialState = {
    user: state? state.user: null,
    access_token: state?state.access_token:"",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<{ user: InitialState["user"]; access_token: string }>) => {
            state.user = action.payload.user;
            state.access_token = action.payload.access_token;
            localStorage.setItem('state', JSON.stringify(state));
        },
        logout: (state) => {
            state.user = null;
            state.access_token = "";
            localStorage.removeItem('state');
        },
    },
});

export default authSlice.reducer;
export const { setCredentials, logout } = authSlice.actions;

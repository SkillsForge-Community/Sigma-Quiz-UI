import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    user: {
        email: string;
        first_name:string;
        id:string;
        last_name:string 
        roles:string;
    } | null;
    access_token: string | null;
};
const initialState: InitialState = {
    user: null,
    access_token: null
};
const AuthSice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<InitialState>) => {
            state.user = action.payload.user;
            state.access_token = action.payload.access_token;
        },
        logout: (state) => {
            state.user = null;
            state.access_token = null;
        }
    }
});
export default AuthSice.reducer;
export const { setCredentials, logout } = AuthSice.actions;

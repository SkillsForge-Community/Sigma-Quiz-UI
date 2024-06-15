import {createSlice, PayloadAction} from "@reduxjs/toolkit"

type InitialState={
    user:{} |null
    token: string |null
}
const initialState:InitialState={
    user:null,
    token: null
}
const AuthSice=createSlice({
    name: "auth",
    initialState,
    reducers:{
        setCredentials:(state, action:PayloadAction<InitialState>)=>{
            state.user=action.payload.user
            state.token=action.payload.token
        },
        logout:(state)=>{
            state.user=null
            state.token=null
        }
    }
})
export default AuthSice.reducer
export const {setCredentials, logout}=AuthSice.actions

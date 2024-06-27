import { createSlice,PayloadAction } from "@reduxjs/toolkit";
type InitialState={
    id:string|undefined
}
const initialState:InitialState={
    id:"",
}
const getQuestionID=createSlice({
    name: "getQuestionID",
    initialState,
    reducers:{
        getID:((state,action:PayloadAction<string|undefined>)=>{
            state.id=action.payload
        })
    }
})
export const {getID}=getQuestionID.actions
export default getQuestionID.reducer

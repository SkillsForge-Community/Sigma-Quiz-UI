import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RegisterState = {
    // Define any state related to registration if needed
    registrationData: {
        email: string;
        first_name: string;
        last_name: string;
        roles: string;
    } | null;
};

const initialState: RegisterState = {
    registrationData: null,
};

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        setRegistrationData: (state, action: PayloadAction<RegisterState["registrationData"]>) => {
            state.registrationData = action.payload;
        },
        clearRegistrationData: (state) => {
            state.registrationData = null;
        },
    },
});

export const { setRegistrationData, clearRegistrationData } = registerSlice.actions;
export default registerSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

interface User {
    username: string | null
    email: string | null
    id: string | null
    isAuth: boolean
}

const initialState: User = {
    username: null,
    email: null,
    id: null,
    isAuth: false,

}

export const UserSlice = createSlice({

    name: 'user',
    initialState: { value: initialState },
    reducers: {
        getUser: (state, action) => {
            state.value = action.payload
        },

        logOff: (state) => {
            state.value = initialState
        }
    }
})

export default UserSlice.reducer
export const { getUser, logOff } = UserSlice.actions
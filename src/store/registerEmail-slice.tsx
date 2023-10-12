import { createSlice } from '@reduxjs/toolkit'

const registerEmailSlice = createSlice({
    name: 'registerEmail',
    initialState: '',

    reducers: {
        setEmail(_, action) {
            const registerEmail = action.payload

            return registerEmail
        },
    },
})

export const registerEmailActions = registerEmailSlice.actions
export default registerEmailSlice

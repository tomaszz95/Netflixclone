import { createSlice } from '@reduxjs/toolkit'

const pathnameSlice = createSlice({
    name: 'pathname',
    initialState: '',

    reducers: {
        createPathname(_, action) {
            const pathname = action.payload

            return pathname
        },
    },
})

export const pathnameActions = pathnameSlice.actions
export default pathnameSlice

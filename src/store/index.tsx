import { configureStore } from '@reduxjs/toolkit'

import registerEmailSlice from './registerEmail-slice'

const store = configureStore({
    reducer: {
        registerEmail: registerEmailSlice.reducer,
    },
})

export default store

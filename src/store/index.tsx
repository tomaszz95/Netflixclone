import { configureStore } from '@reduxjs/toolkit'

import loginData from './login-slice'

const store = configureStore({
    reducer: {
        loginData: loginData.reducer,
    },
})

export default store

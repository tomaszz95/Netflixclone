import { configureStore } from '@reduxjs/toolkit'

import loginEmailsSlice from './login-emails'

const store = configureStore({
    reducer: {
        loginEmails: loginEmailsSlice.reducer,
    },
})

export default store

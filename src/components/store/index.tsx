import { configureStore } from '@reduxjs/toolkit'

import isLoggedInSlice from './loggedin'
import paymentSlice from './payment'
import loginEmailsSlice from './login-emails'

const store = configureStore({
    reducer: {
        loginEmails: loginEmailsSlice.reducer,
        payment: paymentSlice.reducer,
        isLoggedIn: isLoggedInSlice.reducer,
    },
})

export default store

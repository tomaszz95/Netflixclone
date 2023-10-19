import { configureStore } from '@reduxjs/toolkit'

import paymentSlice from './payment'
import loginEmailsSlice from './login-emails'

const store = configureStore({
    reducer: {
        loginEmails: loginEmailsSlice.reducer,
        payment: paymentSlice.reducer,
    },
})

export default store

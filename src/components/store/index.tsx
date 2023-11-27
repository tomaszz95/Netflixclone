import { configureStore } from '@reduxjs/toolkit'

import isLoggedInSlice from './loggedin'
import paymentSlice from './payment'
import loginEmailsSlice from './login-emails'
import pathnameSlice from './pathname'

const store = configureStore({
    reducer: {
        loginEmails: loginEmailsSlice.reducer,
        payment: paymentSlice.reducer,
        isLoggedIn: isLoggedInSlice.reducer,
        pathname: pathnameSlice.reducer,
    },
})

export default store

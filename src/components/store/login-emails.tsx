import { createSlice } from '@reduxjs/toolkit'
import { createCookie, getCookie } from '../helpers/localStorageFunctions'

type initialType = {
    startSignUpEmail: string | null
    signUpEmail: string | null
    signInEmail: string | null
}

const initialState: initialType = {
    startSignUpEmail: null,
    signUpEmail: null,
    signInEmail: null,
}

const loginEmailsSlice = createSlice({
    name: 'loginEmails',
    initialState: initialState,

    reducers: {
        createEmailsAtLoadingPage(_, action) {
            const emails = action.payload

            return emails
        },

        getAllLoginEmails() {
            const cookieStartSignUpEmail = getCookie('startSignUpEmail')
            const cookieSignUpEmail = getCookie('signUpEmail')
            const cookieSignInEmail = getCookie('signInEmail')

            const emailObject = {
                startSignUpEmail: cookieStartSignUpEmail,
                signUpEmail: cookieSignUpEmail,
                signInEmail: cookieSignInEmail,
            }
    
            return emailObject
        },

        createEmailsCookie(state, action) {
            const emailFunction = action.payload.emailFunction
            const email = action.payload.email

            createCookie(emailFunction, email)

            const emailsObject = {
                ...state,
                emailFunction: email,
            }

            return emailsObject
        },
    },
})

export const loginEmailsActions = loginEmailsSlice.actions
export default loginEmailsSlice

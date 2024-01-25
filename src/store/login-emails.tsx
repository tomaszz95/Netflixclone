import { createSlice } from '@reduxjs/toolkit'
import { createCookie, getCookie } from '../components/utils/localStorageFunctions'
import { initialLoginStateValues } from '../constans/initialStoreValues'

const loginEmailsSlice = createSlice({
    name: 'loginEmails',
    initialState: initialLoginStateValues,

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

import { createSlice } from '@reduxjs/toolkit'
import { createCookie, getCookie } from '../helpers/localStorageFunctions'

type initialType = {
    userEmail: null | string
    userSubscriptionType: null | string
    userPaid: boolean
    howToPay: string
    selectedDevices: string[]
    selectedLanguages: string[]
    selectedNames: string[]
    selectedMovies: string[]
    isFullySet: boolean
}

const initialState: initialType = {
    userEmail: null,
    userSubscriptionType: null,
    userPaid: false,
    howToPay: '',
    selectedDevices: [],
    selectedLanguages: [],
    selectedNames: [],
    selectedMovies: [],
    isFullySet: false,
}

const paymentSlice = createSlice({
    name: 'payment',
    initialState: initialState,

    reducers: {
        getAllPaymentCookie() {
            const paymentUserObject = getCookie('payment')

            let cookieParsed = null

            if (paymentUserObject !== null) {
                cookieParsed = JSON.parse(paymentUserObject)
            }

            return cookieParsed
        },

        createPaymentCookie(_, action) {
            const userEmailNew = action.payload.userEmail
            const userSubscriptionTypeNew = action.payload.userSubscriptionType
            const userPaidNow = action.payload.userPaid
            const howToPayNow = action.payload.howToPay

            const userObject: initialType = {
                userEmail: userEmailNew,
                userSubscriptionType: userSubscriptionTypeNew,
                userPaid: userPaidNow,
                howToPay: howToPayNow,
                selectedDevices: [],
                selectedLanguages: [],
                selectedNames: [],
                selectedMovies: [],
                isFullySet: false,
            }

            createCookie('payment', JSON.stringify(userObject))

            return userObject
        },

        changePaymentValue(state, action) {
            const valueName = action.payload.name
            const value = action.payload.value

            const userObject: initialType = {
                ...state,
                [valueName]: value,
            }

            createCookie('payment', JSON.stringify(userObject))

            return userObject
        },
    },
})

export const paymentActions = paymentSlice.actions
export default paymentSlice

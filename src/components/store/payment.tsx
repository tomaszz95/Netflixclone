import { createSlice } from '@reduxjs/toolkit'
import { createCookie, getCookie } from '../helpers/localStorageFunctions'

type initialType = {
    userEmail: null | string
    userSubscriptionType: null | string
    userPaid: boolean
    howToPay: string
}

const initialState: initialType = {
    userEmail: null,
    userSubscriptionType: null,
    userPaid: false,
    howToPay: '',
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
            }

            createCookie('payment', JSON.stringify(userObject))

            return userObject
        },
        
        changeHowToPayValue(state, action) {
            const howToPayNow = action.payload

            const userObject: initialType = {
                ...state,
                howToPay: howToPayNow,
            }

            createCookie('payment', JSON.stringify(userObject))

            return userObject
        },

        changeIfUserPayedValue(state, action) {
            const userPaidNow = action.payload

            const userObject: initialType = {
                ...state,
                userPaid: userPaidNow,
            }

            createCookie('payment', JSON.stringify(userObject))

            return userObject
        },
    },
})

export const paymentActions = paymentSlice.actions
export default paymentSlice

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

        editProfilInfo(state, action) {
            const newName = action.payload.selectedName
            const oldName = action.payload.oldName
            const selectedLanguage = action.payload.selectedLanguage

            const updatedSelectedNames = state.selectedNames.map((name) => (name === oldName ? newName : name))

            const updatedSelectedLanguages = state.selectedLanguages.includes(selectedLanguage)
                ? state.selectedLanguages
                : [...state.selectedLanguages, selectedLanguage]

            const updatedUserObject: initialType = {
                ...state,
                selectedNames: updatedSelectedNames,
                selectedLanguages: updatedSelectedLanguages,
            }

            createCookie('payment', JSON.stringify(updatedUserObject))

            return updatedUserObject
        },

        deleteProfile(state, action) {
            const deleteValue = action.payload
            const updatedSelectedNames = state.selectedNames.filter((name) => name !== deleteValue)

            const userObject: initialType = {
                ...state,
                selectedNames: updatedSelectedNames,
            }

            createCookie('payment', JSON.stringify(userObject))

            return userObject
        },
    },
})

export const paymentActions = paymentSlice.actions
export default paymentSlice

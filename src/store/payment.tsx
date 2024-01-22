import { createSlice } from '@reduxjs/toolkit'
import { createCookie, getCookie } from '../components/utils/localStorageFunctions'
import { initialPaymentStateValues } from '../types/initialTypes'
import { initialPaymentType } from '../types/types'

const paymentSlice = createSlice({
    name: 'payment',
    initialState: initialPaymentStateValues,

    reducers: {
        getAllPaymentCookie() {
            const paymentUserObject = getCookie('payment')

            let cookieParsed = initialPaymentStateValues

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

            const userObject: initialPaymentType = {
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

            const userObject: initialPaymentType = {
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

            const updatedUserObject: initialPaymentType = {
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

            const userObject: initialPaymentType = {
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

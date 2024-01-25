import { initialEmailType, initialPaymentType } from '../types/storeTypes'

export const initialPaymentStateValues: initialPaymentType = {
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

export const initialLoginStateValues: initialEmailType = {
    startSignUpEmail: null,
    signUpEmail: null,
    signInEmail: null,
}

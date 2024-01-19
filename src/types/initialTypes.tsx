import { initialPaymentType } from './types'

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

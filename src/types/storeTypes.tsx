export type initialPaymentType = {
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

export type initialEmailType = {
    startSignUpEmail: string | null
    signUpEmail: string | null
    signInEmail: string | null
}

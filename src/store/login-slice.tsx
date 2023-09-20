import { createSlice } from '@reduxjs/toolkit'
import { LoginDataInitial } from '../components/helpers/initialStates'
import { getLoginData } from '../components/helpers/dummyLoginData'

const loginDataSlice = createSlice({
    name: 'loginData',
    initialState: LoginDataInitial,

    reducers: {
        setLoginInfo(_, action) {
            const loginUserData = getLoginData(action.payload)
            localStorage.setItem('loginUserData', action.payload)

            return loginUserData
        },
        getLoginInfo() {
            const localStorageEmail = localStorage.getItem('loginUserData')
            let loginUserData

            if (localStorageEmail) {
                loginUserData = getLoginData(localStorageEmail)
            }

            return loginUserData
        },
        deleteLoginInfo() {
            localStorage.removeItem('loginUserData')
            return LoginDataInitial
        },
    },
})

export const loginDataActions = loginDataSlice.actions
export default loginDataSlice

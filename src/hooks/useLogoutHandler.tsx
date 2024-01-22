import { ThunkDispatch } from '@reduxjs/toolkit'
import auth from '../../firebase'
import { signOut } from 'firebase/auth'
import { isLoggedInActions } from '../store/loggedin'
import { deleteCookie } from '../components/utils/localStorageFunctions'

type DispatchType = ThunkDispatch<any, any, any>

const useLogoutHandler = (dispatch: DispatchType) => {
    signOut(auth)

    dispatch(isLoggedInActions.createLoggedCookie('false'))
    deleteCookie('signInEmail')
    deleteCookie('signUpEmail')
    deleteCookie('startSignUpEmail')
}

export default useLogoutHandler

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { paymentActions } from '../../store/payment'
import { loginEmailsActions } from '../../store/login-emails'
import { isLoggedInActions } from '../../store/loggedin'

type ChildrenLayoutType = {
    children: React.ReactNode
}

const ReactProviderCookiesData: React.FC<ChildrenLayoutType> = ({ children }) => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    useEffect(() => {
        dispatch(loginEmailsActions.getAllLoginEmails())
        dispatch(paymentActions.getAllPaymentCookie())
        dispatch(isLoggedInActions.getLoggedInCookie())
    }, [])

    return <>{children}</>
}

export default ReactProviderCookiesData

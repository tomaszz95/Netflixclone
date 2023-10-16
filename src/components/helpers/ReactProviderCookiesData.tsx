import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import { loginEmailsActions } from '../store/login-emails'

type ChildrenLayoutType = {
    children: React.ReactNode
}

const ReactProviderCookiesData: React.FC<ChildrenLayoutType> = ({ children }) => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    useEffect(() => {
        dispatch(loginEmailsActions.getAllLoginEmails())
    }, [])

    return <>{children}</>
}

export default ReactProviderCookiesData

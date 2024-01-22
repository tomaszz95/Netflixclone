import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Router from 'next/router'
import { useRouter } from 'next/router'

import ReactProviderCookiesData from '../../../helpers/ReactProviderCookiesData'
import styles from './SignupLayout.module.css'
import SignupLayoutHeader from './SignupLayoutHeader'
import SignupLayoutFooter from './SignupLayoutFooter'

type ChildrenLayoutType = {
    children: React.ReactNode
}

const SignupLayout: React.FC<ChildrenLayoutType> = ({ children }) => {
    const [logOutButton, setLogOutButton] = useState(true)
    const [showLanguageSelect, setShowLanguageSelect] = useState(true)
    const loginEmailsData = useSelector<any, any>((state) => state.loginEmails)
    const paymentData = useSelector<any, any>((state) => state.payment)
    const isLoggedIn = useSelector<any, any>((state) => state.isLoggedIn)
    const router = useRouter()

    useEffect(() => {
        if (isLoggedIn === 'true' && paymentData !== null && paymentData.isFullySet) {
            Router.push('/profilgate')
        }

        if (router.pathname.includes('simpleSetup')) {
            setShowLanguageSelect(false)
        }

        if (loginEmailsData.signUpEmail !== null || loginEmailsData.signInEmail !== null) {
            setLogOutButton(true)
        } else {
            setLogOutButton(false)
        }
    }, [loginEmailsData, isLoggedIn])

    return (
        <ReactProviderCookiesData>
            <main className={styles.main}>
                <SignupLayoutHeader isLogOut={logOutButton} />
                <section className={styles.section}>{children}</section>
                <SignupLayoutFooter showLanguageSelect={showLanguageSelect} />
            </main>
        </ReactProviderCookiesData>
    )
}

export default SignupLayout

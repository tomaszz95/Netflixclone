import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import Link from 'next/link'
import Router from 'next/router'
import { useRouter } from 'next/router'

import useLogoutHandler from '../../hooks/useLogoutHandler'
import ReactProviderCookiesData from '../../helpers/ReactProviderCookiesData'
import { changingLanguage } from '../../helpers/dummyActionFunctions'
import styles from './SignupLayout.module.css'

type ChildrenLayoutType = {
    children: React.ReactNode
}

const SignupLayout: React.FC<ChildrenLayoutType> = ({ children }) => {
    const [logOutButton, setLogOutButton] = useState(true)
    const [showLanguageSelect, setShowLanguageSelect] = useState(true)
    const loginEmailsData = useSelector<any, any>((state) => state.loginEmails)
    const paymentData = useSelector<any, any>((state) => state.payment)
    const isLoggedIn = useSelector<any, any>((state) => state.isLoggedIn)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const router = useRouter()

    const handleLogout = () => {
        useLogoutHandler(dispatch)
    }

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
                <header className={styles.header}>
                    <div className={styles.headerContainer}>
                        <Link href="/">
                            <img src="/photos/netflixLogo.png" alt="Netflix Logo" />
                        </Link>
                        {logOutButton ? (
                            <Link href="/logout" className={styles.loginLink} onClick={handleLogout}>
                                Sign Out
                            </Link>
                        ) : (
                            <Link href="/login" className={styles.loginLink}>
                                Sign In
                            </Link>
                        )}
                    </div>
                </header>
                <section className={styles.section}>{children}</section>
                <footer className={styles.footer}>
                    <div className={styles.footerContainer}>
                        <a href="#" className={styles.question}>
                            Question? Contact us.
                        </a>
                        <div className={styles.links}>
                            <a href="#">FAQ</a>
                            <a href="#">Help Center</a>
                            <a href="#">Netflix Shop</a>
                            <a href="#">Terms of Use</a>
                            <a href="#">Privacy</a>
                            <a href="#">Cookie Preferences</a>
                            <a href="#">Corporate Information</a>
                            <a href="#">Ad Choices</a>
                        </div>
                        {showLanguageSelect && (
                            <select
                                name="language"
                                className={styles.select}
                                onChange={changingLanguage}
                                defaultValue="English"
                            >
                                <option value="Polish">Polish</option>
                                <option value="English">English</option>
                            </select>
                        )}
                    </div>
                </footer>
            </main>
        </ReactProviderCookiesData>
    )
}

export default SignupLayout

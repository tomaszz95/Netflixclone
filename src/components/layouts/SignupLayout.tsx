import Link from 'next/link'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { useRouter } from 'next/router'

import { isLoggedInActions } from '../store/loggedin'
import ReactProviderCookiesData from '../helpers/ReactProviderCookiesData'
import { deleteCookie } from '../helpers/localStorageFunctions'
import auth from '../../../firebase'
import { signOut } from 'firebase/auth'
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
    const router = useRouter()
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

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

    const changeLanguage = () => {
        console.log('This select should change language..')
    }

    const logoutHandler = () => {
        signOut(auth)

        dispatch(isLoggedInActions.createLoggedCookie('false'))
        deleteCookie('signInEmail')
        deleteCookie('signUpEmail')
        deleteCookie('startSignUpEmail')
    }

    return (
        <ReactProviderCookiesData>
            <main className={styles.main}>
                <header className={styles.header}>
                    <div className={styles.headerContainer}>
                        <Link href="/">
                            <img src="/photos/netflixLogo.png" alt="Netflix Logo" />
                        </Link>
                        {logOutButton ? (
                            <Link href="/logout" className={styles.loginLink} onClick={logoutHandler}>
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
                                onChange={changeLanguage}
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

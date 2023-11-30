import styles from './TransferProfileView.module.css'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { signOut } from 'firebase/auth'
import auth from '../../../../firebase'
import { isLoggedInActions } from '../../store/loggedin'
import { deleteCookie } from '../../helpers/localStorageFunctions'
import TransferProfileMain from './TransferProfileMain'

const TransferProfileView = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    const logoutHandler = () => {
        signOut(auth)

        dispatch(isLoggedInActions.createLoggedCookie('false'))
        deleteCookie('signInEmail')
        deleteCookie('signUpEmail')
        deleteCookie('startSignUpEmail')
    }

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <Link href="/">
                        <img src="/photos/netflixLogo.png" alt="Netflix Logo" />
                    </Link>

                    <Link href="/logout" className={styles.loginLink} onClick={logoutHandler}>
                        Sign Out
                    </Link>
                </div>
            </header>
            <section className={styles.section}>
                <TransferProfileMain />
            </section>
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
                </div>
            </footer>
        </main>
    )
}

export default TransferProfileView

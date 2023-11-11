import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import Image from 'next/image'
import Link from 'next/link'

import { isLoggedInActions } from '../store/loggedin'
import { deleteCookie } from '../helpers/localStorageFunctions'
import auth from '../../../firebase'
import { signOut } from 'firebase/auth'
import styles from './HeaderSection.module.css'

const HeaderSection = () => {
    const [isLogged, setIsLogged] = useState(false)
    const isLoggedIn = useSelector<any, any>((state) => state.isLoggedIn)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    const changeLanguage = () => {
        console.log('Should change language.. Omitted in the demo version')
    }

    useEffect(() => {
        if (isLoggedIn === 'true') {
            setIsLogged(true)
        }
    }, [isLoggedIn])

    const logoutHandler = () => {
        signOut(auth)

        dispatch(isLoggedInActions.createLoggedCookie('false'))
        deleteCookie('signInEmail')
        deleteCookie('signUpEmail')
        deleteCookie('startSignUpEmail')
    }

    return (
        <section className={styles.header}>
            <Image src="/photos/netflixLogo.png" alt="Netflix Logo" width="100" height="50" priority={true} />
            <div className={styles.headerBox}>
                <select name="language" className={styles.select} onChange={changeLanguage} defaultValue="English">
                    <option value="Polish">Polish</option>
                    <option value="English">English</option>
                </select>
                {isLogged ? (
                    <Link
                        role="button"
                        aria-label="Click to sign out"
                        className={styles.signBtn}
                        href="/logout"
                        onClick={logoutHandler}
                    >
                        Sign Out
                    </Link>
                ) : (
                    <Link role="button" aria-label="Link to sign in page" className={styles.signBtn} href="/login">
                        Sign In
                    </Link>
                )}
            </div>
        </section>
    )
}

export default HeaderSection

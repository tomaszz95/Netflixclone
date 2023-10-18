import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'

import { deleteCookie } from '../helpers/localStorageFunctions'
import auth from '../../../firebase'
import { signOut } from 'firebase/auth'
import styles from './HeaderSection.module.css'

const HeaderSection = () => {
    const [isLogged, setIsLogged] = useState(false)
    const loginEmailsData = useSelector<any, any>((state) => state.loginEmails)

    const changeLanguage = () => {
        console.log('This select should change language..')
    }

    useEffect(() => {
        if (loginEmailsData.signUpEmail !== null || loginEmailsData.signInEmail !== null) {
            setIsLogged(true)
        }
    }, [loginEmailsData])

    const logoutHandler = () => {
        signOut(auth)

        deleteCookie('signInEmail')
        deleteCookie('signUpEmail')
        deleteCookie('startSignUpEmail')
    }

    return (
        <section className={styles.header}>
            <Image src="/photos/netflixLogo.png" alt="Netflix Logo" width="100" height="50" priority={true} />
            <div className={styles.headerBox}>
                <select name="language" className={styles.select} onChange={changeLanguage}>
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

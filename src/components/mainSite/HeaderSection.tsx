import { useState, useEffect } from 'react'
import Image from 'next/image'

import { getCookies } from '../helpers/localStorageFunctions'

import styles from './HeaderSection.module.css'

const HeaderSection = () => {
    const [isLogged, setIsLogged] = useState(false)

    const changeLanguage = () => {
        console.log('Should change language.. In progress')
    }

    useEffect(() => {
        const cookieLogin = getCookies('loginUserEmail')
        const cookieSignUp = getCookies('signUpEmail')

        if (cookieLogin !== null || !cookieSignUp !== null) {
            setIsLogged(true)
        }
    }, [])

    return (
        <section className={styles.header}>
            <Image src="/photos/netflixLogo.png" alt="Netflix Logo" width="100" height="50" priority={true} />
            <div className={styles.headerBox}>
                <select name="language" className={styles.select} onChange={changeLanguage}>
                    <option value="Polish">Polish</option>
                    <option value="English">English</option>
                </select>
                {isLogged ? (
                    <a role="button" aria-label="Click to sign out" className={styles.signBtn} href="/logout">
                        Sign Out
                    </a>
                ) : (
                    <a role="button" aria-label="Link to sign in page" className={styles.signBtn} href="/login">
                        Sign In
                    </a>
                )}
            </div>
        </section>
    )
}

export default HeaderSection

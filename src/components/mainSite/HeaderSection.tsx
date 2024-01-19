import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import Image from 'next/image'
import Link from 'next/link'

import useLogoutHandler from '../../hooks/useLogoutHandler'
import { changingLanguage } from '../../helpers/dummyActionFunctions'
import styles from './HeaderSection.module.css'

const HeaderSection = () => {
    const [isLogged, setIsLogged] = useState(false)
    const isLoggedIn = useSelector<any, any>((state) => state.isLoggedIn)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    const handleLogout = () => {
        useLogoutHandler(dispatch)
    }

    useEffect(() => {
        if (isLoggedIn === 'true') {
            setIsLogged(true)
        }
    }, [isLoggedIn])

    return (
        <section className={styles.header}>
            <Image src="/photos/netflixLogo.png" alt="Netflix Logo" width="100" height="50" />
            <div className={styles.headerBox}>
                <select name="language" className={styles.select} onChange={changingLanguage} defaultValue="English">
                    <option value="Polish">Polish</option>
                    <option value="English">English</option>
                </select>
                {isLogged ? (
                    <Link
                        role="button"
                        aria-label="Click to sign out"
                        className={styles.signBtn}
                        href="/logout"
                        onClick={handleLogout}
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

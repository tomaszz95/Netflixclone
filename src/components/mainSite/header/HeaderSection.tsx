import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import Image from 'next/image'
import Link from 'next/link'

import NETFLIX_LOGO from '../../../assets/photos/netflixLogo.png'
import useLogoutHandler from '../../../hooks/useLogoutHandler'
import styles from './HeaderSection.module.css'
import SelectLanguage from '../../UI/SelectLanguage'

const HeaderSection = () => {
    const [isLogged, setIsLogged] = useState(false)
    const isLoggedIn = useSelector<any, any>((state) => state.isLoggedIn)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    useEffect(() => {
        if (isLoggedIn === 'true') {
            setIsLogged(true)
        }
    }, [isLoggedIn])

    return (
        <section className={styles.header}>
            <Image src={NETFLIX_LOGO} alt="Netflix Logo icon" width="120" height={70} className={styles.netflixLogo} />
            <div className={styles.headerBox}>
                <SelectLanguage style="black" />
                {isLogged ? (
                    <Link
                        aria-label="Click to sign out"
                        className={styles.signBtn}
                        href="/logout"
                        onClick={() => useLogoutHandler(dispatch)}
                    >
                        Sign Out
                    </Link>
                ) : (
                    <Link aria-label="Link to sign in page" className={styles.signBtn} href="/login">
                        Sign In
                    </Link>
                )}
            </div>
        </section>
    )
}

export default HeaderSection

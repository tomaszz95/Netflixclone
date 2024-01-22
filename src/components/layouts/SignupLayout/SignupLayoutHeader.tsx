import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import useLogoutHandler from '../../../hooks/useLogoutHandler'
import NETFLIX_LOGO from '../../../assets/photos/netflixLogo.png'
import styles from './SignupLayoutHeader.module.css'

type ComponentType = {
    isLogOut: boolean
}

const SignupLayoutHeader: React.FC<ComponentType> = ({ isLogOut }) => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link href="/">
                    <Image src={NETFLIX_LOGO} alt="Netflix Logo" width={120} />
                </Link>
                {isLogOut ? (
                    <Link
                        href="/logout"
                        className={styles.loginLink}
                        onClick={() => useLogoutHandler(dispatch)}
                        aria-label="Click to sign out"
                    >
                        Sign Out
                    </Link>
                ) : (
                    <Link href="/login" className={styles.loginLink} aria-label="Link to sign in page">
                        Sign In
                    </Link>
                )}
            </div>
        </header>
    )
}

export default SignupLayoutHeader

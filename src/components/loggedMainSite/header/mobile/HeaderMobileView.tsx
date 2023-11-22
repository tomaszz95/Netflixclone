import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { useState, useEffect } from 'react'

import auth from '../../../../../firebase'
import { signOut } from 'firebase/auth'
import { isLoggedInActions } from '../../../store/loggedin'
import { deleteCookie } from '../../../helpers/localStorageFunctions'
import styles from './HeaderMobileView.module.css'
import HeaderMobileBurgerNav from './HeaderMobileBurgerNav'
import HeaderMobileProfile from './HeaderMobileProfile'

type ComponentType = {
    chosenUser: string
}

const HeaderMobileView: React.FC<ComponentType> = ({ chosenUser }) => {
    const [isNavVisible, setIsNavVisible] = useState(false)
    const [chosenLinkUrl, setChosenLinkUrl] = useState('')
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const router = useRouter()

    useEffect(() => {
        if (router.pathname !== undefined) {
            setChosenLinkUrl(router.pathname)
        }
    }, [chosenUser])

    const logoutHandler = () => {
        signOut(auth)

        dispatch(isLoggedInActions.createLoggedCookie('false'))
        deleteCookie('chosenUser')
        deleteCookie('signInEmail')
        deleteCookie('signUpEmail')
        deleteCookie('startSignUpEmail')
    }

    const hideNavHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement
        if (target.id === 'navContainer') {
            setIsNavVisible(false)
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <button
                    aria-label="Open navigation button"
                    type="button"
                    className={styles.burgerBtn}
                    onClick={() => setIsNavVisible(!isNavVisible)}
                >
                    <img src="/icons/burgerIcon.png" alt="" className={styles.burgerImg} />
                </button>
                <div
                    className={`${styles.navWrapper} ${isNavVisible ? styles.visible : ''}`}
                    onClick={hideNavHandler}
                    id="navContainer"
                >
                    <nav className={styles.navigation}>
                        <HeaderMobileProfile chosenUser={chosenUser} />
                        <div className={styles.line}></div>
                        <ol className={styles.linksContainer}>
                            <li className={styles.genreLink}>
                                <Link
                                    href={`${chosenUser === 'kids' ? '/kids' : '/browse'}`}
                                    className={`${styles.profileLink} ${
                                        chosenLinkUrl.includes('browse') || chosenLinkUrl.includes('kids')
                                            ? styles.chosenLink
                                            : ''
                                    }`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className={styles.genreLink}>
                                <Link href="/mylist" className={styles.profileLink} onClick={logoutHandler}>
                                    My List
                                </Link>
                            </li>
                            <HeaderMobileBurgerNav chosenUser={chosenUser} />
                        </ol>
                    </nav>
                </div>
                <Link href={`${chosenUser === 'kids' ? '/kids' : '/browse'}`}>
                    <img src="/photos/netflixLogo.png" alt="Netflix Logo" className={styles.netflixLogo} />
                </Link>
            </div>
            <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>
    )
}

export default HeaderMobileView

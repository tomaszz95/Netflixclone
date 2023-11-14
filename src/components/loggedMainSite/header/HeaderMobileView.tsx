import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import auth from '../../../../firebase'
import { signOut } from 'firebase/auth'
import { isLoggedInActions } from '../../store/loggedin'
import { deleteCookie } from '../../helpers/localStorageFunctions'
import EditProfileImage from '../../profile/editProfile/EditProfileImage'
import styles from './HeaderMobileView.module.css'
import { mobileNavigationLinks } from '../../helpers/siteText'
import { useState, useEffect } from 'react'

type ComponentType = {
    chosenUser: string
}

const HeaderMobileView: React.FC<ComponentType> = ({ chosenUser }) => {
    const [isNavVisible, setIsNavVisible] = useState(false)
    const [chosenLinkUrl, setChosenLinkUrl] = useState('')
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const router = useRouter()
    let userName = 'User'

    useEffect(() => {
        if (router.pathname !== undefined) {
            setChosenLinkUrl(router.pathname)
        }

        if (chosenUser !== '') {
            userName = chosenUser.charAt(0).toUpperCase() + chosenUser.slice(1)
        }
    }, [])

    const logoutHandler = () => {
        signOut(auth)

        dispatch(isLoggedInActions.createLoggedCookie('false'))
        deleteCookie('chosenUser')
        deleteCookie('signInEmail')
        deleteCookie('signUpEmail')
        deleteCookie('startSignUpEmail')
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
                <nav className={`${styles.navigation} ${isNavVisible ? styles.visible : ''}`}>
                    <div className={styles.profileContainer}>
                        <div className={styles.profileBox}>
                            <EditProfileImage profilName={chosenUser} />
                            <div className={styles.profileBoxFlex}>
                                <span className={styles.profileName}>{userName}</span>
                                <Link href="/profilgate" className={styles.profileSwitch}>
                                    Switch Profiles
                                </Link>
                            </div>
                        </div>
                        <div className={styles.profileLinkContainer}>
                            <Link href="/youraccount" className={styles.profileLink}>
                                Account
                            </Link>
                            <Link href="#" className={styles.profileLink}>
                                Help Center
                            </Link>
                            <Link href="/logout" className={styles.profileLink} onClick={logoutHandler}>
                                Sign Out of Netflix
                            </Link>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <ul className={styles.linksContainer}>
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
                        {mobileNavigationLinks.map((genre) => (
                            <li className={styles.genreLink} key={genre.link}>
                                <Link href={genre.link} className={styles.profileLink}>
                                    {genre.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <img src="/photos/netflixLogo.png" alt="Netflix Logo" className={styles.netflixLogo} />
            </div>
            <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>
    )
}

export default HeaderMobileView

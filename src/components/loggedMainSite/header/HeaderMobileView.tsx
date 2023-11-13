import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import auth from '../../../../firebase'
import { signOut } from 'firebase/auth'
import { isLoggedInActions } from '../../store/loggedin'
import { deleteCookie } from '../../helpers/localStorageFunctions'
import EditProfileImage from '../../profile/editProfile/EditProfileImage'
import styles from './HeaderMobileView.module.css'
import { mobileNavigationLinks } from '../../helpers/siteText'
import { useState } from 'react'

type ComponentType = {
    chosenUser: string
}

const HeaderMobileView: React.FC<ComponentType> = ({ chosenUser }) => {
    const [isNavVisible, setIsNavVisible] = useState(false)

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    let userName = 'User'

    if (chosenUser !== '') {
        userName = chosenUser.charAt(0).toUpperCase() + chosenUser.slice(1)
    }

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
            <button
                aria-label="Open navigation button"
                type="button"
                className={styles.burgerBtn}
                onClick={() => setIsNavVisible(!isNavVisible)}
            >
                <img src="/icons/burgerIcon.png" alt="" />
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
                <ul className={styles.linksContainer}>
                    {mobileNavigationLinks.map((genre) => (
                        <li className={styles.genreLink}>
                            <Link href={genre.link} className={styles.profileLink}>
                                {genre.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default HeaderMobileView

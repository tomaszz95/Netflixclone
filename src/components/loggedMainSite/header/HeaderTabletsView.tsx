import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { useState, useEffect } from 'react'
import Router from 'next/router'

import { navigationLinks } from '../../helpers/siteText'
import auth from '../../../../firebase'
import { signOut } from 'firebase/auth'
import { isLoggedInActions } from '../../store/loggedin'
import { deleteCookie } from '../../helpers/localStorageFunctions'
import EditProfileImage from '../../profile/editProfile/EditProfileImage'
import styles from './HeaderTabletsView.module.css'

type ComponentType = {
    chosenUser: string
}

const HeaderTabletsView: React.FC<ComponentType> = ({ chosenUser }) => {
    const [chosenUserState, setChosenUserState] = useState('')
    const [browseNavActive, setBrowseNavActive] = useState(false)
    const [kidsNavActive, setKidsNavActive] = useState(false)
    const [profileNavActive, setProfileNavActive] = useState(false)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    useEffect(() => {
        if (chosenUser !== '') {
            setChosenUserState(chosenUser.charAt(0).toUpperCase() + chosenUser.slice(1))
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

    const openNavHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement

        if (target.textContent === 'Browse' && chosenUser !== 'kids') {
            setBrowseNavActive(true)
        }

        if (target.textContent === 'Kids' && chosenUser === 'kids') {
            setKidsNavActive(true)
        } else if (target.textContent === 'Kids' && chosenUser !== 'kids') {
            Router.push('/profilgate')
        }

        if (target.textContent === chosenUser) {
            setProfileNavActive(true)
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.navBox}>
                <Link href={`${chosenUser === 'kids' ? '/kids' : '/browse'}`}>
                    <img src="/photos/netflixLogo.png" alt="Netflix Logo" className={styles.netflixLogo} />
                </Link>
                <button
                    type="button"
                    className={`${styles.navBtn} ${chosenUser !== 'kids' ? styles.active : ''}`}
                    disabled={chosenUser === 'kids'}
                    aria-label="Open navigation button"
                    onClick={openNavHandler}
                >
                    Browse
                </button>
                <div className={`${styles.browseNav} ${browseNavActive ? styles.active : ''}`}>
                    <nav className={styles.navigation}>
                        <div className={styles.homeNav}>
                            <li className={styles.genreLink}>
                                <Link
                                    href={`${chosenUser === 'kids' ? '/kids' : '/browse'}`}
                                    className={styles.profileLink}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className={styles.genreLink}>
                                <Link
                                    href="/mylist"
                                    className={`${styles.navLink} ${chosenUser === 'kids' ? '' : styles.active}`}
                                    onClick={logoutHandler}
                                >
                                    My List
                                </Link>
                            </li>
                        </div>
                        <div className={styles.navListItems}>
                            <ol className={styles.linksContainer}>
                                {navigationLinks.map((genre) => (
                                    <li className={styles.genreLink} key={genre.link}>
                                        <Link href={genre.link} className={styles.profileLink}>
                                            {genre.text}
                                        </Link>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </nav>
                </div>
                <button
                    type="button"
                    className={`${styles.navBtn} ${chosenUser === 'kids' ? styles.active : ''}`}
                    aria-label="Open navigation button"
                    onClick={openNavHandler}
                >
                    Kids
                </button>
                <div className={`${styles.kidsNav} ${kidsNavActive ? styles.active : ''}`}>
                    <nav className={styles.navigation}>
                        <div className={styles.homeNav}>
                            <li className={styles.genreLink}>
                                <Link
                                    href={`${chosenUser === 'kids' ? '/kids' : '/browse'}`}
                                    className={styles.profileLink}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className={styles.genreLink}>
                                <Link href="/mylist" className={styles.profileLink} onClick={logoutHandler}>
                                    My List
                                </Link>
                            </li>
                        </div>
                        <div className={styles.navListItems}>
                            <ol className={styles.linksContainer}>
                                {navigationLinks.map((genre) => (
                                    <li className={styles.genreLink} key={genre.link}>
                                        <Link href={genre.link} className={styles.profileLink}>
                                            {genre.text}
                                        </Link>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </nav>
                </div>
            </div>
            <div className={styles.searchBox}>
                <input type="text" placeholder="Search" className={styles.searchInput} />
                <button
                    type="button"
                    className={styles.navBtn}
                    aria-label="Open profile menu button"
                    onClick={openNavHandler}
                >
                    <EditProfileImage profilName={chosenUser} />
                    {chosenUserState}
                </button>
                <div className={`${styles.profileBox} ${profileNavActive ? styles.active : ''}`}>
                    <div className={styles.profileBoxFlex}>
                        <Link href="/profilgate" className={styles.profileSwitch}>
                            Switch Profiles
                        </Link>
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
            </div>
        </div>
    )
}

export default HeaderTabletsView

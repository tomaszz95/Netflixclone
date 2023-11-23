import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import auth from '../../../../../firebase'
import { signOut } from 'firebase/auth'
import { isLoggedInActions } from '../../../store/loggedin'
import { deleteCookie } from '../../../helpers/localStorageFunctions'
import { navigationBrowseLinks, navigationKidsLinks } from '../../../helpers/siteText'

import styles from './HeaderTabletsNav.module.css'

type ComponentType = {
    chosenUser: string
    onOpenNav: (e: React.MouseEvent<HTMLButtonElement>) => void
    navActive: boolean
}

const HeaderTabletsNav: React.FC<ComponentType> = ({ chosenUser, onOpenNav, navActive }) => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    const logoutHandler = () => {
        signOut(auth)

        dispatch(isLoggedInActions.createLoggedCookie('false'))
        deleteCookie('chosenUser')
        deleteCookie('signInEmail')
        deleteCookie('signUpEmail')
        deleteCookie('startSignUpEmail')
    }

    return (
        <>
            <button
                type="button"
                className={`${styles.navBtn} ${chosenUser !== 'kids' ? styles.active : ''}`}
                disabled={chosenUser === 'kids'}
                aria-label="Open navigation button"
                onClick={onOpenNav}
            >
                Browse
            </button>
            {chosenUser !== 'kids' ? (
                <Link href="/profilgate" className={styles.navBtn} aria-label="Go to profile gate">
                    Kids
                </Link>
            ) : (
                <button
                    type="button"
                    className={`${styles.navBtn} ${chosenUser === 'kids' ? styles.active : ''}`}
                    disabled={chosenUser !== 'kids'}
                    aria-label="Open navigation button"
                    onClick={onOpenNav}
                >
                    Kids
                </button>
            )}
            <div className={`${styles.browseNav} ${navActive ? styles.active : ''}`}>
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
                    </div>
                    <div className={styles.navListItems}>
                        {chosenUser !== 'kids' ? (
                            <ol className={styles.linksContainer}>
                                {navigationBrowseLinks.map((genre) => (
                                    <li className={styles.genreLink} key={genre.link}>
                                        <Link href={genre.link} className={styles.profileLink}>
                                            {genre.text}
                                        </Link>
                                    </li>
                                ))}
                            </ol>
                        ) : (
                            <ol className={styles.linksContainer}>
                                {navigationKidsLinks.map((genre) => (
                                    <li className={styles.genreLink} key={genre.text}>
                                        <Link href={genre.link} className={styles.profileLink}>
                                            {genre.text}
                                        </Link>
                                    </li>
                                ))}
                            </ol>
                        )}
                    </div>
                </nav>
            </div>
        </>
    )
}

export default HeaderTabletsNav

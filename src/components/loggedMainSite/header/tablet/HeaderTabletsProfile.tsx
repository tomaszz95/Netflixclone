import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { useState, useEffect } from 'react'
import EditProfileImage from '../../../profile/editProfile/EditProfileImage'
import auth from '../../../../../firebase'
import { useRouter } from 'next/router'
import { signOut } from 'firebase/auth'
import { isLoggedInActions } from '../../../store/loggedin'
import { deleteCookie } from '../../../helpers/localStorageFunctions'
import styles from './HeaderTabletsProfile.module.css'
import useSearchInput from '../../../customHooks/useSearchInput'

type ComponentType = {
    chosenUser: string
    onOpenNav: (e: React.MouseEvent<HTMLButtonElement>) => void
    browseNavActive: boolean
    query: string | string[] | undefined
}

const HeaderTabletsProfile: React.FC<ComponentType> = ({ chosenUser, onOpenNav, browseNavActive, query }) => {
    const [chosenUserState, setChosenUserState] = useState('')
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const router = useRouter()

    const { inputSearchValue, refInput, handleInputChange } = useSearchInput({ chosenUser, query })

    const logoutHandler = () => {
        signOut(auth)

        dispatch(isLoggedInActions.createLoggedCookie('false'))
        deleteCookie('chosenUser')
        deleteCookie('signInEmail')
        deleteCookie('signUpEmail')
        deleteCookie('startSignUpEmail')
    }

    useEffect(() => {
        if (chosenUser !== '') {
            setChosenUserState(chosenUser.charAt(0).toUpperCase() + chosenUser.slice(1))
        }
    }, [chosenUser])

    return (
        <div className={styles.searchBox}>
            {!router.pathname.includes('genre') &&
                !router.pathname.includes('movie') &&
                !router.pathname.includes('series') && (
                    <input
                        type="text"
                        placeholder="Search"
                        className={styles.searchInput}
                        onChange={handleInputChange}
                        value={inputSearchValue}
                        disabled={router.pathname.includes('genre')}
                        ref={refInput}
                        aria-label="Search bar"
                    />
                )}
            {chosenUser !== 'kids' ? (
                <button
                    type="button"
                    className={styles.navBtn}
                    aria-label="Open profile menu button"
                    onClick={onOpenNav}
                >
                    <EditProfileImage profilName={chosenUser} />
                    {chosenUserState}
                </button>
            ) : (
                <Link className={styles.exitKidsBtn} aria-label="Exit kids site" href="/profilgate">
                    Exit Kids
                </Link>
            )}

            <div className={`${styles.profileBox} ${browseNavActive ? styles.active : ''}`}>
                <div className={styles.profileBoxFlex}>
                    <Link href="/profilgate" className={styles.profileLink}>
                        Switch Profiles
                    </Link>
                </div>
                <div className={styles.profileLinkContainer}>
                    <Link href="/profile/youraccount" className={styles.profileLink}>
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
    )
}

export default HeaderTabletsProfile

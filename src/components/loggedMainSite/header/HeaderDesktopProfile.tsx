import styles from './HeaderDesktopProfile.module.css'

import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { useState, useEffect } from 'react'
import EditProfileImage from '../../profile/editProfile/EditProfileImage'
import auth from '../../../../firebase'
import { signOut } from 'firebase/auth'
import { isLoggedInActions } from '../../store/loggedin'
import { deleteCookie } from '../../helpers/localStorageFunctions'

type ComponentType = {
    chosenUser: string
}

const HeaderDesktopProfile: React.FC<ComponentType> = ({ chosenUser }) => {
    const [chosenUserState, setChosenUserState] = useState('')
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

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
        <div className={styles.notificationBox}>
            <button
                className={styles.notificationButton}
                type="button"
                aria-label="Click to open notofications"
            ></button>
            <div className={styles.notification}>
                <img
                    src="https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABeydawaaq1x6t59V75n4fSKIWAn-JrxXIk40bkQ7vKeG0gXclKxf90Dell3MPo_rvDxPAgDBqvkWCZoMF7aRaI-wBQrlCoskHjEAo50mg57jOf_51iRto29ePzRAGNDqHvxI8DGImnPaOzk.jpg?r=2ec"
                    alt="Best christmas ever image!"
                />
                <div className={styles.notificationContent}>
                    <p className={styles.notificationText}>Top 10 movies: World</p>
                    <p className={styles.notificationText}>See what's popular</p>
                    <span className={styles.notificationTime}>1 week ago</span>
                </div>
            </div>

            {chosenUser !== 'kids' ? (
                <button type="button" className={styles.navBtn} aria-label="Open profile menu button">
                    <EditProfileImage profilName={chosenUser} />
                    {chosenUserState}
                </button>
            ) : (
                <Link className={styles.exitKidsBtn} aria-label="Exit kids site" href="/profilgate">
                    Exit Kids
                </Link>
            )}

            <div className={styles.profileBox}>
                <div className={styles.profileBoxFlex}>
                    <EditProfileImage profilName="kids" />
                    <Link href="/kids" className={styles.profileLink}>
                        Kids
                    </Link>
                </div>
                <div className={styles.profileLinkContainer}>
                    <div className={styles.profileBoxFlex}>
                        <img src="/icons/pencilIcon" alt="" />
                        <Link href="/profile/manage" className={styles.profileLink}>
                            Manage Profiles
                        </Link>
                    </div>
                    <div className={styles.profileBoxFlex}>
                        <img src="/icons/pencilIcon" alt="" />
                        <Link href="/profile/transfer" className={styles.profileLink}>
                            Transfer Profile
                        </Link>
                    </div>
                    <div className={styles.profileBoxFlex}>
                        <img src="/icons/pencilIcon" alt="" />
                        <Link href="/profile/youraccount" className={styles.profileLink}>
                            Account
                        </Link>
                    </div>
                    <div className={styles.profileBoxFlex}>
                        <img src="/icons/pencilIcon" alt="" />
                        <Link href="#" className={styles.profileLink}>
                            Help Center
                        </Link>
                    </div>
                    <Link href="/logout" className={styles.profileLink} onClick={logoutHandler}>
                        Sign Out of Netflix
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeaderDesktopProfile

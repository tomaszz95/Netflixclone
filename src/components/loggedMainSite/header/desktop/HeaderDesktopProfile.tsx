import styles from './HeaderDesktopProfile.module.css'

import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { useState, useRef } from 'react'
import EditProfileImage from '../../../profile/editProfile/EditProfileImage'
import auth from '../../../../../firebase'
import { signOut } from 'firebase/auth'
import { isLoggedInActions } from '../../../store/loggedin'
import { deleteCookie, createCookie } from '../../../helpers/localStorageFunctions'

type ComponentType = {
    chosenUser: string
}

const HeaderDesktopProfile: React.FC<ComponentType> = ({ chosenUser }) => {
    const [showNotification, setShowNotification] = useState(false)
    const [showProfile, setShowProfile] = useState(false)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const timerNotificationRef = useRef<number | null>(null)
    const timerProfileRef = useRef<number | null>(null)

    const handleNotificationMouseEnter = () => {
        setShowProfile(false)

        if (timerNotificationRef.current) {
            clearTimeout(timerNotificationRef.current)
        }

        setShowNotification(true)
    }

    const handleNotificationMouseLeave = () => {
        timerNotificationRef.current = window.setTimeout(() => {
            setShowNotification(false)
        }, 300)
    }

    const handleProfileMouseEnter = () => {
        setShowNotification(false)

        if (timerProfileRef.current) {
            clearTimeout(timerProfileRef.current)
        }

        setShowProfile(true)
    }

    const handleProfileMouseLeave = () => {
        timerProfileRef.current = window.setTimeout(() => {
            setShowProfile(false)
        }, 300)
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
        <div className={styles.headerRight}>
            {chosenUser !== 'kids' ? (
                <div className={styles.notificationBox}>
                    <button
                        className={styles.notificationButton}
                        type="button"
                        aria-label="Click to open notifications"
                        onMouseEnter={handleNotificationMouseEnter}
                        onMouseLeave={handleNotificationMouseLeave}
                    >
                        <img src="/icons/bellIcon.png" alt="" />
                    </button>
                    <Link
                        href="/genre/topRatedMovies"
                        className={`${styles.notification} ${showNotification ? styles.showNotification : ''}`}
                        onMouseEnter={handleNotificationMouseEnter}
                        onMouseLeave={handleNotificationMouseLeave}
                    >
                        <div className={styles.notificationImageBox}>
                            <div className={styles.firstShadow}></div>
                            <div className={styles.secondShadow}></div>
                            <img
                                src="https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABeydawaaq1x6t59V75n4fSKIWAn-JrxXIk40bkQ7vKeG0gXclKxf90Dell3MPo_rvDxPAgDBqvkWCZoMF7aRaI-wBQrlCoskHjEAo50mg57jOf_51iRto29ePzRAGNDqHvxI8DGImnPaOzk.jpg?r=2ec"
                                alt="Best christmas ever image!"
                            />
                        </div>
                        <div className={styles.notificationContent}>
                            <p className={styles.notificationText}>Top 10 movies: World</p>
                            <p className={styles.notificationText}>See what's popular</p>
                            <span className={styles.notificationTime}>1 week ago</span>
                        </div>
                    </Link>
                </div>
            ) : (
                <Link href="/profilgate" className={styles.kidsLink}>
                    <EditProfileImage profilName="kids" />
                </Link>
            )}

            <div className={styles.profileContent}>
                {chosenUser !== 'kids' ? (
                    <button
                        type="button"
                        className={styles.navBtn}
                        aria-label="Open profile menu button"
                        onMouseEnter={handleProfileMouseEnter}
                        onMouseLeave={handleProfileMouseLeave}
                    >
                        <EditProfileImage profilName={chosenUser} />
                        <img src="/icons/arrowDownIcon.png" alt="" className={styles.navBtnIcon} />
                    </button>
                ) : (
                    <Link className={styles.exitKidsBtn} aria-label="Exit kids site" href="/profilgate">
                        Exit Kids
                    </Link>
                )}

                <div
                    className={`${styles.profileBox} ${showProfile ? styles.showProfile : ''}`}
                    onMouseEnter={handleProfileMouseEnter}
                    onMouseLeave={handleProfileMouseLeave}
                >
                    <div className={styles.profileLinkContainer}>
                        <div className={styles.profileBoxFlex}>
                            <EditProfileImage profilName="kids" />
                            <Link
                                href="/kids"
                                className={styles.profileLink}
                                onClick={() => {
                                    createCookie('chosenUser', 'kids')
                                }}
                            >
                                Kids
                            </Link>
                        </div>
                        <div className={styles.profileBoxFlex}>
                            <img src="/icons/pencilIcon.png" alt="" className={styles.profileBoxFlexIcon} />
                            <Link href="/profile/manage" className={styles.profileLink}>
                                Manage Profiles
                            </Link>
                        </div>
                        <div className={styles.profileBoxFlex}>
                            <img src="/icons/transferIcon.png" alt="" className={styles.profileBoxFlexIcon} />
                            <Link href="/profile/transfer" className={styles.profileLink}>
                                Transfer Profile
                            </Link>
                        </div>
                        <div className={styles.profileBoxFlex}>
                            <img src="/icons/accountIcon.png" alt="" className={styles.profileBoxFlexIcon} />
                            <Link href="/profile/youraccount" className={styles.profileLink}>
                                Account
                            </Link>
                        </div>
                        <div className={styles.profileBoxFlex}>
                            <img src="/icons/questionWhiteIcon.png" alt="" className={styles.profileBoxFlexIcon} />
                            <Link href="#" className={styles.profileLink}>
                                Help Center
                            </Link>
                        </div>
                        <div className={styles.line}></div>
                        <Link href="/logout" className={styles.profileLinkOut} onClick={logoutHandler}>
                            Sign Out of Netflix
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderDesktopProfile

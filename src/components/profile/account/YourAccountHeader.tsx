import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import Link from 'next/link'

import EditProfileImage from '../editProfile/EditProfileImage'

import useLogoutHandler from '../../../hooks/useLogoutHandler'
import { createCookie } from '../../../helpers/localStorageFunctions'
import styles from './YourAccountHeader.module.css'

const YourAccountHeader = () => {
    const [showProfile, setShowProfile] = useState(false)
    const timerProfileRef = useRef<number | null>(null)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    const handleLogout = () => {
        useLogoutHandler(dispatch)
    }

    const handleProfileMouseEnter = () => {
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

    return (
        <div className={styles.container}>
            <Link href="/browse">
                <img src="/photos/netflixLogo.png" alt="Netflix Logo" className={styles.netflixLogo} />
            </Link>
            <div className={styles.profileContent}>
                <button
                    type="button"
                    className={styles.navBtn}
                    aria-label="Open profile menu button"
                    onMouseEnter={handleProfileMouseEnter}
                    onMouseLeave={handleProfileMouseLeave}
                >
                    <EditProfileImage profilName="user" />
                    <img src="/icons/arrowDownIcon.png" alt="" className={styles.navBtnIcon} />
                </button>
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
                            <img src="/icons/questionWhiteIcon.png" alt="" className={styles.profileBoxFlexIcon} />
                            <Link href="#" className={styles.profileLink}>
                                Help Center
                            </Link>
                        </div>
                        <div className={styles.line}></div>
                        <Link href="/logout" className={styles.profileLinkOut} onClick={handleLogout}>
                            Sign Out of Netflix
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourAccountHeader

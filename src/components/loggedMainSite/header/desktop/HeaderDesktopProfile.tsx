import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef } from 'react'

import EditProfileImage from '../../../profile/editProfile/EditProfileImage'
import ARROW_ICON from '../../../../assets/icons/arrowDownIcon.png'

import styles from './HeaderDesktopProfile.module.css'
import AdultNotificationBox from './AdultNotificationBox'
import ProfileDetails from './ProfileDetails'

type ComponentType = {
    chosenUser: string
}

const HeaderDesktopProfile: React.FC<ComponentType> = ({ chosenUser }) => {
    const [showNotification, setShowNotification] = useState(false)
    const [showProfile, setShowProfile] = useState(false)
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

    return (
        <div className={styles.headerRight}>
            {chosenUser !== 'kids' ? (
                <AdultNotificationBox
                    onHandleNotificationMouseEnter={handleNotificationMouseEnter}
                    onHandleNotificationMouseLeave={handleNotificationMouseLeave}
                    showNotification={showNotification}
                />
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
                        <Image src={ARROW_ICON} alt="" className={styles.navBtnIcon} />
                    </button>
                ) : (
                    <Link className={styles.exitKidsBtn} aria-label="Exit kids site" href="/profilgate">
                        Exit Kids
                    </Link>
                )}
                <ProfileDetails
                    showProfile={showProfile}
                    onHandleProfileMouseEnter={handleProfileMouseEnter}
                    onHandleProfileMouseLeave={handleProfileMouseLeave}
                />
            </div>
        </div>
    )
}

export default HeaderDesktopProfile

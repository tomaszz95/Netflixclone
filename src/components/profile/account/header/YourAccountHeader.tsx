import { useRef, useState } from 'react'
import Link from 'next/link'

import EditProfileImage from '../../editProfile/EditProfileImage'
import ARROW_ICON from '../../../../assets/icons/arrowDownIcon.png'
import NETFLIX_ICON from '../../../../assets/photos/netflixLogo.png'

import styles from './YourAccountHeader.module.css'
import Image from 'next/image'
import HeaderLinks from './HeaderLinks'

const YourAccountHeader = () => {
    const [showProfile, setShowProfile] = useState(false)
    const timerProfileRef = useRef<number | null>(null)

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
                <Image src={NETFLIX_ICON} alt="Netflix Logo" className={styles.netflixLogo} />
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
                    <Image src={ARROW_ICON} alt="" className={styles.navBtnIcon} />
                </button>
                <div
                    className={`${styles.profileBox} ${showProfile ? styles.showProfile : ''}`}
                    onMouseEnter={handleProfileMouseEnter}
                    onMouseLeave={handleProfileMouseLeave}
                >
                    <HeaderLinks />
                </div>
            </div>
        </div>
    )
}

export default YourAccountHeader

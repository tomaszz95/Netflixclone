import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import FACEBOOK_ICON from '../../../assets/icons/facebookIcon.png'
import INSTAGRAM_ICON from '../../../assets/icons/instagramIcon.png'
import TWITTER_ICON from '../../../assets/icons/twitterIcon.png'
import YOUTUBE_ICON from '../../../assets/icons/youtubeIcon.png'
import { footerLoggedMainSiteLinks } from '../../../constans/footer'
import styles from './LoggedFooterSections.module.css'

const LoggedFooterSections = () => {
    const [showServiceCode, setShowServiceCode] = useState(false)
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    useEffect(() => {
        const year = new Date().getFullYear()
        setCurrentYear(year)
    }, [])

    return (
        <div className={styles.footer}>
            <div className={styles.iconBox}>
                <Link href="#" className={styles.icon}>
                    <Image src={FACEBOOK_ICON} alt="" />
                </Link>
                <Link href="#" className={styles.icon}>
                    <Image src={INSTAGRAM_ICON} alt="" />
                </Link>
                <Link href="#" className={styles.icon}>
                    <Image src={TWITTER_ICON} alt="" />
                </Link>
                <Link href="#" className={styles.icon}>
                    <Image src={YOUTUBE_ICON} alt="" />
                </Link>
            </div>
            <div className={styles.links}>
                {footerLoggedMainSiteLinks.map((link) => (
                    <a href="#" key={link}>
                        {link}
                    </a>
                ))}
            </div>
            <div className={styles.serviceCode}>
                {!showServiceCode && (
                    <button
                        type="button"
                        className={styles.button}
                        aria-label="Show service code"
                        onClick={() => setShowServiceCode(true)}
                    >
                        Service Code
                    </button>
                )}
                {showServiceCode && (
                    <button type="button" className={styles.button} aria-label="Service code 982-245">
                        982-245
                    </button>
                )}
            </div>
            <span className={styles.netflixInfo}>© 1997-{currentYear} Netflix, Inc.</span>
        </div>
    )
}

export default LoggedFooterSections

import { useState } from 'react'
import Link from 'next/link'
import { footerLoggedMainSiteLinks } from '../helpers/siteText'
import styles from './LoggedFooterSections.module.css'

const LoggedFooterSections = () => {
    const [showServiceCode, setShowServiceCode] = useState(false)

    return (
        <div className={styles.footer}>
            <div className={styles.iconBox}>
                <Link href="#" className={styles.icon}>
                    <img src="/icons/facebookIcon.png" alt="" />
                </Link>
                <Link href="#" className={styles.icon}>
                    <img src="/icons/instagramIcon.png" alt="" />
                </Link>
                <Link href="#" className={styles.icon}>
                    <img src="/icons/twitterIcon.png" alt="" />
                </Link>
                <Link href="#" className={styles.icon}>
                    <img src="/icons/youtubeIcon.png" alt="" />
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
            <span className={styles.netflixInfo}>© 1997-2023 Netflix, Inc.</span>
        </div>
    )
}

export default LoggedFooterSections

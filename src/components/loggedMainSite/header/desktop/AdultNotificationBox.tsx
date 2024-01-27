import Link from 'next/link'
import Image from 'next/image'

import CHRISTMAS_PHOTO from '../../../../assets/photos/christmas.jpg'
import BELL_ICON from '../../../../assets/icons/bellIcon.png'
import styles from './AdultNotificationBox.module.css'

type ComponentType = {
    onHandleNotificationMouseEnter: () => void
    onHandleNotificationMouseLeave: () => void
    showNotification: boolean
}

const AdultNotificationBox: React.FC<ComponentType> = ({
    onHandleNotificationMouseEnter,
    onHandleNotificationMouseLeave,
    showNotification,
}) => {
    return (
        <div className={styles.notificationBox}>
            <button
                className={styles.notificationButton}
                type="button"
                aria-label="Click to open notifications"
                onMouseEnter={onHandleNotificationMouseEnter}
                onMouseLeave={onHandleNotificationMouseLeave}
            >
                <Image src={BELL_ICON} alt="" />
            </button>
            <Link
                href="/genre/topRatedMovies"
                className={`${styles.notification} ${showNotification ? styles.showNotification : ''}`}
                onMouseEnter={onHandleNotificationMouseEnter}
                onMouseLeave={onHandleNotificationMouseLeave}
            >
                <div className={styles.notificationImageBox}>
                    <div className={styles.firstShadow}></div>
                    <div className={styles.secondShadow}></div>
                    <Image src={CHRISTMAS_PHOTO} alt="Best christmas ever image!" />
                </div>
                <div className={styles.notificationContent}>
                    <p className={styles.notificationText}>Top 10 movies: World</p>
                    <p className={styles.notificationText}>See what's popular</p>
                    <span className={styles.notificationTime}>1 week ago</span>
                </div>
            </Link>
        </div>
    )
}

export default AdultNotificationBox

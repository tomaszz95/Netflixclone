import Image from 'next/image'

import styles from './MoreInfoHeader.module.css'

type ComponentType = { onCloseMoreInfo: () => void }

const MoreInfoHeader: React.FC<ComponentType> = ({ onCloseMoreInfo }) => {
    return (
        <div className={styles.infoHeader}>
            <Image
                src="/photos/netflixLogo.png"
                alt="Netflix Logo icon"
                width="95"
                height="40"
                className={styles.netflixLogo}
            />
            <div className={styles.infoHeaderBox}>
                <h2>Privacy preference center</h2>
                <button
                    onClick={onCloseMoreInfo}
                    role="button"
                    aria-label="Close cookies more info"
                    className={styles.closeBtn}
                >
                    <Image
                        src="/icons/closeIcon.png"
                        alt="Close icon"
                        width="24"
                        height="24"
                        className={styles.closeIcon}
                    />
                </button>
            </div>
        </div>
    )
}

export default MoreInfoHeader

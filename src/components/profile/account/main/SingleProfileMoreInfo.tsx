import Link from 'next/link'

import styles from './SingleProfileMoreInfo.module.css'

type ComponentType = {
    moreInfoProperty: string
    moreInfoText: string
    moreInfoLink: string
}

const SingleProfileMoreInfo: React.FC<ComponentType> = ({ moreInfoProperty, moreInfoText, moreInfoLink }) => {
    return (
        <div className={styles.moreInfoBox}>
            <div className={styles.moreInfoBoxInfo}>
                <span className={styles.moreInfoBoxProperty}>{moreInfoProperty}</span>
                <span className={styles.moreInfoBoxText}>{moreInfoText}</span>
            </div>
            <Link href="#" className={styles.moreInfoBoxLink}>
                {moreInfoLink}
            </Link>
        </div>
    )
}

export default SingleProfileMoreInfo

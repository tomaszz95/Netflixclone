import MainAnchorLink from './MainAnchorLink'

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
            <MainAnchorLink link="#" linkName={moreInfoLink} notArrow={true} />
        </div>
    )
}

export default SingleProfileMoreInfo

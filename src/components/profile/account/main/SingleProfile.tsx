import { useState } from 'react'

import EditProfileImage from '../../editProfile/EditProfileImage'

import SingleProfileList from './SingleProfileList'
import { capitalizeFirstLetter } from '../../../utils/helpersFunctions'
import styles from './SingleProfile.module.css'

type ComponentType = {
    profilName: string
}

const SingleProfile: React.FC<ComponentType> = ({ profilName }) => {
    const [moreInfoVisible, setMoreInfoVisible] = useState(false)

    const capitalizedName = capitalizeFirstLetter(profilName)
    return (
        <>
            <div className={styles.profilBox}>
                <EditProfileImage profilName={profilName} />
                <div className={styles.profilInfo}>
                    <span className={styles.profilName}>{capitalizedName}</span>
                    <p className={styles.profilRate}>
                        {profilName === 'kids' ? '10+ and below' : 'All Maturity Ratings'}
                    </p>
                </div>
                <button
                    aria-label="Click to show more info about profile box"
                    className={`${styles.profilArrow} ${moreInfoVisible ? styles.active : ''}`}
                    onClick={() => setMoreInfoVisible(!moreInfoVisible)}
                >
                    <span className={styles.profilArrowIcon}>&gt;</span>
                </button>
            </div>
            {moreInfoVisible && <SingleProfileList profilName={profilName} />}
        </>
    )
}

export default SingleProfile

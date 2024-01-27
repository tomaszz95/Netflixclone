import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import EditProfileImage from '../editProfile/EditProfileImage'

import GLASSES_ICON from '../../../assets/icons/glassesIcon.png'
import ACC_ICON from '../../../assets/icons/accountRedIcon.png'
import PASTE_ICON from '../../../assets/icons/pasteIcon.png'
import { profileTransferHandler } from '../../../helpers/dummyActionFunctions'
import { getCookie } from '../../utils/localStorageFunctions'
import styles from './TransferProfileMain.module.css'
import InfoBoxItem from './InfoBoxItem'

const TransferProfileMain = () => {
    const [chosenUser, setChosenUser] = useState('')
    const router = useRouter()

    useEffect(() => {
        const user = getCookie('chosenUser')

        if (user) {
            setChosenUser(user)
        }
    }, [])

    const profileTransferHandlerFunc = () => {
        profileTransferHandler()

        router.push('/profile/manage')
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Start your profile transfer</h1>
            <div className={styles.profileBox}>
                <EditProfileImage profilName={chosenUser} />
                <h2 className={styles.username}>{chosenUser}</h2>
            </div>
            <Link href="/profile/youraccount" className={styles.transferLink}>
                Transfer a different profile
            </Link>
            <button
                aria-label="Start profile transfer button"
                onClick={profileTransferHandlerFunc}
                className={styles.transferButton}
            >
                Start Profile Transfer
            </button>
            <Link href="#" className={styles.learnMoreLink}>
                Learn More
            </Link>
            <div className={styles.infoBox}>
                <h3 className={styles.infoBoxTitle}>We made it easy to transfer this profile</h3>
                <InfoBoxItem
                    icon={GLASSES_ICON}
                    text="Transfer recommendations, viewing history, My List, saved games, settings and more"
                />
                <InfoBoxItem
                    icon={ACC_ICON}
                    text="Transfer recommendations, viewing history, My List, saved games, settings and more"
                />
                <InfoBoxItem
                    icon={PASTE_ICON}
                    text="Transfer recommendations, viewing history, My List, saved games, settings and more"
                />
                <p className={styles.greyText}>*Saved games will not be included in the backup copy.</p>
            </div>
        </div>
    )
}

export default TransferProfileMain

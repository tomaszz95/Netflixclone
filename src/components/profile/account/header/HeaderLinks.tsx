import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import Link from 'next/link'
import Image from 'next/image'

import QUESTION_ICON from '../../../../assets/icons/questionWhiteIcon.png'
import TRANSER_ICON from '../../../../assets/icons/transferIcon.png'
import PENCIL_ICON from '../../../../assets/icons/pencilIcon.png'
import EditProfileImage from '../../editProfile/EditProfileImage'
import useLogoutHandler from '../../../../hooks/useLogoutHandler'
import { createCookie } from '../../../utils/localStorageFunctions'

import styles from './HeaderLinks.module.css'

const HeaderLinks = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    return (
        <div className={styles.profileLinkContainer}>
            <div className={styles.profileBoxFlex}>
                <EditProfileImage profilName="kids" />
                <Link
                    href="/kids"
                    className={styles.profileLink}
                    onClick={() => {
                        createCookie('chosenUser', 'kids')
                    }}
                >
                    Kids
                </Link>
            </div>
            <div className={styles.profileBoxFlex}>
                <Image src={PENCIL_ICON} alt="" className={styles.profileBoxFlexIcon} />
                <Link href="/profile/manage" className={styles.profileLink}>
                    Manage Profiles
                </Link>
            </div>
            <div className={styles.profileBoxFlex}>
                <Image src={TRANSER_ICON} alt="" className={styles.profileBoxFlexIcon} />
                <Link href="/profile/transfer" className={styles.profileLink}>
                    Transfer Profile
                </Link>
            </div>
            <div className={styles.profileBoxFlex}>
                <Image src={QUESTION_ICON} alt="" className={styles.profileBoxFlexIcon} />
                <Link href="#" className={styles.profileLink}>
                    Help Center
                </Link>
            </div>
            <div className={styles.line}></div>
            <Link href="/logout" className={styles.profileLinkOut} onClick={() => useLogoutHandler(dispatch)}>
                Sign Out of Netflix
            </Link>
        </div>
    )
}

export default HeaderLinks

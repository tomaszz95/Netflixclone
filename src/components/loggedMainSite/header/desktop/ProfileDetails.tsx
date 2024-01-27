import Link from 'next/link'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { createCookie } from '../../../utils/localStorageFunctions'
import useLogoutHandler from '../../../../hooks/useLogoutHandler'

import PENCIL_ICON from '../../../../assets/icons/pencilIcon.png'
import TRANSFER_ICON from '../../../../assets/icons/transferIcon.png'
import ACCOUNT_ICON from '../../../../assets/icons/accountIcon.png'
import QUESTION_ICON from '../../../../assets/icons/questionWhiteIcon.png'
import styles from './ProfileDetails.module.css'
import EditProfileImage from '../../../profile/editProfile/EditProfileImage'

type ComponentType = {
    onHandleProfileMouseEnter: () => void
    onHandleProfileMouseLeave: () => void
    showProfile: boolean
}

const ProfileDetails: React.FC<ComponentType> = ({
    showProfile,
    onHandleProfileMouseEnter,
    onHandleProfileMouseLeave,
}) => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    return (
        <div
            className={`${styles.profileBox} ${showProfile ? styles.showProfile : ''}`}
            onMouseEnter={onHandleProfileMouseEnter}
            onMouseLeave={onHandleProfileMouseLeave}
        >
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
                    <Image src={TRANSFER_ICON} alt="" className={styles.profileBoxFlexIcon} />
                    <Link href="/profile/transfer" className={styles.profileLink}>
                        Transfer Profile
                    </Link>
                </div>
                <div className={styles.profileBoxFlex}>
                    <Image src={ACCOUNT_ICON} alt="" className={styles.profileBoxFlexIcon} />
                    <Link href="/profile/youraccount" className={styles.profileLink}>
                        Account
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
        </div>
    )
}

export default ProfileDetails

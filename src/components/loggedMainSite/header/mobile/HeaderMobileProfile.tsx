import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import Link from 'next/link'

import EditProfileImage from '../../../profile/editProfile/EditProfileImage'
import useLogoutHandler from '../../../../hooks/useLogoutHandler'

import styles from './HeaderMobileProfile.module.css'

type ComponentType = {
    chosenUser: string
}

const HeaderMobileProfile: React.FC<ComponentType> = ({ chosenUser }) => {
    const [chosenUserState, setChosenUserState] = useState('')
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    useEffect(() => {
        if (chosenUser !== '') {
            setChosenUserState(chosenUser.charAt(0).toUpperCase() + chosenUser.slice(1))
        }
    }, [chosenUser])

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileBox}>
                <EditProfileImage profilName={chosenUser} />
                <div className={styles.profileBoxFlex}>
                    <span className={styles.profileName}>{chosenUserState}</span>
                    <Link href="/profilgate" className={styles.profileSwitch}>
                        Switch Profiles
                    </Link>
                </div>
            </div>
            <div className={styles.profileLinkContainer}>
                <Link href="/profile/youraccount" className={styles.profileLink}>
                    Account
                </Link>
                <Link href="#" className={styles.profileLink}>
                    Help Center
                </Link>
                <Link href="/logout" className={styles.profileLink} onClick={() => useLogoutHandler(dispatch)}>
                    Sign Out of Netflix
                </Link>
            </div>
        </div>
    )
}

export default HeaderMobileProfile

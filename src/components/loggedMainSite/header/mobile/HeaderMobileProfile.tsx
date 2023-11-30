import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import EditProfileImage from '../../../profile/editProfile/EditProfileImage'
import { useState, useEffect } from 'react'
import styles from './HeaderMobileProfile.module.css'
import auth from '../../../../../firebase'
import { signOut } from 'firebase/auth'
import { isLoggedInActions } from '../../../store/loggedin'
import { deleteCookie } from '../../../helpers/localStorageFunctions'

type ComponentType = {
    chosenUser: string
}

const HeaderMobileProfile: React.FC<ComponentType> = ({ chosenUser }) => {
    const [chosenUserState, setChosenUserState] = useState('')
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    const logoutHandler = () => {
        signOut(auth)

        dispatch(isLoggedInActions.createLoggedCookie('false'))
        deleteCookie('chosenUser')
        deleteCookie('signInEmail')
        deleteCookie('signUpEmail')
        deleteCookie('startSignUpEmail')
    }

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
                <Link href="/logout" className={styles.profileLink} onClick={logoutHandler}>
                    Sign Out of Netflix
                </Link>
            </div>
        </div>
    )
}

export default HeaderMobileProfile

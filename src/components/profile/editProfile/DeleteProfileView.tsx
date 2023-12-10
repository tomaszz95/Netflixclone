import Router from 'next/router'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import { paymentActions } from '../../store/payment'
import EditProfileImage from './EditProfileImage'

import styles from './DeleteProfileView.module.css'

type ComponentType = {
    profilName: string
}

const DeleteProfileView: React.FC<ComponentType> = ({ profilName }) => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    const deleteProfileHandler = () => {
        dispatch(paymentActions.deleteProfile(profilName))
        
        Router.push('/profile/manage')
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Delete Profile?</h1>
                <div className={styles.line}></div>
                <div className={styles.content}>
                    <div className={styles.imgBox}>
                        <EditProfileImage profilName={profilName} />
                        <span>{profilName}</span>
                    </div>
                    <p className={styles.text}>
                        This profile's history - including My List, ratings and activity - will be gone forever, and you
                        won't be able to access it again.
                    </p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.buttons}>
                    <button
                        type="button"
                        aria-label="Keep profile button"
                        className={`${styles.button} ${styles.buttonKeep}`}
                        onClick={() => Router.back()}
                    >
                        Keep Profile
                    </button>
                    <button
                        type="button"
                        aria-label="Delete profile button"
                        className={`${styles.button} ${styles.buttonDelete}`}
                        onClick={deleteProfileHandler}
                    >
                        Delete Profile
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteProfileView

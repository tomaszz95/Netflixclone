import Router from 'next/router'
import { useSelector } from 'react-redux'

import EditProfileForm from './EditProfileForm'
import EditProfileImage from './EditProfileImage'

import styles from './SingleProfileManage.module.css'

type ComponentType = {
    profilName: string
}

const SingleProfileManage: React.FC<ComponentType> = ({ profilName }) => {
    const paymentData = useSelector<any, any>((state) => state.payment)

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Edit Profile</h1>
            <div className={styles.line} />
            <div className={styles.contentBox}>
                <EditProfileImage profilName={profilName} />
                <EditProfileForm profilName={profilName} />
            </div>
            <div className={styles.line} />
            <div className={styles.buttons}>
                <button
                    type="button"
                    aria-label="Edit profile button"
                    className={`${styles.button} ${styles.buttonSave}`}
                    // onClick={submitData}
                >
                    Save
                </button>
                <button
                    type="button"
                    aria-label="Cancel edit profile"
                    className={`${styles.button} ${styles.buttonCancel}`}
                    onClick={() => Router.back()}
                >
                    Cancel
                </button>
                {paymentData.selectedNames[0] === profilName ? (
                    ''
                ) : (
                    <button
                        type="button"
                        aria-label="Delete profile button"
                        className={`${styles.button} ${styles.buttonDelete}`}
                        // onClick={submitData}
                    >
                        Delete Profile
                    </button>
                )}
            </div>
        </div>
    )
}

export default SingleProfileManage

import Router from 'next/router'
import { useSelector } from 'react-redux'

import styles from './EditProfileButtons.module.css'

type ComponentType = {
    profilName: string
    onHandleSubmit: () => void
}

const EditProfileButtons: React.FC<ComponentType> = ({ profilName, onHandleSubmit }) => {
    const paymentData = useSelector<any, any>((state) => state.payment)

    return (
        <div className={styles.buttons}>
            <button
                type="button"
                aria-label="Edit profile button"
                className={`${styles.button} ${styles.buttonSave}`}
                onClick={onHandleSubmit}
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
            {paymentData.selectedNames[0] === profilName || profilName === 'kids' ? (
                ''
            ) : (
                <button
                    type="button"
                    aria-label="Delete profile button"
                    className={`${styles.button} ${styles.buttonDelete}`}
                    onClick={() => Router.push(`/profile/manage/${profilName}/delete`)}
                >
                    Delete Profile
                </button>
            )}
        </div>
    )
}

export default EditProfileButtons

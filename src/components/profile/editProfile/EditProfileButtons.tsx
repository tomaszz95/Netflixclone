import Router from 'next/router'
import { useSelector } from 'react-redux'

import styles from './EditProfileButtons.module.css'

type ComponentType = {
    profilName: string
}

const EditProfileButtons: React.FC<ComponentType> = ({ profilName }) => {
    const paymentData = useSelector<any, any>((state) => state.payment)

    return (
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
    )
}

export default EditProfileButtons

import EditProfileButtons from './EditProfileButtons'
import EditProfileForm from './EditProfileForm'
import EditProfileImage from './EditProfileImage'

import styles from './SingleProfileManage.module.css'

type ComponentType = {
    profilName: string
}

const SingleProfileManage: React.FC<ComponentType> = ({ profilName }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Edit Profile</h1>
                <div className={styles.line} />
                <div className={styles.contentBox}>
                    <EditProfileImage profilName={profilName} />
                    <EditProfileForm profilName={profilName} />
                </div>
                <div className={styles.line} />
                <EditProfileButtons profilName={profilName} />
            </div>
        </div>
    )
}

export default SingleProfileManage

import Image from 'next/image'
import USER_ICON from '../../../assets/icons/defaultUser.png'
import KIDS_ICON from '../../../assets/icons/kidsUser.png'
import styles from './EditProfileImage.module.css'

type ComponentType = {
    profilName: string
}

const EditProfileImage: React.FC<ComponentType> = ({ profilName }) => {
    return (
        <>
            {profilName === 'kids' ? (
                <Image src={KIDS_ICON} alt="" className={styles.avatarImg} />
            ) : (
                <Image src={USER_ICON} alt="" className={styles.avatarImg} />
            )}
        </>
    )
}

export default EditProfileImage

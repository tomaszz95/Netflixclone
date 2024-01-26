import Image from 'next/image'
import Link from 'next/link'

import KIDS_ICON from '../../../assets/icons/kidsUser.png'
import PENCIL_ICON from '../../../assets/icons/pencilIcon.png'
import ROUNDED_ICON from '../../../assets/icons/roundedplusIcon.png'
import styles from './UserConsts.module.css'

type ComponentType = {
    onChosenUser?: (e: React.MouseEvent<HTMLAnchorElement>) => void
    manage: boolean
}

const UserConsts: React.FC<ComponentType> = ({ onChosenUser, manage }) => {
    const kidsLink = manage ? '/profile/manage/kids' : '/kids'

    return (
        <>
            <Link href={kidsLink} id="kids" className={styles.listLink} onClick={onChosenUser}>
                <li className={styles.listItem}>
                    <Image src={KIDS_ICON} alt="" />
                    {manage && (
                        <div className={styles.editBcg}>
                            <Image src={PENCIL_ICON} alt="" />
                        </div>
                    )}
                    <span>Kids</span>
                </li>
            </Link>

            <Link href="/profile/addprofile" className={styles.addProfileLink}>
                <li className={styles.addProfileItem}>
                    <div>
                        <Image src={ROUNDED_ICON} alt="" priority/>
                    </div>
                    <span>Add Profile</span>
                </li>
            </Link>
        </>
    )
}

export default UserConsts

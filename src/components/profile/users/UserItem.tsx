import Link from 'next/link'
import Image from 'next/image'

import PENCIL_ICON from '../../../assets/icons/pencilIcon.png'
import USER_ICON from '../../../assets/icons/defaultUser.png'
import styles from './UserItem.module.css'

type ComponentType = {
    user: string | null
    onChosenUser?: (e: React.MouseEvent<HTMLAnchorElement>) => void
    manage: boolean
}

const UserItem: React.FC<ComponentType> = ({ user, onChosenUser, manage }) => {
    if (user === null) return <></>

    const userLink = manage ? `/profile/manage/${user}` : '/browse'

    return (
        <Link href={userLink} id={user} key={user} className={styles.listLink} onClick={onChosenUser}>
            <li className={styles.listItem}>
                <Image src={USER_ICON} alt={`${user} icon`} className={styles.listItemImg} />
                {manage && (
                    <div className={styles.editBcg}>
                        <Image src={PENCIL_ICON} alt="" />
                    </div>
                )}
                <span>{user}</span>
            </li>
        </Link>
    )
}

export default UserItem

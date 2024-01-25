import Image from 'next/image'
import Link from 'next/link'

import ROUNDED_ICON from '../../assets/icons/roundedplusIcon.png'
import styles from './ChooseUserConsts.module.css'

type ComponentType = {
    onChosenUser: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const ChooseUserConsts: React.FC<ComponentType> = ({ onChosenUser }) => {
    return (
        <>
            <Link href="/kids" id="kids" className={styles.listLink} onClick={onChosenUser}>
                <li className={styles.listItem}>
                    <img
                        src="https://occ-0-5273-41.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcENEq3AWngawcvIFgivpRF0Wx5gW-LVuNdof8gYEbtGtft04ORrv_UDixUwcbH1PpV3k16HITdmAnDgXwneLsz2WZuyDuHk5Xpb.png?r=f55"
                        alt=""
                    />
                    <span>Kids</span>
                </li>
            </Link>

            <Link href="/profile/addprofile" className={styles.addProfileLink}>
                <li className={styles.addProfileItem}>
                    <div>
                        <Image src={ROUNDED_ICON} alt="" />
                    </div>
                    <span>Add Profile</span>
                </li>
            </Link>
        </>
    )
}

export default ChooseUserConsts

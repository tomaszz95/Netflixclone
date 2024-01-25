import Link from 'next/link'

import styles from './ChooseUserItem.module.css'

type ComponentType = {
    user: string | null
    onChosenUser: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const ChooseUserItem: React.FC<ComponentType> = ({ user, onChosenUser }) => {
    if (user === null) return <></>

    return (
        <Link href="/browse" id={user} key={user} className={styles.listLink} onClick={onChosenUser}>
            <li className={styles.listItem}>
                <img
                    src="https://occ-0-5273-41.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
                    alt=""
                />
                <span>{user}</span>
            </li>
        </Link>
    )
}

export default ChooseUserItem

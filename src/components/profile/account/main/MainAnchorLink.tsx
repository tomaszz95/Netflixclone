import Link from 'next/link'
import styles from './MainAnchorLink.module.css'

type ComponentType = {
    link: string
    linkName: string
    notArrow?: boolean
}

const MainAnchorLink: React.FC<ComponentType> = ({ link, linkName, notArrow }) => {
    return (
        <Link href={link} className={styles.memberLink}>
            <p>{linkName}</p> {!notArrow && <span>&gt;</span>}
        </Link>
    )
}

export default MainAnchorLink

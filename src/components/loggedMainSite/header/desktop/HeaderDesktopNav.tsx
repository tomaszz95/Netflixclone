import Link from 'next/link'
import Image from 'next/image'
import NETFLIX_LOGO from '../../../../assets/photos/netflixLogo.png'
import styles from './HeaderDesktopNav.module.css'

type ComponentType = { chosenUser: string }

const HeaderDesktopNav: React.FC<ComponentType> = ({ chosenUser }) => {
    return (
        <div className={styles.navBox}>
            <Link href={`${chosenUser === 'kids' ? '/kids' : '/browse'}`} className={styles.profileLink}>
                <Image src={NETFLIX_LOGO} alt="Netflix Logo" className={styles.netflixLogo} />
            </Link>
            <Link href={`${chosenUser === 'kids' ? '/kids' : '/browse'}`} className={styles.profileLink}>
                Home
            </Link>
            <Link href="/tvshows" className={styles.profileLink}>
                TV Shows
            </Link>
            <Link href="/movies" className={styles.profileLink}>
                Movies
            </Link>
            <Link href="/popular" className={styles.profileLink}>
                New & Popular
            </Link>
        </div>
    )
}

export default HeaderDesktopNav

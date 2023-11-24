import Link from 'next/link'

import styles from './HeaderDesktopNav.module.css'

type ComponentType = { chosenUser: string }

const HeaderDesktopNav: React.FC<ComponentType> = ({ chosenUser }) => {
    return (
        <div className={styles.navBox}>
            <Link href={`${chosenUser === 'kids' ? '/kids' : '/browse'}`} className={styles.profileLink}>
                <img src="/photos/netflixLogo.png" alt="Netflix Logo" className={styles.netflixLogo} />
            </Link>
            <Link href={`${chosenUser === 'kids' ? '/kids' : '/browse'}`} className={styles.profileLink}>
                Home
            </Link>
            <Link href="/genre/tvshows" className={styles.profileLink}>
                TV Shows
            </Link>
            <Link href="/genre/movies" className={styles.profileLink}>
                Movies
            </Link>
            <Link href="/genre/popular" className={styles.profileLink}>
                New & Popular
            </Link>
            <Link href="/genre/trending" className={styles.profileLink}>
                Trending
            </Link>
        </div>
    )
}

export default HeaderDesktopNav

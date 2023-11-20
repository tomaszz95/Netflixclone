import HeaderDesktopNav from './HeaderDesktopNav'
import HeaderDesktopProfile from './HeaderDesktopProfile'
import styles from './HeaderDesktopView.module.css'

type ComponentType = {
    chosenUser: string
}

const HeaderDesktopView: React.FC<ComponentType> = ({ chosenUser }) => {
    return (
        <div className={styles.wrapper}>
            <HeaderDesktopNav chosenUser={chosenUser} />
            <div className={styles.searchBox}>
                <div className={styles.searchContent}>
                    <input
                        type="text"
                        id="searchInput"
                        placeholder="Titles, people, genres"
                        className={styles.searchInput}
                        aria-label="Search bar"
                    />
                    <button className={styles.searchButton} type="button" aria-label="Click to open search bar">
                        <img src="/icons/magnifierIcon.png" />
                    </button>
                </div>
                <HeaderDesktopProfile chosenUser={chosenUser} />
            </div>
        </div>
    )
}

export default HeaderDesktopView

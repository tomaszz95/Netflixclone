import CentralSection from './CentralSection'
import HeaderSection from './HeaderSection'
import HeroSection from './HeroSection'

import styles from './MainView.module.css'

const MainView = () => {
    return (
        <>
            <header className={styles.header}>
                <HeaderSection />
                <HeroSection />
            </header>
            <main className={styles.main}>
                <CentralSection sectionCount="1" />
                <CentralSection sectionCount="2" />
                <CentralSection sectionCount="3" />
                <CentralSection sectionCount="4" />
            </main>
        </>
    )
}

export default MainView

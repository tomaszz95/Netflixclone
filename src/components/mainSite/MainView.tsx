import HeaderSection from './HeaderSection'
import HeroSection from './HeroSection'

import styles from './MainView.module.css'

const MainView = () => {
    return (
        <main className={styles.main}>
            <HeaderSection />
            <HeroSection />
        </main>
    )
}

export default MainView

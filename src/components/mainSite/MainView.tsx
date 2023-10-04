import HeaderSection from './HeaderSection'
import HeroSection from './HeroSection'
import CentralSection from './CentralSection'
import QuestionSection from './QuestionSection'
import FooterSection from './FooterSection'

import styles from './MainView.module.css'

const MainView = () => {
    return (
        <>
            <header className={styles.header}>
                <HeaderSection />
                <HeroSection />
            </header>
            <main className={styles.main}>
                <CentralSection sectionCount="1" imgDirection="right" />
                <CentralSection sectionCount="2" imgDirection="left" />
                <CentralSection sectionCount="3" imgDirection="right" />
                <CentralSection sectionCount="4" imgDirection="left" />
                <QuestionSection />
            </main>
            <footer className={styles.footer}>
                <FooterSection />
            </footer>
        </>
    )
}

export default MainView

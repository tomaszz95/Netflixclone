import HeaderLoggedSection from './header/HeaderLoggedSection'
import HeroLoggedSection from './header/HeroLoggedSection'
import LoggedFooterSections from './LoggedFooterSection'
import styles from './LoggedMainSiteView.module.css'
import MainViewLoggedSection from './MainViewLoggedSection'

const LoggedMainSiteView = () => {
    return (
        <>
            <header className={styles.header}>
                <HeaderLoggedSection />
                <HeroLoggedSection />
            </header>
            <main className={styles.main}>
                <MainViewLoggedSection />
            </main>
            <footer className={styles.footer}>
                <LoggedFooterSections />
            </footer>
        </>
    )
}

export default LoggedMainSiteView

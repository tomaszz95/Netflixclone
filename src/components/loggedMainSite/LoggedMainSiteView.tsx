import LoggedFooterSections from './LoggedFooterSection'
import styles from './LoggedMainSiteView.module.css'

const LoggedMainSiteView = () => {
    return (
        <>
            <header className={styles.header}>
                {/* <HeaderSection />
                <HeroSection /> */}
            </header>
            <main className={styles.main}>
                {/* <CentralSection sectionCount="1" />
                <CentralSection sectionCount="2" />
                <CentralSection sectionCount="3" />
                <CentralSection sectionCount="4" />
                <QuestionSection /> */}
            </main>
            <footer className={styles.footer}>
                <LoggedFooterSections />
            </footer>
        </>
    )
}

export default LoggedMainSiteView

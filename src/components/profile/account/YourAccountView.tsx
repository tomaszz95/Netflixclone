import LoggedFooterSections from '../../loggedMainSite/footer/LoggedFooterSection'
import YourAccountHeader from './YourAccountHeader'
import YourAccountMain from './YourAccountMain'

import styles from './YourAccountView.module.css'

const YourAccountView = () => {
    return (
        <>
            <header className={styles.header}>
                <YourAccountHeader />
            </header>
            <main className={styles.main}>
                <YourAccountMain />
            </main>
            <footer className={styles.footer}>
                <LoggedFooterSections />
            </footer>
        </>
    )
}

export default YourAccountView

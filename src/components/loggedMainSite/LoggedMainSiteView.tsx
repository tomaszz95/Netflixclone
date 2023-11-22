import { useState, useEffect } from 'react'

import HeaderLoggedSection from './header/HeaderLoggedSection'
import HeroLoggedSection from './header/HeroLoggedSection'
import LoggedFooterSections from './footer/LoggedFooterSection'
import styles from './LoggedMainSiteView.module.css'
import MainViewLoggedSection from './MainViewLoggedSection'

const LoggedMainSiteView = () => {
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <header className={styles.header}>
                <HeaderLoggedSection />
                {windowWidth < 1200 ? '' : <HeroLoggedSection />}
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

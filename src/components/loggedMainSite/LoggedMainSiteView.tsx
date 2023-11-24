import { useState, useEffect } from 'react'

import { fetchedMainWholeObj } from '../helpers/types'
import HeaderLoggedSection from './header/HeaderLoggedSection'
import HeroLoggedSection from './header/HeroLoggedSection'
import LoggedFooterSections from './footer/LoggedFooterSection'
import styles from './LoggedMainSiteView.module.css'
import MainViewLoggedSection from './main/MainViewLoggedSection'

type ComponentType = {
    fetchedData: fetchedMainWholeObj
}

const LoggedMainSiteView: React.FC<ComponentType> = ({ fetchedData }) => {
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
                <MainViewLoggedSection fetchedData={fetchedData} />
            </main>
            <footer className={styles.footer}>
                <LoggedFooterSections />
            </footer>
        </>
    )
}

export default LoggedMainSiteView

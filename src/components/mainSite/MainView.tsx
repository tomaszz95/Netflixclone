import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Router from 'next/router'

import HeaderSection from './header/HeaderSection'
import HeroSection from './header/HeroSection'
import CentralSection from './main/CentralSection'
import QuestionSection from './main/QuestionSection'
import FooterSection from './footer/FooterSection'
import { mainSiteSectionData } from '../../constans/mainSite'

import styles from './MainView.module.css'

const MainView = () => {
    const paymentsData = useSelector<any, any>((state) => state.payment)
    const isLoggedIn = useSelector<any, any>((state) => state.isLoggedIn)

    useEffect(() => {
        if (isLoggedIn === 'true' && paymentsData && paymentsData.isFullySet) {
            Router.push('/profilgate')
        }
    }, [paymentsData, isLoggedIn])

    return (
        <>
            <header className={styles.header}>
                <HeaderSection />
                <HeroSection />
            </header>
            <main className={styles.main}>
                <ul className={styles.list}>
                    {mainSiteSectionData.map((section, index) => (
                        <CentralSection key={index} sectionCount={index} sectionData={section} />
                    ))}
                </ul>
                <QuestionSection />
            </main>
            <footer className={styles.footer}>
                <FooterSection />
            </footer>
        </>
    )
}

export default MainView

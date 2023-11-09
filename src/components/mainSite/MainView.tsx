import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Router from 'next/router'

import HeaderSection from './HeaderSection'
import HeroSection from './HeroSection'
import CentralSection from './CentralSection'
import QuestionSection from './QuestionSection'
import FooterSection from './FooterSection'

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
                <CentralSection sectionCount="1" />
                <CentralSection sectionCount="2" />
                <CentralSection sectionCount="3" />
                <CentralSection sectionCount="4" />
                <QuestionSection />
            </main>
            <footer className={styles.footer}>
                <FooterSection />
            </footer>
        </>
    )
}

export default MainView

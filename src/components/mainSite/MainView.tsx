import { useEffect } from 'react'
import Router from 'next/router'
import { useSelector } from 'react-redux'

import HeaderSection from './HeaderSection'
import HeroSection from './HeroSection'
import CentralSection from './CentralSection'
import QuestionSection from './QuestionSection'
import FooterSection from './FooterSection'

import styles from './MainView.module.css'

const MainView = () => {
    const paymentData = useSelector<any, any>((state) => state.payment)

    useEffect(() => {
        if (!paymentData || !paymentData.isFullySet) return
        if (paymentData.isFullySet) {
            Router.push('/profilgate')
        }
    }, [paymentData])

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

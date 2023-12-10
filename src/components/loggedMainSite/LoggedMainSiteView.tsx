import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { useRouter } from 'next/router'

import MainViewLoggedSection from './main/MainViewLoggedSection'
import HeaderLoggedSection from './header/HeaderLoggedSection'
import HeroLoggedSection from './header/HeroLoggedSection'
import LoggedFooterSections from './footer/LoggedFooterSection'

import { pathnameActions } from '../store/pathname'
import { fetchedMainWholeObj } from '../helpers/types'
import styles from './LoggedMainSiteView.module.css'

type ComponentType = {
    fetchedData: fetchedMainWholeObj
}

const LoggedMainSiteView: React.FC<ComponentType> = ({ fetchedData }) => {
    const [windowWidth, setWindowWidth] = useState(0)
    const router = useRouter()
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

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

    useEffect(() => {
        if (router.pathname === '/browse') {
            dispatch(pathnameActions.createPathname('browse'))
        } else if (router.pathname === '/kids') {
            dispatch(pathnameActions.createPathname('kids'))
        } else if (router.pathname === '/tvshows') {
            dispatch(pathnameActions.createPathname('tvshows'))
        } else if (router.pathname === '/movies') {
            dispatch(pathnameActions.createPathname('movies'))
        } else if (router.pathname === '/popular') {
            dispatch(pathnameActions.createPathname('popular'))
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

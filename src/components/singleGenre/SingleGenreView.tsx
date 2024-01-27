import { useState, useEffect } from 'react'

import MainViewGenreSection from './MainViewGenreSection'
import LoggedFooterSections from '../loggedMainSite/footer/LoggedFooterSection'
import HeaderLoggedSection from '../loggedMainSite/header/HeaderLoggedSection'

import { fetchedMainSingleObj } from '../../types/types'
import styles from './SingleGenreView.module.css'
import useWindowWidth from '../../hooks/useWindowWidth'

type ComponentType = {
    fetchedData: fetchedMainSingleObj[]
}

const SingleGenreView: React.FC<ComponentType> = ({ fetchedData }) => {
    const [loadingText, setLoadingText] = useState('Loading...')
    const windowWidth = useWindowWidth()

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            if (fetchedData.length === 0) {
                setLoadingText(`There was an error with data loading. Please try again later.`)
            }
        }, 3000)

        if (fetchedData.length !== 0) {
            setLoadingText('Loading...')
        }

        return () => clearTimeout(loadingTimeout)
    }, [fetchedData])

    return (
        <>
            <header className={styles.header}>
                <HeaderLoggedSection windowWidth={windowWidth} />
            </header>
            <main className={styles.main}>
                {fetchedData.length === 0 ? (
                    <p className={styles.loading}>{loadingText}</p>
                ) : (
                    <MainViewGenreSection fetchedData={fetchedData} />
                )}
            </main>
            <footer className={styles.footer}>
                <LoggedFooterSections />
            </footer>
        </>
    )
}

export default SingleGenreView

import { useState, useEffect } from 'react'
import useWindowWidth from '../../hooks/useWindowWidth'

import LoggedFooterSections from '../loggedMainSite/footer/LoggedFooterSection'
import HeaderLoggedSection from '../loggedMainSite/header/HeaderLoggedSection'
import SingleTitleMainSection from './SingleTitleMainSection'

import styles from './SingleTitleView.module.css'

const SingleTitleView = ({ fetchedData }: any) => {
    const [isLoading, setIsLoading] = useState(true)
    const windowWidth = useWindowWidth()

    useEffect(() => {
        if (fetchedData === null || fetchedData === undefined) {
            setIsLoading(true)
        } else {
            setIsLoading(false)
        }
    }, [fetchedData])

    return (
        <>
            <header className={styles.header}>
                <HeaderLoggedSection windowWidth={windowWidth} />
            </header>
            <main className={styles.main}>
                {isLoading ? (
                    <p className={styles.loading}>Loading...</p>
                ) : (
                    <SingleTitleMainSection fetchedData={fetchedData} />
                )}
            </main>
            <footer className={styles.footer}>
                <LoggedFooterSections />
            </footer>
        </>
    )
}

export default SingleTitleView

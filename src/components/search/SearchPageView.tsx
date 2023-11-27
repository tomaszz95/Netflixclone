import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { fetchedMainSingleObj } from '../helpers/types'
import LoggedFooterSections from '../loggedMainSite/footer/LoggedFooterSection'
import HeaderLoggedSection from '../loggedMainSite/header/HeaderLoggedSection'
import MainViewSearchSection from './MainViewSearchSection'
import styles from './SearchPageView.module.css'

type ComponentType = {
    fetchedData: fetchedMainSingleObj[]
}

const SearchPageView: React.FC<ComponentType> = ({ fetchedData }) => {
    const [loadingText, setLoadingText] = useState('Loading...')
    const router = useRouter()

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            if (fetchedData.length === 0) {
                setLoadingText(`Your search for '${router.query.query}' did not have any matches.`)
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
                <HeaderLoggedSection />
            </header>
            <main className={styles.main}>
                {fetchedData.length === 0 ? (
                    <p className={styles.loading}>{loadingText}</p>
                ) : (
                    <MainViewSearchSection fetchedData={fetchedData} />
                )}
            </main>
            <footer className={styles.footer}>
                <LoggedFooterSections />
            </footer>
        </>
    )
}

export default SearchPageView

import { fetchedMainSingleObj } from '../helpers/types'
import LoggedFooterSections from '../loggedMainSite/footer/LoggedFooterSection'
import HeaderLoggedSection from '../loggedMainSite/header/HeaderLoggedSection'
import MainViewSearchSection from './MainViewSearchSection'
import styles from './SearchPageView.module.css'

type ComponentType = {
    fetchedData: fetchedMainSingleObj[]
}

const SearchPageView: React.FC<ComponentType> = ({ fetchedData }) => {
    return (
        <>
            <header className={styles.header}>
                <HeaderLoggedSection />
            </header>
            {fetchedData.length === 0 ? (
                <p className={styles.loading}>Loading...</p>
            ) : (
                <main className={styles.main}>
                    <MainViewSearchSection fetchedData={fetchedData} />
                </main>
            )}
            <footer className={styles.footer}>
                <LoggedFooterSections />
            </footer>
        </>
    )
}

export default SearchPageView

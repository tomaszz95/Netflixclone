import { useRouter } from 'next/router'

import CarouselItem from '../loggedMainSite/main/CarouselItem'

import { fetchedMainSingleObj } from '../../types/types'
import styles from './MainViewSearchSection.module.css'

type ComponentType = {
    fetchedData: fetchedMainSingleObj[]
}

const MainViewSearchSection: React.FC<ComponentType> = ({ fetchedData }) => {
    const router = useRouter()

    return (
        <section className={styles.mainSection}>
            <h1 className={styles.title}>Results for '{router.query.query}'</h1>
            <ol className={styles.searchedList}>
                {fetchedData.map((movie, index) => (
                    <CarouselItem singleItem={movie} key={index} index={index} />
                ))}
            </ol>
        </section>
    )
}

export default MainViewSearchSection

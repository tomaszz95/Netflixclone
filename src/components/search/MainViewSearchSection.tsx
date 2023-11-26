import { fetchedMainSingleObj } from '../helpers/types'
import { useRouter } from 'next/router'
import styles from './MainViewSearchSection.module.css'
import CarouselItem from '../loggedMainSite/main/CarouselItem'

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

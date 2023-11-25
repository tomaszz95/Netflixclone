import { fetchedMainWholeObj } from '../../helpers/types'
import styles from './MainViewLoggedSection.module.css'
import SingleMainCarousel from './SingleMainCarousel'

type ComponentType = {
    fetchedData: fetchedMainWholeObj
}

const MainViewLoggedSection: React.FC<ComponentType> = ({ fetchedData }) => {
    return (
        <section className={styles.mainSection}>
            {Object.entries(fetchedData).map(([category, itemArray], index) => (
                <SingleMainCarousel key={index} category={category} itemArray={itemArray} />
            ))}
        </section>
    )
}

export default MainViewLoggedSection

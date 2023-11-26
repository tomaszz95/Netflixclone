import { fetchedMainWholeObj } from '../helpers/types'
import styles from './MainViewSearchSection.module.css'

type ComponentType = {
    fetchedData: fetchedMainWholeObj
}

const MainViewSearchSection: React.FC<ComponentType> = ({ fetchedData }) => {
    return (
        <section className={styles.mainSection}>
            
        </section>
    )
}

export default MainViewSearchSection

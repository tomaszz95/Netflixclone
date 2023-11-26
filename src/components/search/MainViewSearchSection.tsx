import { fetchedMainSingleObj } from '../helpers/types'
import styles from './MainViewSearchSection.module.css'

type ComponentType = {
    fetchedData: fetchedMainSingleObj[]
}

const MainViewSearchSection: React.FC<ComponentType> = ({ fetchedData }) => {
    return <section className={styles.mainSection}></section>
}

export default MainViewSearchSection

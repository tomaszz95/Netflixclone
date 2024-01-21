import { sectionMainData } from '../../../types/mainSiteTypes'
import SectionInside from './SectionInside'
import styles from './CentralSection.module.css'

type ComponentType = { sectionCount: number; sectionData: sectionMainData }

const CentralSection: React.FC<ComponentType> = ({ sectionCount, sectionData }) => {
    let boxClass

    if (sectionCount === 0 || sectionCount % 2 === 0) {
        boxClass = styles.left
    } else {
        boxClass = styles.right
    }

    return (
        <li className={styles.container}>
            <section className={styles.section}>
                <div className={`${styles.sectionBox} ${boxClass}`}>
                    <h2>{sectionData.title}</h2>
                    <p>{sectionData.text}</p>
                </div>
                <div className={styles.imageBox}>
                    <img src={sectionData.image} alt={sectionData.title} className={styles.image} />
                    <SectionInside sectionCount={sectionCount} sectionData={sectionData} />
                </div>
            </section>
        </li>
    )
}

export default CentralSection

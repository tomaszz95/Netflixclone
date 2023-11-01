import styles from './CentralSection.module.css'

import { mainSiteSectionData } from '../helpers/siteText'

type ComponentType = { sectionCount: string }

const CentralSection: React.FC<ComponentType> = ({ sectionCount }) => {
    const section = mainSiteSectionData[sectionCount]
    let insideBox
    let boxClass
    let imgClass

    if (sectionCount === '1') {
        insideBox = (
            <div className={styles.video}>
                <video src={section.video} autoPlay playsInline muted loop></video>
            </div>
        )
        boxClass = 'left'
        imgClass = 'right'
    } else if (sectionCount === '2') {
        insideBox = (
            <div className={styles.stranger}>
                <div className={styles.strangerBox}>
                    <img src="/photos/stranger.png" alt="Stranger things movie screen" />
                    <div className={styles.strangerText}>
                        <p>Stranger Things</p>
                        <span>Downloading...</span>
                    </div>
                </div>
                <div className={styles.animation}></div>
            </div>
        )
        boxClass = 'right'
        imgClass = 'left'
    } else if (sectionCount === '3') {
        insideBox = (
            <div className={styles.videoSecond}>
                <video src={section.video} autoPlay playsInline muted loop></video>
            </div>
        )
        boxClass = 'left'
        imgClass = 'right'
    } else if (sectionCount === '4') {
        insideBox = <div></div>
        boxClass = 'right'
        imgClass = 'left'
    }

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={`${styles.sectionBox} ${boxClass}`}>
                    <h2>{section.title}</h2>
                    <p>{section.text}</p>
                </div>
                <div className={`${styles.imageBox} ${imgClass}`}>
                    <img src={section.image} alt={section.title} className={styles.image} />
                    {insideBox}
                </div>
            </div>
        </section>
    )
}

export default CentralSection

import { sectionMainData } from '../../../types/mainSiteTypes'

import STRANGER_IMG from '../../../assets/photos/stranger.png'
import styles from './SectionInside.module.css'
import Image from 'next/image'

type ComponentType = { sectionCount: number; sectionData: sectionMainData }

const SectionInside: React.FC<ComponentType> = ({ sectionCount, sectionData }) => {
    let insideBox = <></>

    if (sectionCount === 0) {
        insideBox = (
            <div className={styles.video}>
                <video src={sectionData.video} autoPlay playsInline muted loop></video>
            </div>
        )
    } else if (sectionCount === 1) {
        insideBox = (
            <div className={styles.stranger}>
                <div className={styles.strangerBox}>
                    <Image src={STRANGER_IMG} alt="Stranger things movie screen" width={40} />
                    <div className={styles.strangerText}>
                        <p>Stranger Things</p>
                        <span>Downloading...</span>
                    </div>
                </div>
                <div className={styles.animation}></div>
            </div>
        )
    } else if (sectionCount === 2) {
        insideBox = (
            <div className={styles.videoSecond}>
                <video src={sectionData.video} autoPlay playsInline muted loop></video>
            </div>
        )
    } else if (sectionCount === 3) {
        insideBox = <></>
    }

    return insideBox
}

export default SectionInside

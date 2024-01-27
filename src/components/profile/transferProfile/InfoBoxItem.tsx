import Image from 'next/image'
import { nextJsImage } from '../../../types/types'
import styles from './InfoBoxItem.module.css'

type ComponentType = {
    icon: nextJsImage
    text: string
}

const InfoBoxItem: React.FC<ComponentType> = ({ icon, text }) => {
    return (
        <div className={styles.infoBoxSingle}>
            <Image src={icon} alt="" className={styles.infoBoxImg} />
            <p className={styles.infoBoxText}>{text}</p>
        </div>
    )
}

export default InfoBoxItem

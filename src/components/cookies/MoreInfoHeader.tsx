import Image from 'next/image'
import CloseModalButton from './CloseModalButton'

import NETFLIX_LOGO from '../../assets/photos/netflixLogo.png'
import styles from './MoreInfoHeader.module.css'

type ComponentType = { onCloseMoreInfo: () => void }

const MoreInfoHeader: React.FC<ComponentType> = ({ onCloseMoreInfo }) => {
    return (
        <div className={styles.infoHeader}>
            <Image src={NETFLIX_LOGO} alt="Netflix Logo icon" width="95" className={styles.netflixLogo} />
            <div className={styles.infoHeaderBox}>
                <h2>Privacy preference center</h2>
                <CloseModalButton onClick={onCloseMoreInfo} />
            </div>
        </div>
    )
}

export default MoreInfoHeader

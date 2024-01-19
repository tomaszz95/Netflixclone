import Image from 'next/image'
import CLOSE_ICON from '../../assets/icons/closeIcon.png'

import styles from './CloseModalButton.module.css'
type ComponentType = { onClick: () => void }

const CloseModalButton: React.FC<ComponentType> = ({ onClick }) => {
    return (
        <button onClick={onClick} role="button" aria-label="Close modal" className={styles.closeBtn}>
            <Image src={CLOSE_ICON} alt="Close icon" width="24" height="24" />
        </button>
    )
}

export default CloseModalButton

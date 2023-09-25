import MoreInfoHeader from './MoreInfoHeader'
import MoreInfoAccordion from './MoreInfoAccordion'

import styles from './ModalMoreInfo.module.css'

type ComponentType = { onCloseMoreInfo: () => void; onSavePreferences: () => void }

const ModalMoreInfo: React.FC<ComponentType> = ({ onCloseMoreInfo, onSavePreferences }) => {
    return (
        <div className={styles.infoBox}>
            <MoreInfoHeader onCloseMoreInfo={onCloseMoreInfo} />
            <MoreInfoAccordion />
            <div className={styles.buttonBox}>
                <button type="button" onClick={onSavePreferences} className={styles.saveBtn}>
                    Save settings
                </button>
            </div>
        </div>
    )
}

export default ModalMoreInfo

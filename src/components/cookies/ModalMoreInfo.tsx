import MoreInfoHeader from './MoreInfoHeader'
import MoreInfoAccordion from './MoreInfoAccordion'

import styles from './ModalMoreInfo.module.css'

type ComponentType = { onCloseMoreInfo: () => void; onAcceptCookies: () => void }

const ModalMoreInfo: React.FC<ComponentType> = ({ onCloseMoreInfo, onAcceptCookies }) => {
    return (
        <div className={styles.infoBox}>
            <MoreInfoHeader onCloseMoreInfo={onCloseMoreInfo} />
            <MoreInfoAccordion />
            <div className={styles.buttonBox}>
                <button
                    type="button"
                    onClick={onAcceptCookies}
                    className={styles.saveBtn}
                    aria-label="Click to save settings"
                >
                    Save settings
                </button>
            </div>
        </div>
    )
}

export default ModalMoreInfo

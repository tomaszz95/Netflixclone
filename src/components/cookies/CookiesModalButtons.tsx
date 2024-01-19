import styles from './CookiesModalButtons.module.css'

type ComponentType = { onAcceptCookies: () => void; onRejectCookies: () => void; onOpenMoreInfo: () => void }

const CookiesModalButtons: React.FC<ComponentType> = ({ onAcceptCookies, onRejectCookies, onOpenMoreInfo }) => {
    return (
        <div className={styles.buttonBox}>
            <button
                role="button"
                onClick={onAcceptCookies}
                aria-label="Click to accept cookies"
                className={`${styles.button} ${styles.acceptBtn}`}
            >
                Accept
            </button>
            <button
                role="button"
                onClick={onRejectCookies}
                aria-label="Click to reject cookies"
                className={`${styles.button} ${styles.rejectBtn}`}
            >
                Reject
            </button>
            <button
                role="button"
                onClick={onOpenMoreInfo}
                aria-label="Click to personalise choices"
                className={`${styles.button} ${styles.personaliseBtn}`}
            >
                Personalise my choices
            </button>
        </div>
    )
}

export default CookiesModalButtons

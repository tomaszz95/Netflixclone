import styles from './MaturitySection.module.css'

type ComponentType = {
    profilName: string
}

const MaturitySection: React.FC<ComponentType> = ({ profilName }) => {
    return (
        <div className={styles.maturityBox}>
            <span className={styles.maturityBoxSpan}>Maturity Settings:</span>
            {profilName === 'kids' ? (
                <>
                    <div className={styles.maturityBoxItem}>Kids</div>
                    <div className={styles.maturityBoxItem}>10+</div>
                </>
            ) : (
                <div className={styles.maturityBoxItem}>All Maturity Ratings</div>
            )}
            {profilName === 'kids' ? (
                <p className={styles.maturityBoxText}>Only show titles rated 10+ and below for this profile.</p>
            ) : (
                <p className={styles.maturityBoxText}>Show titles of all maturity ratings for this profile.</p>
            )}
            <button
                type="button"
                aria-label="Edit maturity settings"
                className={styles.button}
                onClick={() => {
                    console.log('Should change restrictions.. Omitted in the demo version')
                }}
            >
                Edit
            </button>
        </div>
    )
}

export default MaturitySection

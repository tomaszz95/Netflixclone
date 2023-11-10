import styles from './MaturitySection.module.css'

const MaturitySection = () => {
    return (
        <div className={styles.maturityBox}>
            <span className={styles.maturityBoxSpan}>Maturity Settings:</span>
            <div className={styles.maturityBoxItem}>All Maturity Ratings</div>
            <p className={styles.maturityBoxText}>Show titles of all maturity ratings for this profile.</p>
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

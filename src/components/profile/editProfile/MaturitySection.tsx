import styles from './MaturitySection.module.css'

const MaturitySection = () => {
    return (
        <div className={styles.maturityBox}>
            <span className={styles.maturityBoxSpan}>Maturity Settings:</span>
            <div className={styles.maturityBoxItem}>All Maturity Ratings</div>
            <p className={styles.maturityBoxText}>Show titles of all maturity ratings for this profile.</p>
            <button type="button" aria-label="CEdit maturity settings" className={styles.button}>
                Edit
            </button>
        </div>
    )
}

export default MaturitySection

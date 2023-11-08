import styles from './AutoplaysSection.module.css'

const AutoplaysSection = () => {
    return (
        <div className={styles.autoplaysBox}>
            <span className={styles.autoplaysBoxSpan}>Autoplay controls</span>
            <div className={styles.autoplaysBoxContent}>
                <input type="checkbox" id="nextEpisode" className={styles.autoplaysBoxInput} />
                <label htmlFor="nextEpisode" className={styles.autoplaysBoxLabel}>
                    Autoplay next episode in a series on all devices.
                </label>
            </div>
            <div className={styles.autoplaysBoxContent}>
                <input type="checkbox" id="previewsPlay" className={styles.autoplaysBoxInput} />
                <label htmlFor="previewsPlay" className={styles.autoplaysBoxLabel}>
                    Autoplay previews while browsing on all devices.
                </label>
            </div>
        </div>
    )
}

export default AutoplaysSection

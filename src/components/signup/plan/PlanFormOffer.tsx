import styles from './PlanFormOffer.module.css'

const PlanFormOffer = () => {
    return (
        <div className={styles.container}>
            <span className={styles.step}>STEP 2 OF 3</span>
            <h1 className={styles.title}>Choose the plan that’s right for you</h1>
            <div className={styles.box}>
                <img src="/icons/checkSign.png" alt="" className={styles.checkSign} />
                <p className={styles.text}>Watch all you want. Ad-free.</p>
            </div>
            <div className={styles.box}>
                <img src="/icons/checkSign.png" alt="" className={styles.checkSign} />
                <p className={styles.text}>Recommendations just for you.</p>
            </div>
            <div className={styles.box}>
                <img src="/icons/checkSign.png" alt="" className={styles.checkSign} />
                <p className={styles.text}>Change or cancel your plan anytime.</p>
            </div>
        </div>
    )
}

export default PlanFormOffer

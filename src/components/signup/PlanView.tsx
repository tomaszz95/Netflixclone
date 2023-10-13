import Router from 'next/router'

import styles from './PlanView.module.css'

const PlanView = () => {
    return (
        <div className={styles.container}>
            <img src="/icons/checkIcon.png" alt="" className={styles.checkIcon} />
            <span className={styles.step}>STEP 2 OF 3</span>
            <h1 className={styles.title}>Choose your plan.</h1>
            <div className={styles.box}>
                <img src="/icons/checkSign.png" alt="" className={styles.checkSign} />
                <p className={styles.text}>No commitments, cancel anytime.</p>
            </div>
            <div className={styles.box}>
                <img src="/icons/checkSign.png" alt="" className={styles.checkSign} />
                <p className={styles.text}>Everything on Netflix for one low price.</p>
            </div>
            <div className={styles.box}>
                <img src="/icons/checkSign.png" alt="" className={styles.checkSign} />
                <p className={styles.text}>Unlimited viewing on all your devices.</p>
            </div>
            <button
                type="submit"
                aria-label="Next step"
                className={styles.button}
                onClick={() => Router.push(`/signup/regform`)}
            >
                Next
            </button>
        </div>
    )
}

export default PlanView

import Image from 'next/image'
import Router from 'next/router'

import FULLCHECK_ICON from '../../../assets/icons/checkIcon.png'
import CHECK_ICON from '../../../assets/icons/checkSign.png'
import styles from './PlanView.module.css'

const PlanView = () => {
    return (
        <div className={styles.container}>
            <Image src={FULLCHECK_ICON} alt="" className={styles.checkIcon} />
            <span className={styles.step}>STEP 2 OF 3</span>
            <h1 className={styles.title}>Choose your plan.</h1>
            <div className={styles.box}>
                <Image src={CHECK_ICON} alt="" className={styles.checkSign} />
                <p className={styles.text}>No commitments, cancel anytime.</p>
            </div>
            <div className={styles.box}>
                <Image src={CHECK_ICON} alt="" className={styles.checkSign} />
                <p className={styles.text}>Everything on Netflix for one low price.</p>
            </div>
            <div className={styles.box}>
                <Image src={CHECK_ICON} alt="" className={styles.checkSign} />
                <p className={styles.text}>Unlimited viewing on all your devices.</p>
            </div>
            <button
                type="submit"
                aria-label="Next step"
                className={styles.button}
                onClick={() => Router.push(`/signup/planform`)}
            >
                Next
            </button>
        </div>
    )
}

export default PlanView

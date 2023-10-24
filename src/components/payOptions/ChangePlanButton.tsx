import Router from 'next/router'

import styles from './ChangePlanButton.module.css'

const ChangePlanButton = () => {
    return (
        <div className={styles.chosenPlan}>
            <div className={styles.chosenBox}>
                <span className={styles.chosenCash}>43zł/month</span>
                <span className={styles.chosenType}>Standard</span>
            </div>
            <button className={styles.chosenButton} onClick={() => Router.push('/signup/planform')}>
                Change
            </button>
        </div>
    )
}

export default ChangePlanButton

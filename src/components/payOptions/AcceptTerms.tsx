import styles from './AcceptTerms.module.css'

const AcceptTerms = () => {
    return (
        <>
            <p className={styles.terms}>
                By clicking the “Start Paid Membership” button below, you agree to our <a href="#">Terms of Use</a> and
                that you are over 18 and acknowledge the <a href="#">Privacy Statement</a>. Netflix will automatically
                continue your membership and charge the membership fee (currently 43 zł/month) to your payment method
                until you cancel. You may cancel at any time to avoid future charges.
            </p>
            <div className={styles.acceptBox}>
                <p className={styles.acceptError}>
                    You must acknowledge that you have read and agree to the Terms of Use to continue.
                </p>
                <input type="checkbox" className={styles.acceptInput} />
                <p className={styles.acceptText}>
                    You agree that your membership will begin immediately, and acknowledge that you will therefore lose
                    your right of withdrawal.
                </p>
            </div>
        </>
    )
}

export default AcceptTerms

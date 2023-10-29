import styles from './AcceptTerms.module.css'

type ComponentType = {
    onAcceptTermsHandler: () => void
    isTermsChecked: boolean
    isFirstTimeChecked: boolean
}

const AcceptTerms: React.FC<ComponentType> = ({ onAcceptTermsHandler, isTermsChecked, isFirstTimeChecked }) => {
    return (
        <>
            <p className={styles.terms}>
                By clicking the “Start Paid Membership” button below, you agree to our <a href="#">Terms of Use</a> and
                that you are over 18 and acknowledge the <a href="#">Privacy Statement</a>. Netflix will automatically
                continue your membership and charge the membership fee (currently 43 zł/month) to your payment method
                until you cancel. You may cancel at any time to avoid future charges.
            </p>
            <div className={styles.acceptBox}>
                {!isFirstTimeChecked && !isTermsChecked && (
                    <span className={styles.acceptError}>
                        You must acknowledge that you have read and agree to the Terms of Use to continue.
                    </span>
                )}
                <div className={styles.acceptContainer}>
                    <input type="checkbox" className={styles.acceptInput} onChange={onAcceptTermsHandler} />
                    <p className={styles.acceptText}>
                        You agree that your membership will begin immediately, and acknowledge that you will therefore
                        lose your right of withdrawal.
                    </p>
                </div>
            </div>
        </>
    )
}

export default AcceptTerms

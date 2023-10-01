import styles from './MembershipEmail.module.css'

const MembershipEmail = () => {
    return (
        <div className={styles.membershipBox}>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className={styles.inputBox}>
                <input type="email" placeholder="Email address" autoComplete="email" minLength={5} maxLength={50} />
                <button type="button" aria-label="Get started button">
                    Get Started &gt;
                </button>
            </div>
        </div>
    )
}

export default MembershipEmail

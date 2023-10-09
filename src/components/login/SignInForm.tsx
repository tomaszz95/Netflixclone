import LoginFormHelpers from './LoginFormHelpers'

import styles from './SignInForm.module.css'

const SignInForm = () => {
    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Sign In</h1>
            <form className={styles.form}>
                <div className={styles.formBox}>
                    <input
                        type="email"
                        autoComplete="email"
                        spellCheck="false"
                        id="userId"
                        minLength={5}
                        maxLength={50}
                        className={styles.emailInput}
                    />
                    <label htmlFor="userId" className={styles.emailLabel}>
                        Email or phone number
                    </label>
                    <span className={styles.error}>Please enter a valid email or phone number</span>
                </div>
                <div className={styles.formBox}>
                    <input
                        type="password"
                        autoComplete="email"
                        spellCheck="false"
                        id="userPassword"
                        className={styles.passwordInput}
                        minLength={4}
                        maxLength={60}
                    />
                    <label htmlFor="userPassword" className={styles.passwordLabel}>
                        Password
                    </label>
                    <span className={styles.error}>Your password must contain between 4 and 60 characters.</span>
                </div>
                <button type="submit" className={styles.sumbitBtn}>
                    Sign In
                </button>
            </form>
            <LoginFormHelpers />
        </div>
    )
}

export default SignInForm

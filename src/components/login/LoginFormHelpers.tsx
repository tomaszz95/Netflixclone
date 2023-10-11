import { useState } from 'react'
import styles from './LoginFormHelpers.module.css'

const LoginFormHelpers = () => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            <div className={styles.rememberBox}>
                <div className={styles.rememberForm}>
                    <input type="checkbox" name="rememberMe" id="rememberMe" className={styles.rememberInput} />
                    <label htmlFor="rememberMe" className={styles.rememberLabel}>
                        Remember Me
                    </label>
                </div>
                <a href="#" className={styles.rememberLink}>
                    Need help?
                </a>
            </div>
            <div className={styles.help}>
                <div className={styles.signUp}>
                    <p>New to Netflix?</p>
                    <a href="/">Sign up now.</a>
                </div>
                <div className={styles.signCaptcha}>
                    <p>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
                        {!isVisible && (
                            <button
                                aria-label="Learn more about google reCaptcha"
                                onClick={() => {
                                    setIsVisible(true)
                                }}
                            >
                                Learn more.
                            </button>
                        )}
                    </p>
                </div>
                <p className={`${styles.captchaText} ${isVisible ? styles.captchaVisible : ''}`}>
                    The information collected by Google reCAPTCHA is subject to the Google{' '}
                    <a href="https://policies.google.com/privacy" target="_blank">
                        Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="https://policies.google.com/terms" target="_blank">
                        Terms of Service
                    </a>
                    , and is used for providing, maintaining, and improving the reCAPTCHA service and for general
                    security purposes (it is not used for personalized advertising by Google).
                </p>
            </div>
        </>
    )
}

export default LoginFormHelpers

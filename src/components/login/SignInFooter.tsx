import styles from './SignInFooter.module.css'

const SignInFooter = () => {
    const changeLanguage = () => {
        console.log('Should change language.. In progress')
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <a href="#" className={styles.question}>
                    Question? Contact us.
                </a>
                <div className={styles.links}>
                    <a href="#">FAQ</a>
                    <a href="#">Help Center</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy</a>
                    <a href="#">Cookie Preferences</a>
                    <a href="#">Corporate Information</a>
                    <a href="#">Ad Choices</a>
                </div>
                <select name="language" className={styles.select} onChange={changeLanguage}>
                    <option value="Polish">Polish</option>
                    <option value="English">English</option>
                </select>
            </div>
        </footer>
    )
}

export default SignInFooter

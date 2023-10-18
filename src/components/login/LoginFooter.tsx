import styles from './LoginFooter.module.css'

type ComponentType = { isLoginPage: boolean }

const LoginFooter: React.FC<ComponentType> = ({ isLoginPage }) => {
    const changeLanguage = () => {
        console.log('This select should change language..')
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
                <select
                    name="language"
                    className={`${styles.select} ${isLoginPage ? styles.loginBg : styles.logoutBg}`}
                    onChange={changeLanguage}
                >
                    <option value="Polish">Polish</option>
                    <option value="English">English</option>
                </select>
            </div>
        </footer>
    )
}

export default LoginFooter

import styles from './FooterSection.module.css'

const FooterSection = () => {
    const changeLanguage = () => {
        console.log('This select should change language..')
    }

    return (
        <div className={styles.footer}>
            <a href="#" className={styles.question}>
                Question? Contact us.
            </a>
            <div className={styles.links}>
                <a href="#">FAQ</a>
                <a href="#">Help Center</a>
                <a href="#">Account</a>
                <a href="#">Media Center</a>
                <a href="#">Investor Relations</a>
                <a href="#">Jobs</a>
                <a href="#">Redeem Gift Cards</a>
                <a href="#">Buy Gift Cards</a>
                <a href="#">Ways to Watch</a>
                <a href="#">Terms of Use</a>
                <a href="#">Privacy</a>
                <a href="#">Cookie Preferences</a>
                <a href="#">Corporate Information</a>
                <a href="#">Contact Us</a>
                <a href="#">Speed Test</a>
                <a href="#">Legal Guarantee</a>
                <a href="#">Legal Notices</a>
                <a href="#">Only on Netflix</a>
                <a href="#">Ad Choices</a>
            </div>
            <select name="language" className={styles.select} onChange={changeLanguage}>
                <option value="Polish">Polish</option>
                <option value="English">English</option>
            </select>
            <span className={styles.language}>Netflix Poland</span>
        </div>
    )
}

export default FooterSection

import styles from './LoggedFooterSections.module.css'

const LoggedFooterSections = () => {
    return (
        <div className={styles.footer}>
            <a href="#" className={styles.question}>
                Question? Contact us.
            </a>
            <div className={styles.links}>
                {footerMainSiteLinks.map((link) => (
                    <a href="#" key={link}>
                        {link}
                    </a>
                ))}
            </div>
            <select name="language" className={styles.select} onChange={changeLanguage} defaultValue="English">
                <option value="Polish">Polish</option>
                <option value="English">English</option>
            </select>
            <span className={styles.language}>Netflix Poland</span>
        </div>
    )
}

export default LoggedFooterSections

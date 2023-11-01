import styles from './FooterSection.module.css'

import { footerMainSiteLinks } from '../helpers/siteText'

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

export default FooterSection

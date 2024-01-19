import styles from './FooterSection.module.css'

import { changingLanguage } from '../../helpers/dummyActionFunctions'
import { footerMainSiteLinks } from '../../constans/siteText'

const FooterSection = () => {
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
            <select name="language" className={styles.select} onChange={changingLanguage} defaultValue="English">
                <option value="Polish">Polish</option>
                <option value="English">English</option>
            </select>
            <span className={styles.language}>Netflix Poland</span>
        </div>
    )
}

export default FooterSection

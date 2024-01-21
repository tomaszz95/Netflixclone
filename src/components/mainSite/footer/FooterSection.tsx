import styles from './FooterSection.module.css'

import { footerMainSiteLinks } from '../../../constans/footer'
import SelectLanguage from '../../UI/SelectLanguage'

const FooterSection = () => {
    return (
        <div className={styles.footer}>
            <a href="#" className={styles.question}>
                Question? Contact us.
            </a>
            <ul className={styles.links}>
                {footerMainSiteLinks.map((link) => (
                    <li key={link}>
                        <a href="#">{link}</a>
                    </li>
                ))}
            </ul>
            <SelectLanguage style="dark" />
            <span className={styles.language}>Netflix Poland</span>
        </div>
    )
}

export default FooterSection

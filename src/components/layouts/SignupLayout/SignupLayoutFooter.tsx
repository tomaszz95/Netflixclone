import SelectLanguage from '../../UI/SelectLanguage'
import { footerSignupSiteLinks } from '../../../constans/footer'
import styles from './SignupLayoutFooter.module.css'

type ComponentType = {
    showLanguageSelect: boolean
}

const SignupLayoutFooter: React.FC<ComponentType> = ({ showLanguageSelect }) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <a href="#" className={styles.question}>
                    Question? Contact us.
                </a>
                <ul className={styles.links}>
                    {footerSignupSiteLinks.map((item) => (
                        <li key={item}>
                            <a href="#" className={styles.links}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
                {showLanguageSelect && <SelectLanguage style="white" />}
            </div>
        </footer>
    )
}

export default SignupLayoutFooter

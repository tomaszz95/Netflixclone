import styles from './ModalText.module.css'

type ComponentType = { onOpenMoreInfo: () => void }

const ModalText: React.FC<ComponentType> = ({ onOpenMoreInfo }) => {
    return (
        <div className={styles.textBox}>
            <p className={`${styles.text} ${styles.mobileText}`}>
                Netflix and third parties use cookies{' '}
                <a onClick={onOpenMoreInfo} href="#" aria-label="Open for more info">
                    (why?)
                </a>
                . You can change{' '}
                <a onClick={onOpenMoreInfo} href="#" aria-label="Open for change preferences">
                    your cookie preferences.
                </a>
            </p>
            <p className={`${styles.text} ${styles.desktopText}`}>
                Netflix and{' '}
                <a onClick={onOpenMoreInfo} href="#" role="button" aria-label="Open for more info">
                    third parties
                </a>{' '}
                use{' '}
                <a onClick={onOpenMoreInfo} href="#" role="button" aria-label="Open for more info">
                    cookies and similar technologies
                </a>{' '}
                on this website to collect information about your browsing activities which we use to analyse your use
                of the website, to personalise our services and to customise our online advertisements. When your
                consent is required, you can accept, refuse or personalise your choices. You can also change your
                preferences at any time by clicking on “Cookie Preferences” in the footer of each page. Netflix supports
                the Digital Advertising Alliance Principles.{' '}
                <a onClick={onOpenMoreInfo} href="#" role="button" aria-label="Open for more info">
                    Learn more about our use of cookies and information.
                </a>
            </p>
        </div>
    )
}

export default ModalText

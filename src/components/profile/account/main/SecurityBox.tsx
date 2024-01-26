import MainAnchorLink from './MainAnchorLink'

import styles from './SecurityBox.module.css'

const SecurityBox = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>SECURITY & PRIVACY</h2>
            <p className={styles.text}>
                Control access to this account, view the most recently active devices and more.
            </p>
            <div className={styles.linkBox}>
                <MainAnchorLink link="#" linkName="Manage access and devices" />
                <MainAnchorLink link="#" linkName="Sign out of all devices" />
                <MainAnchorLink link="#" linkName="Download your personal information" />
            </div>
        </section>
    )
}

export default SecurityBox

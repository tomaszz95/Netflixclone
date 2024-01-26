import MainAnchorLink from './MainAnchorLink'

import styles from './SettingsBox.module.css'

const SettingsBox = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>SETTINGS</h2>
            <div className={styles.linkBox}>
                <MainAnchorLink link="#" linkName="Turn off profile transfer" />
                <MainAnchorLink link="#" linkName="Test participation" />
                <MainAnchorLink link="#" linkName="Manage download devices" />
            </div>
        </section>
    )
}

export default SettingsBox

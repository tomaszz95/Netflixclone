import Link from 'next/link'
import styles from './SettingsBox.module.css'

const SettingsBox = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>SETTINGS</h2>
            <div className={styles.linkBox}>
                <Link href="#" className={styles.memberLink}>
                    <p>Turn off profile transfers</p> <span>&gt;</span>
                </Link>
                <Link href="#" className={styles.memberLink}>
                    <p>Test participation</p> <span>&gt;</span>
                </Link>
                <Link href="#" className={styles.memberLink}>
                    <p>Manage download devices</p> <span>&gt;</span>
                </Link>
            </div>
        </section>
    )
}

export default SettingsBox

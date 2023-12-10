import Link from 'next/link'

import styles from './SecurityBox.module.css'

const SecurityBox = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>SECURITY & PRIVACY</h2>
            <p className={styles.text}>
                Control access to this account, view the most recently active devices and more.
            </p>
            <div className={styles.linkBox}>
                <Link href="#" className={styles.memberLink}>
                    <p>Manage access and devices</p> <span>&gt;</span>
                </Link>
                <Link href="#" className={styles.memberLink}>
                    <p>Sign out of all devices</p> <span>&gt;</span>
                </Link>
                <Link href="#" className={styles.memberLink}>
                    <p>Download your personal information</p> <span>&gt;</span>
                </Link>
            </div>
        </section>
    )
}

export default SecurityBox

import Image from 'next/image'

import styles from './HeaderSection.module.css'

const HeaderSection = () => {
    const changeLanguage = () => {
        console.log('Should change language.. In progress')
    }

    return (
        <section className={styles.header}>
            <Image src="/photos/netflixLogo.png" alt="Netflix Logo" width="100" height="50" priority={true} />
            <div className={styles.headerBox}>
                <select name="language" className={styles.select} onChange={changeLanguage}>
                    <option value="Polish">Polish</option>
                    <option value="English">English</option>
                </select>
                <a role="button" aria-label="Link to sign in page" className={styles.signBtn} href="/login">
                    Sign In
                </a>
            </div>
        </section>
    )
}

export default HeaderSection

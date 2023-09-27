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
                <button role="button" aria-label="Sign In button" className={styles.signBtn}>
                    Sign In
                </button>
            </div>
        </section>
    )
}

export default HeaderSection

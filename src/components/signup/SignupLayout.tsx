import Link from 'next/link'

import styles from './SignupLayout.module.css'

type ChildrenLayoutType = {
    children: React.ReactNode
}

const SignupLayout: React.FC<ChildrenLayoutType> = ({ children }) => {
    const changeLanguage = () => {
        console.log('Should change language.. In progress')
    }

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <Link href="/">
                        <img src="/photos/netflixLogo.png" alt="Netflix Logo" />
                    </Link>
                    <Link href="/login" className={styles.loginLink}>
                        Sign In
                    </Link>
                </div>
            </header>
            <section className={styles.section}>{children}</section>
            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <a href="#" className={styles.question}>
                        Question? Contact us.
                    </a>
                    <div className={styles.links}>
                        <a href="#">FAQ</a>
                        <a href="#">Help Center</a>
                        <a href="#">Netflix Shop</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Privacy</a>
                        <a href="#">Cookie Preferences</a>
                        <a href="#">Corporate Information</a>
                        <a href="#">Ad Choices</a>
                    </div>
                    <select name="language" className={styles.select} onChange={changeLanguage}>
                        <option value="Polish">Polish</option>
                        <option value="English">English</option>
                    </select>
                </div>
            </footer>
        </main>
    )
}

export default SignupLayout

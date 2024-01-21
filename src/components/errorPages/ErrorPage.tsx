import Image from 'next/image'
import Link from 'next/link'

import NETFLIX_LOGO from '../../assets/photos/netflixLogo.png'
import styles from './ErrorPage.module.css'

type ComponentType = {
    errorTitle: string
    errorText: string
}

const ErrorPage: React.FC<ComponentType> = ({ errorTitle, errorText }) => {
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <Image src={NETFLIX_LOGO} alt="Netflix Logo icon" width="120" className={styles.netflixLogo} />
                </Link>
            </header>
            <main className={styles.main}>
                <div className={styles.shadow}></div>
                <h1 className={styles.title}>{errorTitle}</h1>
                <p className={styles.text}>{errorText}</p>
                <Link href="/" className={styles.button} aria-label="Go back to home page">
                    Netflix Home
                </Link>
            </main>
        </>
    )
}

export default ErrorPage

import Link from 'next/link'
import styles from './Page500View.module.css'

const Page500View = () => {
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <img src="/photos/netflixLogo.png" alt="Netflix Logo" className={styles.netflixLogo} />
                </Link>
            </header>
            <main className={styles.main}>
                <div className={styles.shadow}></div>
                <h1 className={styles.title}>Something went wrong :(</h1>
                <p className={styles.text}>
                    Sorry, we're having trouble with your request. You'll find lots to explore on the home page.
                </p>
                <Link href="/" className={styles.button} aria-label="Go back to home page">
                    Netflix Home
                </Link>
            </main>
        </>
    )
}

export default Page500View

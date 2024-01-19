import Link from 'next/link'
import Image from 'next/image'

import NETFLIX_LOGO from '../../assets/photos/netflixLogo.png'

import styles from './Page404View.module.css'

const Page404View = () => {
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <Image src={NETFLIX_LOGO} alt="Netflix Logo" className={styles.netflixLogo} />
                </Link>
            </header>
            <main className={styles.main}>
                <div className={styles.shadow}></div>
                <h1 className={styles.title}>Lost your way?</h1>
                <p className={styles.text}>
                    Sorry, we can't find that page. You'll find lots to explore on the home page.
                </p>
                <Link href="/" className={styles.button} aria-label="Go back to home page">
                    Netflix Home
                </Link>
            </main>
        </>
    )
}

export default Page404View

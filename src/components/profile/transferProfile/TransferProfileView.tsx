import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import Link from 'next/link'

import { footerTransferProfileSiteLinks } from '../../../constans/footer'
import useLogoutHandler from '../../../hooks/useLogoutHandler'
import TransferProfileMain from './TransferProfileMain'
import NETFLIX_LOGO from '../../../assets/photos/netflixLogo.png'
import styles from './TransferProfileView.module.css'
import Image from 'next/image'

const TransferProfileView = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <Link href="/">
                        <Image src={NETFLIX_LOGO} alt="Netflix Logo" />
                    </Link>

                    <Link href="/logout" className={styles.loginLink} onClick={() => useLogoutHandler(dispatch)}>
                        Sign Out
                    </Link>
                </div>
            </header>
            <section className={styles.section}>
                <TransferProfileMain />
            </section>
            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <a href="#" className={styles.question}>
                        Question? Contact us.
                    </a>
                    <div className={styles.links}>
                        {footerTransferProfileSiteLinks.map((link) => (
                            <a href="#" key={link}>
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default TransferProfileView

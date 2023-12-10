import { useEffect } from 'react'
import Router from 'next/router'

import styles from './LogoutView.module.css'

const LogoutView = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            Router.push('/')
        }, 30000)

        return () => clearTimeout(timer)
    })

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className={styles.title}>Leaving So Soon?</h1>
                <p className={styles.text}>
                    Just so you know, you don’t always need to sign out of Netflix. It’s only necessary if you’re on a
                    shared or public computer.
                </p>
                <p className={styles.text}>You’ll be redirected to Netflix.com in 30 seconds.</p>
                <button
                    type="submit"
                    className={styles.logoutBtn}
                    onClick={() => Router.push(`/`)}
                    aria-label="Click to go to homepage"
                >
                    Go Now
                </button>
            </div>
        </div>
    )
}

export default LogoutView

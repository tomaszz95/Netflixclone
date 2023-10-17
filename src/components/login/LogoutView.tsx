import { useState } from 'react'
import Router from 'next/router'
import { signOut } from 'firebase/auth'

import auth from '../../../firebase'
import { deleteCookie } from '../helpers/localStorageFunctions'

import styles from './LogoutView.module.css'

const LogoutView = () => {
    const [error, setError] = useState(false)

    const logoutHandler = async () => {
        signOut(auth)
            .then(() => {
                Router.push(`/`)
                deleteCookie('signInEmail')
                deleteCookie('signUpEmail')
                deleteCookie('startSignUpEmail')
            })
            .catch((error) => {
                setError(true)
            })
    }

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
                    aria-label="Click to Sign In"
                >
                    Go Now
                </button>
                {error && <span className={styles.error}>Something went wrong..</span>}
            </div>
        </div>
    )
}

export default LogoutView

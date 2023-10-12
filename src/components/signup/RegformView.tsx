import Router from 'next/router'

import styles from './RegformView.module.css'

const RegformView = () => {
    return (
        <div className={styles.container}>
            <img src="/photos/registrationLogo.png" alt="" className={styles.img} />
            <span className={styles.step}>STEP 1 OF 3</span>
            <h1 className={styles.title}>Finish setting up your account</h1>
            <p className={styles.text}>Netflix is personalized for you. Create a password to start watching Netflix.</p>
            <button
                type="submit"
                aria-label="Next step"
                className={styles.button}
                onClick={() => Router.push(`/signup/regform`)}
            >
                Next
            </button>
        </div>
    )
}

export default RegformView

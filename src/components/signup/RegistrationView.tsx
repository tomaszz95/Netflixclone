import Image from 'next/image'
import Router from 'next/router'
import REG_LOGO from '../../assets/photos/registrationLogo.png'

import styles from './RegistrationView.module.css'

const RegistrationView = () => {
    return (
        <div className={styles.container}>
            <Image src={REG_LOGO} alt="Registration logo" className={styles.img} width={300} />
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

export default RegistrationView

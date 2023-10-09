import Image from 'next/image'

import SignInForm from './SignInForm'
import SignInFooter from './SignInFooter'

import styles from './LoginView.module.css'

const LoginView = () => {
    return (
        <>
            <section className={styles.login}>
                <Image src="/photos/netflixLogo.png" alt="Netflix Logo" width="100" height="40" priority={true} />
                <SignInForm />
            </section>
            <SignInFooter />
        </>
    )
}

export default LoginView

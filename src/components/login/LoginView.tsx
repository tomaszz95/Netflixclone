import Image from 'next/image'
import Link from 'next/link'

import SignInForm from './SignInForm'
import SignInFooter from './SignInFooter'

import styles from './LoginView.module.css'

const LoginView = () => {
    return (
        <div className={styles.loginBox}>
            <section className={styles.login}>
                <Link href="/">
                    <Image src="/photos/netflixLogo.png" alt="Netflix Logo" width="100" height="40" priority={true} />
                </Link>
                <SignInForm />
            </section>
            <SignInFooter />
        </div>
    )
}

export default LoginView

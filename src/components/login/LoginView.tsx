import Image from 'next/image'

import styles from './LoginView.module.css'

const LoginView = () => {
    return (
        <section className={styles.login}>
            <Image src="/photos/netflixLogo.png" alt="Netflix Logo" width="100" height="40" priority={true} />
        </section>
    )
}

export default LoginView

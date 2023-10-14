import { useState, useEffect } from 'react'
import Image from 'next/image'

import MembershipEmail from './MembershipEmail'
import { getCookies } from '../helpers/localStorageFunctions'

import styles from './HeroSection.module.css'

const HeroSection = () => {
    const [isRegistering, setIsRegistering] = useState(false)

    useEffect(() => {
        const cookieLogin = getCookies('loginUserEmail')
        const cookieSignUp = getCookies('signUpEmail')

        if (cookieLogin !== null || !cookieSignUp !== null) {
            setIsRegistering(true)
        }
    }, [])

    return (
        <section className={styles.heroSection}>
            <div className={styles.heroShadow}></div>
            <Image
                src="/photos/header.jpg"
                alt="Netflix hero image with most known films and series in the background"
                width="1800"
                height="1800"
                priority={true}
                className={styles.heroImage}
            />
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    {isRegistering ? <p className={styles.welcomeText}>Welcome back!</p> : <></>}
                    <h1>The biggest local and international hits. The best stories. All streaming here.</h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                </div>
                <MembershipEmail />
            </div>
        </section>
    )
}

export default HeroSection

import Image from 'next/image'

import styles from './HeroSection.module.css'
import MembershipEmail from './MembershipEmail'

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroShadow}></div>
            <Image
                src="/photos/header.jpg"
                alt="Netflix hero image with most known films and series in the background"
                width="500"
                height="500"
                priority={true}
                className={styles.heroImage}
            />
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <h1>The biggest local and international hits. The best stories. All streaming here.</h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                </div>
                <MembershipEmail/>
            </div>
        </section>
    )
}

export default HeroSection

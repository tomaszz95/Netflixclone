import Image from 'next/image'

import styles from './HeroSection.module.css'

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
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
                <div className={styles.heroStart}>
                    <input type="email" placeholder="Email address" autoComplete="email" minLength={5} maxLength={50} />
                    <button type="button" aria-label="Get started button">
                        Get Started &gt;
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

import QuestionsAccordion from './QuestionsAccordion'
import styles from './QuestionSection.module.css'

const QuestionSection = () => {
    return (
        <section>
            <h2>Frequently Asked Questions</h2>
            <QuestionsAccordion />
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

export default QuestionSection

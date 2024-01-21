import MembershipEmail from '../header/MembershipEmail'
import QuestionsAccordion from './QuestionsAccordion'

import styles from './QuestionSection.module.css'

const QuestionSection = () => {
    return (
        <section className={styles.questions}>
            <div className={styles.container}>
                <h2 className={styles.questionsTitle}>Frequently Asked Questions</h2>
                <QuestionsAccordion />
                <MembershipEmail />
            </div>
        </section>
    )
}

export default QuestionSection

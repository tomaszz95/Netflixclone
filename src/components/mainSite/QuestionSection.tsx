import MembershipEmail from './MembershipEmail'
import QuestionsAccordion from './QuestionsAccordion'

import styles from './QuestionSection.module.css'

const QuestionSection = () => {
    return (
        <section className={styles.questions}>
            <h2 className={styles.questionsTitle}>Frequently Asked Questions</h2>
            <QuestionsAccordion />
            <MembershipEmail />
        </section>
    )
}

export default QuestionSection

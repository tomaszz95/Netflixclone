import { useState } from 'react'

import { questionAccordionData } from '../../../constans/mainSite'
import styles from './QuestionsAccordion.module.css'

const QuestionsAccordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(0)

    return (
        <ul className={styles.accordion}>
            {questionAccordionData.map((item, index) => (
                <li className={styles.accordionBox} key={index}>
                    <button
                        type="button"
                        className={`${styles.accordionItem} ${
                            activeAccordion === index ? styles.accordionItemFocus : ''
                        }`}
                        onClick={() => setActiveAccordion(index)}
                        aria-label={`Open for more info about ${item.question}`}
                    >
                        {item.question}
                        <span className={styles.accordionIcon}>
                            {activeAccordion === index ? (
                                <img src="./icons/closeWhite.png" />
                            ) : (
                                <img src="./icons/plusIcon.png" />
                            )}
                        </span>
                    </button>
                    <div
                        className={`${styles.accordionText} ${
                            activeAccordion === index ? styles.openQuestionText : ''
                        }`}
                    >
                        <p>{item.answer}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default QuestionsAccordion

import { useState } from 'react'
import Image from 'next/image'

import CLOSE_ICON from '../../../assets/icons/closeWhite.png'
import PLUS_ICON from '../../../assets/icons/plusIcon.png'
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
                                <Image src={CLOSE_ICON} alt="" />
                            ) : (
                                <Image src={PLUS_ICON} alt="" />
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

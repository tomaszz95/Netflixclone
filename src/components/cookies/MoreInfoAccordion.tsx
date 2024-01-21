import { useState } from 'react'

import { accordionDataText } from '../../constans/cookiesModal'

import styles from './MoreInfoAccordion.module.css'

const MoreInfoAccordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(0)

    return (
        <ul className={styles.accordion}>
            {accordionDataText.map((item, index) => (
                <li key={index} className={styles.accordionBox}>
                    <button
                        className={`${styles.accordionItem} ${
                            activeAccordion === index ? styles.accordionItemFocus : ''
                        }`}
                        onClick={() => setActiveAccordion(index)}
                        aria-label={`Open for more info about ${item.title}`}
                    >
                        {item.title}
                    </button>
                    <div
                        className={`${styles.accordionText} ${activeAccordion === index ? styles.openCookieText : ''}`}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default MoreInfoAccordion

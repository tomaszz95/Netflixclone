import { useState } from 'react'

import styles from './QuestionsAccordion.module.css'

const QuestionsAccordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(0)

    const openCookieText = (index: number) => {
        if (activeAccordion === index) {
            setActiveAccordion(index)
        } else {
            setActiveAccordion(index)
        }
    }
    return (
        <div className={styles.accordion}>
            <div className={styles.accordionBox}>
                <button
                    className={`${styles.accordionItem} ${activeAccordion === 0 ? 'openQuestionText' : ''}`}
                    onClick={() => openCookieText(0)}
                >
                    What is Netflix?
                </button>
                <div className={`${styles.accordionText} ${activeAccordion === 0 ? 'openQuestionText' : ''}`}>
                    <p>
                        <span>
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies,
                            anime, documentaries, and more on thousands of internet-connected devices.
                        </span>
                        <br />
                        <span>
                            You can watch as much as you want, whenever you want without a single commercial – all for
                            one low monthly price. There's always something new to discover and new TV shows and movies
                            are added every week!
                        </span>
                    </p>
                </div>
            </div>

            <div className={styles.accordionBox}>
                <button
                    className={`${styles.accordionItem} ${activeAccordion === 0 ? 'openQuestionText' : ''}`}
                    onClick={() => openCookieText(1)}
                >
                    How much does Netflix cost?
                </button>
                <div className={`${styles.accordionText} ${activeAccordion === 1 ? 'openQuestionText' : ''}`}>
                    <p>
                        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one
                        fixed monthly fee. Plans range from 29 zł to 60 zł a month. No extra costs, no contracts.
                    </p>
                </div>
            </div>

            <div className={styles.accordionBox}>
                <button
                    className={`${styles.accordionItem} ${activeAccordion === 0 ? 'openQuestionText' : ''}`}
                    onClick={() => openCookieText(2)}
                >
                    Where can i watch?
                </button>
                <div className={`${styles.accordionText} ${activeAccordion === 2 ? 'openQuestionText' : ''}`}>
                    <p>
                        <span>
                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at
                            netflix.com from your personal computer or on any internet-connected device that offers the
                            Netflix app, including smart TVs, smartphones, tablets, streaming media players and game
                            consoles.
                        </span>
                        <br />
                        <span>
                            You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use
                            downloads to watch while you're on the go and without an internet connection. Take Netflix
                            with you anywhere.
                        </span>
                    </p>
                </div>
            </div>

            <div className={styles.accordionBox}>
                <button
                    className={`${styles.accordionItem} ${activeAccordion === 0 ? 'openQuestionText' : ''}`}
                    onClick={() => openCookieText(3)}
                >
                    How do I cancel?
                </button>
                <div className={`${styles.accordionText} ${activeAccordion === 3 ? 'openQuestionText' : ''}`}>
                    <p>
                        Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your
                        account online in two clicks. There are no cancellation fees – start or stop your account
                        anytime.
                    </p>
                </div>
            </div>

            <div className={styles.accordionBox}>
                <button
                    className={`${styles.accordionItem} ${activeAccordion === 0 ? 'openQuestionText' : ''}`}
                    onClick={() => openCookieText(4)}
                >
                    What can I watch on Netflix?
                </button>
                <div className={`${styles.accordionText} ${activeAccordion === 4 ? 'openQuestionText' : ''}`}>
                    <p>
                        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning
                        Netflix originals, and more. Watch as much as you want, anytime you want.
                    </p>
                </div>
            </div>

            <div className={styles.accordionBox}>
                <button
                    className={`${styles.accordionItem} ${activeAccordion === 0 ? 'openQuestionText' : ''}`}
                    onClick={() => openCookieText(5)}
                >
                    Is Netflix good for kids?
                </button>
                <div className={`${styles.accordionText} ${activeAccordion === 5 ? 'openQuestionText' : ''}`}>
                    <p>
                        <span>
                            The Netflix Kids experience is included in your membership to give parents control while
                            kids enjoy family-friendly TV shows and movies in their own space.
                        </span>
                        <br />
                        <span>
                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity
                            rating of content kids can watch and block specific titles you don’t want kids to see.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default QuestionsAccordion

import { useState } from 'react'

import styles from './MoreInfoAccordion.module.css'

const MoreInfoAccordion = () => {
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
                    className={`${styles.accordionItem} ${activeAccordion === 0 ? 'accordionItemFocus' : ''}`}
                    onClick={() => openCookieText(0)}
                >
                    General description
                </button>
                <div className={`${styles.accordionText} ${activeAccordion === 0 ? 'openCookieText' : ''}`}>
                    <h3>General description</h3>
                    <p>
                        This cookie management tool allows you to determine who uses cookies to collect data from your
                        device, for what purposes they use such information, and how you can control the use of cookies
                        for non-essential activities.
                    </p>
                    <br />
                    <p>
                        Netflix adheres to the Self-Regulatory Principles for Online Behavioral Advertising of the
                        Digital Advertising Alliance (DAA), the Digital Advertising Alliance of Canada (DAAC) and the
                        European Interactive Digital Advertising Alliance (EDAA).
                    </p>
                    <br />
                    <p>
                        You who opt-out of advertising cookies may continue to be presented with Netflix ads, but they
                        will not be personalized by Netflix or our service providers. In addition, Netflix will continue
                        to personalize your use of the site with cookies that you have consented to.
                    </p>
                    <br />
                    <p>
                        In most browsers, you can also configure your privacy settings to prevent the acceptance of new
                        cookies, receive notifications when a new cookie is received, or disable cookies altogether. If
                        the browser is set to reject all cookies, the User will not receive behavioral advertising, but
                        this may adversely affect the use of Netflix or prevent it altogether. In addition, if the User
                        has used Netflix's cookie management tool to opt out of certain cookies, such settings will be
                        remembered in a cookie stored on the User's device. Therefore, in order for the User's
                        preferences to be saved, it is important that the User's browser configuration allows the use of
                        cookies. If the User deletes or clears cookies or changes his browser, he must reconfigure his
                        cookie settings.
                    </p>
                    <br />
                    <p>
                        For more information on Netflix's use of cookies, please see the Cookies and Online Advertising
                        section of the Privacy Policy.
                    </p>
                </div>
            </div>

            <div className={styles.accordionBox}>
                <button
                    className={`${styles.accordionItem} ${activeAccordion === 1 ? 'accordionItemFocus' : ''}`}
                    onClick={() => openCookieText(1)}
                >
                    Necessary cookies
                </button>
                <div className={`${styles.accordionText} ${activeAccordion === 1 ? 'openCookieText' : ''}`}>
                    <h3>Necessary cookies</h3>
                    <p>
                        Such cookies are necessary to operate our website and service on the Internet. For example, we
                        and our Service Providers may use such cookies to authenticate and identify you as you use our
                        sites and applications, allowing us to provide you with our services. They also enable us to
                        enforce our terms of use, prevent fraud and maintain security.
                    </p>
                    <br />
                    <p>
                        Duration: most cookies are session cookies (active until you close your browser) or active for
                        one day only. Some cookies are active for longer periods of time - from 3 to 12 months. Cookies
                        used to prevent fraud and protect the security of our services are active for up to 24 months.
                    </p>
                </div>
            </div>

            <div className={styles.accordionBox}>
                <button
                    className={`${styles.accordionItem} ${activeAccordion === 2 ? 'accordionItemFocus' : ''}`}
                    onClick={() => openCookieText(2)}
                >
                    Our analytical and functional cookies
                </button>
                <div className={`${styles.accordionText} ${activeAccordion === 2 ? 'openCookieText' : ''}`}>
                    <h3>Our analytical and functional cookies</h3>
                    <p>
                        These types of cookies allow us to personalize and improve your experience when using Netflix.
                        For example, they help us remember User preferences. Thanks to such cookies, the User does not
                        have to re-enter previously provided information (e.g. during registration). We also use such
                        files to collect information (e.g., about popular pages, success rates, viewing patterns,
                        click-through rates, etc.) about our users' use of Netflix, so that we can improve and customize
                        our website and service and perform market analysis. If such cookies are deleted, it may result
                        in reduced functionality of our service.
                    </p>
                    <br />
                    <p>
                        Duration: most cookies are session cookies (active until you close your browser) or active for
                        one day only. Some cookies are active for a longer period of time - from 3 to 12 months.
                    </p>
                </div>
            </div>

            <div className={styles.accordionBox}>
                <button
                    className={`${styles.accordionItem} ${activeAccordion === 3 ? 'accordionItemFocus' : ''}`}
                    onClick={() => openCookieText(3)}
                >
                    Analytical and third-party functional cookies
                </button>
                <div className={`${styles.accordionText} ${activeAccordion === 3 ? 'openCookieText' : ''}`}>
                    <h3>Analytical and third-party functional cookies</h3>
                    <p>
                        These cookies, installed by other parties, help to customize and improve our service. Cookies of
                        this kind are only found on the Tudum portal (our official fan portal). We use these cookies to
                        provide you with what other entities offer, such as displaying social media content. For more
                        information on how other entities use cookies, see the privacy notices on their sites. If such
                        cookies are deleted, it may result in reduced functionality of our service.
                    </p>
                </div>
            </div>

            <div className={styles.accordionBox}>
                <button
                    className={`${styles.accordionItem} ${activeAccordion === 4 ? 'accordionItemFocus' : ''}`}
                    onClick={() => openCookieText(4)}
                >
                    Advertising cookies
                </button>
                <div className={`${styles.accordionText} ${activeAccordion === 4 ? 'openCookieText' : ''}`}>
                    <h3>Advertising cookies</h3>
                    <p>
                        Such cookies use information about your use of this site or app and other sites and apps, and
                        about your response to our ads and emails. They are used to deliver ads in which the user may be
                        interested and for analytics and optimization purposes. These types of ads are called
                        "interest-based ads" and are displayed to users outside the Netflix domain. Netflix uses legal
                        and technical solutions to prevent advertising partners from accessing information about the
                        specific titles you select, the URLs you visit, and the material you watch on our service. We do
                        not share information about the titles you select or the materials you view on our site.
                        Advertising cookies related to our service belong to our advertising partners. Details are
                        provided in the cookie information. Select your settings for advertising cookies below. If you
                        want to opt out of advertising cookies on all sites, go here.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MoreInfoAccordion

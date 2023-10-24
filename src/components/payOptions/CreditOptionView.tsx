import AcceptTerms from './AcceptTerms'
import ChangePlanButton from './ChangePlanButton'

import styles from './CreditOptionView.module.css'

const CreditOptionView = () => {
    console.log('ta')
    return (
        <div className={styles.container}>
            <span className={styles.step}>STEP 3 OF 3</span>
            <h1 className={styles.title}>Set up your credit or debit card</h1>
            <div className={styles.icons}>
                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png" alt="" />
                <img
                    src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png"
                    alt=""
                />
                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX.png" alt="" />
            </div>
            <form className={styles.formBox}>
                <div className={styles.cardNumberBox}>
                    <div className={styles.cardNumberContainer}>
                        <input
                            type="number"
                            id="cardNumber"
                            minLength={16}
                            maxLength={16}
                            className={styles.cardNumberInput}
                            placeholder="Card number"
                        />
                        <img src="/icons/cardIcon.png" alt="" className={styles.cardNumberIcon} />
                    </div>
                    <div className={styles.error}>
                        <img src="/icons/xicon.png" alt="" />
                        <p>Please enter a card number.</p>
                    </div>
                </div>
                <div className={styles.cardExpirationContainer}>
                    <div className={styles.cardBoxExpiration}>
                        <input
                            pattern="^(0[1-9]|1[0-2])/\d{2}$"
                            type="text"
                            minLength={5}
                            maxLength={5}
                            className={styles.cardExpirationDateInput}
                            placeholder="Expiration date"
                        />
                        <div className={styles.error}>
                            <img src="/icons/xicon.png" alt="" />
                            <p>Please enter an expiration date.</p>
                        </div>
                    </div>
                    <div className={styles.cardBoxCVV}>
                        <div className={styles.cardCVVContainer}>
                            <input
                                type="number"
                                id="cardCVV"
                                minLength={3}
                                maxLength={3}
                                className={styles.cardCVVInput}
                                placeholder="CVV"
                            />
                            <img src="/icons/questionIcon.png" alt="" className={styles.cardNumberIcon} />
                        </div>
                        <div className={styles.error}>
                            <img src="/icons/xicon.png" alt="" />
                            <p>Please enter a CVV.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cardBoxFirstName}>
                    <input type="text" id="firstName" className={styles.cardFirstNameInput} placeholder="First name" />
                    <div className={styles.error}>
                        <img src="/icons/xicon.png" alt="" />
                        <p>Please enter a first name.</p>
                    </div>
                </div>
                <div className={styles.cardBoxLastName}>
                    <input type="text" id="lastName" className={styles.cardFirstNameInput} placeholder="Last name" />
                    <div className={styles.error}>
                        <img src="/icons/xicon.png" alt="" />
                        <p>Please enter a last name.</p>
                    </div>
                </div>
            </form>
            <ChangePlanButton />
            <AcceptTerms />
            <button type="button" aria-label="Start paid membership button">
                Start Paid Membership
            </button>
            <p className={styles.botCheck}>
                This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
                <a href="#" className={styles.botLink}>
                    Learn more
                </a>
                <p className={styles.botCheckHidden}>
                    The information collected by Google reCAPTCHA is subject to the Google{' '}
                    <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>, and is used for providing,
                    maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used
                    for personalized advertising by Google).
                </p>
            </p>
        </div>
    )
}

export default CreditOptionView

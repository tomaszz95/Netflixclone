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
                <div className={styles.cardBox}>
                    <input
                        pattern="^(0[1-9]|1[0-2])/\d{2}$"
                        type="text"
                        minLength={5}
                        maxLength={5}
                        className={styles.cardExpirationDateInput}
                        placeholder="Expiration date"
                    />
                    <div className={styles.cardBoxCVV}>
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
                </div>
                <input type="text" id="firstName" className={styles.cardFirstNameInput} placeholder="First name" />
                <input type="text" id="lastName" className={styles.cardFirstNameInput} placeholder="Last name" />
            </form>
            <ChangePlanButton />
            <AcceptTerms />
            <button type="button" aria-label="Start paid membership button">
                Start Paid Membership
            </button>
            <p className={styles.botCheck}>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more</a>.
            </p>
        </div>
    )
}

export default CreditOptionView

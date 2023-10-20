import Router from 'next/router'

import styles from './PaymentPickerView.module.css'

const PaymentPickerView = () => {
    return (
        <div className={styles.container}>
            <img src="/icons/lockIcon.png" alt="" className={styles.lockIcon} />
            <span className={styles.step}>STEP 3 OF 3</span>
            <h1 className={styles.title}>Choose how to pay</h1>
            <p className={styles.text}>Your payment is encrypted and you can change how you pay anytime.</p>
            <p className={styles.textBold}>Secure for peace of mind.</p>
            <p className={styles.textBold}>Cancel easily online.</p>
            <div>
                <p className={styles.encrypted}>End-to-end encrypted</p>
                <img src="/icons/lockIcon2.png" alt="" className={styles.lockIconEncrypted} />
            </div>
            <button
                type="submit"
                aria-label="Click to pay by card or debit card"
                className={styles.button}
                onClick={() => Router.push(`/signup/planform`)}
            >
                <div className={styles.buttonBox}>
                    <p className={styles.buttonText}>Credit or Debit Card</p>
                    <div className={styles.buttonImages}>
                        <img
                            src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png"
                            alt=""
                        />
                        <img
                            src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png"
                            alt=""
                        />
                        <img
                            src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png"
                            alt=""
                        />
                    </div>
                </div>
                <span>&gt;</span>
            </button>
            <button
                type="submit"
                aria-label="Click to pay by mobile bill"
                className={styles.button}
                onClick={() => Router.push(`/signup/planform`)}
            >
                <div className={styles.buttonBox}>
                    <p className={styles.buttonText}>Add to mobile bill</p>
                    <div className={styles.buttonImages}>
                        <img
                            src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PLAYPL.png"
                            alt=""
                        />
                    </div>
                </div>
                <span>&gt;</span>
            </button>
            <button
                type="submit"
                aria-label="Click to pay by PayPal"
                className={styles.button}
                onClick={() => Router.push(`/signup/planform`)}
            >
                <div className={styles.buttonBox}>
                    <p className={styles.buttonText}>PayPal</p>
                    <div className={styles.buttonImages}>
                        <img
                            src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PAYPAL.png"
                            alt=""
                        />
                    </div>
                </div>
                <span>&gt;</span>
            </button>
            <button
                type="submit"
                aria-label="Click to pay by Gift Code"
                className={styles.button}
                onClick={() => Router.push(`/signup/planform`)}
            >
                <div className={styles.buttonBox}>
                    <p className={styles.buttonText}>Gift Code</p>
                    <div className={styles.buttonImages}>
                        <img
                            src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/GIFT_CODE.png"
                            alt=""
                        />
                    </div>
                </div>
                <span>&gt;</span>
            </button>
        </div>
    )
}

export default PaymentPickerView

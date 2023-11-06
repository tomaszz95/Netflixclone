import Router from 'next/router'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import { paymentActions } from '../store/payment'

import styles from './PaymentPickerView.module.css'

const PaymentPickerView = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    const paymentChooseHandler = (chosenPayment: string) => {
        dispatch(paymentActions.changePaymentValue({ name: 'howToPay', value: chosenPayment }))
    }

    return (
        <div className={styles.container}>
            <img src="/icons/lockIcon.png" alt="" className={styles.lockIcon} />
            <span className={styles.step}>STEP 3 OF 3</span>
            <h1 className={styles.title}>Choose how to pay</h1>
            <p className={styles.text}>Your payment is encrypted and you can change how you pay anytime.</p>
            <p className={styles.textBold}>Secure for peace of mind.</p>
            <p className={styles.textBold}>Cancel easily online.</p>
            <div className={styles.encryptedBox}>
                <p className={styles.encrypted}>End-to-end encrypted</p>
                <img src="/icons/lockIcon2.png" alt="" className={styles.lockIconEncrypted} />
            </div>
            <button
                type="submit"
                aria-label="Click to pay by card or debit card"
                className={styles.button}
                onClick={() => {
                    paymentChooseHandler('card')
                    Router.push(`/signup/creditoption`)
                }}
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
                            src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX.png"
                            alt=""
                        />
                    </div>
                </div>
                <span className={styles.buttonIcon}>&gt;</span>
            </button>
            <button
                type="submit"
                aria-label="Click to pay by mobile bill"
                className={styles.button}
                onClick={() => {
                    paymentChooseHandler('mobileBill')
                    Router.push(`/signup/dcboption`)
                }}
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
                <span className={styles.buttonIcon}>&gt;</span>
            </button>
            <button
                type="submit"
                aria-label="Click to pay by PayPal"
                className={styles.button}
                onClick={() => {
                    paymentChooseHandler('paypal')
                    Router.push(`/signup/paypaloption`)
                }}
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
                <span className={styles.buttonIcon}>&gt;</span>
            </button>
            <button
                type="submit"
                aria-label="Click to pay by Gift Code"
                className={styles.button}
                onClick={() => {
                    paymentChooseHandler('giftCode')
                    Router.push(`/signup/giftoption`)
                }}
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
                <span className={styles.buttonIcon}>&gt;</span>
            </button>
        </div>
    )
}

export default PaymentPickerView

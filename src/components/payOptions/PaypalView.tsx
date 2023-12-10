import Router from 'next/router'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import ChangePlanButton from './ChangePlanButton'

import { paymentActions } from '../store/payment'
import styles from './PaypalView.module.css'

const PaypalView = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const submitClick = () => {
        Router.push(`/simpleSetup/orderfinal`)

        dispatch(paymentActions.changePaymentValue({ name: 'userPaid', value: true }))
    }

    return (
        <div className={styles.container}>
            <span className={styles.step}>STEP 3 OF 3</span>
            <h1 className={styles.title}>Set up your PayPal</h1>
            <ChangePlanButton />
            <p className={styles.text}>
                To finish signup, click the <span>Continue to PayPal</span> button and log in to PayPal using your email
                and password.
            </p>
            <button
                type="submit"
                aria-label="Start paid membership button"
                className={styles.submitBtn}
                onClick={submitClick}
            >
                Continue to PayPal
            </button>
        </div>
    )
}

export default PaypalView

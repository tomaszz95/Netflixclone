import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import Router from 'next/router'

import ChangePlanButton from './ChangePlanButton'

import { paymentActions } from '../../store/payment'
import styles from './GiftView.module.css'

const GiftView = () => {
    const [showBotText, setShowBotText] = useState(false)
    const [giftNumberInput, setGiftNumberInput] = useState({ giftNumber: '', isFirstTry: true, isValid: false })
    const giftNumberInputElement = useRef<HTMLInputElement | null>(null)

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    const isGiftNumberValid = (inputValue: string) => {
        if (inputValue !== null && inputValue !== '' && inputValue.length < 11 && inputValue.length > 7) {
            return { isValid: true, isFirstTry: false }
        } else {
            return { isValid: false, isFirstTry: false }
        }
    }

    const changeInputsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (giftNumberInput.isFirstTry && e.target.id === 'giftNumber') {
            setGiftNumberInput(() => {
                return { ...giftNumberInput, giftNumber: e.target.value }
            })
        }

        if (!giftNumberInput.isFirstTry && e.target.id === 'giftNumber') {
            const values = isGiftNumberValid(e.target.value)
            setGiftNumberInput({ ...values, giftNumber: e.target.value })
        }
    }

    const submitData = () => {
        const isGiftNumberValidNow = isGiftNumberValid(giftNumberInput.giftNumber)
        setGiftNumberInput({ ...isGiftNumberValidNow, giftNumber: giftNumberInput.giftNumber })

        if (isGiftNumberValidNow.isValid) {
            Router.push(`/simpleSetup/orderfinal`)
            dispatch(paymentActions.changePaymentValue({ name: 'userPaid', value: true }))
        }
    }

    const showBotTextHandler = () => {
        setShowBotText(true)
    }

    return (
        <div className={styles.container}>
            <span className={styles.step}>STEP 3 OF 3</span>
            <h1 className={styles.title}>Enter your gift code</h1>
            <div className={styles.cardForm}>
                <input
                    type="number"
                    id="giftNumber"
                    className={`${styles.giftNumberInput} ${giftNumberInput.giftNumber !== '' ? styles.notEmpty : ''} ${
                        !giftNumberInput.isFirstTry && !giftNumberInput.isValid
                            ? styles.wrongInput
                            : !giftNumberInput.isFirstTry && giftNumberInput.isValid
                            ? styles.valid
                            : ''
                    }`}
                    onChange={changeInputsValue}
                    ref={giftNumberInputElement}
                    value={giftNumberInput.giftNumber}
                />
                <label htmlFor="giftNumber" className={styles.giftNumberLabel}>
                    Gift card number
                </label>
            </div>
            <div
                className={`${styles.error} ${
                    !giftNumberInput.isFirstTry && !giftNumberInput.isValid ? styles.wrongInput : ''
                }`}
            >
                <p>The code must be between 8-10 digits!</p>
            </div>
            <ChangePlanButton />
            <button
                type="submit"
                aria-label="Start paid membership button"
                className={styles.submitBtn}
                onClick={submitData}
            >
                Redeem Gift Code
            </button>
            <p className={styles.botCheck}>
                This page is protected by Google reCAPTCHA to ensure you're not a bot.
                {!showBotText && (
                    <button
                        type="button"
                        className={styles.botLink}
                        onClick={showBotTextHandler}
                        aria-label="Learn more button"
                    >
                        Learn more
                    </button>
                )}
                {showBotText && (
                    <span className={styles.botCheckHidden}>
                        The information collected by Google reCAPTCHA is subject to the Google{' '}
                        <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>, and is used for providing,
                        maintaining, and improving the reCAPTCHA service and for general security purposes (it is not
                        used for personalized advertising by Google).
                    </span>
                )}
            </p>
        </div>
    )
}

export default GiftView

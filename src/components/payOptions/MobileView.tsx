import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import Router from 'next/router'

import AcceptTerms from './AcceptTerms'
import ChangePlanButton from './ChangePlanButton'

import { paymentActions } from '../../store/payment'
import styles from './MobileView.module.css'

const MobileView = () => {
    const [isTermsChecked, setIsTermsChecked] = useState(false)
    const [isFirstTimeChecked, setIsFirstTimeChecked] = useState(true)

    const [phoneNumberInput, setPhoneNumberInput] = useState({ phoneNumber: '', isFirstTry: true, isValid: false })
    const phoneNumberInputElement = useRef<HTMLInputElement | null>(null)

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    const isPhoneNumberValid = (inputValue: string) => {
        if (
            inputValue !== null &&
            inputValue !== '' &&
            inputValue.length < 15 &&
            inputValue.length >= 9 &&
            /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
        ) {
            return { isValid: true, isFirstTry: false }
        } else {
            return { isValid: false, isFirstTry: false }
        }
    }

    const changeInputsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (phoneNumberInput.isFirstTry && e.target.id === 'telNumber') {
            setPhoneNumberInput(() => {
                return { ...phoneNumberInput, phoneNumber: e.target.value }
            })
        }

        if (!phoneNumberInput.isFirstTry && e.target.id === 'telNumber') {
            const values = isPhoneNumberValid(e.target.value)
            setPhoneNumberInput({ ...values, phoneNumber: e.target.value })
        }
    }

    const submitData = () => {
        const isPhoneNumberValidNow = isPhoneNumberValid(phoneNumberInput.phoneNumber)
        setPhoneNumberInput({ ...isPhoneNumberValidNow, phoneNumber: phoneNumberInput.phoneNumber })

        if (isTermsChecked && isPhoneNumberValidNow.isValid) {
            Router.push(`/simpleSetup/orderfinal`)
            dispatch(paymentActions.changePaymentValue({ name: 'userPaid', value: true }))
        }

        setIsFirstTimeChecked(false)
    }

    const acceptTermsHandler = () => {
        if (isFirstTimeChecked) {
            setIsTermsChecked(!isTermsChecked)
            setIsFirstTimeChecked(false)
        } else {
            setIsTermsChecked(!isTermsChecked)
        }
    }

    return (
        <div className={styles.container}>
            <span className={styles.step}>STEP 3 OF 3</span>
            <h1 className={styles.title}>Set up billing through your mobile carrier</h1>
            <img
                src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PLAYPL.png"
                className={styles.icon}
                alt=""
            />
            <p className={styles.text}>Your Netflix membership will be added to your mobile phone bill.</p>
            <p className={styles.text}>
                Your number will also be used if you forget your password and for important account messages. SMS fees
                may apply.
            </p>
            <form className={styles.formBox}>
                <div className={styles.cardBoxMobile}>
                    <div className={styles.cardBoxMobileContainer}>
                        <input
                            type="tel"
                            id="telNumber"
                            className={`${styles.telNumberInput} ${
                                phoneNumberInput.phoneNumber !== '' ? styles.notEmpty : ''
                            } ${
                                !phoneNumberInput.isFirstTry && !phoneNumberInput.isValid
                                    ? styles.wrongInput
                                    : !phoneNumberInput.isFirstTry && phoneNumberInput.isValid
                                    ? styles.valid
                                    : ''
                            }`}
                            onChange={changeInputsValue}
                            ref={phoneNumberInputElement}
                            value={phoneNumberInput.phoneNumber}
                            maxLength={15}
                        />
                        <label htmlFor="telNumber" className={styles.telNumberLabel}>
                            Mobile number
                        </label>
                    </div>
                    <div
                        className={`${styles.error} ${
                            !phoneNumberInput.isFirstTry && !phoneNumberInput.isValid ? styles.wrongInput : ''
                        }`}
                    >
                        <p>Mobile Phone Number is required.</p>
                    </div>
                </div>
            </form>
            <ChangePlanButton />
            <AcceptTerms
                onAcceptTermsHandler={acceptTermsHandler}
                isTermsChecked={isTermsChecked}
                isFirstTimeChecked={isFirstTimeChecked}
            />
            <button
                type="submit"
                aria-label="Start paid membership button"
                className={styles.submitBtn}
                onClick={submitData}
            >
                Verify Phone Number
            </button>
            <p className={styles.textBottom}>We’ll text a code to verify your number.</p>
        </div>
    )
}

export default MobileView

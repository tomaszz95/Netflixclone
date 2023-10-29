import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import AcceptTerms from './AcceptTerms'
import ChangePlanButton from './ChangePlanButton'

import { paymentActions } from '../store/payment'
import styles from './CreditOptionView.module.css'

const CreditOptionView = () => {
    const [showBotText, setShowBotText] = useState(false)
    const [isTermsChecked, setIsTermsChecked] = useState(false)
    const [isFirstTimeChecked, setIsFirstTimeChecked] = useState(true)

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    const [cardNumberInput, setCardNumberInput] = useState({ cardNumber: '', isFirstTry: true, isValid: false })
    const cardNumberInputElement = useRef<HTMLInputElement | null>(null)
    const [expirationDateInput, setExpirationDateInput] = useState({
        expirationDate: '',
        isFirstTry: true,
        isValid: false,
    })
    const expirationDateInputElement = useRef<HTMLInputElement | null>(null)
    const [cvvInput, setCvvInput] = useState({ cardCvv: '', isFirstTry: true, isValid: false })
    const cvvInputElement = useRef<HTMLInputElement | null>(null)
    const [firstNameInput, setFirstNameInput] = useState({ firstName: '', isFirstTry: true, isValid: false })
    const firstNameInputElement = useRef<HTMLInputElement | null>(null)
    const [lastNameInput, setLastNameInput] = useState({ lastName: '', isFirstTry: true, isValid: false })
    const lastNameInputElement = useRef<HTMLInputElement | null>(null)

    const showBotTextHandler = () => {
        setShowBotText(true)
    }

    const isCardNumberValid = (inputValue: string) => {
        if (inputValue !== null && inputValue !== '' && inputValue.length === 16 && /^[0-9]{16}$/.test(inputValue)) {
            return { isValid: true, isFirstTry: false }
        } else {
            return { isValid: false, isFirstTry: false }
        }
    }

    const isExpirationDateValid = (inputValue: string) => {
        if (inputValue !== null && inputValue !== '' && inputValue.length === 5) {
            return { isValid: true, isFirstTry: false }
        } else {
            return { isValid: false, isFirstTry: false }
        }
    }

    const isCVVValid = (inputValue: string) => {
        if (inputValue !== null && inputValue !== '' && inputValue.length === 3 && /^[0-9]{3}$/.test(inputValue)) {
            return { isValid: true, isFirstTry: false }
        } else {
            return { isValid: false, isFirstTry: false }
        }
    }

    const isNameValid = (inputValue: string) => {
        if (inputValue !== null && inputValue !== '' && inputValue.length < 50) {
            return { isValid: true, isFirstTry: false }
        } else {
            return { isValid: false, isFirstTry: false }
        }
    }

    const changeInputsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (cardNumberInput.isFirstTry && e.target.id === 'cardNumber') {
            setCardNumberInput(() => {
                return { ...cardNumberInput, cardNumber: e.target.value }
            })
        } else if (expirationDateInput.isFirstTry && e.target.id === 'expirationDate') {
            setExpirationDateInput(() => {
                return { ...expirationDateInput, expirationDate: e.target.value }
            })
        } else if (cvvInput.isFirstTry && e.target.id === 'cardCVV') {
            setCvvInput(() => {
                return { ...cvvInput, cardCvv: e.target.value }
            })
        } else if (firstNameInput.isFirstTry && e.target.id === 'firstName') {
            setFirstNameInput(() => {
                return { ...firstNameInput, firstName: e.target.value }
            })
        } else if (lastNameInput.isFirstTry && e.target.id === 'lastName') {
            setLastNameInput(() => {
                return { ...lastNameInput, lastName: e.target.value }
            })
        }

        if (!cardNumberInput.isFirstTry && e.target.id === 'cardNumber') {
            const values = isCardNumberValid(e.target.value)
            setCardNumberInput({ ...values, cardNumber: e.target.value })
        } else if (!expirationDateInput.isFirstTry && e.target.id === 'expirationDate') {
            const values = isExpirationDateValid(e.target.value)
            setExpirationDateInput({ ...values, expirationDate: e.target.value })
        } else if (!cvvInput.isFirstTry && e.target.id === 'cardCVV') {
            const values = isCVVValid(e.target.value)
            setCvvInput({ ...values, cardCvv: e.target.value })
        } else if (!firstNameInput.isFirstTry && e.target.id === 'firstName') {
            const values = isNameValid(e.target.value)
            setFirstNameInput({ ...values, firstName: e.target.value })
        } else if (!lastNameInput.isFirstTry && e.target.id === 'lastName') {
            const values = isNameValid(e.target.value)
            setLastNameInput({ ...values, lastName: e.target.value })
        }
    }

    const submitData = () => {
        const isCardNumberValidNow = isCardNumberValid(cardNumberInput.cardNumber)
        setCardNumberInput({ ...isCardNumberValidNow, cardNumber: cardNumberInput.cardNumber })

        const isExpirationDateValidNow = isExpirationDateValid(expirationDateInput.expirationDate)
        setExpirationDateInput({ ...isExpirationDateValidNow, expirationDate: expirationDateInput.expirationDate })

        const isCVVValidNow = isCVVValid(cvvInput.cardCvv)
        setCvvInput({ ...isCVVValidNow, cardCvv: cvvInput.cardCvv })
        const isFirstNameValidNow = isNameValid(firstNameInput.firstName)
        setFirstNameInput({ ...isFirstNameValidNow, firstName: firstNameInput.firstName })

        const isLastNameValidNow = isNameValid(lastNameInput.lastName)
        setLastNameInput({ ...isLastNameValidNow, lastName: lastNameInput.lastName })

        if (
            isTermsChecked &&
            isCardNumberValidNow.isValid &&
            isExpirationDateValidNow.isValid &&
            isCVVValidNow.isValid &&
            isFirstNameValidNow.isValid &&
            isLastNameValidNow.isValid
        ) {
            console.log('payed')
            // Router.push(`/signup/plan`)
            dispatch(paymentActions.changeIfUserPayedValue(true))
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
                            type="text"
                            id="cardNumber"
                            className={`${styles.cardNumberInput} ${
                                cardNumberInput.cardNumber !== '' ? styles.notEmpty : ''
                            } ${
                                !cardNumberInput.isFirstTry && !cardNumberInput.isValid
                                    ? styles.wrongInput
                                    : !cardNumberInput.isFirstTry && cardNumberInput.isValid
                                    ? styles.valid
                                    : ''
                            }`}
                            maxLength={16}
                            ref={cardNumberInputElement}
                            onChange={changeInputsValue}
                            value={cardNumberInput.cardNumber}
                        />
                        <label htmlFor="cardNumber" className={styles.cardNumberLabel}>
                            Card number
                        </label>
                        <img src="/icons/cardIcon.png" alt="" className={styles.cardNumberIcon} />
                    </div>
                    <div
                        className={`${styles.error} ${
                            !cardNumberInput.isFirstTry && !cardNumberInput.isValid ? styles.wrongInput : ''
                        }`}
                    >
                        <img src="/icons/xicon.png" alt="" />
                        <p>Please enter a card number.</p>
                    </div>
                </div>
                <div className={styles.cardExpirationContainer}>
                    <div className={styles.cardBoxExpiration}>
                        <div className={styles.cardBoxExpirationContainer}>
                            <input
                                pattern="^(0[1-9]|1[0-2])/\d{2}$"
                                type="text"
                                id="expirationDate"
                                maxLength={5}
                                className={`${styles.cardExpirationDateInput} ${
                                    expirationDateInput.expirationDate !== '' ? styles.notEmpty : ''
                                } ${
                                    !expirationDateInput.isFirstTry && !expirationDateInput.isValid
                                        ? styles.wrongInput
                                        : !expirationDateInput.isFirstTry && expirationDateInput.isValid
                                        ? styles.valid
                                        : ''
                                }`}
                                ref={expirationDateInputElement}
                                onChange={changeInputsValue}
                                value={expirationDateInput.expirationDate}
                            />
                            <label htmlFor="expirationDate" className={styles.cardExpirationDateLabel}>
                                Expiration date
                            </label>
                        </div>
                        <div
                            className={`${styles.error} ${
                                !expirationDateInput.isFirstTry && !expirationDateInput.isValid ? styles.wrongInput : ''
                            }`}
                        >
                            <img src="/icons/xicon.png" alt="" />
                            <p>Please enter an expiration date.</p>
                        </div>
                    </div>
                    <div className={styles.cardBoxCVV}>
                        <div className={styles.cardCVVContainer}>
                            <input
                                type="text"
                                id="cardCVV"
                                maxLength={3}
                                className={`${styles.cardCVVInput} ${cvvInput.cardCvv !== '' ? styles.notEmpty : ''} ${
                                    !cvvInput.isFirstTry && !cvvInput.isValid
                                        ? styles.wrongInput
                                        : !cvvInput.isFirstTry && cvvInput.isValid
                                        ? styles.valid
                                        : ''
                                }`}
                                ref={cvvInputElement}
                                onChange={changeInputsValue}
                                value={cvvInput.cardCvv}
                            />
                            <label htmlFor="cardCVV" className={styles.cardCVVLabel}>
                                CVV
                            </label>
                            <img src="/icons/questionIcon.png" alt="" className={styles.cardNumberIcon} />
                        </div>
                        <div
                            className={`${styles.error} ${
                                !cvvInput.isFirstTry && !cvvInput.isValid ? styles.wrongInput : ''
                            }`}
                        >
                            <img src="/icons/xicon.png" alt="" />
                            <p>Please enter a CVV.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cardBoxFirstName}>
                    <div className={styles.cardBoxFirstNameContainer}>
                        <input
                            type="text"
                            id="firstName"
                            className={`${styles.cardFirstNameInput} ${
                                firstNameInput.firstName !== '' ? styles.notEmpty : ''
                            } ${
                                !firstNameInput.isFirstTry && !firstNameInput.isValid
                                    ? styles.wrongInput
                                    : !firstNameInput.isFirstTry && firstNameInput.isValid
                                    ? styles.valid
                                    : ''
                            }`}
                            ref={firstNameInputElement}
                            onChange={changeInputsValue}
                            maxLength={50}
                            value={firstNameInput.firstName}
                        />
                        <label htmlFor="firstName" className={styles.cardFirstNameLabel}>
                            First name
                        </label>
                    </div>
                    <div
                        className={`${styles.error} ${
                            !firstNameInput.isFirstTry && !firstNameInput.isValid ? styles.wrongInput : ''
                        }`}
                    >
                        <img src="/icons/xicon.png" alt="" />
                        <p>Please enter a first name.</p>
                    </div>
                </div>
                <div className={styles.cardBoxLastName}>
                    <div className={styles.cardBoxLastNameContainer}>
                        <input
                            type="text"
                            id="lastName"
                            className={`${styles.cardLastNameInput} ${
                                lastNameInput.lastName !== '' ? styles.notEmpty : ''
                            } ${
                                !lastNameInput.isFirstTry && !lastNameInput.isValid
                                    ? styles.wrongInput
                                    : !lastNameInput.isFirstTry && lastNameInput.isValid
                                    ? styles.valid
                                    : ''
                            }`}
                            ref={lastNameInputElement}
                            onChange={changeInputsValue}
                            value={lastNameInput.lastName}
                        />
                        <label htmlFor="lastName" className={styles.cardLastNameLabel}>
                            Last name
                        </label>
                    </div>
                    <div
                        className={`${styles.error} ${
                            !lastNameInput.isFirstTry && !lastNameInput.isValid ? styles.wrongInput : ''
                        }`}
                    >
                        <img src="/icons/xicon.png" alt="" />
                        <p>Please enter a last name.</p>
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
                Start Paid Membership
            </button>
            <p className={styles.botCheck}>
                This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
                {!showBotText && (
                    <button type="button" className={styles.botLink} onClick={showBotTextHandler}>
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

export default CreditOptionView

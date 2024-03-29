import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import Router from 'next/router'

import { loginEmailsActions } from '../../../store/login-emails'
import styles from './MembershipEmail.module.css'

const MembershipEmail = () => {
    const [inputEmail, setInputEmail] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [isFirstTry, setIsFirstTry] = useState(true)
    const [registerState, setRegisterState] = useState({
        isRegistering: false,
        buttonText: '',
        routerPath: '',
    })
    const inputElement = useRef<HTMLInputElement | null>(null)

    const loginEmailsData = useSelector<any, any>((state) => state.loginEmails)
    const isLoggedIn = useSelector<any, any>((state) => state.isLoggedIn)
    const paymentData = useSelector<any, any>((state) => state.payment)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    useEffect(() => {
        if (
            (loginEmailsData.signUpEmail !== null || loginEmailsData.signInEmail !== null) &&
            paymentData === null &&
            isLoggedIn === 'true'
        ) {
            setRegisterState({
                isRegistering: true,
                buttonText: 'Restart Your Membership',
                routerPath: '/signup/plan',
            })
        } else if (
            loginEmailsData.startSignUpEmail !== null &&
            loginEmailsData.signUpEmail === null &&
            loginEmailsData.signInEmail === null &&
            isLoggedIn === 'false'
        ) {
            setRegisterState({
                isRegistering: true,
                buttonText: 'Finish Sign Up',
                routerPath: '/signup/regform',
            })
        } else if (paymentData !== null && paymentData.userPaid && isLoggedIn === 'true') {
            setRegisterState({
                isRegistering: true,
                buttonText: 'Complete the initial settings',
                routerPath: '/simpleSetup/orderfinal',
            })
        } else if (
            (paymentData !== null && !paymentData.userPaid && loginEmailsData.signUpEmail !== null) ||
            (loginEmailsData.signInEmail !== null && isLoggedIn === 'true')
        ) {
            setRegisterState({
                isRegistering: true,
                buttonText: 'Choose your plan',
                routerPath: '/signup/paymentPicker',
            })
        }
    }, [loginEmailsData, paymentData])

    const isInputValid = () => {
        setIsFirstTry(false)

        if (
            inputElement.current !== null &&
            inputElement.current.value !== '' &&
            inputElement.current.value.length < 50 &&
            inputElement.current.value.length > 5 &&
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputElement.current.value)
        ) {
            setIsValid(true)
            return true
        } else {
            setIsValid(false)
            return false
        }
    }

    const focusInput = () => {
        const isValidNow = isInputValid()

        if (!isValidNow) {
            if (inputElement.current !== undefined && inputElement.current !== null) {
                inputElement.current.focus()
            }
        } else {
            dispatch(loginEmailsActions.createEmailsCookie({ emailFunction: 'startSignUpEmail', email: inputEmail }))
            Router.push(`/signup/registration`)
        }
    }

    const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputEmail(e.target.value)
        if (!isFirstTry) {
            isInputValid()
        }
    }

    const setRegistrationMail = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const isValidNow = isInputValid()

        if (e.key === 'Enter' && isValidNow) {
            dispatch(loginEmailsActions.createEmailsCookie({ emailFunction: 'startSignUpEmail', email: inputEmail }))
            Router.push(`/signup/registration`)
        }
    }

    return (
        <div className={styles.membershipBox}>
            {registerState.isRegistering ? (
                <button
                    type="button"
                    aria-label="Go back to register"
                    onClick={() => Router.push(`${registerState.routerPath}`)}
                    className={`${styles.button} ${styles.buttonFinish}`}
                >
                    {registerState.buttonText} &gt;
                </button>
            ) : (
                <>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className={styles.inputBox}>
                        <input
                            type="email"
                            placeholder="Email address"
                            autoComplete="email"
                            spellCheck="false"
                            minLength={5}
                            maxLength={50}
                            ref={inputElement}
                            className={
                                !isFirstTry && isValid ? styles.valid : !isFirstTry && !isValid ? styles.error : ''
                            }
                            onChange={changeInputValue}
                            value={inputEmail}
                            onKeyDown={setRegistrationMail}
                        />
                        <button
                            type="button"
                            aria-label="Get started button"
                            onClick={focusInput}
                            className={`${styles.button} ${styles.buttonSign}`}
                        >
                            Get Started &gt;
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default MembershipEmail

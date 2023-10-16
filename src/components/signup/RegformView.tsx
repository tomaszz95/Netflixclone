import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import Router from 'next/router'

import { loginEmailsActions } from '../store/login-emails'

import styles from './RegformView.module.css'

const RegformView = () => {
    const [inputEmail, setInputEmail] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isFirstEmailTry, setIsFirstEmailTry] = useState(true)

    const [inputPassword, setInputPassword] = useState('')
    const [isPasswordValid, setIsPasswordValid] = useState(false)
    const [isFirstPasswordTry, setIsFirstPasswordTry] = useState(true)

    const emailInputElement = useRef<HTMLInputElement | null>(null)
    const passwordInputElement = useRef<HTMLInputElement | null>(null)

    const loginEmailsData = useSelector<any, any>((state) => state.loginEmails)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    useEffect(() => {
        if (loginEmailsData.startSignUpEmail !== null) {
            setInputEmail(loginEmailsData.startSignUpEmail)
        }
    }, [loginEmailsData])

    const isEmailValidFunc = () => {
        setIsFirstEmailTry(false)

        if (
            emailInputElement.current !== null &&
            emailInputElement.current.value !== '' &&
            emailInputElement.current.value.length < 50 &&
            emailInputElement.current.value.length > 5 &&
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailInputElement.current.value)
        ) {
            setIsEmailValid(true)
            return true
        } else {
            setIsEmailValid(false)
            return false
        }
    }

    const isPasswordValidFunc = () => {
        setIsFirstPasswordTry(false)

        if (
            passwordInputElement.current !== null &&
            passwordInputElement.current.value !== '' &&
            passwordInputElement.current.value.length < 60 &&
            passwordInputElement.current.value.length > 4
        ) {
            setIsPasswordValid(true)
            return true
        } else {
            setIsPasswordValid(false)
            return false
        }
    }

    const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.type === 'email') {
            setInputEmail(e.target.value)
        } else if (e.target.type === 'password') {
            setInputPassword(e.target.value)
        }

        if (!isFirstEmailTry && e.target.type === 'email') {
            isEmailValidFunc()
        } else if (!isFirstPasswordTry && e.target.type === 'password') {
            isPasswordValidFunc()
        }
    }

    const submitData = () => {
        const isEmailValidNow = isEmailValidFunc()
        const isPasswordValidNow = isPasswordValidFunc()

        if (isEmailValidNow && isPasswordValidNow) {
            Router.push(`/signup/plan`)
            dispatch(loginEmailsActions.createEmailsCookie({ emailFunction: 'signUpEmail', email: inputEmail }))
        }
    }

    return (
        <div className={styles.container}>
            <span className={styles.step}>STEP 1 OF 3</span>
            <h1 className={styles.title}>Create a password to start your membership</h1>
            <p className={styles.text}>
                Just a few more steps and you're done! <br />
                We hate paperwork, too.
            </p>
            <form className={styles.form}>
                <div className={styles.formBox}>
                    <div className={`${styles.formContent} ${styles.formContentEmail}`}>
                        <input
                            type="email"
                            autoComplete="email"
                            spellCheck="false"
                            id="userId"
                            minLength={5}
                            maxLength={50}
                            className={`${styles.emailInput} ${inputEmail !== '' ? styles.notEmpty : ''} ${
                                !isFirstEmailTry && !isEmailValid
                                    ? styles.wrongInput
                                    : !isFirstEmailTry && isEmailValid
                                    ? styles.valid
                                    : ''
                            }`}
                            ref={emailInputElement}
                            onChange={changeInputValue}
                            value={inputEmail}
                        />
                        <label htmlFor="userId" className={styles.emailLabel}>
                            Email
                        </label>
                    </div>
                    <div className={`${styles.error} ${!isFirstEmailTry && !isEmailValid ? styles.wrongInput : ''}`}>
                        <img src="/icons/xicon.png" alt="" />
                        <span>Email is required.</span>
                    </div>
                </div>
                <div className={styles.formBox}>
                    <div className={`${styles.formContent} ${styles.formContentPassword}`}>
                        <input
                            type="password"
                            autoComplete="email"
                            spellCheck="false"
                            id="userPassword"
                            className={`${styles.passwordInput} ${inputPassword !== '' ? styles.notEmpty : ''} ${
                                !isFirstPasswordTry && !isPasswordValid
                                    ? styles.wrongInput
                                    : !isFirstPasswordTry && isPasswordValid
                                    ? styles.valid
                                    : ''
                            }`}
                            minLength={4}
                            maxLength={60}
                            ref={passwordInputElement}
                            onChange={changeInputValue}
                            value={inputPassword}
                        />
                        <label htmlFor="userPassword" className={styles.passwordLabel}>
                            Add a password
                        </label>
                    </div>
                    <span
                        className={`${styles.error} ${
                            !isFirstPasswordTry && !isPasswordValid ? styles.wrongInput : ''
                        }`}
                    >
                        <img src="/icons/xicon.png" alt="" />
                        <span>Password is required.</span>
                    </span>
                </div>
                <div className={styles.newsletterBox}>
                    <input
                        type="checkbox"
                        name="newsletterInput"
                        id="newsletterInput"
                        className={styles.newsletterInput}
                    />
                    <label htmlFor="newsletterInput" className={styles.newsletterLabel}>
                        Please do not email me Netflix special offers.
                    </label>
                </div>
            </form>
            <button type="submit" aria-label="Next step" className={styles.submitBtn} onClick={() => submitData()}>
                Next
            </button>
        </div>
    )
}

export default RegformView

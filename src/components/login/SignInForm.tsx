import { useState, useRef } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Router from 'next/router'
import auth from '../../../firebase'

import { createCookies } from '../helpers/localStorageFunctions'
import LoginFormHelpers from './LoginFormHelpers'

import styles from './SignInForm.module.css'

const SignInForm = () => {
    const [inputEmail, setInputEmail] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isFirstEmailTry, setIsFirstEmailTry] = useState(true)
    const [firebaseError, setFirebaseError] = useState('')

    const [inputPassword, setInputPassword] = useState('')
    const [isPasswordValid, setIsPasswordValid] = useState(false)
    const [isFirstPasswordTry, setIsFirstPasswordTry] = useState(true)

    const emailInputElement = useRef<HTMLInputElement | null>(null)
    const passwordInputElement = useRef<HTMLInputElement | null>(null)

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

    const submitData = async (e: React.MouseEvent) => {
        e.preventDefault()

        const isEmailValidNow = isEmailValidFunc()
        const isPasswordValidNow = isPasswordValidFunc()

        if (isEmailValidNow && isPasswordValidNow) {
            signInWithEmailAndPassword(auth, inputEmail, inputPassword)
                .then((userCredential) => {
                    const userEmail = userCredential.user.email
                    if (userEmail) {
                        createCookies('loginUserEmail', userEmail)
                        Router.push(`/`)
                    }
                })
                .catch((error) => {
                    if (!error.code) {
                        const errorMessage = error.message.charAt(0).toUpperCase() + error.message.slice(1)

                        setFirebaseError(errorMessage)
                        return
                    }

                    if (error.code.includes('credentials')) {
                        setFirebaseError('Please enter a valid credentials!')
                    } else if (error.code.includes('many')) {
                        setFirebaseError('Too many requests, try again later!')
                    } else if (error.code.includes('internal-error')) {
                        setFirebaseError('Our server have some problems. Please try again later.')
                    }
                })
        }
    }

    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Sign In</h1>
            <form className={styles.form}>
                <div className={styles.formBox}>
                    <div className={styles.formContent}>
                        <input
                            type="email"
                            autoComplete="email"
                            spellCheck="false"
                            id="userId"
                            minLength={5}
                            maxLength={50}
                            className={`${styles.emailInput} ${inputEmail !== '' ? styles.notEmpty : ''} ${
                                !isFirstEmailTry && !isEmailValid ? styles.wrongInput : ''
                            }`}
                            ref={emailInputElement}
                            onChange={changeInputValue}
                            value={inputEmail}
                        />
                        <label htmlFor="userId" className={styles.emailLabel}>
                            Email or phone number
                        </label>
                    </div>
                    <span className={`${styles.error} ${!isFirstEmailTry && !isEmailValid ? styles.wrongInput : ''}`}>
                        Please enter a valid email or phone number
                    </span>
                </div>
                <div className={styles.formBox}>
                    <div className={styles.formContent}>
                        <input
                            type="password"
                            autoComplete="email"
                            spellCheck="false"
                            id="userPassword"
                            className={`${styles.passwordInput} ${inputPassword !== '' ? styles.notEmpty : ''} ${
                                !isFirstPasswordTry && !isPasswordValid ? styles.wrongInput : ''
                            }`}
                            minLength={4}
                            maxLength={60}
                            ref={passwordInputElement}
                            onChange={changeInputValue}
                            value={inputPassword}
                        />
                        <label htmlFor="userPassword" className={styles.passwordLabel}>
                            Password
                        </label>
                    </div>
                    <span
                        className={`${styles.error} ${
                            !isFirstPasswordTry && !isPasswordValid ? styles.wrongInput : ''
                        }`}
                    >
                        Your password must contain between 4 and 60 characters.
                    </span>
                </div>
                <button type="submit" className={styles.sumbitBtn} onClick={submitData}>
                    Sign In
                </button>
                <span className={`${styles.errorGeneral} ${firebaseError !== '' ? styles.wrongInput : ''}`}>
                    {firebaseError}
                </span>
            </form>
            <LoginFormHelpers />
        </div>
    )
}

export default SignInForm

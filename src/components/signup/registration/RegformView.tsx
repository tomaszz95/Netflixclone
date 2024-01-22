import { createUserWithEmailAndPassword } from 'firebase/auth'
import Router from 'next/router'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import { isPasswordValidFunc, isEmailValidFunc, hasMinAndMaxLength } from '../../utils/signupValidation'
import auth from '../../../../firebase'
import { isLoggedInActions } from '../../../store/loggedin'
import { loginEmailsActions } from '../../../store/login-emails'

import styles from './RegformView.module.css'
import RegistrationInput from './RegistrationInput'
import { useSignupInput } from '../../../hooks/useSignupInput'

const RegformView = () => {
    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        handleErrorText: handleErrorEmailText,
        errorText: emailErrorText,
        hasError: emailHasError,
    } = useSignupInput('', (value: string) => isEmailValidFunc(value) && hasMinAndMaxLength(value, 5, 50))

    const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        handleErrorText: handleErrorPasswordText,
        errorText: passwordErrorText,
        hasError: passwordHasError,
    } = useSignupInput('', (value: string) => isPasswordValidFunc(value) && hasMinAndMaxLength(value, 6, 30))

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()

        if (emailHasError && passwordHasError) {
            handleErrorPasswordText('Please enter a valid password!')
            handleErrorEmailText('Please enter a valid email address!')
            return
        } else if (emailHasError) {
            return handleErrorEmailText('Please enter a valid email address!')
        } else if (passwordHasError) {
            return handleErrorPasswordText('Please enter a valid password!')
        }

        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
            .then(() => {
                Router.push(`/signup/plan`)

                dispatch(isLoggedInActions.createLoggedCookie('true'))
                dispatch(
                    loginEmailsActions.createEmailsCookie({
                        emailFunction: 'signUpEmail',
                        email: emailValue,
                    }),
                )
            })
            .catch((error) => {
                const errorCode = error.code

                if (errorCode === 'auth/weak-password') {
                    handleErrorPasswordText('Password should be at least 6 characters long.')
                } else if (errorCode === 'auth/invalid-email') {
                    handleErrorEmailText('Please enter a valid e-mail address.')
                } else if (errorCode === 'auth/email-already-in-use') {
                    handleErrorEmailText('This e-mail is already in use!')
                }
            })
    }

    return (
        <div className={styles.container}>
            <span className={styles.step}>STEP 1 OF 3</span>
            <h1 className={styles.title}>Create a password to start your membership</h1>
            <p className={styles.text}>
                Just a few more steps and you're done! <br />
                We hate paperwork, too.
            </p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <RegistrationInput
                    label="Email"
                    id="email"
                    error={emailHasError}
                    type="email"
                    name="email"
                    onBlur={handleEmailBlur}
                    onChange={handleEmailChange}
                    value={emailValue}
                    errorText={emailErrorText === '' ? 'Please enter a valid email address!' : emailErrorText}
                />
                <RegistrationInput
                    label="Add a password"
                    id="userPassword"
                    type="password"
                    name="password"
                    onBlur={handlePasswordBlur}
                    onChange={handlePasswordChange}
                    value={passwordValue}
                    error={passwordHasError}
                    errorText={passwordErrorText === '' ? 'Please enter a valid password!' : passwordErrorText}
                />
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
                <button
                    type="submit"
                    aria-label="Signup and go to next step"
                    className={styles.submitBtn}
                    disabled={emailValue === '' || passwordValue === ''}
                >
                    Next
                </button>
            </form>
        </div>
    )
}

export default RegformView

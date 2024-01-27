import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Router from 'next/router'

import auth from '../../../firebase'
import { isLoggedInActions } from '../../store/loggedin'
import { loginEmailsActions } from '../../store/login-emails'
import LoginFormHelpers from './LoginFormHelpers'

import styles from './LoginView.module.css'
import { useSignupInput } from '../../hooks/useSignupInput'
import { hasMinAndMaxLength, isEmailValidFunc, isPasswordValidFunc } from '../utils/signupValidation'
import RegistrationInput from '../signup/registration/RegistrationInput'

const LoginView = () => {
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
        } else if (emailValue === '' && passwordValue === '') {
            handleErrorEmailText('Email cannot be empty!')
            handleErrorPasswordText('Password cannot be empty!')
            return
        } else if (passwordValue === '') {
            return handleErrorPasswordText('Password cannot be empty!')
        } else if (emailValue === '') {
            return handleErrorEmailText('Email cannot be empty!')
        }

        signInWithEmailAndPassword(auth, emailValue, passwordValue)
            .then((userCredential) => {
                const userEmail = userCredential.user.email
                if (userEmail) {
                    Router.push(`/`)
                    dispatch(loginEmailsActions.createEmailsCookie({ emailFunction: 'signInEmail', email: userEmail }))
                    dispatch(isLoggedInActions.createLoggedCookie('true'))
                }
            })
            .catch((error) => {
                console.log(error);
                const errorCode = error.code

                if (errorCode === 'auth/user-not-found') {
                    handleErrorEmailText('The username is incorrect!')
                } else if (errorCode === 'auth/too-many-requests') {
                    handleErrorEmailText('You send too many requests, try again later!')
                } else {
                    handleErrorEmailText('')
                }

                if (errorCode === 'auth/wrong-password') {
                    handleErrorPasswordText('The password is incorrect!')
                } else if (errorCode === 'auth/too-many-requests') {
                    handleErrorPasswordText('You send too many requests, try again later!')
                } else {
                    handleErrorPasswordText('')
                }
            })
    }

    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Sign In</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <RegistrationInput
                    withoutIcon={true}
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
                    withoutIcon={true}
                    label="Password"
                    id="userPassword"
                    type="password"
                    name="password"
                    onBlur={handlePasswordBlur}
                    onChange={handlePasswordChange}
                    value={passwordValue}
                    error={passwordHasError}
                    errorText={passwordErrorText === '' ? 'Please enter a valid password!' : passwordErrorText}
                />

                <button
                    type="submit"
                    className={styles.sumbitBtn}
                    aria-label="Click to Sign In"
                    disabled={emailValue === '' || passwordValue === ''}
                >
                    Sign In
                </button>
            </form>
            <LoginFormHelpers />
        </div>
    )
}

export default LoginView

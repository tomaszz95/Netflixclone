import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import Router from 'next/router'

import { registerEmailActions } from '../../store/registerEmail-slice'

import styles from './MembershipEmail.module.css'

const MembershipEmail = () => {
    const [inputEmail, setInputEmail] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [isFirstTry, setIsFirstTry] = useState(true)
    const inputElement = useRef<HTMLInputElement | null>(null)

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

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
            dispatch(registerEmailActions.setEmail(inputEmail))

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
            dispatch(registerEmailActions.setEmail(inputEmail))

            Router.push(`/signup/registration`)
        }
    }

    return (
        <div className={styles.membershipBox}>
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
                    className={!isFirstTry && isValid ? styles.valid : !isFirstTry && !isValid ? styles.error : ''}
                    onChange={changeInputValue}
                    value={inputEmail}
                    onKeyDown={setRegistrationMail}
                />
                <button type="button" aria-label="Get started button" onClick={focusInput}>
                    Get Started &gt;
                </button>
            </div>
        </div>
    )
}

export default MembershipEmail

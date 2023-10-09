import { useState, useRef, useMemo } from 'react'

import styles from './MembershipEmail.module.css'

const MembershipEmail = () => {
    const [inputEmail, setInputEmail] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [isFirstTry, setIsFirstTry] = useState(true)
    const inputElement = useRef<HTMLInputElement | null>(null)

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
        } else {
            setIsValid(false)
        }
    }

    const focusInput = () => {
        if (inputElement.current !== undefined && inputElement.current !== null) {
            inputElement.current.focus()
        }

        isInputValid()
    }

    const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputEmail(e.target.value)
        if (!isFirstTry) {
            isInputValid()
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
                />
                <button type="button" aria-label="Get started button" onClick={focusInput}>
                    Get Started &gt;
                </button>
            </div>
        </div>
    )
}

export default MembershipEmail

import { useState, useRef } from 'react'

import styles from './NewProfileInput.module.css'

type ComponentType = {
    icon: string
    id: string
}

const NewProfileInput: React.FC<ComponentType> = ({ icon, id }) => {
    const [inputNames, setInputNames] = useState({ inputName: '', isFirstTry: true, isValid: false })
    const inputNameElement = useRef<HTMLInputElement | null>(null)
    console.log(inputNames)
    const isNameValid = (inputValue: string) => {
        if (inputValue !== null && inputValue !== '') {
            return { isValid: true, isFirstTry: false }
        } else {
            return { isValid: false, isFirstTry: false }
        }
    }

    const changeInputsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (inputNames.isFirstTry) {
            setInputNames(() => {
                return { ...inputNames, inputName: e.target.value }
            })
        }

        if (!inputNames.isFirstTry) {
            const values = isNameValid(e.target.value)
            setInputNames({ ...values, inputName: e.target.value })
        }
    }

    return (
        <div className={styles.inputBox}>
            <img src="" alt="" />
            <div className={styles.inputForm}>
                <input
                    type="text"
                    id={id}
                    className={`${styles.inputFormInput} ${inputNames.inputName !== '' ? styles.notEmpty : ''} ${
                        !inputNames.isFirstTry && !inputNames.isValid
                            ? styles.wrongInput
                            : !inputNames.isFirstTry && inputNames.isValid
                            ? styles.valid
                            : ''
                    }`}
                    onChange={changeInputsValue}
                    ref={inputNameElement}
                    value={inputNames.inputName}
                />
                <label htmlFor={id} className={styles.inputFormLabel}>
                    Name
                </label>
            </div>
        </div>
    )
}

export default NewProfileInput

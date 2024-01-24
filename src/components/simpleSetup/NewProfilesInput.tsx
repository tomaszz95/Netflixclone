import Image from 'next/image'
import { useState, useRef } from 'react'

import styles from './NewProfileInput.module.css'

type ComponentType = {
    icon: any
    id: string
    checkInputHandler: (id: string, value: string) => void
}

const NewProfileInput: React.FC<ComponentType> = ({ icon, id, checkInputHandler }) => {
    const [inputNames, setInputNames] = useState({ inputName: '', id: id })
    const inputNameElement = useRef<HTMLInputElement | null>(null)

    const changeInputsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputObj = { id: id, inputName: e.target.value }

        setInputNames(inputObj)
        checkInputHandler(id, e.target.value)
    }

    return (
        <div className={styles.inputBox}>
            <Image src={icon} alt="" className={styles.inputIcon} />
            <div className={styles.inputForm}>
                <input
                    type="text"
                    id={id}
                    className={`${styles.inputFormInput} ${
                        inputNames.inputName !== ''
                            ? styles.notEmpty
                            : inputNames.id !== 'ownerInput'
                            ? ''
                            : styles.wrongInput
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

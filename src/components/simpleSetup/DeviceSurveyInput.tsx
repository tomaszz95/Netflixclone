import { useEffect, useState } from 'react'

import styles from './DeviceSurveyInput.module.css'

type ComponentType = {
    icon: string
    id: string
    title: string
    text: string
    checkInputHandler: (id: string) => void
    selectedDev: string[]
}

const DeviceSurveyInput: React.FC<ComponentType> = ({ id, icon, title, text, checkInputHandler, selectedDev }) => {
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        if (selectedDev.includes(id)) {
            setIsChecked(true)
        } else {
            setIsChecked(false)
        }
    }, [selectedDev])

    return (
        <label htmlFor={id} className={`${styles.label} ${isChecked ? styles.chosen : ''}`}>
            <img src="/icons/checkIconFull.png" alt="" className={styles.checkIcon} />
            <input
                type="checkbox"
                id={id}
                checked={isChecked}
                onChange={() => checkInputHandler(id)}
                className={styles.input}
            />
            {icon !== '' && (
                <div className={styles.iconBox}>
                    <img src={icon} alt="" className={styles.icon} />
                </div>
            )}
            <div className={styles.textBox}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.text}>{text}</p>
            </div>
        </label>
    )
}

export default DeviceSurveyInput

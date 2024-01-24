import Image from 'next/image'
import { useEffect, useState } from 'react'

import CHECK_ICON from '../../assets/icons/checkIconFull.png'
import styles from './DeviceSurveyInput.module.css'

type ComponentType = {
    icon: any
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
            <Image src={CHECK_ICON} alt="" className={styles.checkIcon} />
            <input
                type="checkbox"
                id={id}
                checked={isChecked}
                onChange={() => checkInputHandler(id)}
                className={styles.input}
            />
            {icon !== '' && (
                <div className={styles.iconBox}>
                    <Image src={icon} alt="" className={styles.icon} width={100} height={100} />
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

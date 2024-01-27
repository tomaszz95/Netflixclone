import Image from 'next/image'
import X_ICON from '../../../assets/icons/xicon.png'
import styles from './RegistrationInput.module.css'

type ComponentType = {
    label: string
    id: string
    error: boolean
    errorText: string
    value: string
    emailErrorText: string
    withoutIcon?: boolean
}

const RegistrationInput: React.FC<ComponentType & any> = ({
    label,
    id,
    error,
    errorText,
    value,
    withoutIcon,
    ...props
}) => {
    const errorFromFirebase = !errorText.includes('Please enter') && errorText !== ''

    return (
        <div className={styles.formBox}>
            <div className={styles.formContent}>
                <input
                    spellCheck="false"
                    id={id}
                    className={`${styles.input} ${error || errorFromFirebase ? styles.error : ''}`}
                    {...props}
                />
                <label htmlFor={id} className={`${styles.label} ${value === '' ? '' : styles.notEmpty}`}>
                    {label}
                </label>
            </div>
            {(error || errorFromFirebase) && (
                <div className={styles.errorBox}>
                    {!withoutIcon && <Image src={X_ICON} alt="Close icon" width={16} />}
                    <span>{errorText}</span>
                </div>
            )}
        </div>
    )
}

export default RegistrationInput

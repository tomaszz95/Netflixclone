import styles from './DeviceSurveyInput.module.css'

type ComponentType = {
    icon: string
    id: string
    title: string
    text: string
    checkInputHandler: (id: string) => void
    selectedDev: string
}

const DeviceSurveyInput: React.FC<ComponentType> = ({ id, icon, title, text, checkInputHandler, selectedDev }) => {
    return (
        <label htmlFor={id} className={`${styles.label} ${selectedDev === id ? styles.chosen : ''}`}>
            <input
                type="radio"
                id={id}
                checked={selectedDev === id}
                onChange={() => checkInputHandler(id)}
                className={styles.input}
            />
            <img src={icon} alt="" />
            <h2>{title}</h2>
            <p>{text}</p>
        </label>
    )
}

export default DeviceSurveyInput

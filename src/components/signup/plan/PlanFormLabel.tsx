import styles from './PlanFormLabel.module.css'

type ComponentType = {
    selectedPlan: string
    id: string
    label: string
    onHandlePlanChange: (plan: string) => void
}

const PlanFormLabel: React.FC<ComponentType> = ({ selectedPlan, id, label, onHandlePlanChange }) => {
    return (
        <label htmlFor={id} className={`${styles.label} ${selectedPlan === id ? styles.chosen : ''}`}>
            <input
                type="radio"
                id={id}
                checked={selectedPlan === id}
                onChange={() => onHandlePlanChange(id)}
                className={styles.input}
            />
            <span className={styles.labelText}>{label}</span>
        </label>
    )
}

export default PlanFormLabel

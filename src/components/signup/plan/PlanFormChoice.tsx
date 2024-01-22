import { useState } from 'react'

import PlanFormTable from './PlanFormTable'

import styles from './PlanFormChoice.module.css'

type ComponentType = { onSelectPlan: (plan: string) => void }

const PlanFormChoice: React.FC<ComponentType> = ({ onSelectPlan }) => {
    const [selectedPlan, setSelectedPlan] = useState('premium')

    const handlePlanChange = (plan: string) => {
        setSelectedPlan(plan)
        onSelectPlan(plan)
    }

    return (
        <div className={styles.container}>
            <div className={styles.inputs}>
                <label htmlFor="basic" className={`${styles.label} ${selectedPlan === 'basic' ? styles.chosen : ''}`}>
                    <input
                        type="radio"
                        id="basic"
                        checked={selectedPlan === 'basic'}
                        onChange={() => handlePlanChange('basic')}
                        className={styles.input}
                    />
                    <span className={styles.labelText}>Basic</span>
                </label>
                <label
                    htmlFor="standard"
                    className={`${styles.label} ${selectedPlan === 'standard' ? styles.chosen : ''}`}
                >
                    <input
                        type="radio"
                        id="standard"
                        checked={selectedPlan === 'standard'}
                        onChange={() => handlePlanChange('standard')}
                        className={styles.input}
                    />
                    <span className={styles.labelText}>Standard</span>
                </label>
                <label
                    htmlFor="premium"
                    className={`${styles.label} ${selectedPlan === 'premium' ? styles.chosen : ''}`}
                >
                    <input
                        type="radio"
                        id="premium"
                        checked={selectedPlan === 'premium'}
                        onChange={() => handlePlanChange('premium')}
                        className={styles.input}
                    />
                    <span className={styles.labelText}>Premium</span>
                </label>
            </div>
            <PlanFormTable type={selectedPlan} />
        </div>
    )
}

export default PlanFormChoice

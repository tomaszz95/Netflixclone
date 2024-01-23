import { useState } from 'react'

import PlanFormTable from './planformTable/PlanFormTable'

import styles from './PlanFormChoice.module.css'
import PlanFormLabel from './PlanFormLabel'

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
                <PlanFormLabel
                    id="basic"
                    label="Basic"
                    onHandlePlanChange={handlePlanChange}
                    selectedPlan={selectedPlan}
                />
                <PlanFormLabel
                    id="standard"
                    label="Standard"
                    onHandlePlanChange={handlePlanChange}
                    selectedPlan={selectedPlan}
                />
                <PlanFormLabel
                    id="premium"
                    label="Premium"
                    onHandlePlanChange={handlePlanChange}
                    selectedPlan={selectedPlan}
                />
            </div>
            <PlanFormTable type={selectedPlan} />
        </div>
    )
}

export default PlanFormChoice

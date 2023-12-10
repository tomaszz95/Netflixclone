import Link from 'next/link'

import { capitalizeFirstLetter } from '../../../helpers/helpersFunctions'
import styles from './PlanDetails.module.css'

type ComponentType = {
    plan: string
}

const PlanDetails: React.FC<ComponentType> = ({ plan }) => {
    const planType = capitalizeFirstLetter(plan)

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>PLAN DETAILS</h2>
            <div className={styles.planBox}>
                <span>{planType}</span>
                <img src="/icons/hdIcon.png" alt="" />
            </div>
            <Link href="#" className={styles.memberLink}>
                <p>Change plan</p> <span>&gt;</span>
            </Link>
        </section>
    )
}

export default PlanDetails

import Image from 'next/image'

import HD_ICON from '../../../../assets/icons/hdIcon.png'
import { capitalizeFirstLetter } from '../../../utils/helpersFunctions'
import styles from './PlanDetails.module.css'
import MainAnchorLink from './MainAnchorLink'

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
                <Image src={HD_ICON} alt="" />
            </div>
            <MainAnchorLink link="#" linkName="Change plan" />
        </section>
    )
}

export default PlanDetails

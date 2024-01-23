import { signupPlanData } from '../../../../constans/signupPlan'
import styles from './PlanTableOfferRows.module.css'

type ComponentType = {
    chosenPlan: string
}

type SignupPlanItem = {
    'Monthly price': string
    'Video quality': string
    Resolution: string
}

const PlanTableOfferRows: React.FC<ComponentType> = ({ chosenPlan }) => {
    const tableHeaders = Object.keys(signupPlanData[0]) as (keyof SignupPlanItem)[]
    const className =
        chosenPlan === 'basic' ? styles.basic : chosenPlan === 'standard' ? styles.standard : styles.premium

    return (
        <>
            {tableHeaders.map((header) => (
                <tr key={header} className={`${styles.tableRow} ${className}`}>
                    <th className={styles.tableHeading}>{header}</th>
                    {signupPlanData.map((item, index) => (
                        <td key={index} className={styles.tableCell}>
                            {item[header]}
                        </td>
                    ))}
                </tr>
            ))}
        </>
    )
}

export default PlanTableOfferRows

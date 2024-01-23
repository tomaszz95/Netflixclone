import styles from './PlanFormTable.module.css'
import PlanTableIcons from './PlanTableIcons'
import PlanTableOfferRows from './PlanTableOfferRows'

type ComponentType = { type: string }

const PlanFormTable: React.FC<ComponentType> = ({ type }) => {
    return (
        <table className={styles.table}>
            <tbody className={styles.tableBody}>
                <PlanTableOfferRows chosenPlan={type} />
                <tr className={styles.tableRow}>
                    <th className={styles.tableHeading}>Watch on your TV, computer, mobile phone and tablet</th>
                    <PlanTableIcons chosenPlan={type} />
                </tr>
            </tbody>
        </table>
    )
}

export default PlanFormTable

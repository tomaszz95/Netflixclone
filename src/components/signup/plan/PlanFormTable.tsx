import styles from './PlanFormTable.module.css'

type ComponentType = { type: string }

const PlanFormTable: React.FC<ComponentType> = ({ type }) => {
    return (
        <table className={styles.table}>
            <tbody
                className={`${styles.tableBody} ${
                    type === 'basic' ? styles.basic : type === 'standard' ? styles.standard : styles.premium
                }`}
            >
                <tr className={styles.tableRow}>
                    <th className={styles.tableHeading}>Monthly price</th>
                    <td className={`${styles.tableCell} ${styles.tableBasic}`}>29 zł</td>
                    <td className={`${styles.tableCell} ${styles.tableStandard}`}>43 zł</td>
                    <td className={`${styles.tableCell} ${styles.tablePremium}`}>60 zł</td>
                </tr>
                <tr className={styles.tableRow}>
                    <th className={styles.tableHeading}>Video quality</th>
                    <td className={`${styles.tableCell} ${styles.tableBasic}`}>Good</td>
                    <td className={`${styles.tableCell} ${styles.tableStandard}`}>Better</td>
                    <td className={`${styles.tableCell} ${styles.tablePremium}`}>720p</td>
                </tr>
                <tr className={styles.tableRow}>
                    <th className={styles.tableHeading}>Resolution</th>
                    <td className={`${styles.tableCell} ${styles.tableBasic}`}>29 zł</td>
                    <td className={`${styles.tableCell} ${styles.tableStandard}`}>43 zł</td>
                    <td className={`${styles.tableCell} ${styles.tablePremium}`}>1080p</td>
                </tr>
                <tr className={styles.tableRow}>
                    <th className={styles.tableHeading}>Watch on your TV, computer, mobile phone and tablet</th>
                    <td className={`${styles.tableCell} ${styles.tableBasic}`}>
                        {type === 'basic' ? (
                            <img src="/icons/checkSign.png" alt="" className={styles.checkSign} />
                        ) : (
                            <img src="/icons/checkSignInactive.png" alt="" className={styles.checkSign} />
                        )}
                    </td>
                    <td className={`${styles.tableCell} ${styles.tableStandard}`}>
                        {type === 'standard' ? (
                            <img src="/icons/checkSign.png" alt="" className={styles.checkSign} />
                        ) : (
                            <img src="/icons/checkSignInactive.png" alt="" className={styles.checkSign} />
                        )}
                    </td>
                    <td className={`${styles.tableCell} ${styles.tablePremium}`}>
                        {type === 'premium' ? (
                            <img src="/icons/checkSign.png" alt="" className={styles.checkSign} />
                        ) : (
                            <img src="/icons/checkSignInactive.png" alt="" className={styles.checkSign} />
                        )}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default PlanFormTable

import Image from 'next/image'
import CHECK_SIGN from '../../../../assets/icons/checkSign.png'
import CHECK_SIGN_INACTIVE from '../../../../assets/icons/checkSignInactive.png'
import { signupPlanDataNames } from '../../../../constans/signupPlan'
import styles from './PlanTableIcons.module.css'

type ComponentType = {
    chosenPlan: string
}

const PlanTableIcons: React.FC<ComponentType> = ({ chosenPlan }) => {
    return (
        <>
            {signupPlanDataNames.map((item) => (
                <td key={item} className={styles.tableCell}>
                    {item === chosenPlan ? (
                        <Image src={CHECK_SIGN} alt="" className={styles.checkSign} />
                    ) : (
                        <Image src={CHECK_SIGN_INACTIVE} alt="" className={styles.checkSign} />
                    )}
                </td>
            ))}
        </>
    )
}

export default PlanTableIcons

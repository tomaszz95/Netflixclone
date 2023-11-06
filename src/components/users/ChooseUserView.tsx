import Link from 'next/link'
import { useSelector } from 'react-redux'

import styles from './ChooseUserView.module.css'

const ChooseUserView = () => {
    const paymentData = useSelector<any, any>((state) => state.payment.selectedNames)
    console.log(paymentData)
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Who's watching?</h1>
            <ul className={styles.list}>
                {paymentData.map((user: string) => {
                    if (user !== null) {
                        return (
                            <Link href="#">
                                <li className={styles.listItem}>
                                    <img src="" alt="" />
                                    <span>{user}</span>
                                </li>
                            </Link>
                        )
                    }
                })}
                <Link href="#">
                    <li className={styles.listItem}>
                        <img src="" alt="" />
                        <span>Kids</span>
                    </li>
                </Link>
                <Link href="#">
                    <li className={styles.listItem}>
                        <img src="" alt="" />
                        <span>Add Profile</span>
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default ChooseUserView

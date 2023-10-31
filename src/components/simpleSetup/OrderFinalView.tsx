import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './OrderFinalView.module.css'

const OrderFinalView = () => {
    const [userEmail, setUserEmail] = useState('')
    const paymentsData = useSelector<any, any>((state) => state.payment)

    useEffect(() => {
        if (paymentsData.userEmail !== null) {
            setUserEmail(paymentsData.userEmail)
        }
    }, [paymentsData])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to Netflix!</h1>
            <p className={styles.text}>You’ve started your membership and we emailed the details to {userEmail}.</p>
            <p className={styles.text}>Remember you can cancel online anytime in the Account section.</p>
            <Link
                aria-label="Click to configure account"
                className={styles.submitLink}
                href="/simpleSetup/devicesurvey"
            >
                Next
            </Link>
        </div>
    )
}

export default OrderFinalView

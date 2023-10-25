import { useState, useEffect } from 'react'
import Router from 'next/router'
import { useSelector } from 'react-redux'

import styles from './ChangePlanButton.module.css'

const ChangePlanButton = () => {
    const [userPaymentData, setUserPaymentData] = useState('')
    const userData = useSelector<any, any>((state) => state.payment)

    useEffect(() => {
        if (userData.userSubscriptionType === null) return

        setUserPaymentData(userData.userSubscriptionType)
    }, [userData])

    return (
        <div className={styles.chosenPlan}>
            <div className={styles.chosenBox}>
                <span className={styles.chosenCash}>
                    {userPaymentData === 'basic' ? '29 zł' : userPaymentData === 'standard' ? '43 zł' : '60 zł'}/month
                </span>
                <span className={styles.chosenType}>
                    {userPaymentData.charAt(0).toUpperCase() + userPaymentData.slice(1)}
                </span>
            </div>
            <button className={styles.chosenButton} onClick={() => Router.push('/signup/planform')}>
                Change
            </button>
        </div>
    )
}

export default ChangePlanButton

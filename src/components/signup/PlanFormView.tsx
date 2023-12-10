import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Router from 'next/router'
import { ThunkDispatch } from '@reduxjs/toolkit'

import { paymentActions } from '../store/payment'
import PlanFormOffer from './PlanFormOffer'
import PlanFormChoice from './PlanFormChoice'

import styles from './PlanFormView.module.css'

const PlanFormView = () => {
    const [selectedPlan, setSelectedPlan] = useState('premium')
    const loginEmailsData = useSelector<any, any>((state) => state.loginEmails)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    const onSelectPlanHandler = (plan: string) => {
        setSelectedPlan(plan)
    }

    const confirmHandler = () => {
        if (loginEmailsData.signInEmail !== null) {
            dispatch(
                paymentActions.createPaymentCookie({
                    userEmail: loginEmailsData.signInEmail,
                    userSubscriptionType: selectedPlan,
                    userPaid: false,
                    howToPay: '',
                }),
            )
        } else if (loginEmailsData.signUpEmail !== null) {
            dispatch(
                paymentActions.createPaymentCookie({
                    userEmail: loginEmailsData.signUpEmail,
                    userSubscriptionType: selectedPlan,
                    userPaid: false,
                    howToPay: '',
                }),
            )
        }

        Router.push(`/signup/paymentPicker`)
    }

    return (
        <div className={styles.container}>
            <PlanFormOffer />
            <PlanFormChoice onSelectPlan={onSelectPlanHandler} />
            <div className={styles.textBox}>
                <p>
                    HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and
                    device capabilities. Not all content is available in all resolutions. See our{' '}
                    <a href="#">Terms of Use</a> for more details.
                </p>
                <p>
                    Only people who live with you may use your account. Watch on 4 different devices at the same time
                    with Premium, 2 with Standard and 1 with Basic.
                </p>
                <button type="submit" aria-label="Next step" className={styles.button} onClick={confirmHandler}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default PlanFormView

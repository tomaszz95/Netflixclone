import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { verifyNumber } from '../../helpers/dummyActionFunctions'
import { getCurrentMonth } from '../../helpers/helpersFunctions'
import MembershipBox from './main/MembershipBox'
import PlanDetails from './main/PlanDetails'
import VerifyBox from './main/VerifyBox'
import styles from './YourAccountMain.module.css'

const YourAccountMain = () => {
    const [currentDate, setCurrentDate] = useState({ month: '', year: 0 })
    const [verified, setVerified] = useState(false)
    const userInfo = useSelector<any, any>((state) => state.payment)

    useEffect(() => {
        const currentMonth = getCurrentMonth()
        setCurrentDate(currentMonth)
    }, [])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Account</h1>
            <div className={styles.dateBox}>
                <img src="/icons/filmIcon.png" alt="" />
                <p>
                    Member Since {currentDate.month} {currentDate.year}
                </p>
            </div>
            {!verified && (
                <VerifyBox
                    verifyNumberHandler={() => {
                        verifyNumber()
                        setVerified(true)
                    }}
                />
            )}
            <MembershipBox isNumberVerify={verified} userEmail={userInfo.userEmail} />
            <PlanDetails plan={userInfo.userSubscriptionType} />
        </div>
    )
}

export default YourAccountMain

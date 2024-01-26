import { useState } from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'

import MembershipBox from './main/MembershipBox'
import PlanDetails from './main/PlanDetails'
import SecurityBox from './main/SecurityBox'
import SettingsBox from './main/SettingsBox'
import SingleProfile from './main/SingleProfile'
import VerifyBox from './main/VerifyBox'

import FILM_ICON from '../../../assets/icons/filmIcon.png'
import { getCurrentDate } from '../../utils/helpersFunctions'
import { verifyNumber } from '../../../helpers/dummyActionFunctions'
import styles from './YourAccountMain.module.css'

const YourAccountMain = () => {
    const [verified, setVerified] = useState(false)
    const userInfo = useSelector<any, any>((state) => state.payment)
    const currentDate = getCurrentDate()

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Account</h1>
            <div className={styles.dateBox}>
                <Image src={FILM_ICON} alt="" />
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
            <SecurityBox />
            <section className={styles.sectionExtra}>
                <h2 className={styles.titleExtra}>EXTRA MEMBERS</h2>
                <p className={styles.textExtra}>
                    With the Standard or Premium plan, you can share Netflix with someone who doesn't live with you.
                </p>
            </section>
            <section className={styles.sectionExtra}>
                <h2 className={styles.titleExtra}>PROFILE & PARENTAL CONTROLS</h2>
                <div className={styles.boxExtra}>
                    {userInfo.selectedNames.map((profile: string) =>
                        profile !== null ? <SingleProfile key={profile} profilName={profile} /> : '',
                    )}
                    <SingleProfile profilName="kids" />
                </div>
            </section>
            <SettingsBox />
        </div>
    )
}

export default YourAccountMain

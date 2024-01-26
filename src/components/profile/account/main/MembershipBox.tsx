import Router from 'next/router'

import { cancelMembership } from '../../../../helpers/dummyActionFunctions'
import MainAnchorLink from './MainAnchorLink'
import styles from './MembershipBox.module.css'

type ComponentType = {
    isNumberVerify: boolean
    userEmail: string
}

const MembershipBox: React.FC<ComponentType> = ({ isNumberVerify, userEmail }) => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>MEMBERSHIP & BILLING</h2>
            <div className={styles.dataBox}>
                <div className={styles.mailBox}>
                    <div className={styles.mailData}>
                        <span>{userEmail}</span>
                        <p>Password: ********</p>
                        <p>Phone: +123 456 789</p>
                    </div>
                    <div className={styles.mailLinks}>
                        <MainAnchorLink link="#" linkName="Change email" />
                        <MainAnchorLink link="#" linkName="Change password" />
                        <MainAnchorLink link="#" linkName="Change phone number" />
                        {!isNumberVerify && <MainAnchorLink link="#" linkName="Verify phone number" />}
                    </div>
                </div>
                <div className={styles.cardBox}>
                    <div className={styles.cardData}>
                        <p className={styles.cardDataInfo}>
                            <img
                                src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png"
                                alt=""
                            />
                            <span>1234 5678 1234 5678</span>
                        </p>
                        <p>Your next billing date is December 31, 2023.</p>
                    </div>
                    <div className={styles.cardLinks}>
                        <MainAnchorLink link="#" linkName="Manage payment info" />
                        <MainAnchorLink link="#" linkName="Add backup payment method" />
                        <MainAnchorLink link="#" linkName="Billing details" />
                    </div>
                </div>
                <div className={styles.giftBox}>
                    <MainAnchorLink link="#" linkName="Redeem gift card or promo code" />
                    <MainAnchorLink link="#" linkName="Where to buy gift cards" />
                </div>
            </div>
            <button
                className={styles.cancelBtn}
                onClick={() => {
                    cancelMembership()
                    Router.push('/profilgate')
                }}
                aria-label="Cancel membership button"
            >
                Cancel Membership
            </button>
        </section>
    )
}

export default MembershipBox

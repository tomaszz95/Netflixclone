import Link from 'next/link'
import Router from 'next/router'

import { cancelMembership } from '../../../helpers/dummyActionFunctions'
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
                        <Link href="#" className={styles.memberLink}>
                            <p>Change email</p> <span>&gt;</span>
                        </Link>
                        <Link href="#" className={styles.memberLink}>
                            <p>Change password</p> <span>&gt;</span>
                        </Link>
                        <Link href="#" className={styles.memberLink}>
                            <p>Change phone number</p> <span>&gt;</span>
                        </Link>
                        {!isNumberVerify && (
                            <Link href="#" className={styles.memberLink}>
                                <p>Verify phone number</p> <span>&gt;</span>
                            </Link>
                        )}
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
                        <Link href="#" className={styles.memberLink}>
                            <p>Manage payment info</p> <span>&gt;</span>
                        </Link>
                        <Link href="#" className={styles.memberLink}>
                            <p>Add backup payment method</p> <span>&gt;</span>
                        </Link>
                        <Link href="#" className={styles.memberLink}>
                            <p>Billing details</p> <span>&gt;</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.giftBox}>
                    <Link href="#" className={styles.memberLink}>
                        <p>Redeem gift card or promo code</p> <span>&gt;</span>
                    </Link>
                    <Link href="#" className={styles.memberLink}>
                        <p>Where to buy gift cards</p> <span>&gt;</span>
                    </Link>
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

import Image from 'next/image'
import WARNING_ICON from '../../../../assets/icons/warningIcon.png'
import styles from './VerifyBox.module.css'

type ComponentType = {
    verifyNumberHandler: () => void
}

const VerifyBox: React.FC<ComponentType> = ({ verifyNumberHandler }) => {
    return (
        <div className={styles.verifyBox}>
            <Image src={WARNING_ICON} alt="" className={styles.veryfiBoxIcon} />
            <div className={styles.verifyBoxText}>
                <p className={styles.verifyBoxTextTitle}>Verify your mobile number</p>
                <p className={styles.verifyBoxTextContent}>
                    Verifying your phone number enhances security and can help you access and recover your account.
                </p>
                <button
                    onClick={verifyNumberHandler}
                    className={styles.verifiBoxTextButton}
                    aria-label="Verify telephone number"
                >
                    Verify now.
                </button>
            </div>
        </div>
    )
}

export default VerifyBox

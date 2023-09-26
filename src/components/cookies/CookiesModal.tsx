import { useState } from 'react'
import Image from 'next/image'

import ModalText from './ModalText'
import ModalMoreInfo from './ModalMoreInfo'

import styles from './CookiesModal.module.css'

const CookiesModal = () => {
    const [modalIsClosed, setModalIsClosed] = useState(false)
    const [moreInfoOpen, setMoreInfoOpen] = useState(false)

    const closeModal = () => {
        setModalIsClosed(true)
        setMoreInfoOpen(false)
    }

    const openMoreInfo = () => {
        setModalIsClosed(true)
        setMoreInfoOpen(true)
    }

    const closeMoreInfo = () => {
        setModalIsClosed(false)
        setMoreInfoOpen(false)
    }

    const savePreferences = () => {
        setModalIsClosed(true)
        setMoreInfoOpen(false)
    }

    return (
        <>
            {!modalIsClosed ? (
                <div className={styles.modal}>
                    <div>
                        <ModalText onOpenMoreInfo={openMoreInfo} />
                        <div className="buttonBox">
                            <button
                                role="button"
                                onClick={closeModal}
                                className={`${styles.button} ${styles.acceptBtn}`}
                            >
                                Accept
                            </button>
                            <button
                                role="button"
                                onClick={closeModal}
                                className={`${styles.button} ${styles.rejectBtn}`}
                            >
                                Reject
                            </button>
                            <button
                                role="button"
                                onClick={openMoreInfo}
                                className={`${styles.button} ${styles.personaliseBtn}`}
                            >
                                Personalise my choices
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={closeModal}
                        role="button"
                        aria-label="Close cookies info"
                        className={styles.closeBtn}
                    >
                        <Image
                            src="/icons/closeIcon.png"
                            alt="Close icon"
                            width="24"
                            height="24"
                            priority={true}
                            className={styles.closeIcon}
                        />
                    </button>
                </div>
            ) : (
                <></>
            )}
            <div className={styles.moreInfoModal}>
                {moreInfoOpen ? (
                    <ModalMoreInfo onCloseMoreInfo={closeMoreInfo} onSavePreferences={savePreferences} />
                ) : (
                    <></>
                )}
            </div>
        </>
    )
}

export default CookiesModal

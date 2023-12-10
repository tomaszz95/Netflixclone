import { useEffect, useState } from 'react'
import Image from 'next/image'

import ModalText from './ModalText'
import ModalMoreInfo from './ModalMoreInfo'
import CookiesPortal from './CookiesPortal'

import { createCookie, getCookie } from '../helpers/localStorageFunctions'
import styles from './CookiesModal.module.css'

const CookiesModal = () => {
    const [modalIsClosed, setModalIsClosed] = useState(false)
    const [moreInfoOpen, setMoreInfoOpen] = useState(false)

    useEffect(() => {
        const isCookie = getCookie('cookies')

        if (isCookie === 'accept') {
            setModalIsClosed(true)
            setMoreInfoOpen(false)
        } else if (isCookie === 'reject') {
            setModalIsClosed(false)
            setMoreInfoOpen(false)
        }
    }, [])

    const rejectCookies = () => {
        setModalIsClosed(true)
        setMoreInfoOpen(false)
        createCookie('cookies', 'reject')
    }

    const acceptCookies = () => {
        setModalIsClosed(true)
        setMoreInfoOpen(false)
        createCookie('cookies', 'accept')
    }

    const openMoreInfo = () => {
        setModalIsClosed(true)
        setMoreInfoOpen(true)
    }

    const closeMoreInfo = () => {
        setModalIsClosed(false)
        setMoreInfoOpen(false)
    }

    return (
        <CookiesPortal>
            {!modalIsClosed ? (
                <div className={styles.modal}>
                    <div>
                        <ModalText onOpenMoreInfo={openMoreInfo} />
                        <div className="buttonBox">
                            <button
                                role="button"
                                onClick={acceptCookies}
                                aria-label="Click to accept cookies"
                                className={`${styles.button} ${styles.acceptBtn}`}
                            >
                                Accept
                            </button>
                            <button
                                role="button"
                                onClick={rejectCookies}
                                aria-label="Click to reject cookies"
                                className={`${styles.button} ${styles.rejectBtn}`}
                            >
                                Reject
                            </button>
                            <button
                                role="button"
                                onClick={openMoreInfo}
                                aria-label="Click to personalise choices"
                                className={`${styles.button} ${styles.personaliseBtn}`}
                            >
                                Personalise my choices
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={rejectCookies}
                        role="button"
                        aria-label="Close cookies info modal"
                        className={styles.closeBtn}
                    >
                        <Image
                            src="/icons/closeIcon.png"
                            alt="Close icon"
                            width="24"
                            height="24"
                            className={styles.closeIcon}
                        />
                    </button>
                </div>
            ) : (
                <></>
            )}

            {moreInfoOpen ? (
                <div className={styles.moreInfoModal}>
                    <ModalMoreInfo onCloseMoreInfo={closeMoreInfo} onAcceptCookies={acceptCookies} />
                </div>
            ) : (
                <></>
            )}
        </CookiesPortal>
    )
}

export default CookiesModal

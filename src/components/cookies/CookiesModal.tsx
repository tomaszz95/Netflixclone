import { useEffect, useState } from 'react'
import Image from 'next/image'

import ModalText from './ModalText'
import ModalMoreInfo from './ModalMoreInfo'
import CookiesPortal from './CookiesPortal'
import { createCookies, getCookies } from '../helpers/localStorageFunctions'

import styles from './CookiesModal.module.css'

const CookiesModal = () => {
    const [modalIsClosed, setModalIsClosed] = useState(false)
    const [moreInfoOpen, setMoreInfoOpen] = useState(false)

    useEffect(() => {
        const isCookie = getCookies('cookies')

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
        createCookies('cookies', 'reject')
    }

    const acceptCookies = () => {
        setModalIsClosed(true)
        setMoreInfoOpen(false)
        createCookies('cookies', 'accept')
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
                                className={`${styles.button} ${styles.acceptBtn}`}
                            >
                                Accept
                            </button>
                            <button
                                role="button"
                                onClick={rejectCookies}
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
                        onClick={rejectCookies}
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

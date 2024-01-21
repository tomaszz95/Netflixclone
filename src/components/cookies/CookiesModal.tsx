import { useEffect, useState } from 'react'

import ModalText from './ModalText'
import ModalMoreInfo from './ModalMoreInfo'
import CookiesPortal from './CookiesPortal'
import CloseModalCloseButton from './CloseModalCloseButton'
import CookiesModalButtons from './CookiesModalButtons'

import { createCookie, getCookie } from '../../helpers/localStorageFunctions'
import styles from './CookiesModal.module.css'

const CookiesModal = () => {
    const [modalIsClosed, setModalIsClosed] = useState(false)
    const [moreInfoOpen, setMoreInfoOpen] = useState(false)

    useEffect(() => {
        const isCookie = getCookie('cookies')

        if (isCookie === 'accept') {
            setModalIsClosed(true)
        } else if (isCookie === 'reject') {
            setModalIsClosed(false)
        }
    }, [])

    const rejectCookies = () => {
        setModalIsClosed(true)
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
            {!modalIsClosed && (
                <div className={styles.modal}>
                    <div>
                        <ModalText onOpenMoreInfo={openMoreInfo} />
                        <CookiesModalButtons
                            onAcceptCookies={acceptCookies}
                            onRejectCookies={rejectCookies}
                            onOpenMoreInfo={openMoreInfo}
                        />
                    </div>
                    <CloseModalCloseButton onClick={rejectCookies} />
                </div>
            )}

            {moreInfoOpen && (
                <div className={styles.moreInfoModal}>
                    <ModalMoreInfo onCloseMoreInfo={closeMoreInfo} onAcceptCookies={acceptCookies} />
                </div>
            )}
        </CookiesPortal>
    )
}

export default CookiesModal

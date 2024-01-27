import { useState, useEffect } from 'react'
import { getCookie } from '../../utils/localStorageFunctions'
import { useRouter } from 'next/router'

import HeaderMobileView from './mobile/HeaderMobileView'
import HeaderDesktopView from './desktop/HeaderDesktopView'
import HeaderTabletsView from './tablet/HeaderTabletsView'

import styles from './HeaderLoggedSection.module.css'

type ComponentType = {
    windowWidth: number
}

const HeaderLoggedSection: React.FC<ComponentType> = ({ windowWidth }) => {
    const [chosenUser, setChosenUser] = useState('')
    const router = useRouter()

    useEffect(() => {
        const user = getCookie('chosenUser')

        if (user !== null) {
            setChosenUser(user)
        }
    }, [])

    return (
        <section className={styles.header}>
            {windowWidth && windowWidth < 786 ? (
                <HeaderMobileView chosenUser={chosenUser} query={router.query.query} />
            ) : windowWidth && windowWidth < 1200 ? (
                <HeaderTabletsView chosenUser={chosenUser} query={router.query.query} />
            ) : (
                <HeaderDesktopView chosenUser={chosenUser} query={router.query.query} />
            )}
        </section>
    )
}

export default HeaderLoggedSection

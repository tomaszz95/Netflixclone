import { useState, useEffect } from 'react'
import { getCookie } from '../../helpers/localStorageFunctions'

import styles from './HeaderLoggedSection.module.css'
import HeaderMobileView from './mobile/HeaderMobileView'
import HeaderDesktopView from './desktop/HeaderDesktopView'
import HeaderTabletsView from './tablet/HeaderTabletsView'

const HeaderLoggedSection = () => {
    const [windowWidth, setWindowWidth] = useState(0)
    const [chosenUser, setChosenUser] = useState('')

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        const user = getCookie('chosenUser')

        if (user !== null) {
            setChosenUser(user)
        }

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <section className={styles.header}>
            {windowWidth < 786 ? (
                <HeaderMobileView chosenUser={chosenUser} />
            ) : windowWidth < 1200 ? (
                <HeaderTabletsView chosenUser={chosenUser} />
            ) : (
                <HeaderDesktopView chosenUser={chosenUser} />
            )}
        </section>
    )
}

export default HeaderLoggedSection

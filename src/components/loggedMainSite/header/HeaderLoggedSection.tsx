import { useState, useEffect } from 'react'
import { getCookie } from '../../helpers/localStorageFunctions'
import { useRouter } from 'next/router'

import HeaderMobileView from './mobile/HeaderMobileView'
import HeaderDesktopView from './desktop/HeaderDesktopView'
import HeaderTabletsView from './tablet/HeaderTabletsView'

import styles from './HeaderLoggedSection.module.css'

const HeaderLoggedSection = () => {
    const [windowWidth, setWindowWidth] = useState(0)
    const [chosenUser, setChosenUser] = useState('')
    const router = useRouter()

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
                <HeaderMobileView chosenUser={chosenUser} query={router.query.query} />
            ) : windowWidth < 1200 ? (
                <HeaderTabletsView chosenUser={chosenUser} query={router.query.query} />
            ) : (
                <HeaderDesktopView chosenUser={chosenUser} query={router.query.query} />
            )}
        </section>
    )
}

export default HeaderLoggedSection

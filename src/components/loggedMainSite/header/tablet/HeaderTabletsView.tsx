import Link from 'next/link'
import { useState } from 'react'
import Router from 'next/router'

import styles from './HeaderTabletsView.module.css'
import HeaderTabletsNav from './HeaderTabletsNav'
import HeaderTabletsProfile from './HeaderTabletsProfile'

type ComponentType = {
    chosenUser: string
    query: string | string[] | undefined
}

const HeaderTabletsView: React.FC<ComponentType> = ({ chosenUser, query }) => {
    const [navActive, setNavActive] = useState(false)
    const [profileNavActive, setProfileNavActive] = useState(false)

    const openNavHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement

        if (target.textContent === 'Kids' && chosenUser !== 'kids') {
            Router.push('/profilgate')
        } else if (target.textContent === 'Browse' && chosenUser !== 'kids') {
            setNavActive(!navActive)
        } else if (target.textContent === 'Kids' && chosenUser === 'kids') {
            setNavActive(!navActive)
        }

        if (target.textContent === chosenUser) {
            setProfileNavActive(!profileNavActive)
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.navBox}>
                <Link href={`${chosenUser === 'kids' ? '/kids' : '/browse'}`}>
                    <img src="/photos/netflixLogo.png" alt="Netflix Logo" className={styles.netflixLogo} />
                </Link>
                <HeaderTabletsNav chosenUser={chosenUser} onOpenNav={openNavHandler} navActive={navActive} />
            </div>
            <HeaderTabletsProfile
                chosenUser={chosenUser}
                onOpenNav={openNavHandler}
                browseNavActive={profileNavActive}
                query={query}
            />
        </div>
    )
}

export default HeaderTabletsView

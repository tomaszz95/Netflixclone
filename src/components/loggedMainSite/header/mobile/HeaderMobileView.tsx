import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import HeaderMobileBurgerNav from './HeaderMobileBurgerNav'
import HeaderMobileProfile from './HeaderMobileProfile'

import useSearchInput from '../../../../hooks/useSearchInput'
import styles from './HeaderMobileView.module.css'

type ComponentType = {
    chosenUser: string
    query: string | string[] | undefined
}

const HeaderMobileView: React.FC<ComponentType> = ({ chosenUser, query }) => {
    const [isNavVisible, setIsNavVisible] = useState(false)
    const [chosenLinkUrl, setChosenLinkUrl] = useState('')
    const router = useRouter()
    const { inputSearchValue, refInput, handleInputChange } = useSearchInput({ chosenUser, query })

    useEffect(() => {
        if (router.pathname !== undefined) {
            setChosenLinkUrl(router.pathname)
        }
    }, [chosenUser])

    const hideNavHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement

        if (target.id === 'navContainer' || router.pathname.includes('genre')) {
            setIsNavVisible(false)
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <button
                    aria-label="Open navigation button"
                    type="button"
                    className={styles.burgerBtn}
                    onClick={() => setIsNavVisible(!isNavVisible)}
                >
                    <img src="/icons/burgerIcon.png" alt="" className={styles.burgerImg} />
                </button>
                <div
                    className={`${styles.navWrapper} ${isNavVisible ? styles.visible : ''}`}
                    onClick={hideNavHandler}
                    id="navContainer"
                >
                    <nav className={styles.navigation}>
                        <HeaderMobileProfile chosenUser={chosenUser} />
                        <div className={styles.line}></div>
                        <ol className={styles.linksContainer}>
                            <li className={styles.genreLink}>
                                <Link
                                    href={`${chosenUser === 'kids' ? '/kids' : '/browse'}`}
                                    className={`${styles.profileLink} ${
                                        chosenLinkUrl.includes('browse') || chosenLinkUrl.includes('kids')
                                            ? styles.chosenLink
                                            : ''
                                    }`}
                                >
                                    Home
                                </Link>
                            </li>
                            <HeaderMobileBurgerNav chosenUser={chosenUser} />
                        </ol>
                    </nav>
                </div>
                <Link href={`${chosenUser === 'kids' ? '/kids' : '/browse'}`}>
                    <img src="/photos/netflixLogo.png" alt="Netflix Logo" className={styles.netflixLogo} />
                </Link>
            </div>
            {!router.pathname.includes('genre') && !router.pathname.includes('[movieType]') && (
                <input
                    type="text"
                    placeholder="Search"
                    className={styles.searchInput}
                    onChange={handleInputChange}
                    value={inputSearchValue}
                    ref={refInput}
                    aria-label="Search bar"
                />
            )}
        </div>
    )
}

export default HeaderMobileView

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import HeaderDesktopNav from './HeaderDesktopNav'
import HeaderDesktopProfile from './HeaderDesktopProfile'
import MAGNIFIER_ICON from '../../../../assets/icons/magnifierIcon.png'
import useSearchInput from '../../../../hooks/useSearchInput'
import styles from './HeaderDesktopView.module.css'

type ComponentType = {
    chosenUser: string
    query: string | string[] | undefined
}

const HeaderDesktopView: React.FC<ComponentType> = ({ chosenUser, query }) => {
    const [isInputOpen, setIsInputOpen] = useState(false)
    const router = useRouter()
    const { inputSearchValue, refInput, handleInputChange } = useSearchInput({ chosenUser, query })

    useEffect(() => {
        if (router.pathname.includes('search')) {
            setIsInputOpen(true)
        }
    }, [])

    const openInputHandler = () => {
        if (refInput.current) {
            refInput.current.focus()
            setIsInputOpen(true)
        }
    }

    return (
        <div className={styles.wrapper}>
            <HeaderDesktopNav chosenUser={chosenUser} />
            <div className={styles.searchBox}>
                {!router.pathname.includes('genre') &&
                    !router.pathname.includes('movie') &&
                    !router.pathname.includes('series') && (
                        <div className={styles.searchContent}>
                            <input
                                type="text"
                                id="searchInput"
                                placeholder="Movie or series title.."
                                className={`${styles.searchInput} ${isInputOpen ? styles.active : ''}`}
                                aria-label="Search bar"
                                ref={refInput}
                                onBlur={() => setIsInputOpen(false)}
                                onChange={handleInputChange}
                                value={inputSearchValue}
                            />

                            <button
                                className={styles.searchButton}
                                type="button"
                                aria-label="Click to open search bar"
                                onClick={openInputHandler}
                            >
                                <Image src={MAGNIFIER_ICON} alt="" />
                            </button>
                        </div>
                    )}
                <HeaderDesktopProfile chosenUser={chosenUser} />
            </div>
        </div>
    )
}

export default HeaderDesktopView

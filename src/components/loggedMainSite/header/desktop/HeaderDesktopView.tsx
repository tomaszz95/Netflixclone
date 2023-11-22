import Link from 'next/link'
import { useState, useRef } from 'react'
import HeaderDesktopNav from './HeaderDesktopNav'
import HeaderDesktopProfile from './HeaderDesktopProfile'
import styles from './HeaderDesktopView.module.css'

type ComponentType = {
    chosenUser: string
}

const HeaderDesktopView: React.FC<ComponentType> = ({ chosenUser }) => {
    const [isInputOpen, setIsInputOpen] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const openInputHandler = () => {
        if (inputRef.current) {
            inputRef.current.focus()
            setIsInputOpen(true)
        }
    }

    const handleBlur = () => {
        setIsInputOpen(false)
    }

    return (
        <div className={styles.wrapper}>
            <HeaderDesktopNav chosenUser={chosenUser} />
            <div className={styles.searchBox}>
                <div className={styles.searchContent}>
                    <input
                        type="text"
                        id="searchInput"
                        placeholder="Titles, people, genres"
                        className={`${styles.searchInput} ${isInputOpen ? styles.active : ''}`}
                        aria-label="Search bar"
                        ref={inputRef}
                        onBlur={handleBlur}
                    />
                    <button
                        className={styles.searchButton}
                        type="button"
                        aria-label="Click to open search bar"
                        onClick={openInputHandler}
                    >
                        <img src="/icons/magnifierIcon.png" />
                    </button>
                </div>
                <HeaderDesktopProfile chosenUser={chosenUser} />
            </div>
        </div>
    )
}

export default HeaderDesktopView

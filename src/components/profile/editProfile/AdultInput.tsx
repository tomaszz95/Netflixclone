import { useState } from 'react'
import { setGamingAccount } from '../../../helpers/dummyActionFunctions'
import styles from './AdultInput.module.css'

const AdultInput = () => {
    const [gameName, setGameName] = useState('')

    const gameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGameName(e.target.value)
        setGamingAccount()
    }

    return (
        <div className={styles.gameBox}>
            <span className={styles.gameBoxSpan}>Game Handle:</span>
            <p className={styles.gameBoxText}>
                You handle is a unique name that'll be used for playing with other Netflix members across all Netflix
                Games.
            </p>
            <input
                type="text"
                placeholder="Create Game Handle"
                className={styles.gameBoxInput}
                max={16}
                min={5}
                onChange={gameInputHandler}
            />
            <span
                className={`${styles.gameBoxCounter} ${
                    gameName.length > 4 && gameName.length < 16 ? styles.good : styles.wrong
                }`}
            >
                {gameName.length}/16
            </span>
        </div>
    )
}

export default AdultInput

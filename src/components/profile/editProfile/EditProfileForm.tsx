import { useState } from 'react'
import { inputsLanguagesData } from '../../helpers/siteText'
import AutoplaysSection from './AutoplaysSection'
import styles from './EditProfileForm.module.css'
import MaturitySection from './MaturitySection'

type ComponentType = {
    formData: {
        selectedName: string
        selectedLanguage: string
        oldName: string
    }
    onInputChange: (name: string, value: string) => void
}

const EditProfileForm: React.FC<ComponentType> = ({ formData, onInputChange }) => {
    const [gameName, setGameName] = useState('')

    const nameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onInputChange('selectedName', e.target.value)
    }

    const changeLanguageHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onInputChange('selectedLanguage', e.target.value)
    }

    const gameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGameName(e.target.value)
        console.log('Should do something with this name.. Omitted in the demo version')
    }

    return (
        <div className={styles.container}>
            <div className={styles.nicknameBox}>
                <input
                    type="text"
                    placeholder={formData.selectedName.trim().length > 0 ? formData.selectedName : 'Name'}
                    className={`${styles.nameInput} ${formData.selectedName.trim().length === 0 ? styles.empty : ''}`}
                    onChange={nameInputHandler}
                />
                <p className={styles.error}>Please enter a name</p>
                <div className={styles.selectBox}>
                    <span className={styles.selectBoxSpan}>Language:</span>
                    <select
                        name="language"
                        className={styles.selectBoxSelect}
                        defaultValue={formData.selectedLanguage}
                        onChange={changeLanguageHandler}
                    >
                        {inputsLanguagesData.map((language) => (
                            <option value={language} key={language} className={styles.selectBoxOption}>
                                {language.charAt(0).toUpperCase()}
                                {language.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.gameBox}>
                    <span className={styles.gameBoxSpan}>Game Handle:</span>
                    <p className={styles.gameBoxText}>
                        You handle is a unique name that'll be used for playing with other Netflix members across all
                        Netflix Games.
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
            </div>
            <div className={styles.line} />
            <MaturitySection />
            <div className={styles.line} />
            <AutoplaysSection />
        </div>
    )
}

export default EditProfileForm

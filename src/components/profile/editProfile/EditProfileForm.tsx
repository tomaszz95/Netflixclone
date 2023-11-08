import { useState } from 'react'
import { inputsLanguagesData } from '../../helpers/siteText'
import AutoplaysSection from './AutoplaysSection'
import styles from './EditProfileForm.module.css'
import MaturitySection from './MaturitySection'

type ComponentType = {
    profilName: string
}

const EditProfileForm: React.FC<ComponentType> = ({ profilName }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('English')

    const changeLanguageHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(e.target.value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.nicknameBox}>
                <input type="text" placeholder={profilName} className={styles.nameInput} />
                <div className={styles.selectBox}>
                    <span className={styles.selectBoxSpan}>Language:</span>
                    <select
                        name="language"
                        className={styles.selectBoxSelect}
                        defaultValue="English"
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
                    <input type="text" placeholder="Create Game Handle" className={styles.gameBoxInput} />
                    <span className={styles.gameBoxCounter}>/16</span>
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

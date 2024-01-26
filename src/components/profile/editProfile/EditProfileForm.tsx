import AutoplaysSection from './AutoplaysSection'
import MaturitySection from './MaturitySection'

import { inputsLanguagesData } from '../../../constans/simpleSetup'
import styles from './EditProfileForm.module.css'
import AdultInput from './AdultInput'

type ComponentType = {
    formData: {
        selectedName: string
        selectedLanguage: string
        oldName: string
    }
    onInputChange: (name: string, value: string) => void
}

const EditProfileForm: React.FC<ComponentType> = ({ formData, onInputChange }) => {
    const nameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onInputChange('selectedName', e.target.value)
    }

    const changeLanguageHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onInputChange('selectedLanguage', e.target.value)
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
                <p className={styles.error}>Please enter a valid name</p>
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
                {formData.oldName !== 'kids' && <AdultInput />}
            </div>
            <div className={styles.line} />
            <MaturitySection profilName={formData.oldName} />
            <div className={styles.line} />
            <AutoplaysSection />
        </div>
    )
}

export default EditProfileForm

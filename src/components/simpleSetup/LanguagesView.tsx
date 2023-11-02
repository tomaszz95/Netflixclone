import { useState } from 'react'
import Router from 'next/router'

import { inputsLanguagesData } from '../helpers/siteText'
import styles from './LanguagesView.module.css'

const LanguagesView = () => {
    const [selectedLanguages, setSelectedLanguages] = useState(['English'])

    const addLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (selectedLanguages.includes(e.target.id)) {
            const newArray = selectedLanguages.filter((language) => language !== e.target.id)
            setSelectedLanguages(newArray)
        } else {
            setSelectedLanguages([...selectedLanguages, e.target.id])
        }
    }

    const submitData = () => {
        console.log(selectedLanguages)
        Router.push('/simpleSetup/choosemovies')
    }

    return (
        <div className={styles.container}>
            <div className={styles.textBox}>
                <span className={styles.step}>Step 3 of 4</span>
                <h1 className={styles.title}>Which languages do you like to watch shows and movies in?</h1>
                <p className={styles.text}>
                    Letting us know helps set up your audio and subtitles. <span>You can always change these.</span>
                </p>
            </div>
            <div className={styles.languageContainer}>
                <div className={styles.firstLanguage}>
                    <img src="/icons/checkSignBlack.png" alt="" />
                    <span>English</span>
                </div>
                <ul className={styles.inputs}>
                    {inputsLanguagesData.map((language) => (
                        <li key={language} className={styles.inputsItem}>
                            <input type="checkbox" id={language} onChange={addLanguage} className={styles.input} />
                            <label htmlFor={language} className={styles.label}>
                                {language.charAt(0).toUpperCase()}
                                {language.slice(1)}
                            </label>
                        </li>
                    ))}
                </ul>
                <div className={styles.submitBtnBox}>
                    <button
                        type="submit"
                        aria-label="Go next after choosing languages"
                        className={styles.submitBtn}
                        onClick={submitData}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LanguagesView

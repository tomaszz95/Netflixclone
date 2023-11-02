import { useState, useEffect } from 'react'
import Router from 'next/router'

import styles from './ChooseMoviesView.module.css'

const ChooseMoviesView = ({ fetchedContent }) => {
    const [selectedMovies, setSelectedMovies] = useState([''])

    useEffect(() => {}, [])

    const addMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (selectedMovies.includes(e.target.id)) {
            const newArray = selectedMovies.filter((movie) => movie !== e.target.id)
            setSelectedMovies(newArray)
        } else {
            setSelectedMovies([...selectedMovies, e.target.id])
        }
    }

    const submitData = () => {
        console.log(selectedMovies)
        Router.push('/simpleSetup/chooseMovies')
    }

    return (
        <div className={styles.container}>
            <div className={styles.textBox}>
                <span className={styles.step}>Step 4 of 4</span>
                <h1 className={styles.title}>Helvegen, select 3 movies you like.</h1>
                <p className={styles.text}>
                    This helps us to find TV shows and movies you'll love. <span>Select the ones you like.</span>
                </p>
            </div>
            <div className={styles.moviesContainer}>
                {/* <ul className={styles.moviesBox}>
                    {inputsLanguagesData.map((language) => (
                        <li key={language} className={styles.inputsItem}>
                            <input type="checkbox" id={language} onChange={addMovie} className={styles.input} />
                            <label htmlFor={language} className={styles.label}>
                                <img src="" alt="" />
                            </label>
                        </li>
                    ))}
                </ul> */}
                <div className={styles.submitBtnBox}>
                    <button
                        type="submit"
                        aria-label="Go next after choosing 3 movies"
                        className={styles.submitBtn}
                        onClick={submitData}
                    >
                        Pick 3 to Continue
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChooseMoviesView

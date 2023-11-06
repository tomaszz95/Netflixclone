import { useState, useEffect } from 'react'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import styles from './ChooseMoviesView.module.css'

type ComponentType = {
    fetchedContent: string[] | []
}

const ChooseMoviesView: React.FC<ComponentType> = ({ fetchedContent }) => {
    const [selectedName, setSelectedName] = useState('')
    const [selectedMovies, setSelectedMovies] = useState([''])

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const paymentData = useSelector<any, any>((state) => state.payment)

    useEffect(() => {
        if (paymentData.selectedNames.length > 0) {
            const selectedName = `${paymentData.selectedNames[0]
                .charAt(0)
                .toUpperCase()}${paymentData.selectedNames[0].slice(1)}`

            setSelectedName(selectedName)
        }
    }, [paymentData])

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
                <h1 className={styles.title}>{selectedName}, select 3 movies you like.</h1>
                <p className={styles.text}>
                    This helps us to find TV shows and movies you'll love. <span>Select the ones you like.</span>
                </p>
            </div>
            <div className={styles.moviesContainer}>
                <ul className={styles.moviesBox}>
                    {fetchedContent.map((movieLink) => (
                        <li key={movieLink} className={styles.inputsItem}>
                            <input type="checkbox" id={movieLink} onChange={addMovie} className={styles.input} />
                            <label htmlFor={movieLink} className={styles.label}>
                                <img src={`https://image.tmdb.org/t/p/original/${movieLink}`} alt="Poster of movie" />
                            </label>
                        </li>
                    ))}
                </ul>
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

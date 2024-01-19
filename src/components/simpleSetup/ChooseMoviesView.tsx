import { useState, useEffect } from 'react'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import { paymentActions } from '../../store/payment'
import { fetchedMoviesPropsData } from '../../types/types'
import styles from './ChooseMoviesView.module.css'

const ChooseMoviesView: React.FC<{ fetchedContent: fetchedMoviesPropsData[] }> = ({ fetchedContent }) => {
    const [selectedName, setSelectedName] = useState('')
    const [selectedMovies, setSelectedMovies] = useState<string[]>([])

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const selectedNames = useSelector<any, any>((state) => state.payment.selectedNames)

    useEffect(() => {
        if (selectedNames.length > 0) {
            const selectedName = `${selectedNames[0].charAt(0).toUpperCase()}${selectedNames[0].slice(1)}`

            setSelectedName(selectedName)
        }
    }, [selectedNames])

    const addMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (selectedMovies.includes(e.target.id)) {
            const newArray = selectedMovies.filter((movie) => movie !== e.target.id)
            setSelectedMovies(newArray)
        } else {
            setSelectedMovies([...selectedMovies, e.target.id])
        }
    }

    const submitData = () => {
        dispatch(paymentActions.changePaymentValue({ name: 'selectedMovies', value: selectedMovies }))
        dispatch(paymentActions.changePaymentValue({ name: 'isFullySet', value: true }))
        Router.push('/profilgate')
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
            {fetchedContent.length === 0 ? (
                <p className={styles.loading}>Loading...</p>
            ) : (
                <div className={styles.moviesContainer}>
                    <ul className={styles.moviesBox}>
                        {fetchedContent.map((movieLink) => (
                            <li key={movieLink.movieTitle} className={styles.inputsItem}>
                                <input
                                    type="checkbox"
                                    id={movieLink.movieTitle}
                                    onChange={addMovie}
                                    className={styles.input}
                                />
                                <label htmlFor={movieLink.movieTitle} className={styles.label}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/original/${movieLink.posterPath}`}
                                        alt="Poster of movie"
                                        className={styles.posterImg}
                                    />
                                    <div
                                        className={`${styles.checkedBox} ${
                                            selectedMovies.includes(movieLink.movieTitle) ? styles.checked : ''
                                        }`}
                                    >
                                        <img src="/icons/thumbIcon.png" alt="" className={styles.thumbIcon} />
                                    </div>
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
                            disabled={selectedMovies.length < 3}
                        >
                            Pick 3 to Continue
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ChooseMoviesView

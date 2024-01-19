import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import Router from 'next/router'

import { paymentActions } from '../../../store/payment'
import { fetchedMainSingleObj } from '../../../types/types'
import styles from './MoreInfoBox.module.css'

type ComponentType = {
    singleItem: fetchedMainSingleObj
}

const MoreInfoBox: React.FC<ComponentType> = ({ singleItem }) => {
    const [like, setLike] = useState(false)
    const [isInList, setIsInList] = useState(false)
    const [isSoundOn, setIsSoundOn] = useState(true)
    const [randomNumber, setRandomNumber] = useState<number | null>(null)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const selectedMovies = useSelector<any, any>((state) => state.payment.selectedMovies)

    useEffect(() => {
        if (selectedMovies.includes(singleItem.movieTitle)) {
            setIsInList(true)
        }

        generateRandomNumber()
    }, [])

    const likeButton = () => {
        setLike(!like)
    }

    const myList = () => {
        if (isInList) {
            const newArray = selectedMovies.filter((movie: string) => movie !== singleItem.movieTitle)

            dispatch(
                paymentActions.changePaymentValue({
                    name: 'selectedMovies',
                    value: newArray,
                }),
            )
        } else {
            dispatch(
                paymentActions.changePaymentValue({
                    name: 'selectedMovies',
                    value: [...selectedMovies, singleItem.movieTitle],
                }),
            )
        }

        setIsInList(!isInList)
    }

    const generateRandomNumber = () => {
        const min = 1
        const max = 100
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
        setRandomNumber(randomNum)
    }

    const getClassName = (number: number | null): string => {
        if (number === null) return ''
        if (number >= 1 && number <= 33) return styles.red
        if (number >= 34 && number <= 66) return styles.yellow
        if (number >= 67 && number <= 100) return styles.green
        return ''
    }

    const voiceButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        setIsSoundOn(!isSoundOn)
    }

    return (
        <>
            <div className={styles.buttonsRow}>
                <div className={styles.buttonsLeft}>
                    <button
                        className={styles.playBtn}
                        aria-label="Play video button"
                        onClick={() => Router.push(`/movie/${singleItem.movieId}`)}
                    >
                        <img src="/icons/playIcon.png" />
                    </button>
                    <button
                        className={`${isInList ? styles.isInList : ''} ${styles.addListBtn}`}
                        aria-label="Add to my list button"
                        onClick={myList}
                    >
                        {isInList ? (
                            <img src="/icons/greenCheckIcon.png" alt="" />
                        ) : (
                            <img src="/icons/plusIcon.png" alt="" />
                        )}
                    </button>
                    <button
                        className={`${like ? styles.isLiked : ''} ${styles.likeBtn}`}
                        aria-label="Add like button"
                        onClick={likeButton}
                    >
                        {like ? <img src="/icons/greenThumbIcon.png" /> : <img src="/icons/thumbIcon.png" />}
                    </button>
                </div>
                <button
                    className={styles.soundBoxBtn}
                    aria-label="Turn off / turn on voice"
                    onClick={voiceButtonHandler}
                >
                    {isSoundOn ? (
                        <img src="/icons/soundIcon.png" alt="" />
                    ) : (
                        <img src="/icons/nosoundIcon.png" alt="" />
                    )}
                </button>
            </div>
            <div className={styles.textRow}>
                <span className={getClassName(randomNumber)}>{randomNumber}% Match</span>
                <p className={styles.years}>16+</p>
                <span className={styles.rating}>Audience rating: {singleItem.movieVote.toFixed(1)}/10</span>
            </div>
            <div className={styles.addonsRow}>
                <span>Exciting</span>
                <div className={styles.dot}></div>
                <span>Suspenseful</span>
                <div className={styles.dot}></div>
                <span>Adventure</span>
            </div>
        </>
    )
}

export default MoreInfoBox

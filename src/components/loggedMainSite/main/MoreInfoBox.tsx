import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import Router from 'next/router'

import SOUNDOFF_ICON from '../../../assets/icons/nosoundIcon.png'
import SOUNDON_ICON from '../../../assets/icons/soundIcon.png'
import THUMB_ICON from '../../../assets/icons/thumbIcon.png'
import GREENTHUMB_ICON from '../../../assets/icons/greenThumbIcon.png'
import CHECK_ICON from '../../../assets/icons/greenCheckIcon.png'
import PLUS_ICON from '../../../assets/icons/plusIcon.png'
import PLAY_ICON from '../../../assets/icons/playIcon.png'
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

        const randomNum = Math.floor(Math.random() * 100)
        setRandomNumber(randomNum)
    }, [])

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
                        <Image src={PLAY_ICON} alt="" />
                    </button>
                    <button
                        className={`${isInList ? styles.isInList : ''} ${styles.addListBtn}`}
                        aria-label="Add to my list button"
                        onClick={myList}
                    >
                        {isInList ? <Image src={CHECK_ICON} alt="" /> : <Image src={PLUS_ICON} alt="" />}
                    </button>
                    <button
                        className={`${like ? styles.isLiked : ''} ${styles.likeBtn}`}
                        aria-label="Add like button"
                        onClick={() => setLike(!like)}
                    >
                        {like ? <Image src={GREENTHUMB_ICON} alt="" /> : <Image src={THUMB_ICON} alt="" />}
                    </button>
                </div>
                <button
                    className={styles.soundBoxBtn}
                    aria-label="Turn off / turn on voice"
                    onClick={voiceButtonHandler}
                >
                    {isSoundOn ? <Image src={SOUNDON_ICON} alt="" /> : <Image src={SOUNDOFF_ICON} alt="" />}
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

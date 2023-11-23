import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { heroMoviesFetchedData } from '../../helpers/types'
import styles from './HeroLoggedSection.module.css'

const initialType = {
    posterPath: '',
    movieTitle: '',
    movieOverview: '',
}

const HeroLoggedSection = () => {
    const router = useRouter()
    const [seriesSingleData, setSeriesSingleData] = useState<heroMoviesFetchedData>(initialType)
    const [isSoundOn, setIsSoundOn] = useState(true)
    const isMounted = useRef(false)

    const limitTextToTwoSentences = (text: string) => {
        const sentences = text.split('. ')
        const truncatedText = sentences.slice(0, 2).join('. ')
        return truncatedText
    }

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true
            fetch('/api/tvShows', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(router.pathname),
            })
                .then((response) => response.json())
                .then((data) => {
                    setSeriesSingleData(data)
                })
        }
    }, [])

    const truncatedOverview = limitTextToTwoSentences(seriesSingleData.movieOverview)

    return (
        <section className={styles.hero}>
            {seriesSingleData.posterPath !== '' ? (
                <img
                    src={`https://image.tmdb.org/t/p/original/${seriesSingleData.posterPath}`}
                    alt={`Poster of ${seriesSingleData.movieTitle}`}
                    className={styles.heroImg}
                />
            ) : (
                ''
            )}
            <div className={styles.shadowBox}></div>
            <div className={styles.textBox}>
                <h1 className={styles.textTitle}>{seriesSingleData.movieTitle}</h1>
                <p className={styles.textDescription}>{truncatedOverview}</p>
                <div className={styles.textInfo}>
                    <button className={styles.playBtn} aria-label="Play series button">
                        <img src="/icons/playIcon.png" alt="" />
                        <span>Play</span>
                    </button>
                    <button className={styles.moreInfoBtn} aria-label="More info button">
                        <img src="/icons/infoIcon.png" alt="" />
                        <span>More Info</span>
                    </button>
                </div>
            </div>
            <div className={styles.soundBox}>
                <button
                    className={styles.soundBoxBtn}
                    aria-label="Turn off / turn on voice"
                    onClick={() => setIsSoundOn(!isSoundOn)}
                >
                    {isSoundOn ? (
                        <img src="/icons/soundIcon.png" alt="" />
                    ) : (
                        <img src="/icons/nosoundIcon.png" alt="" />
                    )}
                </button>
                <div className={styles.soundBoxContent}>
                    <span className={styles.soundBoxText}>{router.pathname.includes('browse') ? '16+' : '7+'}</span>
                </div>
            </div>
        </section>
    )
}

export default HeroLoggedSection

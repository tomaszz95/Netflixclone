import { useEffect, useState, useRef } from 'react'
import { heroMoviesFetchedData } from '../../helpers/types'
import styles from './HeroLoggedSection.module.css'
import getHeroHandler from '../../../pages/api/fetchHeroApiData'
import { getCookie } from '../../helpers/localStorageFunctions'

const HeroLoggedSection = () => {
    const [seriesSingleData, setSeriesSingleData] = useState<heroMoviesFetchedData>({
        posterPath: '',
        movieTitle: '',
        movieOverview: '',
        movieId: 0,
    })
    const [isSoundOn, setIsSoundOn] = useState(true)
    const [chosenUser, setChosenUser] = useState('')
    const isMounted = useRef(false)

    const limitTextToTwoSentences = (text: string) => {
        const sentences = text.split('. ')
        const truncatedText = sentences.slice(0, 2).join('. ')
        return truncatedText
    }

    useEffect(() => {
        let cookiesUser = ''
        const cookiedData = getCookie('chosenUser')

        if (cookiedData !== null) {
            cookiesUser = cookiedData
        }

        setChosenUser(cookiesUser)

        if (!isMounted.current) {
            isMounted.current = true
            const fetchDataFunc = async () => {
                const fetchedData = await getHeroHandler(location.pathname, cookiesUser)

                if (fetchedData) {
                    const generateRandomIndex = () => Math.floor(Math.random() * fetchedData.length)

                    const randomIndex = generateRandomIndex()
                    const singleItem = fetchedData[randomIndex]

                    setSeriesSingleData(singleItem)
                }
            }
            fetchDataFunc()
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
                    <span className={styles.soundBoxText}>{chosenUser ? '7+' : '16+'}</span>
                </div>
            </div>
        </section>
    )
}

export default HeroLoggedSection

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

import SOUND_ICON from '../../../assets/icons/soundIcon.png'
import NOSOUND__ICON from '../../../assets/icons/nosoundIcon.png'
import INFO_ICON from '../../../assets/icons/infoIcon.png'
import PLAY_ICON from '../../../assets/icons/playIcon.png'

import getHeroHandler from '../../../pages/api/fetchHeroApiData'
import { getCookie } from '../../utils/localStorageFunctions'
import { limitTextToTwoSentences } from '../../utils/helpersFunctions'
import { heroMoviesFetchedData } from '../../../types/types'
import styles from './HeroLoggedSection.module.css'
import Image from 'next/image'

const HeroLoggedSection = () => {
    const [seriesSingleData, setSeriesSingleData] = useState<heroMoviesFetchedData>({
        posterPath: '',
        movieTitle: '',
        movieOverview: '',
        movieId: 0,
        type: '',
    })
    const [isSoundOn, setIsSoundOn] = useState(true)
    const [chosenUser, setChosenUser] = useState('')
    const isMounted = useRef(false)

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
                    <Link
                        href={`${seriesSingleData.type}/${seriesSingleData.movieId}`}
                        className={styles.playBtn}
                        aria-label="Play series button"
                    >
                        <Image src={PLAY_ICON} alt="" />
                        <span>Play</span>
                    </Link>
                    <Link
                        href={`${seriesSingleData.type}/${seriesSingleData.movieId}`}
                        className={styles.moreInfoBtn}
                        aria-label="Go to more info site"
                    >
                        <Image src={INFO_ICON} alt="" />
                        <span>More Info</span>
                    </Link>
                </div>
            </div>
            <div className={styles.soundBox}>
                <button
                    className={styles.soundBoxBtn}
                    aria-label="Turn off / turn on voice"
                    onClick={() => setIsSoundOn(!isSoundOn)}
                >
                    {isSoundOn ? <Image src={SOUND_ICON} alt="" /> : <Image src={NOSOUND__ICON} alt="" />}
                </button>
                <div className={styles.soundBoxContent}>
                    <span className={styles.soundBoxText}>{chosenUser === 'kids' ? '7+' : '16+'}</span>
                </div>
            </div>
        </section>
    )
}

export default HeroLoggedSection

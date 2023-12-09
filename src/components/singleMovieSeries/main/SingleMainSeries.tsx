import { seasonsDataType } from '../../helpers/types'
import { generateRandomDescription } from '../../helpers/helpersFunctions'
import { getRandomMinutes } from '../../helpers/helpersFunctions'
import styles from './SingleMainSeries.module.css'

type ComponentType = {
    seasonsInfo: seasonsDataType[]
    title: string
}

const SingleMainSeries: React.FC<ComponentType> = ({ seasonsInfo, title }) => {
    if (seasonsInfo.length === 0) return <></>

    return (
        <section className={styles.seriesSection}>
            <h2 className={styles.title}>{title} Seasons</h2>
            <div className={styles.seasonsBox}>
                {seasonsInfo.map((season) => (
                    <div key={season.season_number} className={styles.seasonBox}>
                        <h3 className={styles.seasonBoxTitle}>{season.name}</h3>
                        <p className={styles.seasonBoxAirDate}>{`Air Date: ${season.air_date}`}</p>
                        {season.overview && <p className={styles.seasonBoxOverview}>{season.overview}</p>}
                        <div className={styles.episodesBox}>
                            {Array.from({ length: season.episode_count }, (_, index) => {
                                return (
                                    <div key={`${season.season_number}0${index}`} className={styles.singleEpisode}>
                                        <img
                                            src={
                                                season.poster_path === null
                                                    ? `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png`
                                                    : `https://image.tmdb.org/t/p/original/${season.poster_path}`
                                            }
                                            alt={season.name}
                                            className={styles.singleEpisodeImg}
                                        />
                                        <div className={styles.singleEpisodeText}>
                                            <h4 className={styles.singleEpisodeNumer}>{`Episode ${index + 1}`}</h4>
                                            <span
                                                className={styles.singleEpisodeDuration}
                                            >{`${getRandomMinutes()}m`}</span>
                                            <p
                                                className={styles.singleEpisodeOverview}
                                            >{`${generateRandomDescription()}`}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SingleMainSeries

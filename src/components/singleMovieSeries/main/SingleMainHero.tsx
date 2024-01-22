import { limitTextToTwoSentences } from '../../utils/helpersFunctions'
import { singleSeriesItem, singleMoviesItem } from '../../../types/types'
import styles from './SingleMainHero.module.css'

type ComponentType = {
    fetchedDataInfo: singleSeriesItem | singleMoviesItem
}

const SingleMainHero: React.FC<ComponentType> = ({ fetchedDataInfo }) => {
    const imagePath = fetchedDataInfo.heroImagePath ? fetchedDataInfo.heroImagePath : fetchedDataInfo.heroImagePath2

    let yearsPath: string = ''
    let timePath: string = ''

    if ('releaseData' in fetchedDataInfo) {
        yearsPath = fetchedDataInfo.releaseData
        timePath = `${fetchedDataInfo.runtime}m`
    } else if ('firstReleaseData' in fetchedDataInfo) {
        yearsPath = `${fetchedDataInfo.firstReleaseData}-${fetchedDataInfo.lastReleaseData}`
        timePath = `${fetchedDataInfo.numberOfSeasons} Seasons`
    }

    const truncatedOverview = limitTextToTwoSentences(fetchedDataInfo.overview)

    return (
        <section className={styles.heroSection}>
            <img
                src={`https://image.tmdb.org/t/p/original/${imagePath}`}
                alt={fetchedDataInfo.title}
                className={styles.heroImage}
            />
            <div className={styles.shadow}></div>
            <div className={styles.textBox}>
                <h1 className={styles.textBoxTitle}>{fetchedDataInfo.title}</h1>
                <div className={styles.textBoxSpans}>
                    <span>{yearsPath}</span>
                    <span>16+</span>
                    <span>{timePath}</span>
                </div>
                <p className={styles.textBoxOverwiev}>{truncatedOverview}</p>
            </div>
        </section>
    )
}

export default SingleMainHero

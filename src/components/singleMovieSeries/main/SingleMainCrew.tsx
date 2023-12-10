import styles from './SingleMainCrew.module.css'

type ComponentType = {
    seriesCreator: string
    genres: string[]
    crewData: {
        actors: string[]
        crew?: { name: string; role: string }
    }
}

const SingleMainCrew: React.FC<ComponentType> = ({ crewData, seriesCreator, genres }) => {
    let titleMakerType, titleMakerName

    if (crewData.crew) {
        titleMakerType = crewData.crew.role
        titleMakerName = crewData.crew.name
    } else if (!crewData.crew && seriesCreator !== '') {
        titleMakerType = 'Created by'
        titleMakerName = seriesCreator
    } else {
        titleMakerType = ''
        titleMakerName = ''
    }

    return (
        <section className={styles.crewSection}>
            <h2 className={styles.title}>Title Details</h2>
            <div className={styles.detailBox}>
                <div className={styles.detailColumn}>
                    <h3 className={`${styles.detailTitle} ${styles.detailTitleFirst}`}>{titleMakerType}</h3>
                    <span className={styles.detailItem}>{titleMakerName}</span>
                </div>
                {crewData.actors.length === 0 ? (
                    <div></div>
                ) : (
                    <div className={styles.detailColumn}>
                        <h3 className={styles.detailTitle}>Cast:</h3>
                        {crewData.actors.map((actor) => (
                            <span className={styles.detailItem} key={actor}>
                                {actor}
                            </span>
                        ))}
                    </div>
                )}
                {genres.length === 0 ? (
                    <div></div>
                ) : (
                    <div className={styles.detailColumn}>
                        <h3 className={styles.detailTitle}>Genres:</h3>
                        {genres.map((genre) => (
                            <span className={styles.detailItem} key={genre}>
                                {genre}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default SingleMainCrew

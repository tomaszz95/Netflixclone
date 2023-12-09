import Link from 'next/link'
import { fetchedMainSingleObj } from '../../helpers/types'
import styles from './SingleMainSimilar.module.css'

type ComponentType = {
    similar: fetchedMainSingleObj[]
    title: string
}

const SingleMainSimilar: React.FC<ComponentType> = ({ similar, title }) => {
    return (
        <section className={styles.similarSection}>
            <h2 className={styles.title}>More Like {title}</h2>
            <div className={styles.similarList}>
                {similar.map((item) => {
                    if (item.posterPath === null) return
                    return (
                        <Link href={`/${item.type}/${item.movieId}`} key={item.posterPath}>
                            <img src={`https://image.tmdb.org/t/p/original/${item.posterPath}`} alt={item.movieTitle} />
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default SingleMainSimilar

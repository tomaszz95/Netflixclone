import Link from 'next/link'
import { fetchedMainSingleObj } from '../../helpers/types'
import styles from './CarouselItem.module.css'

type ComponentType = {
    singleItem: fetchedMainSingleObj
}

const CarouselItem: React.FC<ComponentType> = ({ singleItem }) => {
    return (
        <Link href={`/movie/${singleItem.movieId}`} className={styles.movieLink}>
            {singleItem.posterPath === null ? (
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                    alt="No image available"
                    className={styles.movieImg}
                />
            ) : (
                <img
                    src={`https://image.tmdb.org/t/p/original/${singleItem.posterPath}`}
                    alt={singleItem.movieTitle}
                    className={styles.movieImg}
                />
            )}
        </Link>
    )
}

export default CarouselItem

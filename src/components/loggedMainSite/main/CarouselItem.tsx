import Link from 'next/link'
import { useState } from 'react'
import { fetchedMainSingleObj } from '../../helpers/types'
import styles from './CarouselItem.module.css'
import MoreInfoBox from './MoreInfoBox'

type ComponentType = {
    singleItem: fetchedMainSingleObj
    category: string
    index: number
}

const CarouselItem: React.FC<ComponentType> = ({ singleItem, category, index }) => {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <div className={styles.movieBox}>
            <Link href={`/movie/${singleItem.movieId}`} className={styles.movieLink}>
                {category.includes('Trending') || category.includes('Rated') || category.includes('Popular') ? (
                    <span className={styles.hugeNumber}>{index + 1}</span>
                ) : (
                    ''
                )}
                <div
                    className={`${styles.movieLink} ${isHovered ? styles.hovered : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
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
                </div>
            </Link>
            <div className={styles.moreInfoBox}>
                <MoreInfoBox singleItem={singleItem} />
            </div>
        </div>
    )
}

export default CarouselItem

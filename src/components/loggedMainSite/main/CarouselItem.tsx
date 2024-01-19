import { useState } from 'react'
import Link from 'next/link'
import MoreInfoBox from './MoreInfoBox'

import { fetchedMainSingleObj } from '../../../types/types'
import styles from './CarouselItem.module.css'

type ComponentType = {
    singleItem: fetchedMainSingleObj
    category?: string
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

    if (singleItem.posterPath === null) return <></>

    return (
        <div className={styles.movieBox}>
            <Link href={`/${singleItem.type}/${singleItem.movieId}`} className={styles.movieLink}>
                {(category && category.includes('Trending')) ||
                (category && category.includes('Rated')) ||
                (category && category.includes('Popular')) ? (
                    <span className={styles.hugeNumber}>{index + 1}</span>
                ) : (
                    ''
                )}
                <div
                    className={`${styles.movieLink} ${isHovered ? styles.hovered : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src={`https://image.tmdb.org/t/p/original/${singleItem.posterPath}`}
                        alt={singleItem.movieTitle}
                        className={styles.movieImg}
                    />
                </div>
            </Link>
            <div className={styles.moreInfoBox}>
                <MoreInfoBox singleItem={singleItem} />
            </div>
        </div>
    )
}

export default CarouselItem

import Link from 'next/link'
import { fetchedMainSingleObj } from '../../helpers/types'
import styles from './SingleMainCarousel.module.css'
import Slider from 'react-slick'
import { carouselSettings, getCategoryLink } from '../../helpers/carouselSettings'
import CarouselItem from './CarouselItem'

type ComponentType = {
    category: string
    itemArray: fetchedMainSingleObj[]
}

const SingleMainCarousel: React.FC<ComponentType> = ({ category, itemArray }) => {
    const categoryId = getCategoryLink(category)

    return (
        <div className={styles.singleRow}>
            <Link href={`/genre/${categoryId}`} className={styles.rowLink}>
                <h2 className={styles.rowTitle}>{category}</h2>
                <span className={styles.rowText}>Explore All..</span>
                <img src="/icons/exploreArrow.png" alt="" className={styles.rowIcon} />
            </Link>
            <Slider {...carouselSettings}>
                {itemArray.map((item, index) => (
                    <CarouselItem singleItem={item} key={index} />
                ))}
            </Slider>
        </div>
    )
}

export default SingleMainCarousel

import Link from 'next/link'
import Slider from 'react-slick'
import CarouselItem from './CarouselItem'

import ARROW_ICON from '../../../assets/icons/exploreArrow.png'
import { carouselSettings, getCategoryLink } from '../../../helpers/carouselSettings'
import { fetchedMainSingleObj } from '../../../types/types'
import styles from './SingleMainCarousel.module.css'
import Image from 'next/image'

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
                <Image src={ARROW_ICON} alt="" className={styles.rowIcon} />
            </Link>
            <Slider {...carouselSettings}>
                {itemArray.map((item, index) => (
                    <CarouselItem singleItem={item} key={index} index={index} category={category} />
                ))}
            </Slider>
        </div>
    )
}

export default SingleMainCarousel

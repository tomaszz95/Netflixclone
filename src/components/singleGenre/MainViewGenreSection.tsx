import { fetchedMainSingleObj } from '../helpers/types'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from './MainViewGenreSection.module.css'
import CarouselItem from '../loggedMainSite/main/CarouselItem'
import { allFetchedGenres } from '../helpers/siteText'

type ComponentType = {
    fetchedData: fetchedMainSingleObj[]
}

const MainViewGenreSection: React.FC<ComponentType> = ({ fetchedData }) => {
    const [chosenGenre, setChosenGenre] = useState('')
    const router = useRouter()

    useEffect(() => {
        const foundGenre = allFetchedGenres.find((item) => item.id.toString() === router.query.id)

        if (foundGenre) {
            setChosenGenre(foundGenre.name)
        } else {
            setChosenGenre('')
        }
    }, [])

    return (
        <section className={styles.mainSection}>
            <h1 className={styles.title}>Results for {chosenGenre}</h1>
            <ol className={styles.searchedList}>
                {fetchedData.map((movie, index) => (
                    <CarouselItem singleItem={movie} key={index} index={index} />
                ))}
            </ol>
        </section>
    )
}

export default MainViewGenreSection
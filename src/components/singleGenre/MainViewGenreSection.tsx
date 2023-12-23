import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import CarouselItem from '../loggedMainSite/main/CarouselItem'

import { allFetchedGenres } from '../helpers/siteText'
import { fetchedMainSingleObj } from '../helpers/types'
import styles from './MainViewGenreSection.module.css'

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
    }, [router.query.id])

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

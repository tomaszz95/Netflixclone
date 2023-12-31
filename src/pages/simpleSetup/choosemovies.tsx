import Head from 'next/head'
import { useEffect, useState } from 'react'

import SignupLayout from '../../components/layouts/SignupLayout'
import ChooseMoviesView from '../../components/simpleSetup/ChooseMoviesView'

import { getOptions } from '../../components/APIHelpers/toFetchDataObjects'
import { fetchedContentType, fetchedMoviesPropsData } from '../../components/helpers/types'

const ChooseMoviesPage: React.FC<fetchedContentType> = ({ moviesData, seriesData }) => {
    const [fetchedContentObjects, setfetchedContentObjects] = useState<fetchedMoviesPropsData[]>([])

    useEffect(() => {
        let linksArray: fetchedMoviesPropsData[] = []

        for (const key in moviesData.results) {
            if (moviesData.results.hasOwnProperty(key)) {
                const movie = moviesData.results[key]
                const posterPath = movie.poster_path
                const movieTitle = movie.title
                linksArray.push({ posterPath, movieTitle })
            }
        }

        for (const key in seriesData.results) {
            if (seriesData.results.hasOwnProperty(key)) {
                const series = seriesData.results[key]
                const posterPath = series.poster_path
                const movieTitle = series.name
                linksArray.push({ posterPath, movieTitle })
            }
        }

        setfetchedContentObjects(linksArray)
    }, [])

    return (
        <>
            <Head>
                <title>Choose Movie | Netflix</title>
                <meta name="description" content="Choose your favorite movies and series" />
            </Head>
            <SignupLayout>
                <ChooseMoviesView fetchedContent={fetchedContentObjects} />
            </SignupLayout>
        </>
    )
}

export default ChooseMoviesPage

export async function getStaticProps() {
    try {
        const moviesResponse = await fetch(
            'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
            getOptions,
        )
        const moviesData = await moviesResponse.json()

        const seriesResponse = await fetch(
            'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',
            getOptions,
        )
        const seriesData = await seriesResponse.json()

        return {
            props: {
                moviesData,
                seriesData,
            },
        }
    } catch (error) {
        return {
            props: {
                moviesData: error,
                seriesData: error,
            },
        }
    }
}
